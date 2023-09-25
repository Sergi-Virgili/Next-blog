import React from "react";
import { PostCard } from "./components/post-card";
import { POST_API_BASE_URL } from "@/config/endpoints.vars";
import "./blog.css";

async function getPosts() {
  return fetch(`${POST_API_BASE_URL}/posts`)
    .then((response) => response.json())
    .then((json) => json);
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <section className="blog_post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </section>
    </>
  );
}
