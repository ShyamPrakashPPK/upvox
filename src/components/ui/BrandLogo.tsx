import { AGENCY_LOGO, AGENCY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-16 md:h-20",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  size = "sm",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={AGENCY_LOGO}
      alt={AGENCY_NAME}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("w-auto object-contain", sizeClasses[size], className)}
    />
  );
}
