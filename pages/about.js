import React from "react";

// IMPORT COMPONENT
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import Image from "next/image";

// IMPORT ASSETS
import profilePicture from "../public/home/profile-picture.jpg";

const about = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="my-8">
          <Container>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="text-center">
                <Image
                  src={profilePicture}
                  alt="Picture of Alex Garcia"
                  className="rounded-full"
                  width={300}
                  height={300}
                />
                <h2 className="text-xl font-bold text-blue-500">
                  Hi, I&apos;m Alex!
                </h2>
                <p className="text-3xl font-bold">
                  Passionate about designing and building{" "}
                  <span className="underline underline-offset-4 text-blue-500">
                    apps.
                  </span>
                </p>
                <h1 class="text-lg py-3">
                  <a class="font-semibold text-blue-500">Frontend developer</a>{" "}
                  based in San Diego.
                </h1>
                <p class="text-[17px] text-neutral-500 2xs:px-2 xs:px-5 leading-relaxed">
                  Currently interested in developing user-friendly frontends
                  that provide effeciency and ease-of-use.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8">
          <Container>
            <div className="md:grid md:grid-cols-3 md:gap-5">
              <div className="bg-white shadow-sm rounded-lg p-6 col-span-2">
                <h2 className="font-bold text-blue-500">Work Experience</h2>
                <article className="grid grid-cols-4">
                  <div className="col-span-2">
                    <h3 className="font-semibold">Web Developer</h3>
                    <p>Independent Financial Group, LLC.</p>
                  </div>
                  <div className="col-span-2">
                    <p className="flex gap-2 align-middle">
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
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      San Diego, CA
                    </p>
                    <p className="flex align-middle gap-2">
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
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      Present
                    </p>
                  </div>
                </article>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6 col-span-1">
                <h2 className="font-bold text-blue-500">Skills</h2>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default about;
