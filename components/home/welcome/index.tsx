import React from "react";

import { Button } from "@/components/button";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import BulbPic from "@/public/img/bulb.png";

import styles from "./index.module.scss";

export const Welcome = () => {
  return (
    <div className={styles["welcome-wrapper"]}>
      <div className={styles["span-wrapper"]}>
        <h1 className={styles.title}>SAST 官方 焕然一新</h1>
        <h2 className={styles.desc}>Igniting the thought.</h2>
        <Button className={styles.button}>点击了解更多 →</Button>
      </div>
      <div className={styles["img-wrapper"]}>
        <UnoptimizedImage src={BulbPic} alt="bulb" />
      </div>
    </div>
  );
};
