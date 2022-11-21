// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";
// components
import Nav from "../components/Nav";
import Button from "../components/Buttons"

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
          <div>
            <h1>Hey, I'm Alex 👋</h1>
            <p>
              I'm a front-end developer. I like to blend technical topics with a
              love of art to create websites. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nemo, iste neque nulla distinctio,
              voluptates nisi, similique corrupti quibusdam natus velit
              mollitia? Dolores in dolorem unde quasi obcaecati magni cumque
              asperiores.
            </p>
            <div>
              <Button text="Portfolio" type="primary"/>
              <Button text="Resume" type="primary" />
            </div>
          </div>
          <div className="">
            <Image
              src={profilePic}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
