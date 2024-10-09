import React from "react";
import styles from "./index.module.scss";
import { SwiperArea } from "./swiperArea";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";
import { JetBrainsMono } from "@/styles/fonts";

interface CarouselProps extends LngProps {}
export const Carousel: React.FC<CarouselProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "carousel");
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "8rem",
          padding: "0 12rem",
          borderTop: "var(--divider-weight) solid var(--divider-color)",
          borderBottom: "var(--divider-weight) solid var(--divider-color)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
          }}
        ></div>
      </div>
      {/* <div> */}
      <div className={styles["carousel-wrapper"]}>
        <div
          style={{
            paddingTop: " 6rem",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            // overflow: "hidden",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              height: "3rem",
              width: "3rem",
              fontSize: "2rem",
              transform: "translate(-100%, 0)",
              border: "var(--divider-weight) solid var(--divider-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "9999",
            }}
            className={JetBrainsMono.className}
          >
            03
          </span>
          <h1 className={styles.title}>{t("title")}</h1>
        </div>
      </div>
      <div
        style={{
          width: "calc(100% - 24rem)",
          overflow: "hidden",
          borderTop: "var(--divider-weight) solid var(--divider-color)",
          boxSizing: "border-box",
        }}
      >
        <SwiperArea lng={lng}></SwiperArea>
      </div>
    </>
  );
};
