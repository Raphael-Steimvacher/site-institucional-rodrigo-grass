import {
  Award,
  Bath,
  Building2,
  Camera,
  Clock3,
  DoorOpen,
  FileCheck2,
  Hammer,
  MapPin,
  MessageCircle,
  PanelTop,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type {
  BenefitItem,
  ContactLink,
  ServiceItem,
} from "@/features/landing/types/landing";

export const serviceIconMap: Record<ServiceItem["icon"], LucideIcon> = {
  bath: Bath,
  sparkles: Sparkles,
  balcony: Building2,
  door: DoorOpen,
  window: PanelTop,
  shield: ShieldCheck,
  wrench: Wrench,
};

export const benefitIconMap: Record<BenefitItem["icon"], LucideIcon> = {
  clock: Clock3,
  worker: Hammer,
  budget: FileCheck2,
  quality: ShieldCheck,
  measure: Ruler,
  guarantee: Award,
};

export const contactIconMap: Record<ContactLink["icon"], LucideIcon> = {
  whatsapp: MessageCircle,
  phone: Phone,
  instagram: Camera,
  map: MapPin,
};
