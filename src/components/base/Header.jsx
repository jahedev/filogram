import React from 'react'
import { Link } from 'react-router-dom'

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
} from '@ant-design/icons'

import logo from '../../assets/images/logo.png'

// Some icons are outlines, others are filled
// the default is outline, unless specified by props.filled
const filled = {
  home: false,
  message: false,
  compass: false,
  heart: false,
  profile: false,
}

export default function Header(props) {
  Object.assign(filled, props.filled)

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
          <div className='header-icon'>
            {filled.home ? <HomeFilled /> : <HomeOutlined />}
          </div>
          <div className='header-icon'>
            {filled.message ? <MessageFilled /> : <MessageOutlined />}
          </div>
          <div className='header-icon'>
            {filled.compass ? <CompassFilled /> : <CompassOutlined />}
          </div>
          <div className='header-icon'>
            {filled.heart ? <HeartFilled /> : <HeartOutlined />}
          </div>
          <Link to='/profile'>
            <div className='header-icon'>
              {filled.profile ? <ProfileFilled /> : <ProfileOutlined />}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
