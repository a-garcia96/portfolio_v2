import React, { useState } from "react";
import Link from "next/Link";

export default function Nav() {
  const [isHidden, setIsHidden] = useState('hide')
  const [isShown, setIsShown] = useState('show')

  return (
    <nav className="nav">
      <div className="container">
        <div>
          <h1 className="uppercase-text">Alex Garcia</h1>
        </div>
        <div>
          <ul className="nav__mobile">
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
          <ul className="nav__desktop">
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
