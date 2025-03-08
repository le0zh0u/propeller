"use client";

import React, { CSSProperties, forwardRef, useRef } from "react";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

// Helper type that makes all properties of CSSProperties accept number | string
type CSSPropertiesWithValues = {
  [K in keyof CSSProperties]: string | number;
};

interface StyleValue<T extends keyof CSSPropertiesWithValues> {
  from: CSSPropertiesWithValues[T];
  to: CSSPropertiesWithValues[T];
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  styles: Partial<{
    [K in keyof CSSPropertiesWithValues]: StyleValue<K>;
  }>;
  containerRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
}

// Pure CSS approach without framer-motion hooks
const TextCursorProximity = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      label,
      styles,
      containerRef,
      radius = 50,
      falloff = "linear",
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const mousePositionRef = useMousePositionRef(containerRef);

    const calculateDistance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const calculateFalloff = (distance: number): number => {
      const normalizedDistance = Math.min(
        Math.max(1 - distance / radius, 0),
        1
      );

      switch (falloff) {
        case "exponential":
          return Math.pow(normalizedDistance, 2);
        case "gaussian":
          return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2);
        case "linear":
        default:
          return normalizedDistance;
      }
    };

    // Use regular requestAnimationFrame instead of Framer Motion hooks
    React.useEffect(() => {
      if (!containerRef.current) return;

      let animationFrameId: number;

      const animate = () => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        letterRefs.current.forEach((letterRef) => {
          if (!letterRef) return;

          const rect = letterRef.getBoundingClientRect();
          const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
          const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

          const distance = calculateDistance(
            mousePositionRef.current.x,
            mousePositionRef.current.y,
            letterCenterX,
            letterCenterY
          );

          const proximity = calculateFalloff(distance);

          // 更新字母的样式
          Object.entries(styles).forEach(([styleKey, styleValue]) => {
            // Calculate the interpolated value
            const from = styleValue.from as string | number;
            const to = styleValue.to as string | number;
            let interpolatedValue: string | number;

            if (typeof from === "number" && typeof to === "number") {
              interpolatedValue = from + (to - from) * proximity;
            } else {
              // 使用css变量处理字符串值的渐变
              if (proximity > 0.5) {
                interpolatedValue = to as string;
              } else {
                interpolatedValue = from as string;
              }
            }

            // 根据样式类型应用不同的处理方式
            try {
              if (styleKey === "transform") {
                letterRef.style.transform = interpolatedValue as string;
              } else if (styleKey === "color") {
                letterRef.style.color = interpolatedValue as string;
              } else {
                // 使用更安全的方式设置样式
                letterRef.setAttribute(
                  "style",
                  `${
                    letterRef.getAttribute("style") || ""
                  }; ${styleKey}: ${interpolatedValue}`
                );
              }
            } catch {
              // 静默处理错误
            }
          });
        });

        animationFrameId = window.requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
        }
      };
    }, [containerRef, styles, radius, falloff]);

    const words = label.split(" ");
    let letterIndex = 0;

    return (
      <span
        ref={ref}
        className={`${className} inline`}
        onClick={onClick}
        {...props}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter) => {
              const currentLetterIndex = letterIndex++;

              return (
                <span
                  key={currentLetterIndex}
                  ref={(el: HTMLSpanElement | null) => {
                    letterRefs.current[currentLetterIndex] = el;
                  }}
                  className="inline-block"
                  aria-hidden="true"
                >
                  {letter}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    );
  }
);

TextCursorProximity.displayName = "TextCursorProximity";
export default TextCursorProximity;
