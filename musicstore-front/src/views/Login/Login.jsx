import React from 'react'
import './login.css'



function LoginPage() {
  return (
    <section>
      <div className="form-box">
        <form action="">
          <h2>Login</h2>
          <div className="inputbox">
            <i className="bi bi-envelope-fill"></i>
            <input className="email" required />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <i className="bi bi-lock"></i>
            <input className="password" type="password" required />
            <label>Password</label>
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" />Remember me <a href="#">Forgot Password?</a>
            </label>
          </div>
          <button>Log in</button>
          <div className="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
