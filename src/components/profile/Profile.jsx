import { Component } from 'react';
import { Link } from 'react-router-dom';

import FooterLarge from '../base/FooterLarge';
import Header from '../base/Header';

// I am using dummy static images for now
import media1 from '../../assets/images/media1.jpg';
import media2 from '../../assets/images/media2.jpg';
import media3 from '../../assets/images/media3.jpg';
import profile from '../../assets/images/profile5.jpg';
import ProfileMediaItem from './ProfileMediaItem';

export default class Profile extends Component {
  render() {
    return (
      <div id='homepage'>
        <Header filled={{ profile: true }} />
        <main>
          <div className='center-middle flex-column profile-page-container'>
            <div className='profile-top'>
              <div className='profile-photo pp-large'>
                <img src={profile} alt='' />
              </div>
              <div className='profile-info'>
                <div className='profile-info-top'>
                  <h2 id='profile-username'>mojahos</h2>
                  <Link className='button' to='/'>
                    Edit Profile
                  </Link>
                </div>
                <div className='profile-info-middle'>
                  <span id='profile-post-count'>
                    <strong>3</strong>&nbsp;posts
                  </span>
                  <span id='profile-follower-count'>
                    <strong>59</strong>&nbsp;followers
                  </span>
                  <span id='profile-following-count'>
                    <strong>95</strong>&nbsp;following
                  </span>
                </div>
                <div className='profile-info-bottom'>
                  <h4 id='profile-name'>Jahed Hossain</h4>
                  <span id='profile-description'>non-conforming conformer</span>
                </div>
              </div>
            </div>
            <div className='profile-bottom'>
              <div className='profile-tabs'>
                <div className='profile-tab profile-tab-active'>POSTS</div>
                <div className='profile-tab'>SAVED</div>
              </div>
              <div className='profile-media'>
                <ProfileMediaItem preview={media1} />
                <ProfileMediaItem preview={media2} />
                <ProfileMediaItem preview={media3} />
                <ProfileMediaItem preview={media2} />
                <ProfileMediaItem preview={media3} />
                <ProfileMediaItem preview={media1} />
              </div>
            </div>
            <FooterLarge />
          </div>
        </main>
      </div>
    );
  }
}