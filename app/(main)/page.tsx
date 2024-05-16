import React from "react";
import styles from "./page.module.scss";
import { JetBrainsMono, NotoSansSC } from "@/styles/fonts";
import UnoptimizedImage from "@/components/unoptimizedImage";
import BulbPic from "@/public/img/bulb.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <div className={styles["cover-content"]}>
          <div className={styles["bg-yellow"]} />
          <div className={styles["cover-text-area"]}>
            <h1 className={`${styles.title} ${JetBrainsMono.className}`}>
              Igniting the thought.
            </h1>
            <h2 className={`${NotoSansSC.className} ${styles.desc}`}>
              SAST 全新官网上线
            </h2>
          </div>
          <UnoptimizedImage
            src={BulbPic}
            alt="cover"
            width={250}
            className={styles["cover-picture"]}
          />
        </div>
      </div>
    </main>
  );
}
