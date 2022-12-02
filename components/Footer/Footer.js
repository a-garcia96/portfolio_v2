import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__wrapper container'>
          <div className='footer__heading'>
            <h1>Alex Garcia</h1>
            <h2>made with love</h2>
            <p>alex.g9415@gmail.com</p>
          </div>
          <div className='footer__site-map'>
            <ul>
                <li>Home</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Resume</li>
            </ul>
          </div>
          <div className='footer__copyright'>© 2023 Alex Garcia</div>
        </div>
    </footer>
  )
}

export default Footer