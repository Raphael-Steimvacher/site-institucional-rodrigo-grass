import { SectionHeading } from "@/features/landing/components/section-heading";
import { ServicesCarousel } from "@/features/landing/components/services-carousel";

export function ServicesSection() {
  return (
    <section id="servicos" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Catálogo"
          title="Soluções em vidro para todos os ambientes"
          description="Escolha o tipo de serviço e chame a vidraçaria para receber uma orientação rápida pelo WhatsApp."
        />
        <div className="mt-8">
          <ServicesCarousel />
        </div>
      </div>
    </section>
  );
}
