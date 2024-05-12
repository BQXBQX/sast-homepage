import React from "react";
import Image from "next/image";
import { ImageProps } from "next/image";

const UnoptimizedImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} alt={props.alt} unoptimized></Image>;
};

export default UnoptimizedImage;
