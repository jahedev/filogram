import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/css/signup.css';

import axios from 'axios';
import fb_icon from '../../assets/images/fb-icon.png';
import logo from '../../assets/images/logo.png';
import signupPhone from '../../assets/images/signup.png';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:4000/api/users/login', this.state)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
          this.props.history.push('/login-success');
        } else {
          alert('Invalid Credentials');
        }
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
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
                  onChange={this.handleChange}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='signup-input'
                  onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleLogin} type='submit'>
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
}
