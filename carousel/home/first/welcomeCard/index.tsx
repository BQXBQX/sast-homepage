import React from "react";

import { Button } from "@/components";
import { JetBrainsMono, NotoSansSC, NotoSansSCBold } from "@/styles/fonts";

import styles from "./index.module.scss";

export const WelcomeCard = () => {
  return (
    <div className={styles["card-container"]}>
      <h1 className={`${styles.title} ${JetBrainsMono.className}`}>
        Igniting the thought.
      </h1>
      <h2 className={`${NotoSansSC.className} ${styles.desc}`}>
        SAST 全新官网上线
      </h2>
      <Button className={`${styles.button} ${NotoSansSCBold.className}`}>
        有什么新鲜功能 ￫
      </Button>
    </div>
  );
};
