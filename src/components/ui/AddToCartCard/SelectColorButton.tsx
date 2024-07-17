"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { showColor } from "@/redux/features/showColorSlice/ShowColorSlice";
import { RootState } from "@/redux/store";


const SelectColorButton = () => {
  const isShowColor = useAppSelector((state: RootState) => state.showColor.value);
  const dispatch = useAppDispatch();
  return (
    <div  onClick={() => dispatch(showColor())} className="flex justify-center items-center gap-3 my-3 hover:cursor-pointer">

      <p className="text-sm">Select Color</p>

      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
  );
};

export default SelectColorButton;
