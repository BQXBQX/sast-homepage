import React from "react";

import { Button } from "@/components/button";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import BulbPic from "@/public/img/bulb.png";

import styles from "./index.module.scss";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/types/lng";

interface WelcomeProps extends LngProps {}

export const Welcome: React.FC<WelcomeProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "welcome");

  return (
    <div className={styles["welcome-wrapper"]}>
      <div className={styles["span-wrapper"]}>
        <h1 className={`${styles.title}`}> {t("title")}</h1>
        <h2 className={`${styles.desc}`}>Igniting the thought.</h2>
        <Button className={styles.button}>{t("button")}</Button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles["img-wrapper"]}>
        <UnoptimizedImage
          src={BulbPic}
          alt="bulb"
          style={{ width: "40%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
