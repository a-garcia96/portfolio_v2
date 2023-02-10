import { useEffect, useState } from "react";

// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import { Typewriter } from "react-simple-typewriter";

// assets
import profilePic from "../public/profilePic2.png";
import githubIcon from "../public/github-icon.png";
import linkedinIcon from "../public/linkedin-icon.png";
import instagramIcon from "../public/instagram-icon.png";
import emailIcon from "../public/email-icon.png";
import reactIcon from "../public/react.svg";
import htmlIcon from "../public/html5.svg";
import cssIcon from "../public/css3.svg";
import jsIcon from "../public/javascript.svg";
import nodeIcon from "../public/nodejs.svg";
import npmIcon from "../public/npm.svg";
import sassIcon from "../public/sass.svg";
import bootstrapIcon from "../public/bootstrap.svg";
import firebaseIcon from "../public/firebase.svg";
import contentfulIcon from "../public/contentful.svg";
import wordpressIcon from "../public/wordpress.svg";
import nextjsIcon from "../public/nextjs.svg";
import Link from "next/Link";

export default function Home() {
  const [dimension, setDimension] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setDimension(60);
      } else if (window.innerWidth > 450) {
        setDimension(80);
      }
    };

    window.addEventListener("resize", handleResize);

    console.log(dimension);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <header className="home-header">
        <div className="container">
          <div className="home-header__grid">
            <section className="home-header__col-1">
              <h1>
                Hello, <br /> my name is Alex!
              </h1>
              <p>
                I am a{" "}
                <Typewriter
                  cursor={true}
                  typeSpeed={120}
                  words={[
                    "self-taught developer.",
                    "digital marketer.",
                    "photographer.",
                  ]}
                  loop={0}
                />
              </p>
              <Button><Link href="/resume">Resume</Link></Button>
              <div className="home-header__social-icons">
                <Image src={githubIcon} alt="" />
                <Image src={linkedinIcon} alt="" />
                <Image src={instagramIcon} alt="" />
                <Image src={emailIcon} alt="" />
              </div>
            </section>
            <section className="home-header__col-2">
              <div className="home-header__image-wrapper">
                <Image src={profilePic} className="home-header__profile-pic" />
              </div>
            </section>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="home-about">
          <div className="container">
            <div className="home-about__grid">
              <div className="home-about__col-1">
                <h2>About Me</h2>
              </div>
              <div className="home-about__col-2">
                <p>
                  For the last 4 years I have worked as a systems engineer and
                  administrator managing IT infrastructure and assets for
                  businesses in a multitude of industries. Recently I have
                  transitioned to a developer role for one of San Diego&#39;s
                  top financial broker dealers. I have a passion for art and
                  technology that drives me as a developer to build products
                  that are equally functional as they are visually appealing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-skills">
          <div className="container">
            <h2>Tech Stack</h2>
            <div className="home-skills__grid">
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={htmlIcon}
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={cssIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={jsIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={reactIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={nodeIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={npmIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={sassIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={bootstrapIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={firebaseIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={contentfulIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={wordpressIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={nextjsIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
