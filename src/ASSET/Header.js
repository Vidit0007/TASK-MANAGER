import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
      {/* <a href="#">Logo</a> */}
      <nav className='nav'>
        
            <NavLink to="task" style={{textDecoration:"none", fontFamily:"monospace",fontSize:"2em", color:"white",paddingBottom:"20px"}}> TASK</NavLink>
           
            
         
      </nav>
    </header>
    
    </>
  )
}

export default Header