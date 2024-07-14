"use client";

import React from "react";

import Link from "next/link";

import { NotoSansSC } from "@/styles/fonts";

import styles from "./index.module.scss";
import { useParams } from "next/navigation";

interface HeaderLinkProps {
  openSheet: () => void;
  closeSheet: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  openSheet,
  closeSheet,
}) => {
  const params = useParams();
  const otherLinkHoverHandle = () => {
    closeSheet();
  };

  return (
    <div className={styles["header-link-wrapper"]}>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}`}
      >
        主页
      </Link>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]} `}
        onMouseEnter={() => openSheet()}
      >
        部门介绍
      </span>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}/blog`}
      >
        活动博客
      </Link>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
      >
        加入我们
      </span>
    </div>
  );
};
