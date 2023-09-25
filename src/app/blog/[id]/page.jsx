import React from "react";

async function getPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}

export default async function Post({ params }) {
  const post = await getPostById(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
