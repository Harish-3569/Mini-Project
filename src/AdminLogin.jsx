import React from 'react'
import './Adminlogin.css'
function AdminLogin() {
  return (
    <div className='login-form '>
      <body>
        <div className='login-card'>
        <h1>
            Admin Login Portal
        </h1>
        <br></br>
      <form>
          UserName:
          <br></br>
          <input type='text'></input>
          <br />
          Password:
          <br></br>
          <input type='password'></input>
          <br></br>
          <br></br>
          <button type='submit' className='button-85'>submit</button>
      </form>
      <br></br>
      <h3>FORGOT PASSWORD</h3>
      </div>
      </body>
    </div>
  )
}

export default AdminLogin
