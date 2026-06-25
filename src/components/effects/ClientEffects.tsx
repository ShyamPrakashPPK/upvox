"use client";

import dynamic from "next/dynamic";

const CursorGlow = dynamic(
  () =>
    import("@/components/effects/CursorGlow").then((mod) => mod.CursorGlow),
  { ssr: false },
);

const GradientOrbs = dynamic(
  () =>
    import("@/components/effects/GradientOrbs").then((mod) => mod.GradientOrbs),
  { ssr: false },
);

export function ClientEffects() {
  return (
    <>
      <GradientOrbs />
      <CursorGlow />
    </>
  );
}
