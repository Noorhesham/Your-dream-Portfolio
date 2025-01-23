"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

// Create Context
const PageTransitionContext = createContext({});

// GSAP Animation for entering the transition
const animationEnter = async () => {
  return gsap.to(".piece", {
    yPercent: 100,
    autoAlpha: 1,
    stagger: { amount: 0.6 },
    ease: "power3.out",
    duration: 0.7,
  });
};

// GSAP Animation for leaving the transition
const animationLeave = async () => {
  return gsap.to(".piece", {
    yPercent: -100,
    autoAlpha: 0,
    stagger: { amount: 0.6 },
    ease: "power3.in",
    duration: 0.7,
  });
};

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = async (url: string) => {
      await animationEnter(); // Play the "enter" animation
      router.push(url); // Change the route
      router.refresh(); // Refresh content on the new page
      await animationLeave(); // Play the "leave" animation
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.href) {
        e.preventDefault(); // Prevent default link behavior
        handleRouteChange(target.href); // Trigger animations on route change
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleLinkClick);

    // Cleanup
    return () => document.removeEventListener("click", handleLinkClick);
  }, [router]);

  return (
    <PageTransitionContext.Provider value={{}}>
      <div className="fixed inset-0 flex items-center z-50 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="piece opacity-0 translate-y-full h-screen bg-[#222]"
            style={{ width: `${100 / 6}vw` }}
          ></div>
        ))}
      </div>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);
