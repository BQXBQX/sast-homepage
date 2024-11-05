import React from "react";

import { Button } from "@/components/button";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import BulbPic from "@/public/img/bulb.png";

import styles from "./index.module.scss";
import { useTranslation } from "@/lib/i18n/server";
import { LngProps } from "@/types/lng";
import { ArrowRight, MousePointerClick } from "lucide-react";

interface WelcomeProps extends LngProps {}

export const Welcome: React.FC<WelcomeProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "welcome");

  return (
    <div className={styles["welcome-container"]}>
      <div className={styles["welcome-wrapper"]}>
        <div className={styles["span-wrapper"]}>
          <div className={`${styles.title}`}>
            <div>{t("title")} </div>
            <div className={styles["look"]}>
              {t("look")}
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#dedede",
                  height: "1rem",
                  width: "1rem",
                  left: "-0.5rem",
                  top: "-0.5rem",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#dedede",
                  height: "1rem",
                  width: "1rem",
                  right: "-0.5rem",
                  top: "-0.5rem",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#dedede",
                  height: "1rem",
                  width: "1rem",
                  left: "-0.5rem",
                  bottom: "-0.5rem",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#dedede",
                  height: "1rem",
                  width: "1rem",
                  right: "-0.5rem",
                  bottom: "-0.5rem",
                  borderRadius: "50%",
                }}
              />

              <MousePointerClick
                style={{
                  position: "absolute",
                  bottom: "-1.6rem",
                  zIndex: "100",
                  right: "2rem",
                  height: "3rem",
                  width: "3rem",
                }}
              />
            </div>
          </div>
          <h2 className={`${styles.desc}`}>Igniting the thought.</h2>
          <div style={{ boxSizing: "border-box" }}>
            <Button className={styles.button}>
              <span>{t("button")}</span>
              <ArrowRight className={styles.svg} />
            </Button>
          </div>
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
    </div>
  );
};
