import MyContainer from "@/components/ui/MyContainer/MyContainer";
import React from "react";

const Navbar = () => {
  return (
   <div className="bg-yellow-500 w-full sticky top-0 z-10">

<div className=" bg-red-500 w-full container mx-auto flex justify-between">
      <div className="flex items-center gap-4">
        <h3 className="me-16 text-4xl">Nazar</h3>
        <p>sunglass</p>
        <p>sunglass</p>
        <p>sunglass</p>
        <p>sunglass</p>
      </div>
      <div className="flex items-center gap-3">
        <p>login</p>
        <p>login</p>
        <p>login</p>
        <p>login</p>
      </div>
    </div>

   </div>
  );
};

export default Navbar;
