import Link from "next/link";
import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="main_container">
        <section className="logo">Logo</section>
        <section>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </section>
      </div>
    </nav>
  );
}
