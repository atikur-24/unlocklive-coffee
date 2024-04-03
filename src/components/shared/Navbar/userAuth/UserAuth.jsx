"use client";
import { adminIcon } from "@/assets/images";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const UserAuth = () => {
  return (
    <div className="inline-flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-x-[15px]">
      <div className="h-[25px] w-[25px] lg:h-[30px] lg:w-[30px]">
        <Image src={adminIcon} alt="admin" />
      </div>
      <Dialog>
        <DialogTrigger>Sign in</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center font-medium text-black lg:font-semibold">
              Login Your Account
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="">
                Email
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="">
                Password
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserAuth;
