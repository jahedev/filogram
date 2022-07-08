import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../../assets/css/signup.css';

import logo from '../../assets/images/logo.png';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:4000/api/users/signup', {
        email,
        username,
        firstName,
        lastName,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem('JWT', res.data.token);
          this.props.history.push('/login-success');
        } else {
          alert('Unable to Signup');
        }
      });
  };

  const handleChange = (setState, e) => {
    setState(e.target.value);
  };

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
                onChange={(e) => handleChange(setEmail, e)}
              />
              <input
                type='text'
                name='username'
                placeholder='Username'
                className='signup-input'
                onChange={(e) => handleChange(setUsername, e)}
              />
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='signup-input'
                onChange={(e) => handleChange(setFirstName, e)}
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='signup-input'
                onChange={(e) => handleChange(setLastName, e)}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='signup-input'
                onChange={(e) => handleChange(setPassword, e)}
              />
              <button onClick={handleSignup} type='submit'>
                Sign Up
              </button>
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
