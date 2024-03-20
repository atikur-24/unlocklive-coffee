import { bakilda } from "@/assets/Fonts/font";
import { chooseImg, flowerImg } from "@/assets/images";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { chooseData } from "@/data";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <Container className="mx-auto overflow-hidden pb-[100px] pt-[100px] lg:pb-[127px] lg:pt-[165px] ">
      <Image
        src={flowerImg}
        alt="cup"
        className="absolute right-[-130px] top-0 hidden rotate-12 lg:flex"
      />
      <div className="flex flex-col items-center justify-between gap-8 md:gap-10 lg:flex-row lg:gap-20 xl:gap-28">
        <div className="">
          <SectionTitle
            position="right"
            style="left"
            title="Choosing Unlocklive, A Taste of Perfection"
            subTitle="Why Choose Us"
          />
          <p className="mt-3 tracking-tight opacity-60 lg:leading-7">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 md:mt-6 lg:mt-7 lg:gap-6">
            {chooseData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`${bakilda.className} relative flex h-[70px] w-[105px] flex-col items-center justify-center rounded-[10px] border-[1.5px] border-my-primary border-opacity-10 lg:h-[104px] lg:w-[167px] xl:h-[134px] xl:w-[203px]`}
                >
                  {data.year === 100 ? (
                    <div className="absolute -left-1.5 -top-0 h-[70px] w-[105px] rotate-3 rounded-[10px] border-[1.5px] border-my-primary border-opacity-10 lg:h-[104px] lg:w-[167px] xl:h-[134px] xl:w-[203px]"></div>
                  ) : (
                    ""
                  )}

                  <h2 className="text-xl lg:text-4xl xl:text-[44px] xl:leading-[56px]">
                    {data.year}+
                  </h2>
                  <p className="text-center lg:text-lg xl:text-xl">
                    {data.title}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 tracking-tight opacity-60 md:mt-6 lg:mt-7 lg:leading-7">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <div className="mt-5 flex justify-center md:mt-8 lg:mt-12 lg:justify-start">
            <Button variant="outline">Explore Our Menus</Button>
          </div>
        </div>
        <div className="rounded-b-2xl rounded-t-full border-2 border-t-transparent p-4">
          <Image src={chooseImg} alt="coffee" />
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;
