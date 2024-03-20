import { cn } from "../lib/utls";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-10 2xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
