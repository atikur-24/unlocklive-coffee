"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { recipeData } from "@/data";
import Image from "next/image";
import { useRef } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const NewRecipe = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  //slide next prev function
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container className="bg-orange-5 py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row xl:gap-20">
        <div className="flex-auto">
          <SectionTitle
            className="flex flex-col items-center lg:items-start"
            title="Taste Our New Recipe"
            subTitle="New Recipes"
            leftStyle="lg:hidden block"
          />
          <p className="my-3 text-justify text-zinc-600 lg:my-5">
            Our chefs have been hard at work crafting innovative recipes that
            combine the finest ingredients to bring you flavors that will
            delight and surprise you. Whether you&apos;re a fan of hearty
            comfort food or craving something light and refreshing, we&apos;ve
            got something for everyone.
          </p>
          <p className="text-justify text-zinc-600">
            Come on over and taste our new recipe! We can&apos;t wait to see you
            and hear what you think about our latest recipes.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 lg:mt-10 lg:justify-normal lg:gap-8">
            <div
              className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-primary"
              onClick={goToPrevSlide}
            >
              <TiArrowLeft className="text-2xl" />
            </div>
            <div
              className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-primary"
              onClick={goToNextSlide}
            >
              <TiArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[720px]">
          <Slider ref={sliderRef} {...settings}>
            {recipeData?.map((recipe) => (
              <div key={recipe.id}>
                <div className="group relative block h-[460px] w-[340px] rounded-[20px] bg-gray-900 transition-all lg:h-[400px] lg:w-[300px] xl:h-[442px] xl:w-[345px]">
                  <Image
                    className="absolute inset-0 h-full 
                                  w-full rounded-[20px] border-white object-cover transition-all group-hover:border-[7px] group-hover:opacity-50"
                    src={recipe.img}
                    alt="recipe"
                  />
                  <div className="relative p-5">
                    <div className="absolute left-6 top-[350px]">
                      {/* Hidden content */}
                      <div
                        className="translate-y-8 transform 
                                  opacity-0 transition-all 
                                  group-hover:translate-y-0 
                                  group-hover:opacity-100"
                      >
                        <ul className="list-disc pl-2 text-[16px] leading-[26px] text-white lg:pl-6">
                          <li>{recipe.title}</li>
                          <li>{recipe.text}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default NewRecipe;
