import HeroSection from "./component/HeroSection";
import HorizontalScroll from "./component/ScrollSnap";
import InfiniteTechStack from "./component/IfinteTechStack";
import { projects, projects2, SERVICES, TECH } from "./constants";
import InfinteTitle from "./component/InfinteTitle";
import MaxWidthWrapper from "./component/MaxWidthWrapper";
import OverlappingSlider from "./component/Overlapslider";
import AboutMe from "./component/AboutMe";
import Hero2 from "./component/Hero2";
/*
hero section
tech stack
colors
email
array of projects 
slider optimization
logo
 */
export default function Home() {
  return (
    <section>
      {/*  رقم 1 ده سكشن البداية  */}

      <HeroSection
        videoFallbackSrc="/hell-foto.png.webp"
        title="Discover the Future"
        subtitle="Explore immersive gaming experiences with 801 Studio."
        buttonText="Contact Us"
        mediaSrc="/hell.mp4"
        mediaType="video"
        mediaPosition="left"
      />
      {/*  رقم 2 ده سكشن البداية  */}
      <Hero2
        title="Discover the Future"
        subtitle="Explore immersive gaming experiences with 801 Studio."
        buttonText="Contact Us"
        img="/hell-foto.png.webp"
        mediaPosition="right"
      />
      <img src="/service-line.png" alt="" />
      <HorizontalScroll
        paragraph="I create 3D models, concepts and assets for games (PC, console, mobile), game development, computer graphics
        for film, animation, VFX, and VR/AR apps."
        items={SERVICES}
      />
      <img src="/service-line.png" alt="" />
      <MaxWidthWrapper className="flex relative items-start gap-10 flex-col">
        <InfinteTitle className=" text-4xl lg:text-7xl !text-main font-semibold " text="Tech Stack" />
        <InfiniteTechStack height="h-20" list={TECH} />
      </MaxWidthWrapper>
      {/* ده سكشن اضافه المشاريع */}
      <OverlappingSlider
        slidesPerView={2}
        height={" h-44"}
        types={[
          {
            category: "REALISTIC 3D ENVIRONMENT",
            items: projects,
          },
          {
            category: "STYLIZED 3D ENVIRONMENT",
            items: projects2,
          },
          {
            category: "Animated Websites",
            items: projects,
          },
        ]}
        title="3D ENVIRONMENT"
      />
      <img src="/service-line.png" alt="" />
      {/* ده سكشن أنا مين  */}

      <AboutMe
        text=" lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
    </section>
  );
}
