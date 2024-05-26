"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules";

import { CarouselCard } from "./carouselCard";
import pic1 from "@/public/img/second1.jpg";
import pic2 from "@/public/img/second2.jpg";
import pic3 from "@/public/img/second3.jpg";
import pic4 from "@/public/img/second4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";
import { NotoSansSC } from "@/styles/fonts";

export const SwiperArea = () => {
  return (
    <div
      className={`${NotoSansSC.className} ${styles["swiper-area-container"]}`}
    >
      <div className={styles["swiper-area-wrapper"]}>
        <div className={styles["card-container"]}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            className={styles.swiper}
          >
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title="始于志同,行于道合"
                desc="在科协，因为共同的兴趣、爱好、追求而结识，志趣相投方愿结伴而行。来这里，开启想象中的大学生活。"
                backgroundImg={pic1}
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title="文韬武略,样样在行"
                desc="在科协，“技术”作为引子，管理类创新类部门…在科协这棵繁茂大树下，无论你志在何方，总有伸展方向。"
                backgroundImg={pic2}
                svgRightPosition="-16%"
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title="去繁化简,归于本质"
                desc="三十余年一如既往，科协人守护着这块净士的纯粹性。去除繁杂的琐事，还原社团属性，不忘初心，归于本质。"
                backgroundImg={pic3}
                svgRightPosition="-6%"
                svgBottomPosition="-18%"
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title="文韬武略,样样在行"
                desc="在科协，“技术”作为引子，管理类创新类部门…在科协这棵繁茂大树下，无论你志在何方，总有伸展方向。"
                backgroundImg={pic4}
                svgRightPosition="-6%"
              ></CarouselCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
