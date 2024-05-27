import React from "react";
import styles from "./index.module.scss";
import EngineeringSvg from "@/public/img/Engineering.svg";
import WorldSvg from "@/public/img/world.svg";
import SmallBulbSvg from "@/public/img/smallBulb.svg";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import { NotoSansSCBold, sacramento } from "@/styles/fonts";
import { Button } from "@/components/button";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface JoinUsProps extends LngProps {}

export const JoinUs: React.FC<JoinUsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "joinUs");
  const data = [
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={EngineeringSvg}
          alt="engineering"
        />
      ),
      title: t("title-1"),
      desc: t("content-1"),
      link: t("button-1"),
    },
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={WorldSvg}
          alt="engineering"
        />
      ),
      title: t("title-2"),
      desc: t("content-2"),
      link: t("button-2"),
    },
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={SmallBulbSvg}
          alt="engineering"
        />
      ),
      title: t("title-3"),
      desc: t("content-3"),
      link: t("button-3"),
    },
  ];

  return (
    <div className={styles["join-us-wrapper"]}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                {item.svg}
                <h2 className={NotoSansSCBold.className}>{item.title}</h2>
                <p className={styles.desc}>{item.desc}</p>
                <p className={styles.link}>{item.link}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <h2 className={NotoSansSCBold.className}>{t("calling")}</h2>
          <div style={{ padding: "3rem" }}>
            <span className={sacramento.className} style={{ fontSize: "2rem" }}>
              Saster Igniting the thought.
            </span>
            <Button className={styles.button}>{t("title")} ￫</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
