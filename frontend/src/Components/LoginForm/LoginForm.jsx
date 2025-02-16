import React ,{useEffect} from 'react'
import './LoginForm.css';
import { FaUser , FaLock,FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const LoginForm = () => {
  return (
    <div>
        <header>
            <h2 className="Logo">Logo</h2>
            <nav className ="navigation">
                <a href="#">About Us</a>
                <a href="#">Profile</a>
                <a href="#">Contact </a>
                <button class="btnLogin-popup">Login</button>
            </nav>
        </header>
    <div className='wrapper'>
        <span className ="icon-close">
           <FaTimes/>
        </span>
        <div class="form-box login">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text"
                placeholder='Name' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password"
                placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password or Username?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="#">Register</a></p>
            </div>
        </form>
        </div>
        <div class="form-box register">
            <h1>Register</h1>
            <form action = "#">
            <div className="input-box">
                <input type="text"
                placeholder='Name' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password"
                placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="string"
                placeholder='Email' required/>
                <MdEmail className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>I agree to Terms and Conditions</label>
            </div>
            <button type="submit" class="btn">Register</button>
            <div className="login-link">
                <p>Already have an account?<a href="#">Login</a></p>
            </div>
            </form>
            </div>
    </div>
    </div>
  
  )
}
