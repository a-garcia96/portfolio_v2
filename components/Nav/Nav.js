import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
      <nav className="bg-white dark:bg-neutral-900 rounded-full py-1 px-2 shadow-sm grid grid-cols-2 items-center">
        <ul className="flex gap-1 text-neutral-700 dark:text-neutral-300">
          <Link href="/" passHref>
            <li className="hover:bg-[#F2F2F2] dark:hover:dark:bg-neutral-950 hover:cursor-pointer py-2 px-4 rounded-full">
              Home
            </li>
          </Link>
          <Link href="/about" passHref>
            <li className="hover:bg-[#F2F2F2] dark:hover:dark:bg-neutral-950 hover:cursor-pointer py-2 px-4 rounded-full">
              About
            </li>
          </Link>
          <Link href="/portfolio" passHref>
            <li className="hover:bg-[#F2F2F2] dark:hover:dark:bg-neutral-950 hover:cursor-pointer py-2 px-4 rounded-full">
              Portfolio
            </li>
          </Link>
          <Link href="/blog" passHref>
            <li className="hover:bg-[#F2F2F2] dark:hover:dark:bg-neutral-950 hover:cursor-pointer py-2 px-4 rounded-full">
              Blog
            </li>
          </Link>
        </ul>
        <ThemeToggle />
      </nav>
    </Container>
  );
}
