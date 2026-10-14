import { ViewTransition, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition name="page" share="page" enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}
