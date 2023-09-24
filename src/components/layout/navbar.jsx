import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <section>Logo</section>
      <Link href="#">Home</Link>
      <Link href="#">Blog</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </nav>
  );
}
