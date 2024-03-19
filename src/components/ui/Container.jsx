import { cn } from "../lib/utls";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl lg:px-[100px] 2xl:px-[277px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
