import React from "react";
import styles from "./index.module.scss";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n";

interface IntroductionProps extends LngProps {}

export const Introduction: React.FC<IntroductionProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "introduction");
  return (
    <div className={styles["introduction-wrapper"]}>
      <h2 className={styles["left-span"]}>{t("title")}</h2>
      <div className={styles.right}>
        <h1>{t("desc")}</h1>
        <p>{t("content")}</p>
      </div>
    </div>
  );
};
