import React, { useEffect } from "react";
const contenful = require("contentful");

// IMPORT COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

// CONTENTFUL CLIENT INIT
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps(context) {

  const posts = await client.getEntries({content_type: 'post' , order: "-sys.createdAt"})

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


  return {
    props: {
      formattedPosts
    },
    revalidate: 10
  }
}

const Blog = ({ formattedPosts }) => {

  return (
    <>
      <Nav />
      <header className="blog__header" style={{margin: "2em 0"}}>
        <div className="container">
          <h1 style={{textAlign: "center"}}>The Blog</h1>
          <p>Really, just my inner monologue...</p>
        </div>
      </header>
      <main>
        <div className="container blog__container">
          {formattedPosts.map((post) => {
            return (
              <Card key={post.slug} post={post} />
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
