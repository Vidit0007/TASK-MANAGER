import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './App.css'
function Register() {
  const navigate = useNavigate();
  const handle = ()=>{
    navigate("/login")
  }
   
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://192.168.68.29:6060/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Registration successful.');
              navigate('/login')
          } else {
            const data = await response.json();
            console.error('Registration failed:', data.message);
            alert('username and password invalid!')
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
  return (
    <div className='container2'>
      <br />
     <h1 className='heading'>REGISTER</h1>
      <div className='con2'>
      <input
        className='input'
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required

      />

      <input
        className='input'
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required

      />
      <br />
      <br />

      <button className='btn1' onClick={handleSubmit}>Register</button>
      <br/>
      <br/>
      <button className='btn1' onClick={handle}>login</button>

      </div>

    </div>
  );
}

export default Register