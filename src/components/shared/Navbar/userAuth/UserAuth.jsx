"use client";
import { adminIcon } from "@/assets/images";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogTitle } from "@/components/ui/dialog";
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
      <Modal buttonName="Sign in">
        <DialogTitle className="text-center font-medium text-black lg:font-semibold">
          Login Your Account
        </DialogTitle>
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
            <DialogFooter>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </Form>
      </Modal>
    </div>
  );
};

export default UserAuth;
