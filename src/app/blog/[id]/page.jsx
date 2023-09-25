import React, { Suspense } from "react";
import Blog from "../page";
import "./post-detail.css";

async function getPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}

export default async function Post({ params }) {
  const post = await getPostById(params.id);

  return (
    <div className="post_detail">
      <section>
        <h1 className="post_detail-title">{post.title}</h1>
        <p className="post_detail-text">{post.body}</p>
      </section>
      <hr />
      <section>
        <h2>More posts</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Blog />
        </Suspense>
      </section>
    </div>
  );
}
