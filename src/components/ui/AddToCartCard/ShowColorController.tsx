"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/redux/store";
import Image from "next/image";
import StarRatingReadOnly from "../StarRatingReadOnly";
import { IoClose } from "react-icons/io5";
import { hideColor } from "@/redux/features/showColorSlice/ShowColorSlice";

const ShowColorController = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const isShowColor = useAppSelector((state: RootState) => state.showColor.items[id]);
  const dispatch = useAppDispatch();
  return (
    <>
      {isShowColor ? (
        <div>
          <div className="border-b-2 py-[8px] px-4 flex justify-between">
            <p className="font-semibold">Select A Color</p>
            <IoClose onClick={() => dispatch(hideColor(id))} size={25} className="hover:cursor-pointer" />
          </div>
          <div className=" p-3 bg-red  h-[220px]">
            <div className="grid grid-cols-8 gap-3 ">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>
          {/* <p className="text-center text-xs mb-4">TRENDING</p>
          <h3 className="text-center font-medium text-2xl mb-4">BLACK TITANIUM</h3>
          <p className="text-center text-sm mb-4">black solid titanium</p>
          <Image src="https://i.ibb.co/HBXs7W2/zmt-KTo-Lo-S-0-RBR0101-S.jpg" className="mx-auto" width={400} height={400} alt="sunglasses" />
          <StarRatingReadOnly rating={3.5} size={15} totalStars={5} color="#00a76b" className="mx-auto  w-min mb-[14px]" /> */}
          <h3 className="text-center font-medium text-2xl mb-2">BLACK TITANIUM</h3>
          <h5 className="text-center font-semibold text-xl mb-2">
            696.00 <span className="font-medium text-sm">BDT</span>
          </h5>
        <div className="flex items-center justify-center gap-5">
       
          <h5 className="text-center font- text-sm line-through">
            796.00 <span className="font-medium text-sm">BDT</span>
          </h5>
          <div className="text-[#00a76b]">
            (10% off)
          </div>
        </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ShowColorController;
