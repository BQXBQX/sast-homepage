import React from "react";
import styles from "./index.module.scss";
import { NotoSansSCBold, sacramento } from "@/styles/fonts";
import { Button } from "@/components/button";

export const StoryBegin = () => {
  return (
    <div className={styles["story-begin-wrapper"]}>
      <h2 className={NotoSansSCBold.className}>是时候在科协书写你的故事了</h2>
      <div>
        <span className={sacramento.className} style={{ fontSize: "32px" }}>
          Saster Igniting the thought.
        </span>
        <Button className={styles.button}>加入我们 ￫</Button>
      </div>
    </div>
  );
};
