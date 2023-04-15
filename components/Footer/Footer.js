import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__wrapper container'>
          <div className='footer__site-map'>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div className='footer__copyright'>©{new Date().getFullYear()} | Alex Garcia</div>
        </div>
    </footer>
  )
}

export default Footer