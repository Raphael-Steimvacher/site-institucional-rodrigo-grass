import Image from "next/image";

import { Card } from "@/components/ui/card";
import { serviceIconMap } from "@/features/landing/components/landing-icons";
import type { ServiceItem } from "@/features/landing/types/landing";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <Card className="group h-full overflow-hidden rounded-2xl border-blue-100 bg-white p-0 shadow-sm shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10">
      <div className="relative h-48 overflow-hidden bg-blue-50">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
        <div className="absolute top-4 left-4 flex size-12 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg shadow-blue-900/10 backdrop-blur">
          <Icon className="size-6" aria-hidden="true" />
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-base font-bold text-slate-950">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
      </div>
    </Card>
  );
}
