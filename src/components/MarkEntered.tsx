"use client";

import { useEffect } from "react";

export function MarkEntered() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      document.documentElement.classList.add("has-entered");
    }, 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
