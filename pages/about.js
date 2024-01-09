import React from "react";

// IMPORT COMPONENT
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import Image from "next/image";

// IMPORT ASSETS
import profilePicture from "../public/home/profile-picture.jpg";

// CONTENTFUL CLIENT INIT
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const experience = await client.getEntries({
    content_type: "resume",
    order: "fields.order",
    // "metadata.tags.sys.id[in]": "featured",
  });

  const skills = await client.getEntries({
    content_type: "skills",
    order: "fields.skillName",
    // "metadata.tags.sys.id[in]": "featured",
  });

  return {
    props: {
      experience: [...experience.items],
      skills: [...skills.items],
    },
    revalidate: 10,
  };
}

const about = ({ experience, skills }) => {
  return (
    <>
      <Nav />
      <main>
        <section className="my-8">
          <Container>
            <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6">
              <div className="text-center">
                <Image
                  src={profilePicture}
                  alt="Picture of Alex Garcia"
                  className="rounded-full"
                  width={300}
                  height={300}
                />
                <h2 className="text-xl font-bold text-blue-500 mt-5">
                  Hi, I&apos;m Alex!
                </h2>
                <p className="text-3xl font-bold my-2">
                  Passionate about designing and building{" "}
                  <span className="underline underline-offset-4 text-blue-500">
                    apps.
                  </span>
                </p>
                <h1 className="text-lg">
                  <a className="font-semibold text-blue-500">
                    Frontend developer
                  </a>{" "}
                  based in San Diego.
                </h1>
                <p className="text-[17px] text-neutral-500 2xs:px-2 xs:px-5 leading-relaxed">
                  Passionate in developing user-friendly frontends that provide
                  effeciency and ease-of-use.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8">
          <Container>
            <div className="md:grid md:grid-cols-3 md:gap-5">
              <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6 col-span-2">
                <h2 className="font-bold text-blue-500 text-xl">
                  Work Experience
                </h2>
                <ul className="flex flex-col gap-5 mt-5">
                  {experience.map((role) => {
                    return (
                      <li key={role.sys.id} className="grid grid-cols-4">
                        <div className="col-span-2">
                          <h3 className="font-semibold">{role.fields.title}</h3>
                          <p className="text-sm text-gray-800 dark:text-neutral-500">
                            {role.fields.company}
                          </p>
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
                            {role.fields.location}
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
                            {role.fields.dates}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                  {/* <li className="grid grid-cols-4">
                    <div className="col-span-2">
                      <h3 className="font-semibold">Web Developer</h3>
                      <p className="text-sm">
                        Independent Financial Group, LLC.
                      </p>
                    </div>
                    <div className="col-span-2 justify-self-end">
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
                  </li>
                  <li className="grid grid-cols-4">
                    <div className="col-span-2">
                      <h3 className="font-semibold">Web Developer</h3>
                      <p className="text-sm">
                        Independent Financial Group, LLC.
                      </p>
                    </div>
                    <div className="col-span-2 justify-self-end">
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
                  </li> */}
                </ul>
              </div>
              <div className="mt-5 lg:mt-0 bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6 col-span-1">
                <h2 className="font-bold text-blue-500 text-xl">Skills</h2>
                <ul className="flex flex-wrap gap-3 mt-5">
                  {skills.map((skill) => {
                    return (
                      <li
                        key={skill.sys.id}
                        className="bg-gray-100 dark:bg-neutral-950 rounded-full px-3 py-2 text-blue-800 text-xs hover:scale-105 hover:cursor-pointer"
                      >
                        {skill.fields.skillName}
                      </li>
                    );
                  })}
                </ul>
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
