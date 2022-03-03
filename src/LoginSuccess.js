import React from 'react'
import { Link } from 'react-router-dom'

import './assets/css/signup.css'

import logo from './assets/images/logo.png'

export default function SignUp() {
  return (
    <div className='signup-container'>
      <div className='signup-main-container'>
        <div className='right-col'>
          <div className='form-container'>
            <form>
              <img src={logo} alt='' />
              <h4 className='color-blue-dark'>Login Successful</h4>
            </form>
          </div>
          <div>
            <p>
              If you're not redirected to the homepage, click{' '}
              <Link className='color-blue' to='/'>
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
