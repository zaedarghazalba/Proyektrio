// hooks/useCursor.ts
"use client";

import { useEffect, useState } from "react";

export type CursorState = "default" | "hover" | "view";

export function useCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-cursor='view']")) {
        setCursorState("view");
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='hover']")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return cursorState;
}
