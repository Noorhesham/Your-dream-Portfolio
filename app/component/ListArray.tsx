"use client";
import React, { useEffect } from "react";
import { TypographyH3, TypographyList } from "./Typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ListArray = ({ items, heading }: { items: any; heading?: string }) => {
  const containerRef = React.useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(containerRef.current.querySelectorAll("li"));
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: gsap
          .timeline()
          .to(containerRef.current.querySelector("h3"), { y: 0, opacity: 1, duration: 0.3 })
          .from(items, { y: 100, opacity: 0, stagger: { amount: 0.5 }, ease: "power2.inOut" }),
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef}>
      <TypographyH3 className="font-bold opacity-0 translate-y-4 text-main mb-2">{heading}</TypographyH3>
      <TypographyList>
        {items.map((item: any, index: number) => (
          <li className=" list-item hover:text-opacity-70 opacity-100 duration-150" key={index}>
            {item}
          </li>
        ))}
      </TypographyList>
    </div>
  );
};

export default ListArray;
