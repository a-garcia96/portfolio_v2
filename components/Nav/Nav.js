import React, { useState } from "react";
import Link from "next/Link";

export default function Nav() {

  const handleClick = () => {

    const mobileNav = document.querySelector('.nav__mobile')
    const navToggle = document.querySelector('.nav__toggle')

    const visibility = mobileNav.getAttribute('data-visible')

    if(visibility == "false") {
      mobileNav.setAttribute('data-visible', true);
      navToggle.setAttribute('data-toggled', true);
      
    } else if (visibility == "true") {
      navToggle.setAttribute('data-toggled', false);
      mobileNav.setAttribute('data-visible', false);
    }

    console.log(visibility);
  }


  return (
    <nav className="nav">
      <div className="container">
        <div>
          <h1 className="uppercase-text">Alex Garcia</h1>
        </div>
        <button onClick={handleClick} className="nav__toggle" data-toggles="false"></button>
        <div data-visible="false" className="nav__mobile">
          <ul>
            <li>
              <Link href="/">
                <a><span>00</span> Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a><span>01</span> Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a><span>02</span> Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a><span>03</span> Contact</a>
              </Link>
            </li>
          </ul>
          </div>
          <div className="nav__desktop">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
