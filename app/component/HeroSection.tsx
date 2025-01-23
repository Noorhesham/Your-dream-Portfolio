"use client";
import Image from "next/image";
import MediaItem from "./MediaItem";
import { TypographyH1, TypographyP } from "./Typography";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  mediaSrc?: string; // URL for the video or image
  mediaType?: "video" | "image"; // Specify media type
  mediaPosition?: "left" | "right"; // Position of the media
  className?: string; // Additional styles for customization
  videoFallbackSrc: string;
};

const HeroSection = ({
  title = "Default Title",
  subtitle = "Default subtitle text.",
  buttonText = "Click Me",
  onButtonClick = () => {},
  mediaSrc = "",
  mediaType = "image",
  mediaPosition = "right",
  className = "",
  videoFallbackSrc = "",
}: HeroSectionProps) => {
  return (
    <div
      className={`bg-black text-white min-h-screen lg:justify-start justify-center relative flex flex-col md:flex-row ${
        mediaPosition === "left" ? "md:flex-row-reverse" : ""
      } items-center  px-8 md:px-16 ${className}`}
    >

      {mediaType === "video" ? (
        <div className="  absolute inset-0 w-full h-full">
          <MediaItem videoSrc={`${mediaSrc}`} placeholderSrc={videoFallbackSrc} />
        </div>
      ) : (
        <div className="w-full relative md:w-1/2 h-screen flex justify-center items-center">
          <Image fill src={mediaSrc} alt="Hero Media" className="w-full h-full object-cover rounded-md" />{" "}
        </div>
      )}

      <MaxWidthWrapper className="w-full relative mt-auto mb-10 z-20  text-left">
        <div className=" flex flex-col max-w-lg gap-4">
          <TypographyH1 className="  lg:text-7xl text-5xl">{title}</TypographyH1>
          <TypographyP>{subtitle}</TypographyP>
          <Button onClick={onButtonClick} className=" w-fit rounded-full" size={"lg"}>
            <Link href={`#contact`}>{buttonText}</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
