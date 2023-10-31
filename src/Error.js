import React from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'

function Error() {
    const navigate = useNavigate();
    const handle = (()=>{
        navigate('task')
    })
  return (
    
   <section className='error'>
    
    <button style={{marginLeft:"42.5%",marginTop:"44%",backgroundColor:"white", color:"black",height:"50px",width:"15%",fontSize:"2em",border:"none",borderRadius:"10px"}}  onClick={handle}>GO BACK</button>
   </section>
  )
}

export default Error