"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const OtpModal = ({
  accountId,
  email,
}: {
  accountId: string;
  email: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // API call to verify OTP
      const sessionId = await verifySecret({ accountId, password });
      if (sessionId) {
        router.push("/");
      }
    } catch (e) {
      console.log("Failed to verify OTP. ", e);
    }
    setIsLoading(false);
  };

  const handelResendOTP = async () => {
    //   call API to resend OTP
    await sendEmailOTP(email);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className={"shad-alert-dialog"}>
        <AlertDialogHeader className={"relative flex justify-center"}>
          <AlertDialogTitle className={"h2 text-center"}>
            Enter Your OTP
            <Image
              src={"/assets/icons/close-dark.svg"}
              alt={"close"}
              width={20}
              height={20}
              onClick={() => setIsOpen(false)}
              className={"otp-close-button"}
            />
          </AlertDialogTitle>
          <AlertDialogDescription
            className={"subtitle-2 text-center text-light-100"}
          >
            We have Send a code to{" "}
            <span className={"pl-1 text-brand"}>{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className={"shad-otp"}>
            <InputOTPSlot index={0} className={"shad-otp-slot"} />
            <InputOTPSlot index={1} className={"shad-otp-slot"} />
            <InputOTPSlot index={2} className={"shad-otp-slot"} />
            {/* <InputOTPSeparator /> */}
            <InputOTPSlot index={3} className={"shad-otp-slot"} />
            <InputOTPSlot index={4} className={"shad-otp-slot"} />
            <InputOTPSlot index={5} className={"shad-otp-slot"} />
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
          <div className={"flex w-full flex-col gap-4"}>
            <AlertDialogAction
              onClick={handelSubmit}
              className={"shad-submit-btn"}
            >
              Submit
              {isLoading && (
                <Image
                  src={"/assets/icons/loader.svg"}
                  alt={"loader"}
                  width={24}
                  height={24}
                  className={"ml-2 animate-spin"}
                />
              )}
            </AlertDialogAction>
            <div className={"subtitle-2 mt-2 text-center text-light-100"}>
              Didn&apos;t get the Code?
              <Button
                type={"button"}
                variant={"link"}
                className={"pl-1 text-brand"}
                onClick={handelResendOTP}
              >
                Click to resend
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default OtpModal;
