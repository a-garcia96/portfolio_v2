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
              <h2>
                <div>A</div>
                <div>B</div>
                <div>O</div>
                <div>U</div>
                <div>T</div>
                <div> </div>
                <div>M</div>
                <div>E</div>
              </h2>
            </div>
            <div className="about-col-2">
              <p>
                I am a self-taught front-end developer based in San Diego, California. For
                the last 4 years I have worked as a systems engineer and
                administrator managing IT infrastructure and assets for
                businesses in a multitude of industries. Recently I have transitioned into a developer role for one of San Diego's top financial broker dealers. I have a passion for
                art and technology that drives me as a developer to build
                products that are both functional and visually appealing.
              </p>
            </div>
          </section>
          <section className="main-content-skills-section">
            <h1>Skills</h1>
            <div className="skills-grid">
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
              <Image
                src="https://place-hold.it/200"
                objectFit="contain"
                width={200}
                height={200}
              />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <h1>this be the footer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            dicta veniam quis ratione optio quo quasi suscipit, unde eligendi
            tempore itaque amet eum, autem voluptatem consequuntur molestiae
            obcaecati enim distinctio!
          </p>
        </div>
      </footer>
    </div>
  );
}
