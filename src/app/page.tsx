import Navbar from "@/components/shared/Navbar/Navbar";
import AddToCartCard from "@/components/ui/AddToCartCard/AddToCartCard";
import React from "react";

const HomePage = () => {
  const fakeCardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      
      <div className="flex items-center ">
        <div className="bg-red-500 w-8/12 h-screen">left</div>
        <div className="bg-green-500 w-4/12 h-full px-2 ">
       <div className="flex flex-col gap-3">
       {fakeCardCount.map((item) => (
            <AddToCartCard key={item} id={item.toString()} />
          ))}
       </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
