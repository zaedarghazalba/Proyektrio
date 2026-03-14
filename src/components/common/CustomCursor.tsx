// components/common/CustomCursor.tsx
"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useCursor, CursorState } from "@/hooks/useCursor";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const cursorState = useCursor();
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      // Lerp ring toward mouse position
      const lerping = 0.12;
      ringX.current += (x - ringX.current) * lerping;
      ringY.current += (y - ringY.current) * lerping;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [x, y]);

  const getRingClass = (state: CursorState): string => {
    switch (state) {
      case "hover":
        return "hover";
      case "view":
        return "view";
      default:
        return "";
    }
  };

  const getRingContent = (state: CursorState): string => {
    switch (state) {
      case "view":
        return "VIEW";
      default:
        return "";
    }
  };

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${getRingClass(cursorState)}`}
      >
        {getRingContent(cursorState)}
      </div>
    </>
  );
}
