"use client";

import Container from "@/components/ui/Container";
import { heroData } from "@/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="xl:pb-32 xl:pt-10">
      <Slider {...settings}>
        {heroData?.map((hero) => {
          return (
            <div key={hero.id}>
              <div className="flex flex-col items-center justify-between gap-8 md:gap-10 lg:flex-row lg:gap-[50px] xl:gap-[60px]">
                <div className="">
                  <p className="pb-[12px] text-center lg:text-left">
                    {hero.welcome}
                  </p>
                  <h2 className="text-coffee-primary text-center text-[50px] lg:text-left lg:text-[110px]">
                    {hero.headline}
                  </h2>
                  <p className="mt-[-10px] text-nowrap text-center text-[20px] lg:text-left lg:text-[44px]">
                    {hero.sub_head}
                  </p>
                  <p className="mt-[12px] text-center text-[16px] font-normal lg:mt-[24px] lg:text-left">
                    {hero.desc}
                  </p>
                  <div className="mt-[20px] flex items-center justify-start gap-[44px] lg:mt-[50px]">
                    <button className="flex h-[42px] w-[190px] items-center justify-center text-nowrap rounded-[8px] border bg-[#86371C] px-3 text-[12px] text-white lg:h-[52px] lg:w-[211px] lg:rounded-[12px] lg:text-[16px]">
                      EXPLORE OUR MENU
                    </button>

                    {/* <div className="flex items-center justify-normal gap-[12px] lg:gap-[24px]">
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                          {hero?.cup_img?.map((cup, i) => {
                            return (
                              <div className="avatar" key={i}>
                                <div className="w-[39px] lg:w-[54px]">
                                  <Image src={cup.img} alt="cup" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <h2 className="text-[20px] font-semibold lg:text-2xl">
                            1200+
                          </h2>
                          <p className="hidden text-[12px] font-normal lg:flex lg:text-[14px]">
                            Tasty Variant Coffee
                          </p>
                        </div>
                      </div> */}
                  </div>
                </div>
                <div>
                  <Image src={hero.main_img} alt="banner image" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <Image
        src={leafOne}
        alt="leaf"
        className="absolute -left-20 top-20 hidden lg:block"
      />
      <Image
        src={leafTwo}
        alt="leaf"
        className="absolute -bottom-32 -right-20 hidden w-[400px] lg:block"
      />
      <Image
        src={coffeeBg}
        alt="coffee"
        className="absolute bottom-0 left-16 hidden w-[250px] lg:block"
      /> */}
    </Container>
  );
};

export default HeroSection;
