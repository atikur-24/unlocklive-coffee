"use client";

import { cn } from "../lib/utls";

const MyBtn = ({ title, bgColor, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn`h-[42px] w-[190px] rounded-[8px] px-3 lg:h-[52px] lg:w-[211px] lg:rounded-[12px] bg-[${bgColor}] ${
        textColor == "white" ? "text-white" : `text-[${textColor}]`
      }   flex items-center justify-center text-nowrap border border-[#86371C] text-[12px] lg:text-[16px]`}
      style={{
        fontFamily: "value_sans_proregular",
      }}
    >
      {title}
    </button>
  );
};

export default MyBtn;
