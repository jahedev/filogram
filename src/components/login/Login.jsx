import { Link } from 'react-router-dom';

import { useState } from 'react';

import '../../assets/css/signup.css';

import axios from 'axios';
import fb_icon from '../../assets/images/fb-icon.png';
import logo from '../../assets/images/logo.png';
import signupPhone from '../../assets/images/signup.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:4000/api/users/login', { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem('JWT', res.data.token);
          this.props.history.push('/login-success');
        } else {
          alert('Invalid Credentials');
        }
      });
  };

  const handleChange = (setState, e) => {
    setState(e.target.value);
  };

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
                onChange={(e) => handleChange(setEmail, e)}
              />
              <input
                type='password'
                name='password'
                placeholder='password'
                className='signup-input'
                onChange={(e) => handleChange(setPassword, e)}
              />
              <br />
              <button onClick={handleLogin} type='submit'>
                Log In
              </button>
              <div className='signup-with-facebook'>
                <h6>
                  <span>OR</span>
                </h6>
                <Link className='facebook-login-link' to='/signup'>
                  <img src={fb_icon} alt='' />
                  Log in with Facebook
                </Link>
                <br />
                <Link className='forgot-password-link' to='/signup'>
                  Forgot password?
                </Link>
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
  );
}
