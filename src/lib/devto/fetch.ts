// src/lib/devto/fetch.ts

import { notFound } from "next/navigation";
import { Post, PostDetails } from "./types";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`https://dev.to/api/articles?username=samurai71`, {
    next: { revalidate: 3 * 60 * 60 },
  });

  if (!res.ok) notFound();
  return res.json();
}

export async function fetchPost(slug: string): Promise<PostDetails> {
  const res = await fetch(`https://dev.to/api/articles/samurai71/${slug}`, {
    next: { revalidate: 3 * 60 * 60 },
  });

  if (!res.ok) notFound();
  return res.json();
}
