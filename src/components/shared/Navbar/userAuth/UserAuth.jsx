"use client";

import { adminIcon } from "@/assets/images";
import CustomForm from "@/components/ui/CustomForm";
import Modal from "@/components/ui/Modal";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const UserAuth = () => {
  const form = useForm(); // Initialize the form object

  const onSubmit = (data) => {
    // Handle form submission here
  };

  return (
    <div className="flex items-center gap-2 md:gap-3 lg:gap-3 xl:gap-x-4">
      <div className="h-[25px] w-[25px] lg:h-[30px] lg:w-[30px]">
        <Image src={adminIcon} alt="admin" />
      </div>
      {/* modal */}
      <Modal buttonName="Sign in" buttonSize="sm" className="sm:max-w-[350px]">
        <DialogTitle className="text-center font-medium text-black lg:font-semibold">
          Login
        </DialogTitle>
        {/* sign in form */}
        <CustomForm form={form} onSubmit={onSubmit} buttonName="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox />
              <Label>Remember me</Label>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              forgot password?
            </div>
          </FormDescription>
        </CustomForm>
        <DialogDescription className="text-center">
          Don&apos;t have an account? <Link href="/">Sign Up</Link>
        </DialogDescription>
      </Modal>
    </div>
  );
};

export default UserAuth;
