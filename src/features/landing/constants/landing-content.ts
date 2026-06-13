import type {
  BenefitItem,
  ContactLink,
  NavigationItem,
  ServiceItem,
} from "@/features/landing/types/landing";

export const brand = {
  name: "Nome da Vidraçaria",
  tagline: "Vidros e espelhos sob medida",
  region: "Atendemos São Paulo e região",
  logoAlt: "Mascote vidraceiro da Nome da Vidraçaria",
};

export const contact = {
  whatsappNumber: "5500000000000",
  whatsappDisplay: "(11) 99999-9999",
  phoneDisplay: "(11) 3333-3333",
  phoneHref: "tel:+551133333333",
  instagram: "@seuinstagram",
  instagramHref: "https://www.instagram.com/seuinstagram",
  address: "Rua das Flores, 123 - São Paulo, SP",
  mapHref: "https://maps.google.com/?q=Rua%20das%20Flores%20123%20Sao%20Paulo%20SP",
};

const whatsappText = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para serviços de vidraçaria.",
);

export const primaryWhatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${whatsappText}`;

export const navigationItems: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const trustHighlights: BenefitItem[] = [
  {
    title: "Atendimento rápido",
    description: "Resposta ágil no WhatsApp",
    icon: "clock",
  },
  {
    title: "Instalação profissional",
    description: "Equipe especializada",
    icon: "worker",
  },
  {
    title: "Orçamento sem compromisso",
    description: "Transparência e melhor preço",
    icon: "budget",
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Box para Banheiro",
    description: "Mais praticidade, segurança e acabamento limpo para o dia a dia.",
    icon: "bath",
    visual: "bathroom",
  },
  {
    title: "Espelhos Sob Medida",
    description: "Peças personalizadas para ampliar, iluminar e valorizar ambientes.",
    icon: "sparkles",
    visual: "mirror",
  },
  {
    title: "Sacadas e Fechamentos",
    description: "Proteção e conforto com vista livre e instalação bem planejada.",
    icon: "balcony",
    visual: "balcony",
  },
  {
    title: "Portas de Vidro",
    description: "Sofisticação e modernidade para casas, lojas e escritórios.",
    icon: "door",
    visual: "door",
  },
  {
    title: "Janelas de Vidro",
    description: "Ventilação, iluminação e design com qualidade no acabamento.",
    icon: "window",
    visual: "window",
  },
  {
    title: "Guarda-corpos e Corrimãos",
    description: "Segurança com visual leve para escadas, sacadas e áreas externas.",
    icon: "shield",
    visual: "guardrail",
  },
  {
    title: "Manutenção e Instalação",
    description: "Ajustes, trocas e instalação de vidros com cuidado técnico.",
    icon: "wrench",
    visual: "maintenance",
  },
];

export const differentiators: BenefitItem[] = [
  {
    title: "Materiais de qualidade",
    description:
      "Trabalhamos com vidros e ferragens de alto padrão para entregar durabilidade e segurança.",
    icon: "quality",
  },
  {
    title: "Medidas sob medida",
    description:
      "Projetos personalizados para cada necessidade, com precisão e acabamento impecável.",
    icon: "measure",
  },
  {
    title: "Garantia e confiança",
    description:
      "Serviço acompanhado do início ao pós-instalação, com compromisso e transparência.",
    icon: "guarantee",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: primaryWhatsappHref,
    actionLabel: "Falar no WhatsApp",
    icon: "whatsapp",
  },
  {
    label: "Telefone",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
    actionLabel: "Ligar agora",
    icon: "phone",
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramHref,
    actionLabel: "Seguir",
    icon: "instagram",
  },
  {
    label: "Endereço",
    value: contact.address,
    href: contact.mapHref,
    actionLabel: "Ver no mapa",
    icon: "map",
  },
];
