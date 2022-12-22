import Head from "next/head";
import React from "react";

import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <>
      <Head></Head>
      <Nav />
      <main>
        <div className="container">
          <Document className="resume" file={"/myResume2023.pdf"}>
            <Page pageIndex={0} />
          </Document>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
