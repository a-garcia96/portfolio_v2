// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Nav />
      <header className="home-header">
        <div className="container">
          <div className="home-header__grid">
            <section className="home-header__col-1">
              <h1>Developer & Photographer.</h1>
            </section>
            <section className="home-header__col-1">
              <div className="home-header__image-wrapper">
                <Image
                  src={profilePic}
                  objectFit="contain"
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
                <h2> About Me</h2>
              </div>
              ¬
              <div className="home-about__col-2">
                <p>
                  I am a self-taught front-end developer based in San Diego,
                  California. For the last 4 years I have worked as a systems
                  engineer and administrator managing IT infrastructure and
                  assets for businesses in a multitude of industries. Recently I
                  have transitioned into a developer role for one of San
                  Diego&aposs top financial broker dealers. I have a passion for
                  art and technology that drives me as a developer to build
                  products that are both functional and visually appealing.
                </p>
              </div>
            </div>
          </section>
          <section className="home-skills">
            <h2>Skills</h2>
            <div className="home-skills__grid">
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={htmlIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={cssIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={jsIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={reactIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={nodeIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={npmIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={sassIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={bootstrapIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={firebaseIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={contentfulIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={wordpressIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={nextjsIcon}
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
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
