import Story from './Story';

import profile from '../../assets/images/profile.jpg';
import profile2 from '../../assets/images/profile2.jpg';
import profile3 from '../../assets/images/profile3.jpg';
import profile4 from '../../assets/images/profile4.jpg';

export default function Stories(props) {
  return (
    <div className='stories-container'>
      <Story image={profile} username={'bunechoy'} />
      <Story image={profile2} username={'oakarcher'} />
      <Story image={profile3} username={'worthless.safi'} />
      <Story image={profile4} username={'dawnmariel'} />
    </div>
  );
}
