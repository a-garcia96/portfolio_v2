import Head from "next/head";
import React from "react";
import Image from "next/image";

import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import resume from '../public/myResume2023.png'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <>
      <Head></Head>
      <Nav />
      <main>
        <div className="container resume">
          <div className="resume__grid">
            <div className="resume__column-1">
              <Image style={{maxWidth: "350px !important"}} src={resume} className="resume__image" />
            </div>
            <div className="resume__column-2">
              <h2>My Work Experience</h2>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
