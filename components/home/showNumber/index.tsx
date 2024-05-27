import React from "react";
import styles from "./index.module.scss";
import { NotoSansSCBold } from "@/styles/fonts";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface ShowNumberProps extends LngProps {}

export const ShowNumber: React.FC<ShowNumberProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "showNumber");

  const data = [
    {
      title: t("year"),
      desc: t("yearContent"),
    },
    {
      title: t("program"),
      desc: t("programContent"),
    },
    {
      title: t("award"),
      desc: t("awardContent"),
    },
    {
      title: t("people"),
      desc: t("peopleContent"),
    },
    {
      title: t("area"),
      desc: t("areaContent"),
    },
    {
      title: t("graduate"),
      desc: t("graduateContent"),
    },
  ];

  return (
    <div className={styles["show-number-wrapper"]}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles["number-container"]}>
        {data.map((item, index: number) => {
          return (
            <div className={styles["number-item"]} key={index}>
              <h1 className={NotoSansSCBold.className}>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
