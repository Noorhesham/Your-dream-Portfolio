"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { TypographyP } from "./Typography";

const InfinteTitle = ({
  text,
  className,
  cancelAnimation = false,
}: {
  text: string;
  className?: string;
  cancelAnimation?: boolean;
}) => {
  const ref = React.useRef(null);
  useEffect(() => {
    if (cancelAnimation) return;
    const ctx = gsap.context(() => {
      if (!cancelAnimation)
        gsap.fromTo(ref.current?.querySelector(".title"), { opacity: 0.5 }, { opacity: 1, repeat: -1, yoyo: true });
    });
    return () => ctx.revert();
  }, [cancelAnimation]);
  return (
    <div ref={ref}>
      <TypographyP className={`title text-black dark:text-main2 ${className || ""}`}>{text}</TypographyP>
    </div>
  );
};

export default InfinteTitle;
