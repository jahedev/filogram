import { Link } from 'react-router-dom';

export default function ProfileView(props) {
  return (
    <div className='profile-view'>
      <div className='profile-view-left'>
        <div className='user-profile-image'>
          <div
            className={
              'profile-outer-circle' +
              (!!props.largeSize ? '' : ' profile-small')
            }>
            <div className='profile-circle'>
              <img src={props.image} alt='story icon' />
            </div>
          </div>
        </div>
        <div className='user-profile-info'>
          <div className='user-profile-username'>
            <Link to='#'>{props.username}</Link>
          </div>
          <div
            className={
              'user-profile-name' + (!!props.largeSize ? '' : ' name-small')
            }>
            <span>{props.subtitle}</span>
          </div>
        </div>
      </div>
      <div className='profile-view-right'>
        <Link to='#' className='blue-btn'>
          {props.actionText}
        </Link>
      </div>
    </div>
  );
}