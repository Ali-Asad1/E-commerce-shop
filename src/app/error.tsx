"use client";

import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-3xl font-bold duration-300 animate-in">Something is wrong please try agin</h1>
      <Button onClick={reset} className="text-xl">
        Try Again
      </Button>
    </div>
  );
};
export default Error;
