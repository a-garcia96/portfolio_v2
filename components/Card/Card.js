import React from "react";

const Card = ({ post }) => {
  return (
    <article className="card">
      <div>
        <div className="avatar">
          <img
            className="avatar__image"
            src={post.profilePhoto}
            alt="Photo of the author"
          />
        </div>
        <p className="card__post-date">{post.postDate}</p>
      </div>
      <div>
        <h2 className="card__title">{post.title}</h2>
        <h3 className="card__author">{post.author}</h3>
        <p className="card__post-preview">
          {post.postContent.substring(0, 250)}
        </p>
      </div>
    </article>
  );
};

export default Card;
