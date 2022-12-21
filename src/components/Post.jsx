import React from 'react';

const Post = ({ post }) => {
  return post.map(item => (
    <article className="post" key={item.id}>
      <h1>{item.title}</h1>
      <p className="post_date">{item.datetime}</p>
      <p className="post_body">
        {item.body.length <= 350 ? item.body : `${item.body.slice(0, 350)}...`}
      </p>
    </article>
  ));
};

export default Post;
