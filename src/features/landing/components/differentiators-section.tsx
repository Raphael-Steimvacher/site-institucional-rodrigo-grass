import { benefitIconMap } from "@/features/landing/components/landing-icons";
import { differentiators } from "@/features/landing/constants/landing-content";

export function DifferentiatorsSection() {
  return (
    <section id="diferenciais" className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 shadow-sm shadow-blue-950/5 md:grid-cols-3 md:p-5">
        {differentiators.map((item) => {
          const Icon = benefitIconMap[item.icon];

          return (
            <article
              key={item.title}
              className="flex gap-4 rounded-xl bg-white/70 p-4 md:bg-transparent"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
