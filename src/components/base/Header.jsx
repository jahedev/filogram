import React from 'react';
import { Link } from 'react-router-dom';

import {
  HomeOutlined,
  HomeFilled,
  MessageOutlined,
  MessageFilled,
  CompassOutlined,
  CompassFilled,
  HeartOutlined,
  HeartFilled,
  ProfileOutlined,
  ProfileFilled,
} from '@ant-design/icons';

import logo from '../../assets/images/logo.png';

export default function Header({ filled }) {
  return (
    <header>
      <div className='center-middle'>
        <Link to='/'>
          <div className='filogram-logo'>
            <img src={logo} alt='' />
          </div>
        </Link>
        <div className='search-bar'>
          <input autocapitalize='none' placeholder='Search' type='text' />
        </div>
        <div className='header-icons'>
          <Link to='/'>
            <div className='header-icon'>
              {filled.home ? <HomeFilled /> : <HomeOutlined />}
            </div>
          </Link>
          <Link to='/login'>
            <div className='header-icon'>
              {filled.message ? <MessageFilled /> : <MessageOutlined />}
            </div>
          </Link>
          <Link to='/signup'>
            <div className='header-icon'>
              {filled.compass ? <CompassFilled /> : <CompassOutlined />}
            </div>
          </Link>
          <Link to='/login-success'>
            <div className='header-icon'>
              {filled.heart ? <HeartFilled /> : <HeartOutlined />}
            </div>
          </Link>
          <Link to='/profile'>
            <div className='header-icon'>
              {filled.profile ? <ProfileFilled /> : <ProfileOutlined />}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
