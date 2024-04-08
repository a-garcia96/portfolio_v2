import { useEffect, useRef, useState } from "react";

// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//IMPORT FRAMER MOTION
import { motion, useScroll, useTransform } from "framer-motion";

// IMPORT REACT HOOK FORM
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Container from "../components/Container/Container";
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Tag from "../components/Tag/Tag";
import InformationCard from "../components/InformationCard/InformationCard";

// assets
import profilePicture from "../public/home/profile-picture.jpg";
import instagramLogo from "../public/home/instagram-logo.png";
import githubLogo from "../public/home/github-logo.png";
import linkedinLogo from "../public/home/linkedin-logo.png";
import gmailLogo from "../public/home/gmail-logo.png";

// CONTENTFUL CLIENT INIT
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const featuredProjects = await client.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
    "metadata.tags.sys.id[in]": "featured",
  });

  return {
    props: {
      featuredProjects: [...featuredProjects.items],
    },
    revalidate: 10,
  };
}

export default function Home({ featuredProjects }) {
  const [isSent, setIsSent] = useState(null);

  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    toast.info("Sending your email!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // SEND EMAIL TO ME WITH DETAILS OF FORM
    await emailjs
      .send(
        "service_1466etl",
        "template_gzrcsvg",
        { ...data },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(response.status, response.text);
        },
        (error) => {
          console.log(error);
        }
      );

    // SEND EMAIL TO PERSON THAT FILLED OUT FORM FOR CONFIRMATION
    await emailjs
      .send(
        "service_1466etl",
        "template_3f138974",
        { ...data },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          if (response.status == 200) {
            reset();
            toast.success("Email sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  let aboutRef = useRef(null);
  let { scrollYProgress: scrollAboutY } = useScroll({
    target: aboutRef,
  });
  const y = useTransform(scrollAboutY, [0, 1], ["0%", "200%"]);

  let servicesRef = useRef(null);
  let { scrollYProgress: scrollServicesY } = useScroll({
    target: servicesRef,
  });
  const y2 = useTransform(scrollServicesY, [0, 1], ["0%", "200%"]);

  return (
    <>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main>
        <section>
          <Container>
            <h2 className="py-2 px-4 font-bold text-blue-500">About</h2>
            <div className="md:grid md:grid-cols-3 md:gap-5 my-4">
              <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6 md:col-span-2 mb-3 md:mb-0">
                <div className="grid grid-cols-3 gap-5">
                  <div className="col-span-2">
                    <h3 className="text-neutral-500 text-sm uppercase mb-2">
                      Front End Developer
                    </h3>
                    <h1 className="font-bold text-blue-500 text-xl mb-2">
                      Hi, I&apos;m Alex!
                    </h1>
                    <p className="max-w-prose mb-5 text-sm">
                      I am a creative and analytical problem solver, with a
                      desire to learn new technologies. With a strong background
                      in IT infrastructure and experience in front-end
                      development, I bring a unique blend of innovative
                      thinking, analysis, and creativity to every challenge.
                    </p>
                    <Link href="/about" passHref>
                      <button className="bg-blue-500 rounded-full p-3 text-white text-sm">
                        Get to know me &rarr;
                      </button>
                    </Link>
                  </div>
                  <div className="self-center col-span-1">
                    <Image src={profilePicture} className="rounded-full" />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6 md:col-span-1">
                <h3 className="text-neutral-500 text-sm uppercase mb-2 flex gap-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    ></path>
                  </svg>{" "}
                  Links
                </h3>
                <div className="md:col-span-1 grid grid-cols-4 md:grid-cols-2 md:grid-rows-2 gap-5">
                  <div className="hover:cursor-pointer group">
                    <Link href="https://linkedin.com/in/agarcia96" passHref>
                      <Image src={linkedinLogo} alt="LinkedIn Link" />
                    </Link>
                  </div>
                  <div className="hover:cursor-pointer group">
                    <Link href="https://github.com/a-garcia96" passHref>
                      <Image src={githubLogo} alt="Github Link" />
                    </Link>
                  </div>
                  <div className="hover:cursor-pointer group">
                    <Link href="https://instagram.com/alex_gaarciaa" passHref>
                      <Image src={instagramLogo} alt="Instagram Link" />
                    </Link>
                  </div>
                  <div className="hover:cursor-pointer group">
                    <Link href="https://github.com/a-garcia96" passHref>
                      <Image src={gmailLogo} alt="email" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h2 className="py-2 px-4 font-bold text-blue-500">Work</h2>
            <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6">
              <h3 className="text-neutral-500 dark:text-neutral-300 text-sm uppercase mb-2 flex gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-5 h-5"
                  k="[object Object]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9437 1.25H14.0565C15.8943 1.24998 17.3499 1.24997 18.4891 1.40314C19.6615 1.56076 20.6105 1.89288 21.3589 2.64124C22.1072 3.38961 22.4393 4.33856 22.597 5.51098C22.7501 6.65019 22.7501 8.10583 22.7501 9.94359V14.0564C22.7501 15.8942 22.7501 17.3498 22.597 18.489C22.4393 19.6614 22.1072 20.6104 21.3589 21.3588C20.6105 22.1071 19.6615 22.4392 18.4891 22.5969C17.3499 22.75 15.8943 22.75 14.0565 22.75H12C11.5858 22.75 11.25 22.4142 11.25 22C11.25 21.5858 11.5858 21.25 12 21.25H14.0001C15.9069 21.25 17.2616 21.2484 18.2893 21.1102C19.2953 20.975 19.875 20.7213 20.2982 20.2981C20.7214 19.8749 20.9751 19.2952 21.1103 18.2892C21.2485 17.2615 21.2501 15.9068 21.2501 14V10C21.2501 8.09318 21.2485 6.73851 21.1103 5.71085C20.9751 4.70476 20.7214 4.12511 20.2982 3.7019C19.875 3.27869 19.2953 3.02502 18.2893 2.88976C17.2616 2.75159 15.9069 2.75 14.0001 2.75C12.0933 2.75 10.7386 2.75159 9.71095 2.88976C8.70486 3.02502 8.12521 3.27869 7.702 3.7019C7.00606 4.39784 6.79534 5.47918 6.75871 8.01085C6.75272 8.42502 6.41211 8.75591 5.99794 8.74992C5.58377 8.74393 5.25288 8.40332 5.25887 7.98915C5.29399 5.56168 5.45111 3.83147 6.64134 2.64124C7.38971 1.89288 8.33865 1.56076 9.51108 1.40314C10.6503 1.24997 12.1059 1.24998 13.9437 1.25ZM5.46164 10.25H5.53836C6.20793 10.25 6.76665 10.25 7.21898 10.296C7.69245 10.3441 8.13182 10.4489 8.52782 10.7135C8.82809 10.9141 9.08591 11.1719 9.28654 11.4722C9.55114 11.8682 9.65585 12.3075 9.70402 12.781C9.75003 13.2334 9.75002 13.7921 9.75 14.4617V18.5383C9.75002 19.2079 9.75003 19.7666 9.70402 20.219C9.65585 20.6925 9.55114 21.1318 9.28654 21.5278C9.08591 21.8281 8.82809 22.0859 8.52782 22.2865C8.13182 22.5511 7.69245 22.6559 7.21898 22.704C6.76664 22.75 6.20791 22.75 5.53832 22.75H5.46168C4.79209 22.75 4.23336 22.75 3.78102 22.704C3.30755 22.6559 2.86818 22.5511 2.47218 22.2865C2.17191 22.0859 1.9141 21.8281 1.71346 21.5278C1.44886 21.1318 1.34415 20.6925 1.29598 20.219C1.24997 19.7666 1.24998 19.2079 1.25 18.5383V14.4617C1.24998 13.7921 1.24997 13.2334 1.29598 12.781C1.34415 12.3075 1.44886 11.8682 1.71346 11.4722C1.9141 11.1719 2.17191 10.9141 2.47218 10.7135C2.86818 10.4489 3.30755 10.3441 3.78102 10.296C4.23335 10.25 4.79207 10.25 5.46164 10.25ZM3.93283 11.7883C3.57796 11.8244 3.41399 11.8882 3.30554 11.9607C3.16905 12.0519 3.05186 12.1691 2.96066 12.3055C2.8882 12.414 2.82438 12.578 2.78828 12.9328C2.75091 13.3002 2.75 13.7822 2.75 14.5V18.5C2.75 19.2178 2.75091 19.6998 2.78828 20.0672C2.82438 20.422 2.8882 20.586 2.96066 20.6945C3.05186 20.8309 3.16905 20.9481 3.30554 21.0393C3.41399 21.1118 3.57796 21.1756 3.93283 21.2117C4.30023 21.2491 4.78216 21.25 5.5 21.25C6.21784 21.25 6.69977 21.2491 7.06717 21.2117C7.42204 21.1756 7.58601 21.1118 7.69446 21.0393C7.83095 20.9481 7.94814 20.8309 8.03934 20.6945C8.1118 20.586 8.17562 20.422 8.21172 20.0672C8.24909 19.6998 8.25 19.2178 8.25 18.5V14.5C8.25 13.7822 8.24909 13.3002 8.21172 12.9328C8.17562 12.578 8.1118 12.414 8.03934 12.3055C7.94814 12.1691 7.83095 12.0519 7.69446 11.9607C7.58601 11.8882 7.42204 11.8244 7.06717 11.7883C6.69977 11.7509 6.21784 11.75 5.5 11.75C4.78216 11.75 4.30023 11.7509 3.93283 11.7883ZM11.25 19C11.25 18.5858 11.5858"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
                Portfolio
              </h3>
              {featuredProjects.map((project) => {
                return (
                  <article key={project.sys.id}>
                    <div className="my-5 border-b-2 border-b-neutral-200 pb-7">
                      <div className="flex gap-5">
                        <img
                          src={
                            project.fields.projectIcon
                              ? project.fields.projectIcon.fields.file.url
                              : "https://placehold.co/100"
                          }
                          className="rounded-lg w-[100px] h-[100px]"
                          alt="project icon"
                        />
                        <div>
                          <Link
                            passHref
                            href={`/portfolio/${project.fields.slug}`}
                          >
                            <h4 className="font-medium text-2xl text-blue-500 hover:scale-105 cursor-pointer transition-all">
                              {project.fields.projectName}
                            </h4>
                          </Link>
                          <p>
                            {project.fields.summary.content[0].content[0].value}{" "}
                            <Link
                              passHref
                              href={`/portfolio/${project.fields.slug}`}
                            >
                              <span className="font-bold hover:cursor-pointer hover:text-blue-500 transition-all">
                                Read More &rarr;
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-2 mt-3 list-none">
                        {project.fields.technologyUsed.map((tag) => (
                          <Tag tag={tag} key={tag} />
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
              <div className="flex justify-end">
                <Link href="/portfolio" passHref>
                  <button className="bg-blue-500 rounded-full text-white py-2 px-4">
                    View All &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
