import { bakilda } from "@/assets/Fonts/font";

const SectionTitle = ({
  title,
  subTitle,
  className,
  leftStyle,
  rightStyle,
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2.5">
        <div
          className={`${leftStyle} rightStyle, h-[3px] w-12 bg-gradient-to-l from-my-secondary md:w-14`}
        />
        <h2 className="font-['Lemonada'] text-my-secondary">{subTitle}</h2>
        <div
          className={`${rightStyle} h-[3px] w-12 bg-gradient-to-r from-my-secondary md:w-14`}
        />
      </div>
      <h2
        className={`${bakilda.className} mt-2.5 text-[22px] leading-[30px] lg:mt-3 lg:text-4xl xl:text-[44px] xl:leading-[60px]`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
