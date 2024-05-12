import React from "react";
import UnoptimizedImage from "@/components/unoptimizedImage";
import UserPic from "@/public/img/user.svg";
import styles from "./index.module.scss";
import { JetBrainsMono } from "@/styles/fonts";

const UserOptions = () => {
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

export default UserOptions;
