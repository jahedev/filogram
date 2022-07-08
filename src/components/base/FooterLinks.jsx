import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterLinks() {
  return (
    <>
      <div className='nav-link'>
        <Link to='#'>About</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Help</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Press</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>API</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Jobs</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Privacy</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Terms</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Locations</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Top Accounts</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Hashtags</Link>
      </div>
      <div className='nav-link'>
        <Link to='#'>Language</Link>
      </div>
    </>
  );
}
