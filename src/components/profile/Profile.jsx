import { Component } from 'react';

import FooterLarge from '../base/FooterLarge';
import Header from '../base/Header';
import ProfileBottom from './ProfileBottom';
import ProfileTop from './ProfileTop';

export default class Profile extends Component {
  render() {
    return (
      <div id='homepage'>
        <Header filled={{ profile: true }} />
        <main>
          <div className='center-middle flex-column profile-page-container'>
            <ProfileTop />
            <ProfileBottom />
            <FooterLarge />
          </div>
        </main>
      </div>
    );
  }
}
