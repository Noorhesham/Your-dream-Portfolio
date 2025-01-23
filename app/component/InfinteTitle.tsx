"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { TypographyP } from "./Typography";

const InfinteTitle = ({ text, className }: { text: string; className?: string }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".title", { opacity: 0.5 }, { opacity: 1, repeat: -1, yoyo: true });
    });
    return () => ctx.revert();
  }, []);
  return <TypographyP className={`title text-black dark:text-main2 ${className || ""}`}>{text}</TypographyP>;
};

export default InfinteTitle;
