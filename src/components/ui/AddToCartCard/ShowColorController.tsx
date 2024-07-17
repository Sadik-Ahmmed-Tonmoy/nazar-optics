"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/redux/store";
import Image from "next/image";
import StarRatingReadOnly from "../StarRatingReadOnly";
import { IoClose } from "react-icons/io5";
import { hideColor } from "@/redux/features/showColorSlice/ShowColorSlice";
import { FaCheck } from "react-icons/fa";

const ShowColorController = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const fakeColorCount = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
    "bg-orange-500",
  ];
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
          <div className=" p-3 bg-red  h-[253px]">
            <div className="grid grid-cols-8 gap-3 ">
              {fakeColorCount.map((item) => (
                <div key={item} className={`w-8 h-8 rounded-full overflow-hidden relative ${item}`}>
                  <div className="absolute flex justify-center items-center inset-0 text-white">
                    <FaCheck />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-center font-medium text-2xl mb-2">BLACK TITANIUM</h3>
          <h5 className="text-center font-semibold text-xl mb-2">
            696.00 <span className="font-medium text-sm">BDT</span>
          </h5>
          <div className="flex items-center justify-center gap-5 h-[20px]">
            <h5 className="text-center font- text-sm line-through">
              796.00 <span className="font-medium text-sm">BDT</span>
            </h5>
            <div className="text-[#00a76b] text-sm">(10% off)</div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ShowColorController;
