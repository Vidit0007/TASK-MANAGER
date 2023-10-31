import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './App.css'

function Login() {
  const navigate = useNavigate();
 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://192.168.68.29:6060/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
           
            const data = await response.json();
            const token = data.token;
            console.log('Login successful');
            navigate('/task')

          } else {
            const data = await response.json();
            console.error('Login failed:', data.message);
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };

  return (
    <div className='container1'>
      <br />

      <h1 className='heading2'>LOGIN FORM</h1>
      <div className='con'>
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

        required/>
      <br />
      <br />

      <button className='btn1' onClick={handleSubmit} >Login</button>
      </div>
    </div>
  );
}

export default Login;



