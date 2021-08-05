import React from 'react';
import ReactDOM from 'react-dom';
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
  MoreOutlined,
  MailOutlined,
  MailFilled,
  SaveOutlined,
  SaveFilled,
  SmileOutlined,
} from '@ant-design/icons';

import logo from './assets/images/logo.png';
import profile from './assets/images/profile.jpg';
import profile2 from './assets/images/profile2.jpg';
import profile3 from './assets/images/profile3.jpg';
import profile4 from './assets/images/profile4.jpg';
import postImg from './assets/images/post.jpg';

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
          <div className='main-left'>
            <div className='stories-container'>
              <div className='story-profile'>
                <div className='profile-outer-circle'>
                  <div className='profile-circle'>
                    <img src={profile} alt='story icon' />
                  </div>
                </div>
                <div className='profile-name'>
                  <span>buneychoy</span>
                </div>
              </div>
              <div className='story-profile'>
                <div className='profile-outer-circle'>
                  <div className='profile-circle'>
                    <img src={profile2} alt='story icon' />
                  </div>
                </div>
                <div className='profile-name'>
                  <span>oakarcher</span>
                </div>
              </div>
              <div className='story-profile'>
                <div className='profile-outer-circle'>
                  <div className='profile-circle'>
                    <img src={profile3} alt='story icon' />
                  </div>
                </div>
                <div className='profile-name'>
                  <span>worthless.safi</span>
                </div>
              </div>
              <div className='story-profile'>
                <div className='profile-outer-circle'>
                  <div className='profile-circle'>
                    <img src={profile4} alt='story icon' />
                  </div>
                </div>
                <div className='profile-name'>
                  <span>jahedev</span>
                </div>
              </div>
            </div>
            <div className='posts-container'>
              <div className='post'>
                <div className='post-header'>
                  <div className='post-header-left'>
                    <div className='profile-outer-circle profile-small'>
                      <div className='profile-circle'>
                        <img src={profile4} alt='story icon' />
                      </div>
                    </div>
                    <div className='profile-link'>
                      <a href='#'>jahedev</a>
                    </div>
                  </div>
                  <div className='post-header-right'>
                    <div className='elipsis-icon'>
                      <MoreOutlined />
                    </div>
                  </div>
                </div>
                <div className='post-media'>
                  <img src={postImg} alt='' />
                </div>
                <div className='post-buttons'>
                  <div className='post-buttons-left'>
                    <div className='post-icon'>
                      <HeartOutlined />
                    </div>
                    <div className='post-icon'>
                      <MessageOutlined />
                    </div>
                    <div className='post-icon'>
                      <MailOutlined />
                    </div>
                  </div>
                  <div className='post-buttons-right'>
                    <div className='post-icon'>
                      <SaveOutlined />
                    </div>
                  </div>
                </div>
                <div className='post-likes'>
                  <p>32,842 likes</p>
                </div>
                <div className='post-comments'>
                  <div className='post-description'>
                    <span className='post-comment-user'>jahedev</span>
                    <span className='post-comment-text'>
                      Jeremy thought it might be time to buy some tweezers...
                    </span>
                  </div>
                  <div className='view-all-comments'>
                    <span>View all 157 comments</span>
                  </div>
                  <div className='post-comment'>
                    <span className='post-comment-user'>or_mike_e</span>
                    <span className='post-comment-text'>
                      Can we tell if it’s male or female? Cuz then I’d name it
                      either Anthony or Frida…
                    </span>
                  </div>
                  <div className='post-comment'>
                    <span className='post-comment-user'>
                      fatcatphotography_
                    </span>
                    <span className='post-comment-text'>❤️</span>
                  </div>
                </div>
                <div className='post-date'>3 HOURS AGO</div>
                <div className='post-comment-field'>
                  <div className='post-comment-field-left'>
                    <div className='emoji-btn-div'>
                      <div className='post-icon'>
                        <SmileOutlined />
                      </div>
                    </div>
                    <div className='input-comment-div'>
                      <input
                        autocapitalize='none'
                        placeholder='Add a comment...'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='post-comment-field-right'>
                    <div className='post-comment-btn-div'>
                      <a href='#' className='blue-btn'>
                        Post
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-right'>
            <div className='profile-switcher'>
              <div className='profile-switcher-left'>
                <div className='user-profile-image'>
                  <div className='profile-outer-circle'>
                    <div className='profile-circle'>
                      <img src={profile} alt='story icon' />
                    </div>
                  </div>
                </div>
                <div className='user-profile-info'>
                  <div className='user-profile-username'>
                    <a href='#'>jahedev</a>
                  </div>
                  <div className='user-profile-name'>
                    <span>Jahed Hossain</span>
                  </div>
                </div>
              </div>
              <div className='profile-switcher-right'>
                <a href='#' className='blue-btn'>
                  Switch
                </a>
              </div>
            </div>
            <div className='follow-suggestions'></div>
            <div className='nav-links'></div>
            <div className='copyright-statement'></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
