"use client";

import React from "react";

import { NotoSansSC } from "@/styles/fonts";

import styles from "./index.module.scss";

interface HeaderLinkProps {
  openSheet: () => void;
  closeSheet: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  openSheet,
  closeSheet,
}) => {
  const otherLinkHoverHandle = () => {
    closeSheet();
  };
  return (
    <div className={styles["header-link-wrapper"]}>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
      >
        主页
      </span>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]} `}
        onMouseEnter={() => openSheet()}
      >
        部门介绍
      </span>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
      >
        活动简介
      </span>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
      >
        加入我们
      </span>
    </div>
  );
};
