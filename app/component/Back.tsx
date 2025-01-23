"use client";
import { Button } from "@/components/ui/button";

import React from "react";
import { FaBackward } from "react-icons/fa";

const Back = ({ moveback }: any) => {
  return (
    <Button
      onClick={moveback}
      className="flex hover:text-purple duration-200  w-fit items-center transition-all left-0 mb-5 3"
    >
      <FaBackward />
      Back
    </Button>
  );
};

export default Back;
