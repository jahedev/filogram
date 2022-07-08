import Header from '../base/Header';
import Posts from './Posts';
import Stories from './Stories';

import profile from '../../assets/images/profile.jpg';
import Footer from '../base/Footer';
import FollowSuggestions from './FollowSuggestions';
import ProfileView from './ProfileView';

export default function Home() {
  return (
    <div id='homepage'>
      <Header filled={{ home: true }} />
      <main>
        <div className='center-middle'>
          <div className='main-left'>
            <Stories />
            <Posts />
          </div>
          <div className='main-right'>
            {/* current user info */}
            <ProfileView
              largeSize={true}
              image={profile}
              username={'jahedev'}
              subtitle={'Jahed Hossain'}
              actionText={'Switch'}
              actionHandler={'INSERT CALLBACK'}
            />
            <FollowSuggestions />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
