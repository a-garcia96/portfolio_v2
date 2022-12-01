// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav";
import Button from "../components/Buttons";

// assets
import profilePic from "../public/profilePic2.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <header>
        <div className="container">
          <div className="header-grid">
            <section className="header-col-1">
              <h1 className="content-margin-bottom">
                Developer & Photographer
              </h1>
            </section>
            <section className="header-col-2">
              <div className="header-image-wrapper">
                <Image src={profilePic} objectFit="contain" className="profile-pic" style={{border: "10px solid white"}}/>
              </div>
            </section>
          </div>
        </div>
      </header>
      <main>
        <h1></h1>
      </main>
    </div>
  );
}
