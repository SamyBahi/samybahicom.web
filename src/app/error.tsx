"use client"; // Error components must be Client Components

import MainContainer from "@/components/ui/MainContainer";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <MainContainer>
      <h1 className="text-3xl font-bold">{error.message}</h1>
      <h2 className="text-xl mt-10">Something went wrong!</h2>
      <button
        className="underline mt-10"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </MainContainer>
  );
}
