import React from "react";
import styles from "./index.module.scss";
import { JetBrainsMono, NotoSansSCBold } from "@/styles/fonts";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface ShowNumberProps extends LngProps {}

export const ShowNumber: React.FC<ShowNumberProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "showNumber");

  const data = [
    {
      title: t("year"),
      desc: t("yearContent"),
      unit: t("yearUnit"),
    },
    {
      title: t("program"),
      desc: t("programContent"),
      unit: t("programUnit"),
    },
    {
      title: t("award"),
      desc: t("awardContent"),
      unit: t("awardUnit"),
    },
    {
      title: t("people"),
      desc: t("peopleContent"),
      unit: t("peopleUnit"),
    },
    {
      title: t("area"),
      desc: t("areaContent"),
      unit: t("areaUnit"),
    },
    {
      title: t("graduate"),
      desc: t("graduateContent"),
      unit: t("graduateUnit"),
    },
  ];

  return (
    <div style={{ width: "100%", height: "fit-content" }}>
      <div className={styles["up-space"]}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
          }}
        ></div>
      </div>
      <div className={styles["show-number-container"]}>
        <div className={styles["show-number-wrapper"]}>
          <span
            className={`${JetBrainsMono.className} ${styles["index-number"]}`}
          >
            02
          </span>
          <h1 className={styles.title}>{t("title")}</h1>
          <div className={styles["number-container"]}>
            {data.map((item, index: number) => {
              return (
                <div className={styles["number-item"]} key={index}>
                  <h1 className={NotoSansSCBold.className}>
                    {item.title}

                    <span style={{ fontSize: "3rem" }}>{item.unit}</span>
                  </h1>
                  <h1
                    className={`${NotoSansSCBold.className} ${styles.reference}`}
                  >
                    &quot;
                  </h1>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
