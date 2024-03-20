"use client";

import { bakilda } from "@/assets/Fonts/font";
import { coffeeBg, leafOne, leafTwo } from "@/assets/images";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./hero.css";

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
    <Container className="overflow-hidden lg:pb-36 lg:pt-8 xl:pb-40 xl:pt-10">
      <Slider {...settings}>
        {heroData?.map((hero) => {
          return (
            <div key={hero.id}>
              <div className="flex flex-col items-center justify-between gap-8 md:gap-10 lg:flex-row lg:gap-[50px] xl:gap-[60px]">
                {/* main hero section content */}
                <div className="">
                  <p className="text-center font-['Lemonada'] leading-relaxed tracking-tight lg:text-left lg:font-medium">
                    {hero.welcome}
                  </p>
                  <h1
                    className={`${bakilda.className} mt-2 text-center text-4xl tracking-wide lg:mt-3 lg:text-left lg:text-7xl xl:text-[100px] xl:leading-[110px]`}
                  >
                    {hero.headline}
                  </h1>
                  <p
                    className={`${bakilda.className} text-nowrap text-center text-xl lg:text-left lg:text-4xl xl:text-[40px] xl:leading-none`}
                  >
                    {hero.sub_head}
                  </p>
                  <p className="mt-3 text-center tracking-tight opacity-60 lg:mt-6 lg:text-left lg:leading-7">
                    {hero.desc}
                  </p>
                  {/* button with cup images */}
                  <div className="mt-4 flex items-center justify-start gap-6 lg:mt-8 lg:gap-11 xl:mt-10">
                    <Button>EXPLORE OUR MENU</Button>
                    <div className="flex items-center justify-normal gap-3 lg:gap-6">
                      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        {hero?.cup_img?.map((cup) => {
                          return (
                            <div className="avatar" key={cup.id}>
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
                        <p className="flex text-[12px] font-normal lg:text-[14px]">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* main background image */}
                <div>
                  <Image
                    width={754}
                    height={630}
                    src={hero.main_img}
                    alt="banner image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* opacity images to hero section w:554 h:484 */}
      <Image
        src={leafOne}
        width={380}
        alt="leaf"
        className="absolute -left-10 top-0 hidden lg:block"
      />
      <Image
        src={leafTwo}
        width={380}
        alt="leaf"
        className="absolute bottom-0 right-0 hidden lg:block"
      />
      <Image
        src={coffeeBg}
        alt="coffee"
        className="absolute bottom-5 left-12 hidden w-[250px] lg:block"
      />
    </Container>
  );
};

export default HeroSection;
