import { abril } from "@/assets/Fonts/font";
import { longArrowIcon, videoIcon } from "@/assets/images";
import Container from "@/components/ui/Container";
import { infoData } from "@/data";
import Image from "next/image";

const Information = () => {
  return (
    <Container className="bg-orange-5 lg:h-[246px]">
      <div className="mx-auto grid lg:grid-cols-4">
        <div className="rounded-b-xl bg-my-secondary lg:h-[300px] lg:w-[280px] xl:h-[326px] xl:w-[319px]">
          <div className="flex justify-center py-4 lg:py-6">
            <Image src={longArrowIcon} alt="arrow" />
          </div>
          <div className="mb-6 mt-4 flex items-center justify-center gap-[20px]">
            <Image src={videoIcon} alt="video" />
            <p
              className={`${abril.className} text-nowrap text-lg font-medium text-stone-2 md:text-xl lg:font-semibold xl:text-2xl`}
            >
              Play Intro Video
            </p>
          </div>
        </div>
        <div className="py-10 lg:col-span-3 lg:py-[70px]">
          <div className="grid place-content-center divide-y-2 divide-my-primary divide-opacity-10 lg:grid-cols-3 lg:place-items-center lg:divide-x-2 lg:divide-y-0">
            {infoData?.map((data) => {
              return (
                <div
                  className="py-4 md:my-6 lg:py-0 lg:pl-14 xl:pl-[70px]"
                  key={data.id}
                >
                  <p
                    className={`${abril.className} text-lg font-semibold md:text-xl xl:text-2xl`}
                  >
                    {data?.title}
                  </p>
                  <p className="mt-2 md:mt-4 xl:mt-6">{data?.time}</p>
                  <p className="mt-1 lg:mt-2">{data?.location}</p>
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
