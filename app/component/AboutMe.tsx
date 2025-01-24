import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import InfinteTitle from "./InfinteTitle";
import { TypographyH2, TypographyP } from "./Typography";
import Image from "next/image";
import GridContainer from "./GridContainer";
import { Button } from "@/components/ui/button";
import { EMAIL } from "../constants";

const AboutMe = ({
  img = "/channels4_profile (3).jpg",
  text,
  height = "h-96",name="Your Name"
}: {
  img?: string;
  text?: string;
  height?: string; name:string
}) => {
  return (
    <MaxWidthWrapper id="about" className=" relative">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className={`${height} rounded-2xl overflow-hidden relative w-full`}>
          <Image src={img} alt="" fill className=" object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <TypographyH2 className=" flex items-center gap-3 text-main">
            <InfinteTitle text="ABOUT" />
            ME
          </TypographyH2>
          <TypographyP>{text}</TypographyP>
          <Button className=" rounded-full w-fit">
            <a href={`mailto:${EMAIL}`}>Contact Me</a>
          </Button>
        </div>
      </div>
      <h4 className=" text-7xl  opacity-60 font-bold  lg:block hidden text-main2 absolute right-10 bottom-0">{name}</h4>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
