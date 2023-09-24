import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <section>Logo</section>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
