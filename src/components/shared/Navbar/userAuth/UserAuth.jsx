"use client";
import { adminIcon } from "@/assets/images";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const UserAuth = () => {
  const form = useForm(); // Initialize the form object

  const onSubmit = (data) => {
    // Handle form submission here
  };

  return (
    <div className="inline-flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-x-[15px]">
      <div className="h-[25px] w-[25px] lg:h-[30px] lg:w-[30px]">
        <Image src={adminIcon} alt="admin" />
      </div>
      <Dialog>
        <DialogTrigger>Sign in</DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-center font-medium text-black lg:font-semibold">
              Login Your Account
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="">
              <Label htmlFor="name" className="">
                Email
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="">
                Password
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
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
