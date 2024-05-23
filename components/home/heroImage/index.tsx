"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import WhoPic from "@/public/img/who.png";
import GroupPhotoPic from "@/public/img/groupPhoto.jpg";
import { UnoptimizedImage } from "@/components/unoptimizedImage";

import styles from "./index.module.scss";

export const HeroImage = () => {
  return (
    <div className={styles["hero-image-wrapper"]}>
      <Swiper
        className={styles["hero-image-swiper"]}
        centeredSlides={true}
        grabCursor={true}
      >
        <SwiperSlide className={styles["swiper-item"]}>
          <UnoptimizedImage
            src={GroupPhotoPic}
            alt="heroImage"
            className={styles.img}
          />
          <h2 className={styles.span}>Igniting the thought.</h2>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-item"]}>
          <UnoptimizedImage
            src={WhoPic}
            alt="heroImage"
            className={styles.img}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
