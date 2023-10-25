import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// COMPONENTS
import Container from "../Container/Container";

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
    <Container classes={"my-8"}>
      <nav className="bg-white rounded-full py-1 px-2 shadow-sm">
        <ul className="flex gap-1 text-neutral-700">
          <li className="hover:bg-[#F2F2F2] hover:cursor-pointer py-2 px-4 rounded-full"><Link href="/">Home</Link></li>
          <li className="hover:bg-[#F2F2F2] hover:cursor-pointer py-2 px-4 rounded-full"><Link href="/about">About</Link></li>
          <li className="hover:bg-[#F2F2F2] hover:cursor-pointer py-2 px-4 rounded-full"><Link href="/portfolio">Work</Link></li>
          <li className="hover:bg-[#F2F2F2] hover:cursor-pointer py-2 px-4 rounded-full"><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </Container>
    // <nav className="nav">
    //   <div className="container">
    //     <div className="nav__mobile-heading">
    //       <Image src={nameLogo} width={125} height={75} alt="Logo for Alex Garcia" />
    //       <button
    //         onClick={handleClick}
    //         className="nav__toggle"
    //         data-toggles="false"
    //       ></button>
    //     </div>
    //     <div data-visible="false" className="nav__mobile">
    //       <ul>
    //         <li>
    //           <Link href="/">
    //             <a>
    //               <span className="set-bold highlight-text">00</span> Home
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/portfolio">
    //             <a>
    //               <span className="set-bold highlight-text">01</span> Portfolio
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/blog">
    //             <a>
    //               <span className="set-bold highlight-text">02</span> Blog
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/about">
    //             <a>
    //               <span className="set-bold highlight-text">03</span> About
    //             </a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="nav__desktop">
    //       <div className="nav__desktop-heading">
    //         <Image src={nameLogo} width={125} height={71} alt="Logo for Alex Garcia" />
    //       </div>
    //       <div className="nav__desktop-links">
    //         <ul>
    //           <li>
    //             <Link href="/">
    //               <a
    //                 style={{
    //                   borderBottom:
    //                     router.asPath === "/"
    //                       ? "3px solid var(--color-primary-dark)"
    //                       : "white",
    //                 }}
    //               >
    //                 Home
    //               </a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/portfolio">
    //               <a
    //                 style={{
    //                   borderBottom:
    //                     router.asPath === "/portfolio"
    //                       ? "3px solid var(--color-primary-dark)"
    //                       : "white",
    //                 }}
    //               >
    //                 Portfolio
    //               </a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/blog">
    //               <a
    //                 style={{
    //                   borderBottom:
    //                     router.asPath === "/blog"
    //                       ? "3px solid var(--color-primary-dark)"
    //                       : "white",
    //                 }}
    //               >
    //                 Blog
    //               </a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/about">
    //               <a
    //                 style={{
    //                   borderBottom:
    //                     router.asPath === "/about"
    //                       ? "3px solid var(--color-primary-dark)"
    //                       : "white",
    //                 }}
    //               >
    //                 About
    //               </a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
