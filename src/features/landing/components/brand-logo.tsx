import Image from "next/image";

import { brand } from "@/features/landing/constants/landing-content";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className, compact = false }: BrandLogoProps) {
  return (
    <a
      href="#inicio"
      className={cn(
        "flex min-w-0 items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
      aria-label={`${brand.name} - voltar ao início`}
    >
      <span className="relative flex size-13 shrink-0 items-end justify-center overflow-hidden rounded-xl bg-blue-50 sm:size-15">
        <Image
          src="/images/glazier-mascot.png"
          alt=""
          width={160}
          height={160}
          className="absolute -bottom-4 h-17 w-auto sm:h-19"
          priority
        />
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block text-sm font-bold text-slate-900 sm:text-base">
            Vidraçaria
          </span>
          <span className="block text-xl font-extrabold text-blue-700 sm:text-2xl">
            Rodrigo GRASS
          </span>
        </span>
      )}
    </a>
  );
}
