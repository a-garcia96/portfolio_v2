import React from "react";
const contenful = require("contentful");

import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

// CREATE THE CLIENT FOR FETCHING DATA FROM CONTENTFUL

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const posts = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
  });

  const formattedPosts = posts.items.map((item) => {
    return {
      profilePhoto: item.fields.profilePhoto.fields.file.url,
      title: item.fields.title,
      author: item.fields.author.fields.displayName,
      slug: item.fields.slug,
      postDate: item.fields.postDate,
      postContent: item.fields.postContent.content[0].content[0].value,
    };
  });

  const paths = await formattedPosts.map((post) => {
    return {
      params: {
        slug: post.slug,
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

  const post = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
    "fields.slug[match]": slug,
  });

  const formattedPosts = post.items.map((item) => {
    return {
      profilePhoto: item.fields.profilePhoto.fields.file.url,
      title: item.fields.title,
      author: item.fields.author.fields.displayName,
      slug: item.fields.slug,
      postDate: item.fields.postDate,
      postContent: item.fields.postContent,
    };
  });

  return {
    props: { post: formattedPosts[0] },
    revalidate: 10
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <header className="post__header">
        <div className="container">
          <h1>{post.title}</h1>
        </div>
      </header>
      <main>
        <article className="container">
          <div className="post__content">
            {documentToReactComponents(post.postContent)}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Post;
