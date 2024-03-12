import arrow from "@/assets/images/icon/long-arrow.png";
import video from "@/assets/images/icon/video.svg";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Information = () => {
  return (
    <Container>
      <div>
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
    </Container>
  );
};

export default Information;
