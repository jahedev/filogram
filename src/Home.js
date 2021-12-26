import React from 'react'

import Header from './components/base/Header'
import Stories from './components/home/Stories'
import Posts from './components/home/Posts'

import profile from './assets/images/profile.jpg'
import ProfileView from './components/home/ProfileView'
import FollowSuggestions from './components/home/FollowSuggestions'
import Footer from './components/base/Footer'

export default function Home() {
  return (
    <div id='homepage'>
      <Header filled={{ home: true }} />
      <main>
        <div className='center-middle'>
          <div className='main-left'>
            <Stories />
            <Posts />
          </div>
          <div className='main-right'>
            <ProfileView
              largeSize={true}
              image={profile}
              username={'jahedev'}
              subtitle={'Jahed Hossain'}
              actionText={'Switch'}
              actionHandler={'INSERT CALLBACK'}
            />
            <FollowSuggestions />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
