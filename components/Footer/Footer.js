import React from 'react'
import Link from "next/link"
import Image from 'next/image';

import linkedinIcon from "../../public/linkedin-icon.png";
import instagramIcon from "../../public/instagram-icon.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__dev-profile'>
          <h3>Alex Garcia</h3>
          <a href="mailto:alex.g9415@gmail.com?subject=email from your portfolio">alex.g9415@gmail.com</a>
          <div className='footer__social-wrapper'>
            <a href="https://linkedin.com/in/agarcia96"><Image src={linkedinIcon} width={30} height={30} /></a>
            <a href="https://www.instagram.com/alex_gaarciaa/"><Image src={instagramIcon} width={30} height={30} /></a>
          </div>
        </div>
        <div className='footer__site-map'>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>©{new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer