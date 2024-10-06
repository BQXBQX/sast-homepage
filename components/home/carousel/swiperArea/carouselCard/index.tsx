"use client";
import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import { StaticImageData } from "next/image";
import { NotoSansSCBold } from "@/styles/fonts";

interface CarouselCardProps {
  title: string | ReactNode;
  desc: string;
  backgroundImg?: StaticImageData;
  color?: string;
  svg?: StaticImageData;
  svgBottomPosition?: string;
  svgRightPosition?: string;
}
export const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  desc,
  backgroundImg,
  color = "white",
  svg,
  svgBottomPosition,
  svgRightPosition,
}) => {
  return (
    <div className={`${styles["card-container"]} `}>
      {backgroundImg && (
        <UnoptimizedImage
          src={backgroundImg ?? ""}
          alt="card-img"
          className={styles["background-img"]}
        ></UnoptimizedImage>
      )}
      {svg && (
        <UnoptimizedImage
          src={svg}
          alt="footprint"
          className={styles.svg}
          style={{ bottom: svgBottomPosition, right: svgRightPosition }}
        ></UnoptimizedImage>
      )}
      <p className={styles.desc} style={{ color: color }}>
        <h1
          className={`${NotoSansSCBold.className} ${styles.title}`}
          style={{ color: color }}
        >
          {title}
        </h1>
        {desc}
      </p>
    </div>
  );
};
