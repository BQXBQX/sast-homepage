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
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]} `}
        // onMouseEnter={() => openSheet()}
        href="https://njupt-sast.feishu.cn/wiki/TbcJwtET4iCBweks34ycGSyonze?from=tab_home&view=vewX5jpH4H#share-GAWxdmnBboAG71xSe29cSd5cnYb"
        target="_blank" rel="noopener noreferrer"
        >
        {t("departmentIntroduction")}
      </Link>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        // onMouseEnter={otherLinkHoverHandle}
        href={`/${params.lng}/blog`}
      >
        {t("eventBlog")}
      </Link>
      <Link
        className={`${NotoSansSC.className} ${styles["header-link-item"]}`}
        // onMouseEnter={otherLinkHoverHandle}
        href="https://njupt-sast.feishu.cn/wiki/TbcJwtET4iCBweks34ycGSyonze?from=tab_home&view=vewX5jpH4H#share-GAWxdmnBboAG71xSe29cSd5cnYb"
        target="_blank" rel="noopener noreferrer"
      >
        {t("joinUs")}
      </Link>
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
