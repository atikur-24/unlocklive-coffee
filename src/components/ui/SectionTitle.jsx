import { bakilda } from "@/assets/Fonts/font";

const SectionTitle = ({ title, style, position, subTitle }) => {
  return (
    <div className={position === "center" ? "text-center" : "text-right"}>
      <div className="flex items-center justify-center gap-2.5 lg:justify-normal">
        {style === "left" && (
          <div className="h-[3px] w-12 bg-gradient-to-l from-my-secondary md:w-14" />
        )}
        <h2 className="font-['Lemonada'] text-my-secondary">{subTitle}</h2>
      </div>
      <h2
        className={`${bakilda.className} mt-2.5 text-center text-[22px] leading-[30px] lg:mt-3 lg:text-left lg:text-4xl xl:text-[44px] xl:leading-[60px]`}
      >
        {title}
      </h2>
      {style === "right" && (
        <div className="h-[3px] w-12 bg-gradient-to-r from-my-secondary md:w-14" />
      )}
    </div>
  );
};

export default SectionTitle;
