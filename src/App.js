
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Task from './Task';
import Error from './Error';
import Dashboard from './Dashboard';



function App() {
 
return (
 
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Register/>}
        />
        <Route path="/login" element={<Login/>} />
          
        <Route path="/task" element={<Task/>} />
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error/>} />
        </Routes>
      
    </Router>
   
  );
}

export default App;
