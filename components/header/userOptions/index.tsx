import React from "react";

import UserPic from "@/public/img/user.svg";
import { JetBrainsMono } from "@/styles/fonts";

import { UnoptimizedImage } from "../../unoptimizedImage";
import styles from "./index.module.scss";

export const UserOptions = () => {
  return (
    <div className={styles["user-options-wrapper"]}>
      {/* <span>Login with SAST Link</span> */}
      <div
        className={`${styles["user-svg-wrapper"]} ${JetBrainsMono.className}`}
      >
        <UnoptimizedImage src={UserPic} alt="user" width={20} />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
