import { abril } from "@/assets/Fonts/font";
import { coffeeBgTransparent } from "@/assets/images";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { coffeeMenuData } from "@/data";
import Image from "next/image";

const CoffeeMenu = () => {
  return (
    <Container className="overflow-hidden">
      <SectionTitle
        className="flex flex-col items-center"
        title="Unlocklive Coffee Menu"
        subTitle="Coffee Menu"
      />
      <div className="mt-10 grid grid-cols-1 gap-[30px] lg:mt-[80px] lg:grid-cols-2">
        {coffeeMenuData?.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex h-[100px] w-[340px] items-center justify-normal gap-[20px] rounded-[12px] border border-[#270a054a] p-[4px] lg:h-[144px] lg:w-[668px] lg:gap-[136px] lg:p-[30px]"
            >
              <div className="flex items-center justify-normal gap-[8px] lg:gap-[16px]">
                <div className="flex h-[53px] w-[75px] items-center justify-center rounded-full border border-dotted border-[#86371C] lg:h-[75px] lg:w-[78px]">
                  <div className="h-[45px] w-[45px] rounded-full lg:h-[65px] lg:w-[63px]">
                    <Image
                      src={menu?.img}
                      alt="coffee menu"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <p
                    className={`${abril.className} text-[17px] font-semibold lg:text-[24px]`}
                  >
                    {menu?.name}
                  </p>
                  <p className="text-[12px] font-normal lg:text-[14px]">
                    {menu.desc}
                  </p>
                </div>
              </div>
              <div className="flex h-[36px] w-[49px] items-center justify-center rounded-full border border-dotted border-[#86371C] lg:h-[57px] lg:w-[61px]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#86371C] lg:h-[50px] lg:w-[50px]">
                  <p className="text-[10px] font-medium text-white lg:text-[20px]">
                    ${menu.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={coffeeBgTransparent}
        alt="coffee"
        className="absolute bottom-14 right-[-150px] hidden lg:flex"
      />
    </Container>
  );
};

export default CoffeeMenu;
