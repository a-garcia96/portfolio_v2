import React, { useEffect, useState } from "react";
import Link from "next/Link";
import { useRouter } from "next/router";

export default function Nav() {
  
  const handleClick = () => {
    const mobileNav = document.querySelector(".nav__mobile");
    const navToggle = document.querySelector(".nav__toggle");
    const visibility = mobileNav.getAttribute("data-visible");

    if (visibility == "false") {
      mobileNav.setAttribute("data-visible", true);
      navToggle.setAttribute("data-toggled", true);
      document.body.style.overflowY = "hidden";
    } else if (visibility == "true") {
      navToggle.setAttribute("data-toggled", false);
      mobileNav.setAttribute("data-visible", false);
      document.body.style.overflowY = "visible";
    }
  };


  // get active link
  const router = useRouter();


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__mobile-heading">
          <h1 className="uppercase-text nav__mobile-heading-text">AG</h1>
          <button
            onClick={handleClick}
            className="nav__toggle"
            data-toggles="false"
          ></button>
        </div>
        <div data-visible="false" className="nav__mobile">
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span className="set-bold highlight-text">00</span> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>
                  <span className="set-bold highlight-text">01</span> Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  <span className="set-bold highlight-text">02</span> Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>
                  <span className="set-bold highlight-text">03</span> Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__desktop">
          <div className="nav__desktop-heading">
            <h1>Alex <span className="highlight-text">Garcia</span></h1>
          </div>
          <div className="nav__desktop-links">
            <ul>
              <li>
                <Link href="/">
                  <a style={{borderBottom: router.asPath === "/" ? '3px solid var(--color-primary-dark)': 'white'}}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a style={{borderBottom: router.asPath === "/portfolio" ? '3px solid var(--color-primary-dark)': 'white'}}>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a style={{borderBottom: router.asPath === "/blog" ? '3px solid var(--color-primary-dark)': 'white'}}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a style={{borderBottom: router.asPath === "/contact" ? '3px solid var(--color-primary-dark)': 'white'}}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
