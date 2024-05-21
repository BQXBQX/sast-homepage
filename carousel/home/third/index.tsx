"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/components";
import pic1 from "@/public/img/third1.jpg";
import pic2 from "@/public/img/third2.jpg";
import pic3 from "@/public/img/third3.jpg";
import pic4 from "@/public/img/third4.jpg";
import pic5 from "@/public/img/third5.jpg";
import pic6 from "@/public/img/third6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";
import { JetBrainsMono, NotoSansSC } from "@/styles/fonts";

export const Third = () => {
  return (
    <div
      className={`${JetBrainsMono.className} ${NotoSansSC.className}  ${styles["second-container"]}`}
    >
      <div className={styles["second-wrapper"]}>
        <h2>数说科协:</h2>
        <div className={styles["card-container"]}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={12}
            pagination={{
              clickable: true,
            }}
            className={styles.swiper}
          >
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    31<span style={{ fontSize: "18px" }}>年</span>
                  </span>
                }
                desc="南邮校科协创办至今已经走过31个年头，2023年是第32届。"
                backgroundImg={pic1}
              ></Card>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    362<span style={{ fontSize: "18px" }}>㎡</span>
                  </span>
                }
                desc="校科协在大学生活动中心拥有总计约362平方米的活动室空间。"
                backgroundImg={pic2}
              ></Card>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    40+<span style={{ fontSize: "18px" }}>项</span>
                  </span>
                }
                desc="第27届科技节举办47项科创此赛，覆盖理、工、经、管、文、教、艺等各专业。"
                backgroundImg={pic3}
              ></Card>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    200+<span style={{ fontSize: "18px" }}>项</span>
                  </span>
                }
                desc="校科协第32届中干及以上成员获得校级以上奖项290项。"
                backgroundImg={pic4}
              ></Card>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    100%
                  </span>
                }
                desc="2020届毕业生中，曾经校科协成员毕业明确去向比例达100%"
                backgroundImg={pic5}
              ></Card>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <Card
                title={
                  <span
                    className={JetBrainsMono.className}
                    style={{ fontSize: "26px" }}
                  >
                    550+<span style={{ fontSize: "18px" }}>人</span>
                  </span>
                }
                desc="第32届南邮校科协各部门总计559人。"
                backgroundImg={pic6}
              ></Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
