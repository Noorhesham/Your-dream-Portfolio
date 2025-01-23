"use client";
import Image from "next/image";
import React, { useState } from "react";

const MediaItem = ({ videoSrc, placeholderSrc }: { videoSrc: string; placeholderSrc: string }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    console.log('played')
    setIsVideoLoaded(true);
  };

  return (
    <>
      {!isVideoLoaded && <Image fill src={placeholderSrc} alt="Placeholder" className=" object-cover" />}
      <video
        src={videoSrc}
        onCanPlay={handleVideoLoad}
        autoPlay
        loop
        muted
        className=" w-full h-full  object-cover inset-0 absolute"
      />
    </>
  );
};

export default MediaItem;
