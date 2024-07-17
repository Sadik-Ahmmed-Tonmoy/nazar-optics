"use client";

import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/redux/store";

const ShowColorController = ({ children }: { children: React.ReactNode }) => {
  const isShowColor = useAppSelector((state: RootState) => state.showColor.value);
  return <>{isShowColor ? <div className="w-10 h-10 bg-red-500"></div> : <>{children}</>}</>;
};

export default ShowColorController;
