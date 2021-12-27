import React from 'react'

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
        <div className='filogram-logo'>
          <img src={logo} alt='' />
        </div>
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
          <div className='header-icon'>
            {filled.profile ? <ProfileFilled /> : <ProfileOutlined />}
          </div>
        </div>
      </div>
    </header>
  )
}
