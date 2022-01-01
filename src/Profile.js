import React, { Component } from 'react'

import Header from './components/base/Header'
import Stories from './components/home/Stories'
import Posts from './components/home/Posts'

import profile from './assets/images/profile.jpg'
import ProfileView from './components/home/ProfileView'
import FollowSuggestions from './components/home/FollowSuggestions'
import Footer from './components/base/Footer'

export default class Profile extends Component {
  render() {
    return (
      <div id='homepage'>
        <Header filled={{ profile: true }} />
        <main>
          <div className='center-middle flex-column'>
            <div className='profile-top'>
              <p>hello</p>
            </div>
            <div className='profile-bottom'>
              <p>world</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
