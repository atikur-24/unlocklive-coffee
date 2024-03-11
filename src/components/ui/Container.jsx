import { cn } from "../lib/utls";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto max-w-[1920px] lg:px-[100px] 2xl:px-[277px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
