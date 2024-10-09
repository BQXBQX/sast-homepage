import React from "react";
import {
  Carousel,
  HeroImage,
  Introduction,
  Diverse,
  // Projects,
  ShowNumber,
  Welcome,
} from "@/components";
import { LngProps } from "@/types/lng";

interface ContentProps extends LngProps {}

export default function Content({ lng }: ContentProps) {
  return (
    <>
      <Welcome lng={lng} />
      <HeroImage />
      <Introduction lng={lng} />
      <ShowNumber lng={lng} />
      <Carousel lng={lng} />
      <Diverse lng={lng}></Diverse>
    </>
  );
}
