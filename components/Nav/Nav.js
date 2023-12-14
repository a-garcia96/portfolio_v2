import React, { useEffect, useState, Fragment, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu, Transition } from "@headlessui/react";

// COMPONENTS
import Container from "../Container/Container";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default function Nav() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <Container classes={"my-8 relative"}>
      <nav className="bg-white dark:bg-neutral-900 rounded-full py-1 px-2 shadow-sm grid grid-cols-2 items-center">
        <ul className="hidden md:flex gap-1 text-neutral-700 dark:text-neutral-300">
          {navigation.map((item) => {
            return (
              <Link href={item.href} passHref key={item.name}>
                <li className="hover:bg-[#F2F2F2] dark:hover:dark:bg-neutral-950 hover:cursor-pointer py-2 px-4 rounded-full">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <Menu as={"ul"} className="md:hidden">
          {({ open }) => {
            return (
              <>
                {!open ? (
                  <Menu.Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Menu.Button>
                ) : (
                  <Menu.Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Menu.Button>
                )}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute top-[120%] inset-x-4 drop-shadow-lg flex flex-col gap-y-5 bg-white rounded-lg px-5 py-4 font-bold text-gray-500 z-20 dark:bg-neutral-800 dark:text-neutral-200">
                    {navigation.map((item) => {
                      return (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <MyLink
                              className="hover:bg-neutral-100 hover:dark:bg-neutral-700 hover:text-blue-500 px-4 py-2 rounded-full"
                              href={item.href}
                            >
                              {item.name}
                            </MyLink>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </Transition>
              </>
            );
          }}
        </Menu>
        <ThemeToggle />
      </nav>
    </Container>
  );
}
