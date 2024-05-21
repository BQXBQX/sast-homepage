import React, { CSSProperties } from "react";
import styles from "./index.module.scss";

interface ColorBlockProps {
  color: string;
  height: number;
  width: number;
  className?: string;
  style?: CSSProperties;
}

export const ColorBlock: React.FC<ColorBlockProps> = ({
  height,
  width,
  color,
  className,
  style,
}) => {
  return (
    <div
      className={`${className} ${styles["color-block"]}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        background: ` radial-gradient(${color}, white 70%)`,
        ...style,
      }}
    />
  );
};
