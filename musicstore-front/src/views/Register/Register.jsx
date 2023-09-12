import React from 'react'
import './register.css'
import {BsEnvelopeFill, BsFillLockFill} from 'react-icons/bs'



function Register() {

    return (
        <section>
        <div className="form-box">
            <form action="">
            <h2>Register</h2>
            <div className="inputbox">
                <i><BsEnvelopeFill/></i>
                <input className="email" required />
                <label>Email</label>
            </div>
            <div className="inputbox">
                <i><BsFillLockFill/></i>
                <input className="password1" type="password" required />
                <label>Password</label>
            </div>
            <div className="inputbox">
                <i><BsFillLockFill/></i>
                <input className="password2" type="password" required />
                <label>Confirm password</label>
            </div>
            <button>Register</button>
            <div className="register">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
            </form>
        </div>
        </section>
    );
}

export default Register;