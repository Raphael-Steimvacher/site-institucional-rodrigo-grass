import { Card } from "@/components/ui/card";
import { serviceIconMap } from "@/features/landing/components/landing-icons";
import type { ServiceItem } from "@/features/landing/types/landing";
import { cn } from "@/lib/utils";

const visualStyles: Record<ServiceItem["visual"], string> = {
  bathroom:
    "from-sky-100 via-white to-blue-100 before:left-8 before:top-8 before:h-32 before:w-24 after:right-8 after:top-10 after:h-34 after:w-20",
  mirror:
    "from-slate-100 via-white to-sky-100 before:left-10 before:top-8 before:h-36 before:w-28 after:right-8 after:top-12 after:h-28 after:w-20",
  balcony:
    "from-blue-100 via-white to-cyan-100 before:left-6 before:top-16 before:h-24 before:w-36 after:right-8 after:top-8 after:h-36 after:w-16",
  door:
    "from-sky-100 via-white to-slate-100 before:left-12 before:top-8 before:h-36 before:w-24 after:right-10 after:top-8 after:h-36 after:w-24",
  window:
    "from-blue-50 via-white to-sky-100 before:left-8 before:top-10 before:h-28 before:w-32 after:right-8 after:top-10 after:h-28 after:w-32",
  guardrail:
    "from-sky-100 via-white to-blue-100 before:left-4 before:top-20 before:h-18 before:w-44 after:right-8 after:top-12 after:h-34 after:w-16",
  maintenance:
    "from-slate-100 via-white to-blue-100 before:left-8 before:top-9 before:h-34 before:w-28 after:right-8 after:top-16 after:h-22 after:w-28",
};

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <Card className="h-full overflow-hidden rounded-2xl border-blue-100 bg-white p-0 shadow-sm shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10">
      <div
        className={cn(
          "relative h-44 overflow-hidden bg-gradient-to-br before:absolute before:rounded-md before:border before:border-white/80 before:bg-white/30 before:shadow-[inset_0_0_18px_rgba(255,255,255,0.6),0_18px_40px_rgba(37,99,235,0.14)] before:backdrop-blur-sm after:absolute after:rounded-md after:border after:border-white/80 after:bg-white/20 after:shadow-[inset_0_0_16px_rgba(255,255,255,0.52)]",
          visualStyles[service.visual],
        )}
      >
        <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="absolute top-5 left-5 flex size-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg shadow-blue-900/10">
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <div className="absolute right-5 bottom-5 h-px w-28 rotate-[-18deg] bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-base font-bold text-slate-950">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
      </div>
    </Card>
  );
}
