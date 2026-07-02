"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-text",
        className,
      )}
      {...props}
    >
      <div className="aurora-container absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "aurora-layer",
            showRadialGradient && "aurora-layer--masked",
          )}
        />
      </div>
      {children}
    </div>
  );
};
