import React from "react";
const contenful = require("contentful");

import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag"
import Image from "next/image";

// IMPORT ASSETS
import externalLink from "../../public/icon-external-link.png"

// CREATE THE CLIENT FOR FETCHING DATA FROM CONTENTFUL

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const projects = await client.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
  });

  const formattedProjects = projects.items.map((item) => {
    return {
      slug: item.fields.slug,
    };
  });

  const paths = await formattedProjects.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const project = await client.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
    "fields.slug[match]": slug,
  });

  const formattedProjects = project.items.map((item) => {
    return {
      name: item.fields.projectName,
      slug: item.fields.slug,
      summary: item.fields.summary,
      technology: [...item.fields.technologyUsed],
      repoLink: item.fields.repoLink,
      liveLink: item.fields.liveLink,
      mockups: item.fields.mockups
    };
  });

  return {
    props: { project: formattedProjects[0] },
  };
};

const Post = ({ project }) => {
  console.log(project)

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <header className="portfolio__header-single">
        <div className="container">
          <h1>{project.name}</h1>
          <ul className="portfolio__tag-wrapper">
            {project.technology.map(tag => <Tag key={tag} tag={tag} />)}
          </ul>
          <div className='portfolio__card-linkWrapper'>
            <a className='portfolio__card-link--ext' href={project.repoLink}>code <Image src={externalLink} /></a>
            <a href={project.liveLink} className="portfolio__card-link--ext">Live Site <Image className="linkIcon" src={externalLink} /></a>
          </div>
        </div>
      </header>
      <main>
        <div className="container portfolio__single-project">
          <article className="portfolio__summary">
            {documentToReactComponents(project.summary)}
          </article>
          <aside className="portfolio__gallery">
            {project.mockups.map((image) => <Image key={image.fields.title} src={`https:${image.fields.file.url}`} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} />)}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
