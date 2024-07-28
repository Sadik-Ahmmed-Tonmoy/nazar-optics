"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { FieldValues } from "react-hook-form";
import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";

export function RegisterWithEmail() {
  const handleSubmit = (data: FieldValues, reset: any) => {
    console.log("Form Data:", data);
    // reset(); // Uncomment this line to reset the form after submission
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 16px 0px rgba(228, 237, 240, 0.80)" }}
      className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-4"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">Welcome to View Shield</h2>
      {/* <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p> */}

      <div className=" flex justify-center items-center px-4">
        <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
          Are you <FlipWords duration={2000} className="text-[#00a76b] dark:text-[#00a76b]" words={["sharp", "witty", "literate", "smart", "brilliant"]} /> ? <br />
          Then register now!
        </div>
      </div>

      <MyFormWrapper onSubmit={handleSubmit} className="flex flex-col gap-3 my-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-3">
          <MyFormInputAceternity name="firstName" label="First name" placeholder="Your First name" />
          <MyFormInputAceternity name="lastName" label="Last name" placeholder="Your Last name" />
        </div>
        <div className="flex flex-col gap-6 mb-4">
          <MyFormInputAceternity name="phone" label="Phone Number" placeholder="Your Phone Number" />
          <MyFormInputAceternity name="email" label="Email Address" placeholder="Enter Your Email Address" />
          <MyFormInputAceternity name="password" label="Password" placeholder="Enter Your Password" type="password" />
          <MyFormInputAceternity name="c_password" label="Confirm Password" placeholder="Re-type Your Password" type="password" />
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-[#00a76b] dark:from-zinc-900 dark:to-zinc-900 to-[#187c57] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center ps-2 px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">GitHub</span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center ps-2 px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
            <BottomGradient />
          </button>
        </div>
      </MyFormWrapper>

      <p className="mb-2 lg:mb-10 text-center text-neutral-600  dark:text-neutral-300 text-opacity-75 font-inter text-[14px] font-normal leading-normal">
        Already have an account?{" "}
        {/* <Link to={"/sign-up"}>
                                {" "}
                                <span className="text-black font-semibold">Register</span>
                            </Link> */}
        <LinkPreview url="https://www.youtube.com/" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#00a76b] to-[#00a76b] dark:text-[#00a76b]">
          Login
        </LinkPreview>
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
