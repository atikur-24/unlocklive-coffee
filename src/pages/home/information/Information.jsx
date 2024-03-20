import { abril } from "@/assets/Fonts/font";
import { longArrowIcon, videoIcon } from "@/assets/images";
import Container from "@/components/ui/Container";
import { infoData } from "@/data";
import Image from "next/image";

const Information = () => {
  return (
    <Container className="h-[246px] bg-orange-5">
      <div className="mx-auto grid lg:grid-cols-4 lg:gap-10">
        <div className="rounded-b-xl bg-my-secondary lg:h-[300px] lg:w-[280px] xl:h-[326px] xl:w-[319px]">
          <div className="px-10 py-6">
            <Image src={longArrowIcon} alt="arrow" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-[20px]">
            <Image src={videoIcon} alt="video" />
            <p
              className={`${abril.className} text-nowrap text-xl font-medium text-stone-2 lg:font-semibold xl:text-2xl`}
            >
              Play Intro Video
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:py-[70px]">
          <div className="grid grid-cols-1 divide-x-2 divide-my-primary divide-opacity-10 lg:grid-cols-3">
            {infoData?.map((data) => {
              return (
                <div className="lg:pl-14 xl:pl-[70px]" key={data.id}>
                  <p
                    className={`${abril.className} text-xl font-semibold xl:text-2xl`}
                  >
                    {data?.title}
                  </p>
                  <p className="mt-4 xl:mt-6">{data?.time}</p>
                  <p className="mt-2">{data?.location}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Information;
