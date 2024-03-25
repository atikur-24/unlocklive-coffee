import { bakilda } from "@/assets/Fonts/font";
import { cn } from "../lib/utls";

const SectionTitle = ({
  title,
  subTitle,
  className,
  leftStyle,
  rightStyle,
  bottomStyle,
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "h-[2px] w-12 bg-gradient-to-l from-my-secondary md:h-[3px] md:w-14",
            leftStyle,
          )}
        />
        <h2 className="font-['Lemonada'] text-my-secondary">{subTitle}</h2>
        <div
          className={cn(
            "h-[2px] w-12 bg-gradient-to-r from-my-secondary md:h-[3px] md:w-14",
            rightStyle,
          )}
        />
      </div>
      {bottomStyle && (
        <div className="mt-1.5 h-[2px] w-[100px] bg-gradient-to-l from-[#df745151] via-my-secondary to-[#df745151] md:mt-2 md:w-[124px]" />
      )}
      <h2
        className={`${bakilda.className} mt-2.5 text-[22px] leading-[30px] lg:mt-3 lg:text-4xl xl:text-[44px] xl:leading-[60px]`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
