"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
