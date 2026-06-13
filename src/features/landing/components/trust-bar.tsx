import { benefitIconMap } from "@/features/landing/components/landing-icons";
import { trustHighlights } from "@/features/landing/constants/landing-content";

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8" aria-label="Destaques de confiança">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/10 md:grid-cols-3 md:p-5">
        {trustHighlights.map((item) => {
          const Icon = benefitIconMap[item.icon];

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-xl px-2 py-3 md:justify-center md:border-r md:border-blue-100 md:last:border-r-0"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-slate-950">{item.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{item.description}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
