// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav";

// assets
import profilePic from "../public/profilePic.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Garcia | Web Developer</title>
        <meta name="description" content="Built with NextJs" />
      </Head>
      <Nav />
      <header>
        <div className="container">
          <h1>Hey, I'm Alex 👋</h1>
          <p>
            I'm a front-end developer. I like to blend technical topics with a
            love of art to create websites. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nemo, iste neque nulla distinctio,
            voluptates nisi, similique corrupti quibusdam natus velit mollitia?
            Dolores in dolorem unde quasi obcaecati magni cumque asperiores.
          </p>

          {/* BUTTONS */}
          <div>
            <button>Portfolio</button>
            <button>Resume</button>
          </div>

          <div>
            {/* <Image
              src={profilePic}
              width={450}
              height={450}
              placeholder="blur"
            /> */}
          </div>
        </div>
      </header>
    </div>
  );
}
