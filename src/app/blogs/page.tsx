// src/app/blogs/page.tsx

//import { fetchPosts } from "@/lib/devto/fetch";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

export default async function Page() {
  //const posts = await fetchPosts();

  return (
    <section className="container mx-auto px-2">
      <h2>Blogs</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        ))}
      </div> */}
    </section>
  );
}
