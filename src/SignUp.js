import React from 'react'

import './assets/css/signup.css'

import logo from './assets/images/logo.png'
import fb_icon from './assets/images/fb-icon.png'
import signupPhone from './assets/images/signup.png'

export default function SignUp() {
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
              <a href='javascript:void(0);'>Sign Up</a>
            </div>
          </div>
          <div className='suggest-app-container'>
            <h6>Get the app.</h6>
          </div>
        </div>
      </div>
      <div className='container'>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li> Jobs</li>
          <li> Help </li>
          <li>API</li>
          <li> Privacy</li>
          <li> Terms </li>
          <li>Top</li>
          <li> Accounts</li>
          <li> Hashtags</li>
          <li>Locations</li>
          <li> Beauty</li>
          <li> Dance </li>
          <li>Fitness </li>
          <li>Food & Drink</li>
          <li> Home & Garden</li>
          <li> Music</li>
          <li>Visual Arts</li>
        </ul>
      </div>
    </div>
  )
}
