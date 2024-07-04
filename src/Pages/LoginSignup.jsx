import React from 'react'
import './CSS/LoginAndSignup.css'


const LoginSignup = () => {
  return (
    <div className="loginandsignup">
      <div className="loginandsignup-container">
        <h1>Sign Up</h1>
        <div className="loginandsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginandsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginandsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to our use and privacy policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup