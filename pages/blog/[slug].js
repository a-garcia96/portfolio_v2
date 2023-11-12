import React from "react";
// IMPORT NEXTJS
import Head from "next/head";
import Image from "next/image";

// COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// CONTENTFUL

const contenful = require("contentful");
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
    fallback: true,
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
      postImage: item.fields.postImage,
      title: item.fields.title,
      author: item.fields.author.fields.displayName,
      slug: item.fields.slug,
      postDate: item.fields.postDate,
      postContent: item.fields.postContent,
    };
  });

  if (!formattedPosts.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { post: formattedPosts[0] },
    revalidate: 10,
  };
};

const Post = ({ post }) => {
  if (!post) return <div>Loading...</div>;

  const options = {
    preserveWhitespace: true,
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="text-3xl text-blue-500 font-bold my-5">{children}</h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="text-base">{children}</p>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="list-decimal">{children}</ol>;
      },
      // [BLOCKS.LIST_ITEM]: (node, children) => {
      //   return <li>{children}</li>;
      // },
    },
  };

  console.log(post.postContent);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Built with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main>
        <Container>
          <article className="bg-white shadow-sm rounded-lg p-6">
            <div>
              <div>
                {post.postImage.fields.file.url && (
                  <Image
                    src={`https:${post.postImage.fields.file.url}`}
                    height={post.postImage.fields.file.details.image.height}
                    width={post.postImage.fields.file.details.image.width}
                  />
                )}
                <h1 className="text-5xl text-blue-500 font-bold my-5">
                  {post.title}
                </h1>
              </div>
              <div>{documentToReactComponents(post.postContent, options)}</div>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Post;
