import React from "react";
import { useRouter } from "next/router";

import { useContentful } from "../../hooks/useContentful";

export const getStaticPaths = async () => {
  const [getEntryByContentType] = useContentful();

  const posts = await getEntryByContentType();

  const paths = await posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  // console.log(paths)

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const slug = params.slug;

  const [getPostBySlug] = useContentful();

  const post = await getPostBySlug(slug);

  return {
    props: { post },
  };
};

const Post = ({ post }) => {

  // console.log(post)

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
    </>
  );
};

export default Post;
