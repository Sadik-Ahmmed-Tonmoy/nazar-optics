import { cn } from "@/lib/utils";
import React from "react";

const MyContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <div className={cn("h-full w-full max-w-[1250px] mx-auto", className)}>{children}</div>;
};

export default MyContainer;
