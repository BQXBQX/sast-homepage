import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import React from "react";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();

  return posts.dirContent.map((item) => ({
    category: item.split("/")[0],
    slug: item.split("/")[1],
  }));
}

type Params = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function Content({ params }: Params) {
  const { category, slug: contentSlug } = await params;
  const posts = await getAllPostSlugs();
  const slug = `${category}/${contentSlug}.${posts.extMap.get(`${category}/${contentSlug}`)}`;
  const post = await getPostBySlug(slug);

  return (
    <>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  );
}
