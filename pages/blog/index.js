import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";


// IMPORT HOOKS
import { useContentful } from "../../hooks/useContentful";

export async function getStaticProps(context) {

  const [ getEntryById ] = useContentful()

  const entries =  await getEntryById('post');

  const posts = entries.items.map((item) => {
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
      posts
    }
  }
}

const blog = ({ posts }) => {
  // console.log(JSON.stringify(entries.items[0].fields, null, 2))

  

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
          {posts.map((post) => {
            return (
              <div key={post.slug}>
                <h1>{post.title}</h1>
                <h2>{post.author}</h2>
                <p>{post.postContent.substring(0, 250) + '...'}</p>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default blog;
