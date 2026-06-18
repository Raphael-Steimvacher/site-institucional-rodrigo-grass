export type NavigationItem = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  icon: "whatsapp" | "phone" | "instagram" | "map";
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "bath" | "sparkles" | "balcony" | "door" | "window" | "shield" | "wrench";
  visual: "bathroom" | "mirror" | "balcony" | "door" | "window" | "guardrail" | "maintenance";
  image: {
    src: string;
    alt: string;
  };
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: "clock" | "worker" | "budget" | "quality" | "measure" | "guarantee";
};
