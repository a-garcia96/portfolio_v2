import React, { useEffect } from "react";
import Link from "next/link";

// IMPORT COMPONENTS
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";

// CONTENTFUL CLIENT INIT
const contenful = require("contentful");
const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps(context) {
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

  return {
    props: {
      formattedPosts,
    },
    revalidate: 10,
  };
}

const Blog = ({ formattedPosts }) => {
  return (
    <>
      <Nav />
      <main>
        <section className="my-8">
          <Container>
            <div className="bg-white dark:bg-neutral-900 shadow-sm rounded-lg p-6">
              <h3 className="text-neutral-500 text-sm uppercase mb-2 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Blog
              </h3>
              <ul>
                {formattedPosts.map((post) => {
                  return (
                    <li className="portfolio__card" key={post.slug}>
                      <div className="my-5 border-b-2 border-b-gray-100 pb-7">
                        <div className="flex gap-5">
                          <div>
                            <Link passHref href={`/blog/${post.slug}`}>
                              <h4 className="font-bold text-2xl text-blue-500 hover:cursor-pointer w-fit hover:underline transition-all">
                                {post.title}
                              </h4>
                            </Link>
                            <p>
                              {post.postContent}{" "}
                              <Link passHref href={`/blog/${post.slug}`}>
                                <span className="font-bold hover:cursor-pointer hover:text-blue-500 transition-all">
                                  Read More &rarr;
                                </span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
