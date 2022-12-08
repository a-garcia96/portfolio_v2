import { useEffect, useState } from "react";

// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import {Typewriter} from 'react-simple-typewriter';

// assets
import profilePic from "../public/profilePic2.jpg";
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

export default function Home() {
  const [dimension, setDimension] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setDimension(60);
      } else if(window.innerWidth > 450) {
        setDimension(80);
      }

    }

    window.addEventListener('resize', handleResize)

    console.log(dimension);

    return () => window.removeEventListener('resize', handleResize)
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
              <h1><Typewriter cursor={true} typeSpeed={120} words={['developing','marketing','optimizing']} loop={0}/> <br /><span className="highlight-text">for the web.</span></h1>
              {/* <h2 className="highlight-text">for the web.</h2> */}
              <p>Self-taught front-end developer based in San Diego, California with a background in IT cloud infrastructure engineering and administration.</p>
              <Button>See my Resume</Button>
            </section>
            <section className="home-header__col-2">
              <div className="home-header__image-wrapper">
                <Image
                  src={profilePic}
                  className="home-header__profile-pic"
                />
              </div>
            </section>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="home-about">
            <div className="home-about__grid">
              <div className="home-about__col-1">
                <h2>About Me</h2>
              </div>
              <div className="home-about__col-2">
                <p>
                  For the last 4 years I have worked as a systems
                  engineer and administrator managing IT infrastructure and
                  assets for businesses in a multitude of industries. Recently I
                  have transitioned into a developer role for one of San
                  Diego&#39;s top financial broker dealers. I have a passion for
                  art and technology that drives me as a developer to build
                  products that are both functional and visually appealing.
                </p>
              </div>
            </div>
          </section>
          <section className="home-skills">
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
