import React from "react";
import { getAllPosts } from "@/lib/blog";
import styles from "./page.module.scss";
import { UnoptimizedImage } from "@/components";
import { Badge } from "@/components/badge";
import { ArrowRight } from "lucide-react";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <div className={styles["blogs-wrapper"]}>
        <div className={styles["blogs-list"]}>
          {posts.map((item, index) => {
            return (
              <div key={index} className={styles["blog-item"]}>
                <UnoptimizedImage
                  src={item.heroImage}
                  alt="blogs-hero-image"
                  width={500}
                  height={300}
                  className={styles["hero-image"]}
                ></UnoptimizedImage>
                <div className={styles["blog-span-area"]}>
                  <h1>{item.title}</h1>
                  <h2>发布日期: {item.date}</h2>
                  <h3>{item.author}</h3>
                  <h6 className={styles.desc}>{item.description}</h6>
                  <Badge style={{ marginTop: "1rem" }}>{item.category}</Badge>
                  <div className={styles.link}>
                    <span>
                      点击了解更多
                      <ArrowRight className={styles.svg} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["blogs-desc-wrapper"]}>
          <div className={styles["blogs-desc-content"]}>click</div>
        </div>
      </div>
    </>
  );
}
