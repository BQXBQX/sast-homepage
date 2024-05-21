"use client";
import React, { ReactNode } from "react";

// import { motion } from "framer-motion";

import styles from "./index.module.scss";

interface CardProps {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ ...rest }) => {
  return <div {...rest} className={`${styles.button} ${rest.className}`} />;
};
