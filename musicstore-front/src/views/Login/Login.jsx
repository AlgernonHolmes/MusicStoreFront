import React from 'react'
import './login.css'
import {BsEnvelopeFill, BsFillLockFill} from 'react-icons/bs'



function LoginPage() {
  return (
    <section>
      <div className="form-box">
        <form action="">
          <h2>Login</h2>
          <div className="inputbox">
            <i><BsEnvelopeFill/></i>
            <input className="email" required />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <i><BsFillLockFill/></i>
            <input className="password" type="password" required />
            <label>Password</label>
          </div>
          <button>Log in</button>
          <div className="register">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
