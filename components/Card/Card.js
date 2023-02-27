import React from "react";

import Link from "next/Link";

const Card = ({ post }) => {
  return (
    <article className="card">
      <div className="card__avatar">
        <img
          className="card__avatar-image"
          src={post.profilePhoto}
          alt="Photo of the author"
        />
        <span><h3 className="card__author">{post.author}</h3></span>
      </div>
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
