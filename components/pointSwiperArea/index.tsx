"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

interface PointSwiperAreaProps {
  children: React.ReactNode;
}

export const PointSwiperArea: React.FC<PointSwiperAreaProps> = ({
  children,
}) => {
  //   const [position, setPosition] = useState<PositionType>(undefined);
  const [visible, setVisible] = useState<boolean>(false);
  const [leftDistance, setLeftDistance] = useState<number>();
  const [topDistance, setTopDistance] = useState<number>();
  const pointSwiperAreaRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointSwiperAreaElement = pointSwiperAreaRef.current;
    let rafId: number | null = null;

    function pointAnimation(documentEvent: MouseEvent) {
      if (pointSwiperAreaElement) {
        const pointSwiperAreaRect =
          pointSwiperAreaElement.getBoundingClientRect();
        const left = documentEvent.clientX - pointSwiperAreaRect.left - 40;
        const top = documentEvent.clientY - pointSwiperAreaRect.top - 40;
        setLeftDistance(left);
        setTopDistance(top);
        if (
          documentEvent.clientY > pointSwiperAreaRect.top &&
          documentEvent.clientY < pointSwiperAreaRect.bottom
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
    const handleMouseMove = (event: MouseEvent) => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          pointAnimation(event);
          rafId = null;
        });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "fit-content",
        width: "fit-content",
        position: "relative",
      }}
    >
      <div
        id="point-swiper-area"
        ref={pointSwiperAreaRef}
        className={styles.wrapper}
        // style={{ cursor: visible ? "none" : "" }}
      >
        {children}
      </div>

      <div
        style={{
          transform: `translateX(${leftDistance}px) translateY(${topDistance}px) scale(${visible ? "1" : "0"})`,
        }}
        ref={mouseRef}
        className={styles.mouse}
      />
    </div>
  );
};
