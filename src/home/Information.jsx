import arrow from "@/assets/images/icon/long-arrow.png";
import video from "@/assets/images/icon/video.svg";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Information = () => {
  return (
    <Container className="bg-orange-5">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="relative rounded-bl-xl rounded-br-xl bg-secondary xl:h-[226px] xl:w-[219px] 2xl:h-[326px] 2xl:w-[319px]">
            <div className="relative h-[166.50px] w-[242.68px] opacity-50">
              <Image src={arrow} alt="arrow" />
            </div>
            <div className=" absolute h-[60px] w-[60px]">
              <Image
                src={video}
                alt="video"
                className="absolute h-[60px] w-[60px] rounded-full border border-stone-200"
              />
              <div className="absolute font-semibold leading-[40.80px] tracking-tight text-stone-200 2xl:text-2xl">
                Play Intro Video
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-[30px] tracking-tight">
            Our Opening Hours
          </h3>
          <p className="leading-normal">Mon - Sat: 07:00 - 18:00</p>
          <p className="leading-normal">Only Sun: 09:00 - 14:00</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-[30px] tracking-tight">
            Our Live Location
          </h3>
          <p className="leading-normal">848 A 28TH ST, Brooklyn</p>
          <p className="leading-normal">New York, UK</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-[30px] tracking-tight">
            Book A Table Now
          </h3>
          <p className="leading-normal">+1 318-254-6849</p>
          <p className="leading-normal">+1 452-754-6579</p>
        </div>
      </div>
    </Container>
  );
};

export default Information;
