import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Modal = ({ children, className, buttonName, contentClass }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold">{buttonName}</Button>
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", className)}>
        <div className={cn("grid gap-4 py-4", contentClass)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
