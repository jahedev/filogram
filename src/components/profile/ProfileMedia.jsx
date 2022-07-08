// I am using dummy static images for now
import ProfileMediaItem from './ProfileMediaItem';

// I am using dummy static images for now
import media1 from '../../assets/images/media1.jpg';
import media2 from '../../assets/images/media2.jpg';
import media3 from '../../assets/images/media3.jpg';

export default function ProfileMedia({ showSaved }) {
  return showSaved ? (
    <div className='profile-media'>
      <h2>Saved Items Go Here</h2>
    </div>
  ) : (
    <div className='profile-media'>
      <ProfileMediaItem preview={media1} />
      <ProfileMediaItem preview={media2} />
      <ProfileMediaItem preview={media3} />
      <ProfileMediaItem preview={media2} />
      <ProfileMediaItem preview={media3} />
      <ProfileMediaItem preview={media1} />
    </div>
  );
}
