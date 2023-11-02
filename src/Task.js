import React, { useState, useEffect } from 'react';
import Header from './ASSET/Header';
import './App.css'

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updatedTask, setUpdatedTask] = useState('');
  const [taskIdToUpdate, setTaskIdToUpdate] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    getTasks();
  }, []);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImprIiwiaWF0IjoxNjk4NzU3MjMzLCJleHAiOjE2OTg3NjA4MzN9.AYyAqBDqmrjIivmQMnMCSgFZQPzBO-YxdtFbxd5fnko'; 
  async function addTask() {
    const taskData = {
      name: 'Your task description',
    };
    try {
      const response = await fetch('http://192.168.68.29:6060/tasks',
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newTask }),
      });

      if (response.ok) {
        getTasks();
        setNewTask('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  async function getTasks() {

    try {
      const response = await fetch('http://192.168.68.29:6060/tasks');

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  async function updateTask() {
    try {
      const response = await fetch(`http://192.168.68.29:6060/tasks/${taskIdToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: updatedTask }),
      });

      if (response.ok) {
        getTasks();
        setUpdatedTask('');
        setTaskIdToUpdate('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  async function deleteTask(taskId) {
    try {
      const response = await fetch(`http://192.168.68.29:6060/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        getTasks();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='container3'>
        <Header />
      <h1 className='h12'>Task Manager</h1>
      <div className='minicon'>
        <input
        className='input1'
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='btn4' onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => setTaskIdToUpdate(task.id)}>Update</button>
          </li>
        ))}
      </ul>

      {taskIdToUpdate && (
        <div>
          <input
            type="text"
            placeholder="Updated Task"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button onClick={updateTask}>Update Task</button>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Task;


