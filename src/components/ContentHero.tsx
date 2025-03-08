"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

const ContentHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="h-24"></div>

      <div className="relative w-[100vw] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] cursor-default">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple via-[#8A2BE2] to-primary-green opacity-80"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>

        <section
          className="pt-28 md:pt-24 pb-24 relative z-10 mx-auto max-w-5xl px-4 cursor-default"
          ref={containerRef}
        >
          <div className="text-center mb-8 cursor-default">
            {mounted ? (
              <TextCursorProximity
                label="Crafting Stories that Captivate & Convert"
                className="text-4xl md:text-6xl font-bold will-change-transform cursor-default"
                styles={{
                  transform: {
                    from: "scale(1)",
                    to: "scale(1.08)",
                  },
                  color: {
                    from: "#FFFFFF",
                    to: isDark ? "#FFD700" : "#00FFBF",
                  },
                  textShadow: {
                    from: "0 0 1px rgba(255, 255, 255, 0.1)",
                    to: isDark
                      ? "0 0 8px rgba(255, 215, 0, 0.4)"
                      : "0 0 8px rgba(0, 255, 191, 0.4)",
                  },
                }}
                falloff="gaussian"
                radius={120}
                containerRef={containerRef}
              />
            ) : (
              <h1 className="text-4xl md:text-6xl font-bold cursor-default">
                Crafting Stories that Captivate & Convert
              </h1>
            )}
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            In a digital world overflowing with content, we make yours the
            needle that doesn&apos;t just stand out—but magnetizes the haystack.
          </p>
        </section>
      </div>
    </>
  );
};

export default ContentHero;
