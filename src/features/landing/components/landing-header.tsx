"use client";

import { Menu, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  brand,
  navigationItems,
  primaryWhatsappHref,
} from "@/features/landing/constants/landing-content";
import { BrandLogo } from "@/features/landing/components/brand-logo";
import { cn } from "@/lib/utils";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryWhatsappHref}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden h-12 rounded-xl bg-blue-700 px-5 text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800 lg:inline-flex",
          )}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Solicitar Orçamento
        </a>

        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-lg" }),
              "lg:hidden",
            )}
            aria-label="Abrir menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <BrandLogo compact />
              <SheetTitle>{brand.name}</SheetTitle>
              <SheetDescription>{brand.tagline}</SheetDescription>
            </SheetHeader>

            <nav className="mt-6 grid gap-2" aria-label="Menu mobile">
              {navigationItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetFooter>
              <SheetClose asChild>
                <a
                  href={primaryWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-xl bg-blue-700 text-white hover:bg-blue-800",
                  )}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Solicitar Orçamento
                </a>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
