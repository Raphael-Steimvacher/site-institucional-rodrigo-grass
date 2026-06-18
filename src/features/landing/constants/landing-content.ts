import type {
  BenefitItem,
  ContactLink,
  NavigationItem,
  ServiceItem,
} from "@/features/landing/types/landing";

export const brand = {
  name: "Rodrigo GRASS",
  tagline: "Vidros e espelhos sob medida",
  region: "Atendemos São Paulo e região",
  logoAlt: "Mascote vidraceiro da Rodrigo GRASS",
};

export const contact = {
  whatsappNumber: "5511978488710",
  whatsappDisplay: "(11) 97848-8710",
  phoneDisplay: "(11) 97848-8710",
  phoneHref: "tel:+5511978488710",
  instagram: "@digooo44",
  instagramHref: "https://www.instagram.com/digooo44/",
  address: "Rua dos Ipês, 320 - Ferraz de vasconcelos, SP",
  mapHref: "https://maps.google.com/?q=Rua%20dos%20Ipês%20320%20Ferraz%20de%20Vasconcelos%20SP",
};

const whatsappText = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para serviços de vidraçaria.",
);

export const primaryWhatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${whatsappText}`;

export const navigationItems: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
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
    description: "Serviços especializados",
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
    image: {
      src: "/images/landing/service-bathroom.webp",
      alt: "Box de vidro instalado em banheiro moderno com ferragens cromadas",
    },
  },
  {
    title: "Espelhos Sob Medida",
    description: "Peças personalizadas para ampliar, iluminar e valorizar ambientes.",
    icon: "sparkles",
    visual: "mirror",
    image: {
      src: "/images/landing/service-mirror.webp",
      alt: "Espelho sob medida em ambiente residencial claro e elegante",
    },
  },
  {
    title: "Sacadas e Fechamentos",
    description: "Proteção e conforto com vista livre e instalação bem planejada.",
    icon: "balcony",
    visual: "balcony",
    image: {
      src: "/images/landing/service-balcony.webp",
      alt: "Fechamento de sacada com painéis de vidro transparentes",
    },
  },
  {
    title: "Portas de Vidro",
    description: "Sofisticação e modernidade para casas, lojas e escritórios.",
    icon: "door",
    visual: "door",
    image: {
      src: "/images/landing/service-door.webp",
      alt: "Porta de vidro moderna com ferragens metálicas em entrada comercial",
    },
  },
  {
    title: "Janelas de Vidro",
    description: "Ventilação, iluminação e design com qualidade no acabamento.",
    icon: "window",
    visual: "window",
    image: {
      src: "/images/landing/service-window.webp",
      alt: "Janela de vidro residencial com esquadria fina e luz natural",
    },
  },
  {
    title: "Guarda-corpos e Corrimãos",
    description: "Segurança com visual leve para escadas, sacadas e áreas externas.",
    icon: "shield",
    visual: "guardrail",
    image: {
      src: "/images/landing/service-guardrail.webp",
      alt: "Guarda-corpo de vidro temperado com fixadores metálicos",
    },
  },
  {
    title: "Manutenção e Instalação",
    description: "Ajustes, trocas e instalação de vidros com cuidado técnico.",
    icon: "wrench",
    visual: "maintenance",
    image: {
      src: "/images/landing/service-maintenance.webp",
      alt: "Vidraceiro ajustando porta de vidro com ferramentas de manutenção",
    },
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
