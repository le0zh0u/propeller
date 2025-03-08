"use client";

import { useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

type ElementRef = HTMLElement | HTMLDivElement | null;

export function useMousePositionRef(containerRef: React.RefObject<ElementRef>) {
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: Event) => {
      if (!containerRef.current) return;

      // 确保事件是 MouseEvent 类型
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate position relative to the container
      mousePosition.current = {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    };

    // Initialize with center position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return mousePosition;
}
