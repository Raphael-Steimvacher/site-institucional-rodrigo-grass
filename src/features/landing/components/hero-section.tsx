import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { brand, primaryWhatsappHref } from "@/features/landing/constants/landing-content";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-blue-100/80 
      bg-[linear-gradient(100deg,#f7fbff_0%,#eef7ff_52%,#dceeff_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_20rem),linear-gradient(90deg,rgba(255,255,255,0.85),rgba(255,255,255,0.15))]" />
      <div className="absolute right-0 bottom-0 hidden h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(15,101,210,0.08))] lg:block" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:min-h-165 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <Badge
            variant="secondary"
            className="mb-5 h-auto rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-blue-900"
          >
            Qualidade, segurança e transparência
          </Badge>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Rodrigo GRASS: vidros sob medida com{" "}
            <span className="text-blue-700">instalação impecável</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Transforme seus ambientes com box, espelhos, portas, janelas, sacadas e
            guarda-corpos feitos na medida, com acabamento limpo e atendimento direto pelo
            WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={primaryWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-13 rounded-xl bg-blue-700 px-6 text-base text-white shadow-xl shadow-blue-700/20 hover:bg-blue-800",
              )}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-13 rounded-xl border-blue-200 bg-white/70 px-6 text-base text-blue-800 hover:bg-blue-50",
              )}
            >
              Ver catálogo
            </a>
          </div>

          <div className="mt-8 flex max-w-md items-center gap-3 text-sm text-slate-600">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span>Atendemos residências, comércios e condomínios com projetos sob medida.</span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:max-w-none">
          <div className="absolute top-12 right-2 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-0 bottom-8 left-8 h-16 rounded-[100%] bg-slate-950/10 blur-xl" />
          <div className="absolute inset-y-6 right-0 w-1/2 rounded-l-[3rem] border-y border-l border-white/60 bg-white/20 shadow-2xl shadow-blue-900/10 backdrop-blur-sm" />
          <Image
            src="/images/glazier-mascot.png"
            alt={brand.logoAlt}
            width={794}
            height={1110}
            priority
            className="relative z-10 h-auto max-h-[460px] w-auto object-contain drop-shadow-2xl sm:max-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
