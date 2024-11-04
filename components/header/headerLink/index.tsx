"use client";

import React from "react";

import Link from "next/link";

import { NotoSansSC } from "@/styles/fonts";

import styles from "./index.module.scss";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n/client";

interface HeaderLinkProps {
  openSheet: () => void;
  closeSheet: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  // eslint-disable-next-line no-unused-vars
  openSheet,
  // eslint-disable-next-line no-unused-vars
  closeSheet,
}) => {
  const params = useParams();
  // const otherLinkHoverHandle = () => {
  //   closeSheet();
  // };

  const { t } = useTranslation(params.lng as unknown as string, "header");

  return (
    <div className={styles["header-link-wrapper"]}>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        // onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}`}
      >
        {t("home")}
      </Link>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]} `}
        // onMouseEnter={() => openSheet()}
      >
        {t("departmentIntroduction")}
      </span>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        // onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}/blog`}
      >
        {t("eventBlog")}
      </Link>
      <span
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        // onMouseEnter={otherLinkHoverHandle}
      >
        {t("joinUs")}
      </span>
      {/* <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}/project`}
      >
        {t("project")}
      </Link> */}
    </div>
  );
};
