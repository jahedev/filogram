import React from 'react'

import profile from '../../assets/images/profile.jpg'
import ProfileView from './ProfileView'

export default function Suggestions(props) {
  return (
    <div className='follow-suggestions'>
      <div className='follow-suggestions-top'>
        <div className='follow-suggestions-text'>
          <span>Suggestions For You</span>
        </div>
        <div className='follow-suggestions-all'>
          <a href='#'>See All</a>
        </div>
      </div>
      <div className='follow-suggestion-item'>
        <div className='follow-suggestion-item'>
          <ProfileView
            largeSize={false}
            image={profile}
            username={'thxmpd'}
            subtitle={'Followed by worthles.. + 1 more'}
            actionText={'Follow'}
            actionHandler={'INSERT CALLBACK'}
          />
        </div>
        <div className='follow-suggestion-item'>
          <ProfileView
            largeSize={false}
            image={profile}
            username={'fbicia'}
            subtitle={'Followed by buneychoy + 2   more'}
            actionText={'Follow'}
            actionHandler={'INSERT CALLBACK'}
          />
        </div>
      </div>
    </div>
  )
}
