"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";
import { WaitlistForm } from "./waitlist-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LogoIcon } from "./ui/logo-icon";

export default function WaitlistDialog() {
  const [display, setDisplay] = useState(true);

  return (
    <Dialog open={display} onOpenChange={setDisplay}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex flex-row items-center gap-2">
            <LogoIcon className="text-primary h-8 w-8"/>
            <DialogTitle className="text-lg font-bold">Welcome to Risk League!</DialogTitle>
          </div>
          <DialogDescription>
            Join our waitlist to be the first to know when we launch the future
            of competitive sports betting.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  );
}
