import React from "react";
import styles from "./index.module.scss";
import { JetBrainsMono, NotoSansSCBold } from "@/styles/fonts";
import { Button } from "@/components";
export const WhoWeAreCard = () => {
  return (
    <div className={styles["card-container"]}>
      <h1 className={`${JetBrainsMono.className} ${styles.title}`}>
        Who we are?
      </h1>
      <h1 className={`${NotoSansSCBold.className} ${styles.desc}`}>我们是谁</h1>
      <Button className={`${NotoSansSCBold.className} ${styles.button}`}>
        点击了解更多 ￫
      </Button>
    </div>
  );
};
