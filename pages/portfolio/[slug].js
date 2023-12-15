import React from "react";
const contenful = require("contentful");

import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
import Image from "next/image";
import Container from "../../components/Container/Container";

import { LinkIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

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
    fallback: true,
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
      mockups: item.fields.mockups,
    };
  });

  if (!formattedProjects.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { project: formattedProjects[0] },
    revalidate: 10,
  };
};

const Post = ({ project }) => {
  if (!project) return <div>Loading...</div>;

  console.log(project);

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <header className="mb-10">
        <Container>
          <div className="bg-white shadow-sm p-6 dark:bg-neutral-900 rounded-lg">
            <div className="grid grid-cols-2 w-full gap-5">
              <div>
                <h1 className="font-bold text-xl text-blue-500 leading-6 mb-5">
                  {project.name}
                </h1>
                <div className="flex gap-5">
                  <a className="flex gap-2" href={project.repoLink}>
                    <LinkIcon className="h-5 w-auto" />
                    Github Repo
                  </a>
                  <a href={project.liveLink} className="flex gap-3">
                    <GlobeAltIcon className="h-5 w-auto" />
                    Live Site
                  </a>
                </div>
              </div>
              <div className="place-self-center">
                {project.mockups.map((image) => (
                  <img
                    className="w-[300px]"
                    key={image.fields.title}
                    alt={image.fields.title}
                    src={`https:${image.fields.file.url}`}
                  />
                ))}
              </div>
            </div>
            <ul className="flex gap-5 mt-5">
              {project.technology.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </ul>
          </div>
        </Container>
      </header>
      <main>
        <Container className="container portfolio__single-project">
          <article className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6 leading-7">
            {documentToReactComponents(project.summary)}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Post;
