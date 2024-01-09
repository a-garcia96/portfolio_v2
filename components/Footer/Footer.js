import React from "react";

import Container from "../Container/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container classes={"my-8"}>
      <footer className="bg-white dark:bg-neutral-900 rounded-full py-1 px-2 shadow-sm">
        <div className="py-2 px-4 grid grid-cols-3 text-sm">
          <div className="col-span-2 flex gap-1">
            <p>Developed by Alex Garcia</p>
            <p>|</p>
            <Link passHref href={"https://github.com/a-garcia96/portfolio_v2"}>
              <p className="font-bold flex gap-1 hover:cursor-pointer hover:text-green-300">
                Source Code{" "}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                </svg>
              </p>
            </Link>
          </div>
          <div className="col-span-1 justify-self-end">
            <p>Alex Garcia © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
