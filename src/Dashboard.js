import React from 'react';
import Header from './ASSET/Header';
import './App.css'


function Dashboard(props) {
  const {loggedIn, onLogout} = props;
  
 
  return (
    <>
      <Header />
      <section className='dashboard'>
      {loggedIn && <button className="btn2" onClick={onLogout}>Logout</button>}
      <br/>
      
       </section>
    </>
  );
}

export default Dashboard;
