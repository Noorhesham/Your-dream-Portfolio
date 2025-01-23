"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  isActive: boolean;
  delay?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, isActive, delay = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start or stop the slider when `isActive` changes
  useEffect(() => {
    if (isActive) {
      startSlider();
    } else {
      stopSlider();
    }

    return () => stopSlider(); // Clean up on unmount or when `isActive` changes
  }, [isActive]);

  // Handle GSAP animation for active slide
  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.children;
      gsap.to(slides, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.to(slides[currentIndex], { opacity: 1, duration: 0.5, ease: "power2.inOut" });
    }
  }, [currentIndex]);

  const startSlider = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay); // Adjust timing for smoother transitions
    }
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return images.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={`Slide ${index + 1}`}
      fill
      className={`absolute top-0 left-0 object-cover transition-opacity duration-500 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ));
};

export default ImageSlider;
