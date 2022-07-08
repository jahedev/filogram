import React from 'react'

import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer>
      <div className='nav-links'>
        <FooterLinks />
      </div>
      <div className='copyright-statement'>
        <span>© 2021 JAHEDEV - INSPIRED BY INSTAGRAM</span>
      </div>
    </footer>
  )
}
