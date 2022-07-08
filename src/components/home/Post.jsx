import postImg from '../../assets/images/post.jpg';
import profile4 from '../../assets/images/profile4.jpg';

import { Link } from 'react-router-dom';

import {
  HeartOutlined,
  MailOutlined,
  MessageOutlined,
  MoreOutlined,
  SaveOutlined,
  SmileOutlined,
} from '@ant-design/icons';

export default function Post({ postId }) {
  return (
    <div className='post'>
      <div className='post-header'>
        <div className='post-header-left'>
          <div className='profile-outer-circle profile-small'>
            <div className='profile-circle'>
              <img src={profile4} alt='story icon' />
            </div>
          </div>
          <div className='profile-link'>
            <Link to='#'>jahedev</Link>
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
            Can we tell if it’s male or female? Cuz then I’d name it either
            Anthony or Frida…
          </span>
        </div>
        <div className='post-comment'>
          <span className='post-comment-user'>fatcatphotography_</span>
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
            <Link to='#' className='blue-btn'>
              Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
