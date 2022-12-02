// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav";
import Button from "../components/Buttons";

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
  return (
    <>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Nav />
      <header>
        <div className="container">
          <div className="header-grid">
            <section className="header-col-1">
              <h1 className="content-margin-bottom">
                Developer & Photographer.
              </h1>
            </section>
            <section className="header-col-2">
              <div className="header-image-wrapper">
                <Image
                  src={profilePic}
                  objectFit="contain"
                  className="profile-pic"
                />
              </div>
            </section>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <section className="main-content-about-section">
            <div className="about-col-1">
              <h2 className="uppercase-text"> About Me</h2>
            </div>
            <div className="about-col-2">
              <p>
                I am a self-taught front-end developer based in San Diego,
                California. For the last 4 years I have worked as a systems
                engineer and administrator managing IT infrastructure and assets
                for businesses in a multitude of industries. Recently I have
                transitioned into a developer role for one of San Diego&aposs top
                financial broker dealers. I have a passion for art and
                technology that drives me as a developer to build products that
                are both functional and visually appealing.
              </p>
            </div>
          </section>
          <section className="main-content-skills-section">
            <h2 className="uppercase-text content-margin-bottom">Skills</h2>
            <div className="skills-grid">
              <Image
                alt="icon"
                src={htmlIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={cssIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={jsIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={reactIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={nodeIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={npmIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={sassIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={bootstrapIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={firebaseIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={contentfulIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={wordpressIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
              <Image
                alt="icon"
                src={nextjsIcon}
                objectFit="contain"
                width={100}
                height={100}
              />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <div>
            <h1>Alex Garcia</h1>
          </div>
          <div>
            <ul>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Resume</li>
            </ul>
          </div>
          <div>© 2023 Alex Garcia</div>
        </div>
      </footer>
    </>
  );
}
