import React from 'react'
import ReactDOM from 'react-dom'
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

import logo from './assets/images/logo.png'

function App() {
  return (
    <div className='App'>
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
              <HomeOutlined />
            </div>
            <div className='header-icon'>
              <MessageOutlined />
            </div>
            <div className='header-icon'>
              <CompassOutlined />
            </div>
            <div className='header-icon'>
              <HeartOutlined />
            </div>
            <div className='header-icon'>
              <ProfileOutlined />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='center-middle'>
          <p>sdfds</p>
          <div className='main-right'>
            <div className='stories-container'></div>
            <div className='posts-container'>
              <div className='post'></div>
              <div className='post'></div>
              <div className='post'></div>
            </div>
          </div>
          <div className='main-left'>
            <div className='profile-switcher'></div>
            <div className='follow-suggestions'></div>
            <div className='nav-links'></div>
            <div className='copyright-statement'></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
