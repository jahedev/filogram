import { useState } from 'react';

import ProfileMedia from './ProfileMedia';

export default function ProfileBottom({ children }) {
  const [showSaved, setShowSaved] = useState(false);

  return (
    <div className='profile-bottom'>
      <div className='profile-tabs'>
        <div
          onClick={() => setShowSaved(false)}
          className={`profile-tab ${!showSaved && 'profile-tab-active'}`}>
          POSTS
        </div>
        <div
          onClick={() => setShowSaved(true)}
          className={`profile-tab ${showSaved && 'profile-tab-active'}`}>
          SAVED
        </div>
      </div>
      <ProfileMedia showSaved={showSaved} />
    </div>
  );
}
