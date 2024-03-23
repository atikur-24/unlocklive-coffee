"use client";

import { bakilda } from "@/assets/Fonts/font";
import Container from "@/components/ui/Container";
import MyBtn from "@/components/ui/MyBtn";
import { creationImages } from "@/data";
import Image from "next/image";
import { useState } from "react";

const NewCreations = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const Burger = creationImages?.filter((item) => item.category === "Burger");
  const Drinks = creationImages?.filter((item) => item.category === "Drinks");
  const Pizza = creationImages?.filter((item) => item.category === "Pizza");
  const Dinner = creationImages?.filter((item) => item.category === "Dinner");
  const Cookies = creationImages?.filter((item) => item.category === "Cookies");
  const Bakery = creationImages?.filter((item) => item.category === "Bakery");

  const [index, setIndex] = useState(-1);
  const [displayCount, setDisplayCount] = useState(5);

  const currentImage = creationImages[index];
  const nextIndex = (index + 1) % creationImages.length;
  const nextImage = creationImages[nextIndex] || currentImage;
  const prevIndex = (index + creationImages.length - 1) % creationImages.length;
  const prevImage = creationImages[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);

  // Calculation container width based on the number of creationImages and gap
  const containerWidth = creationImages.length * (424 + 24) - 24;

  const showMore = (filteredItems) => {
    setDisplayCount(filteredItems.length);
  };

  const showLess = () => {
    setDisplayCount(5);
  };

  const renderFilteredServices = (filteredItems) => {
    if (filteredItems && filteredItems.length > 0) {
      return (
        <div style={{ maxWidth: containerWidth + "px" }}>
          <div className="flex flex-wrap gap-[24px] ">
            {filteredItems?.slice(0, displayCount).map((e, i) => {
              return (
                <div
                  key={i}
                  style={{
                    width: e.width + "px",
                    height: e.height + "px",
                    borderRadius: e.radius + "px",
                    overflow: "hidden",
                    marginBottom: "24px",
                  }}
                  className="relative"
                >
                  <Image
                    src={e.src}
                    alt={e.caption}
                    className="h-full w-full cursor-pointer object-cover"
                    onClick={() => handleClick(i)}
                  />
                  <p className="absolute bottom-5 left-5 cursor-pointer rounded-[7px] border border-white border-opacity-50 px-2.5 py-0.5 text-[14px] text-white shadow-md hover:bg-[#86371C]">
                    {e?.caption}
                  </p>
                </div>
              );
            })}

            {filteredItems.length > 5 && (
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
            )}

            {/* {!!currentImage && (
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )} */}
          </div>
        </div>
      );
    } else {
      return (
        <p className="my-20 flex flex-col items-center justify-center gap-4 text-xl text-red-500">
          No products available for the selected rating or search.
        </p>
      );
    }
  };

  return (
    <Container className="mx-auto mt-[360px] lg:mt-[90px]">
      <p className="text-center font-['Lemonada'] uppercase text-[#86371C]">
        Showcase
      </p>
      <div className="mx-auto mt-2 h-[2px] w-[124px] bg-gradient-to-l from-[#df745151] via-[#86371C] to-[#df745151]"></div>

      <div className="flex items-center justify-center">
        <p
          className={`${bakilda.className} mt-2.5 text-[22px] leading-[30px] lg:mt-3 lg:text-4xl xl:text-[44px] xl:leading-[60px]`}
        >
          Our Chefs New Creations
        </p>
      </div>
      <p className="mx-auto mt-[19px] w-[340px] text-center text-[16px] leading-[20px] text-[#031811B2] text-opacity-70 lg:mt-[24px] lg:w-[674px] lg:text-[18px] lg:leading-[32px]">
        Behold the extraordinary creations born from the synergy of our
        users&apos; ingenuity and the transformative power of AI, a testament to
        boundless innovation.
      </p>

      <div className="mx-auto mt-[60px]  w-[340px] lg:w-[1320px]">
        <div className="hidden items-center justify-center gap-5 md:mx-auto md:flex lg:mx-0 lg:flex">
          <p
            className={
              toggleState == 1
                ? "cursor-pointer rounded-[50px] border-[1.5px] border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </p>
          <p
            className={
              toggleState == 2
                ? " cursor-pointer rounded-[50px] border-[1.5px] border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(2)}
          >
            Burger
          </p>
          <p
            className={
              toggleState == 3
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(3)}
          >
            Drinks
          </p>
          <p
            className={
              toggleState == 4
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(4)}
          >
            Pizza
          </p>
          <p
            className={
              toggleState == 5
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(5)}
          >
            Dinner
          </p>
          <p
            className={
              toggleState == 6
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(6)}
          >
            Cookies
          </p>
          <p
            className={
              toggleState == 7
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[24px] py-[12px] text-[22px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[24px] py-[12px] text-[22px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(7)}
          >
            Bakery
          </p>
        </div>

        {/* for mobile  */}
        <div className="mx-auto flex w-[340px] gap-x-[12px] overflow-x-auto lg:hidden">
          <p
            className={
              toggleState == 1
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </p>
          <p
            className={
              toggleState == 2
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(2)}
          >
            Burger
          </p>
          <p
            className={
              toggleState == 3
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(3)}
          >
            Drinks
          </p>
          <p
            className={
              toggleState == 4
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(4)}
          >
            Pizza
          </p>
          <p
            className={
              toggleState == 5
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(5)}
          >
            Dinner
          </p>
          <p
            className={
              toggleState == 6
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(6)}
          >
            Cookies
          </p>
          <p
            className={
              toggleState == 7
                ? " cursor-pointer rounded-[50px] border-[1.5px]  border-[#86371C] px-[10px] py-[5px] text-[16px] font-normal text-[#86371C] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
                : "cursor-pointer rounded-[50px] px-[10px] py-[5px] text-[16px] font-normal text-[#031811] shadow-[#86371C] hover:bg-[#86371C] hover:text-white hover:shadow-md"
            }
            onClick={() => toggleTab(7)}
          >
            Bakery
          </p>
        </div>
        <div className="mt-[48px]">
          {toggleState === 1 && renderFilteredServices(creationImages)}
          {toggleState === 2 && renderFilteredServices(Burger)}
          {toggleState === 3 && renderFilteredServices(Drinks)}
          {toggleState === 4 && renderFilteredServices(Pizza)}
          {toggleState === 5 && renderFilteredServices(Dinner)}
          {toggleState === 6 && renderFilteredServices(Cookies)}
          {toggleState === 7 && renderFilteredServices(Bakery)}
        </div>
      </div>
    </Container>
  );
};

export default NewCreations;
