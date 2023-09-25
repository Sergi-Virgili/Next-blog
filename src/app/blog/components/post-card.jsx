import React from "react";
import "./post-card.css";
import Link from "next/link";

export function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="post_card">
        <h2 className="post_card-title">{post.title}</h2>
        <p className="post_card-body">{post.body}</p>
      </article>
    </Link>
  );
}
