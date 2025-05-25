
import React from 'react';
import { useParams } from 'react-router-dom';

function Task3({ posts }) {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Task3;
