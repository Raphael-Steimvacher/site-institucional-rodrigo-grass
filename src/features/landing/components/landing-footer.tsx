import { brand } from "@/features/landing/constants/landing-content";
import { BrandLogo } from "@/features/landing/components/brand-logo";

export function LandingFooter() {
  return (
    <footer className="border-t border-blue-100 bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo compact />
        <p>© 2026 {brand.name}. Todos os direitos reservados.</p>
        <p>{brand.region}</p>
      </div>
    </footer>
  );
}
