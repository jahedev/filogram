import { Link } from 'react-router-dom';

import '../../assets/css/signup.css';

import logo from '../../assets/images/logo.png';

export default function Signup() {
  return (
    <div className='signup-container'>
      <div className='signup-main-container'>
        <div className='right-col'>
          <div className='form-container'>
            <form method='POST' action=''>
              <img src={logo} alt='' />
              <div className='description'>
                Sign up to see photos and videos from your friends.
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='signup-input'
              />
              <input
                type='text'
                name='username'
                placeholder='Username'
                className='signup-input'
              />
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='signup-input'
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='signup-input'
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='signup-input'
              />
              <button type='submit'>Sign Up</button>
              <br />
              <div className='description bottom-text'>
                By signing up, you agree to our{' '}
                <strong>Terms , Data Policy</strong> and{' '}
                <strong>Cookies Policy.</strong>
              </div>
            </form>
          </div>
          <div className='form-container'>
            <div className='login-signup'>
              <span>Have an account?</span>
              <Link to='/login'>Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
