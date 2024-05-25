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
  params: {
    category: string;
    slug: string;
  };
};

export default async function Content({ params }: Params) {
  const posts = await getAllPostSlugs();
  const slug = `${params.category}/${params.slug}.${posts.extMap.get(`${params.category}/${params.slug}`)}`;
  const post = await getPostBySlug(slug);

  return (
    <>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </>
  );
}
