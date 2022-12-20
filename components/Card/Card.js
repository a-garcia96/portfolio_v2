import React from "react";

import Link from "next/Link";

const Card = ({ post }) => {
  return (
    <article className="card">
      <p className="card__post-date">{post.postDate}</p>
      <h2 className="card__title">{post.title}</h2>
      <div className="card__avatar">
        <img
          className="card__avatar-image"
          src={post.profilePhoto}
          alt="Photo of the author"
        />
      </div>
      <h3 className="card__author">{post.author}</h3>
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
