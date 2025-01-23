import Image from "next/image";
import React from "react";

const Tech = ({ list }: { list: any }) => {
  return (
    <div className=" flex items-center ">
      {list.map((icon: any, i: number) => (
        <div
          style={{ transform: `translateX(-${5 * i * 2}px)` }}
          className="techstack border rounded-full bg-black relative lg:w-10 lg:h-10 w-8 h-8  flex justify-center items-center border-white/[0.2]"
          key={icon}
        >
          <Image fill src={icon} alt={icon} className=" object-cover p-2" />
        </div>
      ))}
      
    </div>
  );
};

export default Tech;
