"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { creationData } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const NewCreations = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const [index, setIndex] = useState(-1);
  const [displayCount, setDisplayCount] = useState(5);

  const burger = creationData?.filter((item) => item.category === "Burger");
  const drinks = creationData?.filter((item) => item.category === "Drinks");
  const pizza = creationData?.filter((item) => item.category === "Pizza");
  const dinner = creationData?.filter((item) => item.category === "Dinner");
  const lunch = creationData?.filter((item) => item.category === "Lunch");
  const cookies = creationData?.filter((item) => item.category === "Cookies");
  const bakery = creationData?.filter((item) => item.category === "Bakery");

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  const showMore = (filteredItems) => {
    setDisplayCount(filteredItems.length);
  };

  const showLess = () => {
    setDisplayCount(5);
  };

  const renderFilteredItem = (filteredItems) => {
    if (filteredItems.length > 0) {
      return (
        <div className="flex flex-wrap sm:gap-2 md:gap-4 lg:gap-5">
          {filteredItems?.slice(0, displayCount).map((item) => {
            return (
              <div
                key={item.id}
                className={`relative mb-4 h-[300px] overflow-hidden rounded-xl sm:h-[200px] md:mb-6 md:h-[285px] md:rounded-2xl lg:h-[335px] lg:rounded-3xl ${
                  item.width === 82
                    ? "w-full sm:w-[62%]"
                    : item.width === 40
                      ? "w-full sm:w-[40%]"
                      : item.width === 35
                        ? "w-full sm:w-[35%]"
                        : item.width === 30
                          ? "w-full sm:w-[30%]"
                          : item.width === 25
                            ? "w-full sm:w-[25%]"
                            : "w-full"
                }`}

                // style={{
                //   width: item.width + "px",
                //   height: item.height + "px",
                // }}
                // className="relative mb-6 overflow-hidden rounded-3xl"
              >
                <Image
                  src={item.img}
                  alt={item.caption}
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-5 left-5 cursor-pointer rounded-sm border border-white border-opacity-50 px-2.5 py-0.5 text-xs text-white shadow-md transition-colors hover:bg-my-secondary md:rounded-md md:text-sm">
                  {item?.caption}
                </span>
              </div>
            );
          })}

          {/* {filteredItems.length > 5 && (
              <div className="mx-auto mt-4 flex justify-center pb-[90px]">
                {displayCount === filteredItems.length ? (
                  <MyBtn
                    onClick={showLess}
                    title={"Show Less"}
                    bgColor={"#00FFFFFF"}
                    textColor={"#86371C"}
                  />
                ) : (
                  <MyBtn
                    onClick={() => showMore(filteredItems)}
                    title={"Show More"}
                    bgColor={"#00FFFFFF"}
                    textColor={"#86371C"}
                  />
                )}
              </div>
            )} */}
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

  return (
    <Container className="mt-[60px] lg:mt-[90px]">
      <SectionTitle
        title="Our Chefs New Creations"
        subTitle="Showcase"
        className="flex flex-col items-center justify-center"
        leftStyle="hidden"
        rightStyle="hidden"
        bottomStyle={true}
      />
      <p className="mx-auto mt-[19px] text-[#031811] text-opacity-70 lg:mt-[24px] lg:w-[600px] lg:text-center">
        Behold the extraordinary creations born from the synergy of our
        users&apos; ingenuity and the transformative power of AI, a testament to
        boundless innovation.
      </p>
      <div className="mt-6 flex items-center justify-center gap-5 md:mt-8 xl:mt-14">
        <div
          className={toggleTab === 1 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(1)}
        >
          All
        </div>
        <div
          className={toggleTab === 2 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(2)}
        >
          Burger
        </div>
        <div
          className={toggleTab === 3 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(3)}
        >
          Drinks
        </div>
        <div
          className={toggleTab === 4 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(4)}
        >
          Pizza
        </div>
        <div
          className={toggleTab === 5 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(5)}
        >
          Dinner
        </div>
        <div
          className={toggleTab === 6 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(6)}
        >
          Lunch
        </div>
        <div
          className={toggleTab === 7 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(7)}
        >
          Cookies
        </div>
        <div
          className={toggleTab === 8 ? "activeTab" : "defaultTab"}
          onClick={() => handleToggleTab(8)}
        >
          Bakery
        </div>
      </div>
      <div className="mt-8 md:mt-10 xl:mt-12">
        {toggleTab === 1 && renderFilteredItem(creationData)}
        {toggleTab === 2 && renderFilteredItem(burger)}
        {toggleTab === 3 && renderFilteredItem(drinks)}
        {toggleTab === 4 && renderFilteredItem(pizza)}
        {toggleTab === 5 && renderFilteredItem(dinner)}
        {toggleTab === 6 && renderFilteredItem(lunch)}
        {toggleTab === 7 && renderFilteredItem(cookies)}
        {toggleTab === 8 && renderFilteredItem(bakery)}
      </div>
    </Container>
  );
};

export default NewCreations;
