"use client";
import { FormField, FormLabel, FormControl, FormDescription, FormMessage, FormItem } from "@/components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({ children, name }: { children: React.ReactNode; name: string }) => {
  const form = useFormContext();
  return (
    <FormField 
      control={form.control}
      name={name}
      render={() => (
        <FormItem className=" w-full">
          <FormLabel />
          <FormControl>{children}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
