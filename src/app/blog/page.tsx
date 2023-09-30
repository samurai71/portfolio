/* eslint-disable react/jsx-key */
// src/app/blogs/page.tsx

import { fetchPosts } from "../../lib/devto/fetch";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <section className="container mx-auto px-2">
      <h1 className="uppercase tracking-widest">Blog</h1>
      <p>The following posts are from my Dev.to blog.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        ))}
      </div>
    </section>
  );
}
