import { Calculator, CheckCircle2, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contactLinks, primaryWhatsappHref } from "@/features/landing/constants/landing-content";
import { contactIconMap } from "@/features/landing/components/landing-icons";
import { SectionHeading } from "@/features/landing/components/section-heading";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contato" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_48%,#e7f3ff_100%)] p-5 shadow-xl shadow-blue-950/10 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Fale conosco"
              title="Estamos prontos para te atender!"
              description="Peça seu orçamento agora mesmo e transforme seus ambientes com vidro."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => {
                const Icon = contactIconMap[item.icon];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-2xl border border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-blue-700">{item.label}</span>
                        <span className="mt-1 block truncate text-sm text-slate-700">{item.value}</span>
                      </span>
                    </div>
                    <span className="mt-4 inline-flex text-sm font-bold text-blue-700">
                      {item.actionLabel}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl bg-blue-700 p-6 text-white shadow-2xl shadow-blue-700/25">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Calculator className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold">Solicite seu orçamento</h3>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  É rápido, fácil e sem compromisso. Envie uma mensagem e conte o que precisa.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-blue-50">
              {["Atendimento rápido", "Orçamento claro", "Instalação profissional"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <a
              href={primaryWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-7 h-12 w-full rounded-xl bg-white text-blue-700 hover:bg-blue-50",
              )}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Quero um orçamento
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
