"use client";
import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import Loader from "../components/Loader";

export const SmoothScrollContext = createContext({
  locoScroll: null,
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(false);
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  if (loaded) return <Loader />;
  else return children;
};
