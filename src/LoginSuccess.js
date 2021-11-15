import React from 'react'
import { Link } from 'react-router-dom'

import './assets/css/signup.css'

import logo from './assets/images/logo.png'
import fb_icon from './assets/images/fb-icon.png'
import signupPhone from './assets/images/signup.png'

export default function SignUp() {
  return (
    <div className='signup-container'>
      <div className='signup-main-container'>
        <div className='right-col'>
          <div className='form-container'>
            <form>
              <img src={logo} alt='' />
              <div>Login Successful</div>
            </form>
          </div>
          <div className='suggest-app-container'>
            <h5>
              If you're not redirected to the homepage, click{' '}
              <Link to='/'>here</Link>.
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
