"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PointSwiperAreaProps {
  children: React.ReactNode;
  onRightClick?: () => void;
  onLeftClick?: () => void;
}

type PositionType = "left" | "right";

export const PointSwiperArea: React.FC<PointSwiperAreaProps> = ({
  children,
  onLeftClick,
  onRightClick,
}) => {
  const [position, setPosition] = useState<PositionType | undefined>(undefined);
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
        const left = documentEvent.clientX - pointSwiperAreaRect.left - 60;
        const top = documentEvent.clientY - pointSwiperAreaRect.top - 60;
        setLeftDistance(left);
        setTopDistance(top);

        if (documentEvent.clientX < window.innerWidth / 2) {
          setPosition("left");
        } else {
          setPosition("right");
        }

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

    const handleMouseMove = (
      id: number | null,
      event: MouseEvent,
      // eslint-disable-next-line no-unused-vars
      animationFunction: (event: MouseEvent) => void,
    ) => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          animationFunction(event);
          rafId = null;
        });
      }
    };
    document.addEventListener("mousemove", (event: MouseEvent) =>
      handleMouseMove(rafId, event, pointAnimation),
    );

    return () => {
      document?.removeEventListener("mousemove", (event: MouseEvent) =>
        handleMouseMove(rafId, event, pointAnimation),
      );
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleSwiper = useCallback(() => {
    if (onLeftClick && onRightClick)
      position === "left" ? onLeftClick() : onRightClick();
  }, [onLeftClick, onRightClick, position]);

  return (
    <div
      style={{
        height: "fit-content",
        position: "relative",
      }}
    >
      <div
        id="point-swiper-area"
        ref={pointSwiperAreaRef}
        className={styles.wrapper}
        onClick={handleSwiper}
      >
        {children}
      </div>
      <div
        style={{
          transform: `translateX(${leftDistance}px) translateY(${topDistance}px) scale(${visible ? "1" : "0"})`,
        }}
        ref={mouseRef}
        className={styles.mouse}
      >
        {position === "left" ? (
          <ArrowLeft className={styles.svg} />
        ) : (
          <ArrowRight className={styles.svg} />
        )}
      </div>
    </div>
  );
};
