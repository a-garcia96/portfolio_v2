import React from "react";

// IMPORT COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const blog = () => {
  return (
    <>
      <Nav />
      <header>
        <div className="container">
          <h1>Read About my Progress!</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            qui, maiores quod quibusdam itaque dicta distinctio quo aliquam et
            sed! Nihil iusto dignissimos, numquam perspiciatis eius labore sint
            nulla ducimus.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default blog;
