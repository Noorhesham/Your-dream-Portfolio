"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MaxWidthWrapper from "./MaxWidthWrapper";
import InfinteTitle from "./InfinteTitle";
import { useEffect, useState } from "react";
import { Project } from "../constants";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { TypographyH2 } from "./Typography";
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type SwiperType from "swiper";
import ProjectDescription from "./ProjectDescription";

export const Slider = ({
  title,
  types,
  height = "h-96",
  slidesPerView = 3,
  spaceBetween = 50,
  autoplay = 2000,
  loop = true,
}: {
  title: string;
  types: {
    category: string;
    items: Project[];
  }[];
  height?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: number;
  loop?: boolean;
}) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".appear", { opacity: 0 }, { opacity: 1, duration: 1 });
    });
    return () => ctx.revert();
  }, [currentTab]);
  return (
    <section id="projects">
      <MaxWidthWrapper>
        <div className=" flex flex-col gap-4">
          <InfinteTitle className=" text-4xl lg:text-6xl !text-main font-semibold " text={title} />{" "}
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex gap-4 items-center">
              {types.map((t, i) => (
                <div
                  onClick={() => {
                    setCurrentProject(0);
                    setCurrentTab(i);
                  }}
                  className={` ${
                    currentTab === i ? " text-black dark:text-white" : " text-gray-400 opacity-80"
                  } cursor-pointer hover:opacity-60 duration-200 py-2 px-4 text-xs rounded-full border border-gray-400`}
                  key={i}
                >
                  {t.category}
                </div>
              ))}
            </div>
            {!currentProject && (
              <div className="flex items-center gap-3">
                {" "}
                <Button onClick={() => swiper?.slidePrev()} variant={"outline"} className=" rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button onClick={() => swiper?.slideNext()} variant={"outline"} className=" rounded-full">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
        {currentProject ? (
          <ProjectDescription moveback={() => setCurrentProject(0)} project={types[currentTab].items[currentProject]} />
        ) : (
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: slidesPerView || 2 },
              1024: { slidesPerView: slidesPerView || 3 },
              1280: { slidesPerView: slidesPerView || 3.4 },
            }}
            autoplay={autoplay !== 0 ? { delay: autoplay } : false}
            loop={loop}
            spaceBetween={spaceBetween}
            className="appear mt-8"
            slidesPerView={slidesPerView}
          >
            {types[currentTab].items.map((item, i) => (
              <SwiperSlide onClick={() => setCurrentProject(i)} key={i}>
                <div className={` ${height || " h-96"}  w-full block  h-80 relative `}>
                  {Array.isArray(item.img) ? (
                    <ImageSlider images={item.img} isActive={true} />
                  ) : (
                    <Image src={item.img} alt={item.title} fill className=" object-cover" />
                  )}
                </div>
                <TypographyH2 className=" lg:text-lg text-sm mt-2 text-muted-foreground">{item.title}</TypographyH2>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </MaxWidthWrapper>{" "}
    </section>
  );
};
export default Slider;
