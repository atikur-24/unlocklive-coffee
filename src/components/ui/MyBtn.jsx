import { cn } from "../lib/utls";

const Button = ({ className, children }) => {
  return <button className={cn(className)}>{children}</button>;
};

export default Button;
