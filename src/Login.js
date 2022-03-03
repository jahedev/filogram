import React from 'react'

import { Link } from 'react-router-dom'

import './assets/css/signup.css'

import logo from './assets/images/logo.png'
import fb_icon from './assets/images/fb-icon.png'
import signupPhone from './assets/images/signup.png'

export default function Login() {
  return (
    <div className='signup-container'>
      <div className='signup-main-container'>
        <div className='left-col'>
          <img src={signupPhone} alt='' />
        </div>
        <div className='right-col'>
          <div className='form-container'>
            <form method='POST' action=''>
              <img src={logo} alt='' />
              <input
                type='email'
                name='email'
                placeholder='Phone number, username, or email'
                className='signup-input'
              />
              <input
                type='password'
                name='password'
                placeholder='password'
                className='signup-input'
              />
              <br />
              <button type='submit'>Log In</button>
              <div className='signup-with-facebook'>
                <h6>
                  <span>OR</span>
                </h6>
                <a className='.facebook-login-link' href='javascript:void(0);'>
                  <img src={fb_icon} alt='' />
                  Log in with Facebook
                </a>
                <br />
                <a className='.forgot-password-link' href='javascript:void(0);'>
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
          <div className='form-container'>
            <div className='login-signup'>
              <span>Don't have an account?</span>
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
