import ChooseUs from "@/pages/home/chooseUs/ChooseUs";
import CoffeeMenu from "@/pages/home/coffeeMenu/CoffeeMenu";
import HeroSection from "@/pages/home/heroSection/HeroSection";
import Information from "@/pages/home/information/Information";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Information />
      <ChooseUs />
      <CoffeeMenu />
      <div className=""></div>
    </main>
  );
};

export default Home;
