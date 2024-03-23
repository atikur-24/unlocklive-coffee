import { abril } from "@/assets/Fonts/font";
import { coffeeBgTransparent } from "@/assets/images";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { coffeeMenuData } from "@/data";
import Image from "next/image";

const CoffeeMenu = () => {
  return (
    <Container className="overflow-hidden pb-[100px]">
      <SectionTitle
        className="flex flex-col items-center"
        title="Unlocklive Coffee Menu"
        subTitle="Coffee Menu"
      />
      <div className="mt-10 grid grid-cols-1 gap-4 md:gap-7 lg:mt-16 lg:grid-cols-2 xl:gap-[30px]">
        {coffeeMenuData?.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex cursor-pointer items-center justify-between gap-5 rounded-md border border-my-primary border-opacity-10 p-4 md:rounded-xl md:p-4 lg:p-7"
            >
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="flex items-center justify-center rounded-full border border-dashed border-my-primary p-1">
                  <div className="rounded-full bg-slate-2 p-1 lg:p-1.5">
                    <div className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] lg:h-[65px] lg:w-[65px]">
                      <Image
                        placeholder="blur"
                        src={menu.img}
                        alt="coffee menu"
                        className="h-full w-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    className={`${abril.className} text-lg font-semibold md:text-xl xl:text-xl`}
                  >
                    {menu.name}
                  </p>
                  <p className="text-xs opacity-70 md:tracking-tight lg:text-sm">
                    {menu.desc}
                  </p>
                </div>
              </div>
              <div className="hidden text-sm tracking-wide text-neutral-300 md:block">
                .............................
              </div>
              <div className="rounded-full border border-dashed border-my-primary">
                <h1 className="flex items-center justify-center rounded-full bg-gray-2 p-1.5 text-base font-medium transition-all duration-200 hover:bg-my-secondary hover:text-white md:p-2 md:text-lg lg:p-2.5 lg:font-semibold xl:text-xl">
                  ${menu.price}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-center lg:mt-12 xl:mt-16">
        <Button variant="outline">View All Menu</Button>
      </div>
      <Image
        src={coffeeBgTransparent}
        alt="coffee"
        className="absolute -right-8 bottom-10 hidden lg:flex"
      />
    </Container>
  );
};

export default CoffeeMenu;
