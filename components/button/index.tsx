"use client";
import React, { ReactNode } from "react";

// import { motion } from "framer-motion";

import styles from "./index.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <button {...rest} className={`${styles.button} ${rest.className}`} />;
};
