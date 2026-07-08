import Image from "next/image";
import { AGENCY_LOGO, AGENCY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-16 md:h-20",
} as const;

const sizeDimensions = {
  sm: { width: 120, height: 32 },
  md: { width: 150, height: 40 },
  lg: { width: 240, height: 64 },
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
  const { width, height } = sizeDimensions[size];

  return (
    <Image
      src={AGENCY_LOGO}
      alt={`${AGENCY_NAME} — Digital Marketing Agency in Kerala`}
      width={width}
      height={height}
      priority={priority}
      className={cn("w-auto object-contain", sizeClasses[size], className)}
    />
  );
}
