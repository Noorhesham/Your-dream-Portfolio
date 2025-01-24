import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { TypographyH1, TypographyH2, TypographyP } from "./Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero2 = ({
  img,
  text,
  height,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  mediaPosition,
}: {
  img: string;
  text: string;
  height: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  mediaPosition?: string;
}) => {
  return (
    <MaxWidthWrapper
      id="#"
      className={` relative w-full h-full flex flex-col md:flex-row ${
        mediaPosition === "left" ? "md:flex-row-reverse" : ""
      } flex  items-center  w-full gap-3  h-screen relative`}
    >
      <div className={`${height} rounded-2xl overflow-hidden relative h-full w-full`}>
        <Image src={img} alt="" fill className=" object-cover" />
      </div>
      <div className=" flex flex-col max-w-lg gap-4">
        <TypographyH1 className="  lg:text-7xl text-5xl">{title}</TypographyH1>
        <TypographyP>{subtitle}</TypographyP>
        <Button onClick={onButtonClick} className=" w-fit rounded-full" size={"lg"}>
          <Link href={`#contact`}>{buttonText}</Link>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero2;
