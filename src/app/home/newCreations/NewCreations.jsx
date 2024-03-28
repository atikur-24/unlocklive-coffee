"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { creationData } from "@/data";
import { useState } from "react";
import FilteredItem from "./FilteredItem";

const NewCreations = () => {
  const [toggleTab, setToggleTab] = useState(1);

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

  return (
    <Container className="mt-[60px] pb-[90px] lg:mt-[90px]">
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
      <div className="mx-auto mt-6 flex w-4/5 items-center gap-2 overflow-x-auto md:mt-8 md:w-full md:justify-center md:gap-3 lg:gap-5 xl:mt-14">
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
        {toggleTab === 1 && <FilteredItem filteredItems={creationData} />}
        {toggleTab === 2 && <FilteredItem filteredItems={burger} />}
        {toggleTab === 3 && <FilteredItem filteredItems={drinks} />}
        {toggleTab === 4 && <FilteredItem filteredItems={pizza} />}
        {toggleTab === 5 && <FilteredItem filteredItems={dinner} />}
        {toggleTab === 6 && <FilteredItem filteredItems={lunch} />}
        {toggleTab === 7 && <FilteredItem filteredItems={cookies} />}
        {toggleTab === 8 && <FilteredItem filteredItems={bakery} />}
      </div>
    </Container>
  );
};

export default NewCreations;
