import React from "react";

import UserPic from "@/public/img/user.svg";
import { JetBrainsMono } from "@/styles/fonts";

import { UnoptimizedImage } from "../../unoptimizedImage";
import styles from "./index.module.scss";

export const UserOptions = () => {
  return (
    <div className={styles["user-options-wrapper"]}>
      <div
        className={`${styles["user-svg-wrapper"]} ${JetBrainsMono.className}`}
      >
        <UnoptimizedImage src={UserPic} alt="user" className={styles.img} />
      </div>
    </div>
  );
};
