import Head from "next/head";
import React from "react";
import Image from "next/image";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import resume from "../public/myResume2023.png";
import Button from "../components/Button/Button";

const Resume = () => {
  return (
    <>
      <Head></Head>
      <Nav />
      <main>
        <div className="container resume">
          <div className="resume__grid">
            <div className="resume__column-1">
              <h2 className="resume__heading">My Work Experience</h2>
              <Image
                style={{ maxWidth: "350px !important" }}
                src={resume}
                className="resume__image"
              />
              <Button className="resume__download-button">
                <a style={{padding: "2em"}} href="https://drive.google.com/file/d/1Ye7c0GpkskZ_53lTyYhCPhMpEK0d7c9o/view?usp=sharing" download="Alex Garcia Resume">
                  Download the pdf
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
