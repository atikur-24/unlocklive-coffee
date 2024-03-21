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
          slidesToShow: 2,
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
  //slide next prev function
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container className="bg-orange-5">
      <div className="mx-auto flex flex-col items-center justify-normal gap-[60px] lg:flex-row">
        <div className="">
          <SectionTitle
            className="flex flex-col items-center lg:items-start"
            title="Taste Our New Recipe"
            subTitle="New Recipes"
            leftStyle="hidden"
          />
          <p className="mt-[19px] text-justify text-[16px] font-normal leading-[21px] text-[#53565C] lg:leading-[24px]">
            Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
            malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
            porttitor scelerisque amet dolor et. Nisi ac vitae tortor
            lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
            nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
            eu sit ornare imperdiet viverra sit vel.
          </p>
          <p className="mt-[19px] text-justify text-[16px] font-normal leading-[21px] text-[#53565C] lg:leading-[24px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            minima voluptas sint porro corporis eos laboriosam odio quod.
          </p>
          <div className="mt-[20px] flex items-center justify-center gap-[20px] lg:mt-[40px] lg:justify-normal lg:gap-[30px]">
            <div
              className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[#270A05]"
              onClick={goToPrevSlide}
            >
              <TiArrowLeft className="text-2xl" />
            </div>
            <div
              className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[#270A05]"
              onClick={goToNextSlide}
            >
              <TiArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-[340px] lg:w-[800px]">
          <Slider ref={sliderRef} {...settings}>
            {recipeData?.map((recipe) => (
              <div key={recipe.id}>
                <div className="group relative block h-[460px] w-[340px] rounded-[28px] bg-gray-900 lg:h-[472px] lg:w-[375px]">
                  <Image
                    className="absolute inset-0 h-full 
                                  w-full rounded-[28px] border-white object-cover group-hover:border-[9px] group-hover:opacity-50"
                    src={recipe?.img}
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
                          <li>{recipe?.title}</li>
                          <li>{recipe?.text}</li>
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
