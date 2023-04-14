import React from "react";

import Link from "next/link";

const Card = ({ post }) => {
  return (
    <article className="card">
      <h2 className="card__title">{post.title}</h2>
      <p className="card__post-date">{post.postDate}</p>
      <div className="card__details">
        <p className="card__post-preview">
          {post.postContent.substring(0, 100) + "..."}
        </p>
        <Link className="card__link" href={`/blog/${post.slug}`}>
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
};

export default Card;
