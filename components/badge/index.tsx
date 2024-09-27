import React from "react";
import styles from "./index.module.scss";

interface BadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Badge: React.FC<BadgeProps> = ({ ...rest }) => {
  return <div {...rest} className={styles.badge}></div>;
};
