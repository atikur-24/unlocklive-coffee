import ChooseUs from "@/app/home/chooseUs/ChooseUs";
import CoffeeMenu from "@/app/home/coffeeMenu/CoffeeMenu";
import HeroSection from "@/app/home/heroSection/HeroSection";
import Information from "@/app/home/information/Information";
import NewCreations from "@/app/home/newCreations/NewCreations";
import NewRecipe from "@/app/home/newRecipe/NewRecipe";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Information />
      <ChooseUs />
      <CoffeeMenu />
      <NewRecipe />
      <NewCreations />
    </main>
  );
};

export default HomePage;
