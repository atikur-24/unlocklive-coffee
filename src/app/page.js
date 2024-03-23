import ChooseUs from "@/pages/home/chooseUs/ChooseUs";
import CoffeeMenu from "@/pages/home/coffeeMenu/CoffeeMenu";
import HeroSection from "@/pages/home/heroSection/HeroSection";
import Information from "@/pages/home/information/Information";
import NewCreations from "@/pages/home/newCreations/NewCreations";
import NewRecipe from "@/pages/home/newRecipe/newRecipe";

const Home = () => {
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

export default Home;
