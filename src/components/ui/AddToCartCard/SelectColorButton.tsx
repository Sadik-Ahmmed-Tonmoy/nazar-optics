"use client"
import React, { useState } from "react";

const SelectColorButton = () => {
    const [isSelectColor, setIsSelectColor] = useState(false);
    console.log(isSelectColor);
  return (
    <div onClick={() => setIsSelectColor(true)} className="flex justify-center items-center gap-3 my-3 hover:cursor-pointer">

      <p className="text-sm">Select Color</p>
      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
  );
};

export default SelectColorButton;
