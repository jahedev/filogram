import { Link } from 'react-router-dom';
import profile from '../../assets/images/profile.jpg';
import FollowSuggestion from './FollowSuggestion';
import ProfileView from './ProfileView';
import React from "react"


export default function Suggestions({profile}) {
  return (
    <div className='follow-suggestions'>
      <div className='follow-suggestions-top'>
        <div className='follow-suggestions-text'>
          <span>Suggestions For You</span>
        </div>
        <div className='follow-suggestions-all'>
          <Link to='#'>See All</Link>
        </div>
      </div>
      <FollowSuggestion>
        <ProfileView
          largeSize={false}
          image={profile}
          username={'thxmpd'}
          subtitle={'Followed by worthles.. + 1 more'}
          actionText={'Follow'}
          actionHandler={'INSERT CALLBACK'}
        />
      </FollowSuggestion>
      <FollowSuggestion>
        <ProfileView
          largeSize={false}
          image={profile}
          username={'fbicia'}
          subtitle={'Followed by buneychoy + 2   more'}
          actionText={'Follow'}
          actionHandler={'INSERT CALLBACK'}
        />
      </FollowSuggestion>
    </div>
  );
}
