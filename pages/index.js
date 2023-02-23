import { useEffect, useRef, useState } from "react";

// NEXTJS COMPONENTS
import Head from "next/head";
import Image from "next/image";

//IMPORT FRAMER MOTION
import { motion } from "framer-motion";

// IMPORT REACT HOOK FORM
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// components
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import { Typewriter } from "react-simple-typewriter";
import InformationCard from "../components/InformationCard/InformationCard";

// assets
import servicesBlob1 from "../public/services-blob-shape-1.png";
import servicesBlob2 from "../public/services-blob-shape-2.png";
import profilePic from "../public/profilePic2.png";
import githubIcon from "../public/github-icon.png";
import linkedinIcon from "../public/linkedin-icon.png";
import instagramIcon from "../public/instagram-icon.png";
import emailIcon from "../public/email-icon.png";
import brushIcon from "../public/icon-brush.png";
import terminalIcon from "../public/icon-terminal.png";
import barChatIcon from "../public/icon-bar-chart.png";
import reactIcon from "../public/react.png";
import htmlIcon from "../public/html5.png";
import cssIcon from "../public/css3.png";
import jsIcon from "../public/javascript.png";
import nodeIcon from "../public/nodejs.png";
import sassIcon from "../public/sass.png";
import bootstrapIcon from "../public/bootstrap.png";
import firebaseIcon from "../public/firebase.png";
import contentfulIcon from "../public/contentful.png";
import wordpressIcon from "../public/wordpress.png";
import nextjsIcon from "../public/nextjs.png";
import gitIcon from "../public/git.png";
import Link from "next/Link";

export default function Home() {
  const [dimension, setDimension] = useState(80);
  const [isSent, setIsSent] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setDimension(60);
      } else if (window.innerWidth > 450) {
        setDimension(80);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const form = useRef();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {

    toast.info('Sending your email!', {
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
    await emailjs.send('service_1466etl', 'template_gzrcsvg', { ...data }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log(response.status, response.text);
      }, (error) => {
        console.log(error);
      });

    // SEND EMAIL TO PERSON THAT FILLED OUT FORM FOR CONFIRMATION
    await emailjs.send('service_1466etl', 'template_3f138974', { ...data }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        if (response.status == 200) {
          reset()
          toast.success('Email sent!', {
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
      }, (error) => {
        console.log(error)
      })
  }

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
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                Hello, <br /> my name is Alex!
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
              >
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
              </motion.div>
              <div className="home-header__social-icons">
                <motion.div
                  initial={{ y: 400, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 1.6 }}
                >
                  <Image src={githubIcon} alt="" />
                </motion.div>
                <motion.div
                  initial={{ y: 400, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 1.8 }}
                >
                  <Image src={linkedinIcon} alt="" />
                </motion.div>
                <motion.div
                  initial={{ y: 400, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 2 }}
                >
                  <Image src={instagramIcon} alt="" />
                </motion.div>
                <motion.div
                  initial={{ y: 400, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 2.2 }}
                >
                  <Image src={emailIcon} alt="" />
                </motion.div>
              </div>
            </section>
            <section className="home-header__col-2">
              <motion.div
                className="home-header__image-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 60, delay: 2.5 }}
              >
                <Image src={profilePic} className="home-header__profile-pic" />
              </motion.div>
            </section>
          </div>
        </div>
      </header>
      <main className="main-content">
        <motion.section
          className="home-about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
        >
          <div className="container">
            <div className="home-about__grid">
              <div className="home-about__col-1">
                <h2>The Story So Far...</h2>
              </div>
              <div>
                <p>
                  I started my career in technology 5 years ago as an employee of an information technology managed services company. My role was to provide hardware, software and network support to multiple clients in different industries. This experience gave me the ability to be highly adaptable, and it also taught me the skill sets needed to become a quick leaner and self-sufficient.
                </p>
                <p>
                  I quickly soaked up as much knowledge as  I could and worked my way up to working with complex infrastructure hosted both locally and in the cloud. Yet, there was something still missing. I have always had a creative side, so I began to look for a career where I could take my technical skills I had acquired and be a little creative as well.
                </p>
                <p>
                  Then I learned about front-end development and how it provides the ability to use my technical and creative skills. I was immediatly hooked! Recently, I was given the opportunity to put these skills to use and was promoted from being an infrastructure engineer to being the primary web developer for one of San Diego’s top financial broker-dealers.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <section className="home-services">
          <motion.div
            className="home-services__blob1"
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: -50, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
          >
            <Image src={servicesBlob1} alt="" />
          </motion.div>
          <motion.div
            className="home-services__blob2"
            initial={{ x: 400, opacity: 0 }}
            whileInView={{ x: 50, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
          >
            <Image className="home-services__blob2" src={servicesBlob2} alt="" />
          </motion.div>
          <div className="container">
            <h2>What I Do</h2>
            <div className="home-services__grid">
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <InformationCard
                  imageSrc={brushIcon}
                  heading="UI/UX Design"
                  summaryText="I create user-centered digital products, emphasizing form & function for seamless user experiences. Experienced in wireframing, layout, color, typography, and more."
                />
              </motion.div>
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              >
                <InformationCard
                  imageSrc={terminalIcon}
                  heading="Web Development"
                  summaryText="Experienced in HTML, CSS, JavaScript & React, I provide custom web solutions for complex apps & simple websites."
                />
              </motion.div>
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              >
                <InformationCard
                  imageSrc={barChatIcon}
                  heading="Digital Marketing"
                  summaryText="I assist firms in connecting with target audience using data-driven tactics & strategies, incl. SEO, PPC, & social media."
                />
              </motion.div>
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
              <div className="home-skills__col">
                <Image
                  alt="icon"
                  src={gitIcon}
                  objectFit="contain"
                  width={dimension}
                  height={dimension}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-contact">
          <ToastContainer />
          <h2>Lets Chat</h2>
          <div className="container">
            <form ref={form} className="home-contact__form" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" placeholder="John Smith" {...register("fullName", { required: true })} className="home-contact__form-field" />
              <label htmlFor="email">email*</label>
              <input type="email" placeholder="email@domain.com" {...register("email", { required: true })} className="home-contact__form-field" />
              <label htmlFor="message">Your Message</label>
              <textarea name="message" rows={10} placeholder="Type your message here" {...register("message", { required: true })} className="home-contact__form-field"></textarea>
              {isSubmitting && <input type="submit" value="Sending" disabled="disabled" className="home-contact__form-button--disabled" />}
              {!isSubmitting && <input type="submit" value="Submit" className="home-contact__form-button--enabled" />}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
