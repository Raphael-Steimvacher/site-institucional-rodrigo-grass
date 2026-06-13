"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { serviceItems } from "@/features/landing/constants/landing-content";
import { ServiceCard } from "@/features/landing/components/service-card";

export function ServicesCarousel() {
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 3600,
        stopOnFocusIn: true,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const plugins = React.useMemo(() => [autoplay], [autoplay]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={plugins}
      className="mx-auto w-full max-w-7xl"
      aria-label="Catálogo de serviços de vidraçaria"
    >
      <CarouselContent className="-ml-4">
        {serviceItems.map((service) => (
          <CarouselItem
            key={service.title}
            className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ServiceCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        aria-label="Serviço anterior"
        className="top-[calc(50%-1rem)] left-2 size-10 border-blue-100 bg-white/90 text-blue-700 shadow-lg shadow-blue-950/10 hover:bg-blue-50 sm:-left-4 lg:-left-6"
      />
      <CarouselNext
        aria-label="Próximo serviço"
        className="top-[calc(50%-1rem)] right-2 size-10 border-blue-100 bg-white/90 text-blue-700 shadow-lg shadow-blue-950/10 hover:bg-blue-50 sm:-right-4 lg:-right-6"
      />
    </Carousel>
  );
}
