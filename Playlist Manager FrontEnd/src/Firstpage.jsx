import React from 'react'
import './Firstpage.css'
import {Link} from "react-router-dom"
function Firstpage() {
  return (
    <div className='one'>
        <body className='dfg'>
         <div className='two'>
            <h1>ARE YOU A</h1>
           <button className='button-89'><Link to="Adminlogin">ADMIN</Link></button>
           <br></br>
           <br></br>
           <button className='button-89'><Link to="AdminLogin">USER</Link></button>
        </div>
    </body>
    </div>
  )
}

export default Firstpage
