import { ButtonType } from "@/models/button/ButtonTypeEnum";
import { VisualizationType } from "@/models/content/VisualizationTypeEnu";
import { LandingPageModel } from "@/models/landing-page/LandingPageData";
import { SectionType } from "@/models/section/SectionTypeEnum";

export const mockLandingPages: LandingPageModel[] = [
  // ===== TEMPLATE 1 - Planejamento de Casamento =====
  {
    id: "1",
    title: "Planejamento de Casamento",
    slug: "planejeSeuCasamento",
    visits: 250,
    createdAt: new Date("2025-02-03"),
    updatedAt: new Date("2025-02-03"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "O Casamento dos Seus Sonhos",
          description:
            "Transformamos seu dia especial em momentos inesquecíveis.",
          image:
            "https://images.unsplash.com/photo-1529634899575-3c4f9e1d5c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "Nossos Serviços",
          description:
            "Desde a escolha do local até a decoração floral, cuidamos de tudo para você.",
          image:
            "https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_LEFT_TEXT_RIGHT,
          button: {
            enabled: true,
            text: "Agende uma Reunião",
            link: "https://exemplo.com/agendamento",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.CONTENT,
        content: {
          title: "Nossos Serviços",
          description:
            "Desde a escolha do local até a decoração floral, cuidamos de tudo para você.",
          image:
            "https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.TEXT_ONLY_VERTICAL,
          button: {
            enabled: true,
            text: "Agende uma Reunião",
            link: "https://exemplo.com/agendamento",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 3,
        type: SectionType.CONTENT,
        content: {
          title: "Nossos Serviços",
          description:
            "Desde a escolha do local até a decoração floral, cuidamos de tudo para você.",
          image:
            "https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_RIGHT_TEXT_LEFT,
          button: {
            enabled: true,
            text: "Agende uma Reunião",
            link: "https://exemplo.com/agendamento",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 4,
        type: SectionType.LINK,
        socialMedias: [
          {
            enabled: true,
            text: "Instagram",
            link: "https://instagram.com/planejamentocasamento",
            icon: "instagram", // Use strings para os ícones
            position: 0,
          },
          {
            text: "Facebook",
            link: "https://facebook.com/planejamentocasamento",
            icon: "facebook",
            position: 1,
          },
        ],
      },
    ],
  },
  // ===== TEMPLATE 2 - Blog de Viagens (Aprimorado) =====
  {
    id: "2",
    title: "Blog de Viagens",
    slug: "diarioDeViagem",
    visits: 420,
    createdAt: new Date("2025-01-20"),
    updatedAt: new Date("2025-01-20"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "Nutrição Esportiva",
          description: "Alcançe seus tão sonhados resultados.",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "Dê o próximo passo",
          description: "Confira nossos planos e agende uma consulta.",
          image:
            "https://images.unsplash.com/photo-1494475673543-6a6a27143b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_LEFT_TEXT_RIGHT,
          button: {
            text: "Saber mais",
            link: "https://exemplo.com/blog",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.BUTTON,
        button: {
          enabled: true,
          text: "Agende uma Reunião",
          link: "https://exemplo.com/agendamento",
          type: ButtonType.LINK,
          position: 0,
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 3,
        type: SectionType.BUTTON,
        button: {
          link: "https://exemplo.com/contato",
          text: "Entre em Contato",
          type: ButtonType.LINK,
          position: 0,
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 4,
        type: SectionType.LINK,
        socialMedias: [
          {
            text: "Instagram",
            link: "https://instagram.com/fitlife",
            icon: "instagram",
            position: 0,
          },
          {
            text: "TikTok",
            link: "https://tiktok.com/@fitlife",
            icon: "tiktok",
            position: 1,
          },
          {
            text: "Facebook",
            link: "https://facebook.com/fitlife",
            icon: "facebook",
            position: 2,
          },
        ],
      },
    ],
  },
  // ===== TEMPLATE 3 - Coach Fitness (Aprimorado) =====
  {
    id: "3",
    title: "Coach Fitness",
    slug: "fitComigo",
    visits: 320,
    createdAt: new Date("2025-01-10"),
    updatedAt: new Date("2025-01-10"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "FitLife Coaching",
          description:
            "Comece sua jornada para uma vida mais saudável hoje mesmo.",
          image:
            "https://images.unsplash.com/photo-1616627567328-49414e2f9aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "Treinos Personalizados",
          description:
            "Planos de treino feitos sob medida para seus objetivos.",
          image:
            "https://images.unsplash.com/photo-1571019613914-85f342c1d3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_RIGHT_TEXT_LEFT,
          button: {
            text: "Comece Agora",
            link: "https://exemplo.com/inscricao",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.LINK,
        socialMedias: [
          {
            text: "Instagram",
            link: "https://instagram.com/fitlife",
            icon: "instagram",
            position: 0,
          },
          {
            text: "TikTok",
            link: "https://tiktok.com/@fitlife",
            icon: "tiktok",
            position: 1,
          },
          {
            text: "Facebook",
            link: "https://facebook.com/fitlife",
            icon: "facebook",
            position: 2,
          },
        ],
      },
    ],
  },
  // ===== NOVO TEMPLATE 4 - Fotografia de Paisagem =====
  {
    id: "4",
    title: "Portfólio de Fotografia",
    slug: "paisagensIncríveis",
    visits: 180,
    createdAt: new Date("2025-03-05"),
    updatedAt: new Date("2025-03-05"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "Além do Olhar",
          description: "Capturando a beleza de cada paisagem.",
          image:
            "https://images.unsplash.com/photo-1502675973841-37f227c4274c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "Galeria de Obras",
          description:
            "Explore minha coleção de fotos de natureza e paisagens urbanas.",
          image:
            "https://images.unsplash.com/photo-1517726466986-74d32e92c10b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_TOP_TEXT_BELOW,
          button: {
            text: "Ver Portfólio Completo",
            link: "https://exemplo.com/portfolio",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.LINK,
        socialMedias: [
          {
            text: "500px",
            link: "https://500px.com/meuportfolio",
            icon: "500px",
            position: 0,
          },
          {
            text: "Unsplash",
            link: "https://unsplash.com/@meuportfolio",
            icon: "unsplash",
            position: 1,
          },
        ],
      },
    ],
  },
  // ===== NOVO TEMPLATE 5 - Receitas Veganas =====
  {
    id: "5",
    title: "Receitas Veganas",
    slug: "saborVegano",
    visits: 580,
    createdAt: new Date("2025-03-15"),
    updatedAt: new Date("2025-03-15"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "Culinária Consciente",
          description: "Pratos veganos deliciosos para todos os gostos.",
          image:
            "https://images.unsplash.com/photo-1542845607-b08e2e2a3b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "E-book Gratuito",
          description:
            "Baixe nosso e-book com 10 receitas rápidas para o dia a dia.",
          image:
            "https://images.unsplash.com/photo-1542845607-b08e2e2a3b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_LEFT_TEXT_RIGHT,
          button: {
            text: "Baixar Agora",
            link: "https://exemplo.com/ebook-vegano",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.LINK,
        socialMedias: [
          {
            text: "Instagram",
            link: "https://instagram.com/saborvegano",
            icon: "instagram",
            position: 0,
          },
          {
            text: "Pinterest",
            link: "https://pinterest.com/saborvegano",
            icon: "pinterest",
            position: 1,
          },
          {
            text: "TikTok",
            link: "https://tiktok.com/@saborvegano",
            icon: "tiktok",
            position: 2,
          },
        ],
      },
    ],
  },
  // ===== NOVO TEMPLATE 6 - Portfólio de Design =====
  {
    id: "6",
    title: "Portfólio de Design",
    slug: "designStudio",
    visits: 95,
    createdAt: new Date("2025-04-01"),
    updatedAt: new Date("2025-04-01"),
    sections: [
      {
        enabled: true,
        position: 0,
        type: SectionType.HEADER,
        header: {
          position: 0,
          title: "Design Studio",
          description: "Identidade visual, branding e design digital.",
          image:
            "https://images.unsplash.com/photo-1528695996024-e53f0b2f6f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 1,
        type: SectionType.CONTENT,
        content: {
          title: "Nossos Projetos",
          description:
            "Criamos soluções visuais para marcas que querem se destacar.",
          image:
            "https://images.unsplash.com/photo-1522881454530-9753c07e0569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          visualization: VisualizationType.IMAGE_LEFT_TEXT_RIGHT,
          button: {
            text: "Fale Conosco",
            link: "https://exemplo.com/contato",
            type: ButtonType.BUTTON,
            position: 0,
          },
        },
        socialMedias: [],
      },
      {
        enabled: true,
        position: 2,
        type: SectionType.LINK,
        socialMedias: [
          {
            text: "Behance",
            link: "https://behance.net/designstudio",
            icon: "behance",
            position: 0,
          },
          {
            text: "Dribbble",
            link: "https://dribbble.com/designstudio",
            icon: "dribbble",
            position: 1,
          },
          {
            text: "Instagram",
            link: "https://instagram.com/designstudio",
            icon: "instagram",
            position: 2,
          },
        ],
      },
    ],
  },
];
