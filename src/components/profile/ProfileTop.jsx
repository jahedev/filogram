import { Link } from 'react-router-dom';

// temporary
import profile from '../../assets/images/profile5.jpg';

export default function ProfileHeader() {
  return (
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
  );
}
