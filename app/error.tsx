"use client";

import { useEffect } from "react";
import { Button } from "@/components/shared/Button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps): JSX.Element => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <Button variant="primary" size="sm" onClick={reset}>
        Try again
      </Button>
    </div>
  );
};

export default Error;


