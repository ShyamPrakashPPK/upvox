"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent/90 shadow-[0_0_30px_rgba(201,162,39,0.2)] hover:shadow-[0_0_40px_rgba(201,162,39,0.35)]",
  secondary:
    "bg-white/5 text-text border border-border hover:bg-white/10 hover:border-accent/30",
  outline:
    "bg-transparent text-text border border-border hover:border-accent/50 hover:text-accent",
};

export function MagneticButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticButton({
    strength: reducedMotion ? 0 : 0.25,
  });

  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={reducedMotion ? undefined : handleMouseMove}
        onMouseLeave={reducedMotion ? undefined : handleMouseLeave}
        className={combinedClassName}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={reducedMotion || disabled ? undefined : handleMouseMove}
      onMouseLeave={reducedMotion || disabled ? undefined : handleMouseLeave}
      className={`${combinedClassName}${disabled ? " pointer-events-none opacity-60" : ""}`}
      whileTap={reducedMotion || disabled ? undefined : { scale: 0.97 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
