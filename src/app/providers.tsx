"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

export function Providers({ children }: PropsWithChildren) {
  // Add this to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Only show the UI after first client-side render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same structure but no theme switching during SSR
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
