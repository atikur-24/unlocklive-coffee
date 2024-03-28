"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const FilteredItem = ({ filteredItems }) => {
  const [displayCount, setDisplayCount] = useState(5);

  const showMore = (filteredItems) => {
    setDisplayCount(filteredItems.length);
  };

  const showLess = () => {
    setDisplayCount(5);
  };

  if (filteredItems?.length > 0) {
    return (
      <div className="flex flex-wrap sm:gap-2 md:gap-4 lg:gap-5">
        {filteredItems?.slice(0, displayCount).map((item) => {
          let widthClass = "";
          switch (item.width) {
            case 82:
              widthClass = "w-full sm:w-[62%]";
              break;
            case 40:
              widthClass = "w-full sm:w-[40%]";
              break;
            case 35:
              widthClass = "w-full sm:w-[35%]";
              break;
            case 30:
              widthClass = "w-full sm:w-[30%]";
              break;
            case 25:
              widthClass = "w-full sm:w-[25%]";
              break;
            default:
              widthClass = "w-full";
          }
          return (
            <div
              key={item.id}
              className={`relative mb-4 h-[300px] overflow-hidden sm:mb-2 sm:h-[200px] md:mb-6 md:h-[250px] lg:h-[335px] ${widthClass}`}
            >
              <Image
                src={item.img}
                alt={item.caption}
                placeholder="blur"
                className="h-full w-full rounded-xl object-cover md:rounded-2xl lg:rounded-3xl"
              />
              <span className="absolute bottom-5 left-5 cursor-pointer rounded-sm border border-white border-opacity-50 px-2.5 py-0.5 text-xs text-white shadow-md transition-colors hover:bg-my-secondary md:rounded-md md:text-sm">
                {item?.caption}
              </span>
            </div>
          );
        })}

        {filteredItems.length > 5 && (
          <div className="mx-auto mt-4 flex items-center">
            {displayCount === filteredItems.length ? (
              <Button onClick={showLess} variant="outline">
                Show Less
              </Button>
            ) : (
              <Button onClick={() => showMore(filteredItems)} variant="outline">
                Show More
              </Button>
            )}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <p className="my-10 flex flex-col items-center justify-center gap-4 text-base uppercase text-red-500 md:my-20 lg:text-xl">
        Item not available on this tab
      </p>
    );
  }
};

export default FilteredItem;
