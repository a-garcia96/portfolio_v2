import React from "react";
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {

  const posts = await client.getEntries({ content_type: 'post', order: "-sys.createdAt" })

  const formattedPosts = posts.items.map((item) => {
    return {
      profilePhoto: item.fields.profilePhoto.fields.file.url,
      title: item.fields.title,
      author: item.fields.author.fields.displayName,
      slug: item.fields.slug,
      postDate: item.fields.postDate,
      postContent: item.fields.postContent.content[0].content[0].value
    }
  })

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

  const post = await client.getEntries({ content_type: 'post', order: "-sys.createdAt", 'fields.slug[match]': slug })

  const formattedPosts = post.items.map((item) => {
    return {
      profilePhoto: item.fields.profilePhoto.fields.file.url,
      title: item.fields.title,
      author: item.fields.author.fields.displayName,
      slug: item.fields.slug,
      postDate: item.fields.postDate,
      postContent: item.fields.postContent.content[0].content[0].value
    }
  })

  return {
    props: { post: formattedPosts[0] },
  };
};

const Post = ({ post }) => {

  console.log(post)

  return (
    <main>
      <div className="container">
        <h1>{post.title}</h1>
        <h2>{post.author}</h2>
      </div>

    </main>
  );
};

export default Post;
