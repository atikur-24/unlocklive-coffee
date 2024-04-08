import { cn } from "../lib/utls";
import { Drawer, DrawerContent } from "./drawer";

const SideDrawer = ({ className, children, button }) => {
  return (
    <Drawer>
      {button}
      <DrawerContent>
        <div className={cn("mx-auto w-full max-w-sm", className)}>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
