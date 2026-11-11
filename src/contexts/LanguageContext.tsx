import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Translations = {
  // Navigation
  'nav.home': { pt: 'Início', en: 'Home' },
  'nav.about': { pt: 'Quem Somos', en: 'About Us' },
  'nav.benefits': { pt: 'Benefícios', en: 'Benefits' },
  'nav.courses': { pt: 'Cursos', en: 'Courses' },
  'nav.testimonials': { pt: 'Depoimentos', en: 'Testimonials' },
  'nav.gallery': { pt: 'Galeria', en: 'Gallery' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  'nav.propolis': { pt: 'Curso Própolis', en: 'Propolis Course' },
  'nav.mead': { pt: 'Curso Hidromel', en: 'Mead Course' },
  'nav.calculator': { pt: 'Calculadora de Hidromel', en: 'Mead Calculator' },
  'courses.mead.badge': { pt: 'CURSO COMPLETO', en: 'FULL COURSE' },
  'courses.mead.title': { pt: 'Produção de Hidromel e Espumante Artesanal', en: 'Craft Mead and Sparkling Mead Production' },
  'courses.mead.description': { pt: '7 módulos completos, do mosto ao envase. Multiplique o valor do seu mel em até 10x.', en: '7 complete modules, from must to bottling. Multiply the value of your honey up to 10x.' },
  'courses.mead.cta': { pt: 'Ver detalhes do curso', en: 'View course details' },
  'featured.title': { pt: 'Cursos online disponíveis', en: 'Online courses available' },
  'featured.subtitle': { pt: 'Acesso imediato, certificado e garantia de 7 dias.', en: 'Instant access, certificate and 7-day guarantee.' },
  'featured.propolis.title': { pt: 'Própolis de Abelhas Sem Ferrão', en: 'Stingless Bee Propolis' },
  'featured.propolis.desc': { pt: '16 módulos sobre extração, processamento e uso da própolis.', en: '16 modules on propolis extraction, processing and use.' },
  'featured.cta': { pt: 'Ver curso', en: 'View course' },

  // Hero Section
  'hero.title': { 
    pt: 'Transforme sua paixão por abelhas em produção e renda sustentável', 
    en: 'Turn your passion for bees into sustainable production and income.' 
  },
  'hero.subtitle': { 
    pt: 'Aprenda com Victor Carrara, médico-veterinário e especialista em apicultura, que já capacitou mais de 1.800 alunos em todo o Brasil.', 
    en: 'Learn from Victor Carrara, veterinarian and beekeeping expert, who has trained over 1,800 students across Brazil.' 
  },
  'hero.proof': { pt: '+1800 alunos capacitados', en: '1,800+ students trained' },
  'hero.cta.primary': { pt: 'Inscreva-se no próximo curso', en: 'Sign Up for the Next Course' },
  'hero.cta.youtube': { pt: 'Canal BR Abelhas', en: 'BR Abelhas Channel' },
  'hero.cta.youtube_asf': { pt: 'Canal BR Abelhas ASF', en: 'BR Abelhas ASF Channel' },
  'hero.cta.instagram': { pt: 'Siga no Instagram', en: 'Follow on Instagram' },

  // Courses Section
  'courses.title': { pt: 'Nossos Cursos', en: 'Our Courses' },
  'courses.subtitle': { 
    pt: 'Descubra nossa ampla gama de cursos especializados em apicultura, desde o básico até técnicas avançadas. Cada curso é projetado para fornecer conhecimento prático e aplicável.', 
    en: 'Discover our wide range of specialized beekeeping courses, from basics to advanced techniques. Each course is designed to provide practical and applicable knowledge.' 
  },
  'courses.cta': { pt: 'Saiba Mais', en: 'Learn More' },
  'courses.categories.basic.title': { pt: 'Apicultura Básica e Avançada', en: 'Basic and Advanced Beekeeping' },
  'courses.categories.basic.description': { pt: 'Fundamentos e técnicas avançadas', en: 'Fundamentals and advanced techniques' },
  'courses.categories.asf.title': { pt: 'Abelhas Sem Ferrão (ASF)', en: 'Stingless Bees (ASF)' },
  'courses.categories.asf.description': { pt: 'Especialização em meliponicultura', en: 'Specialization in meliponiculture' },
  'courses.categories.asf.channelCta': { pt: 'Assista nosso canal especializado', en: 'Watch our specialized channel' },
  'courses.categories.specialized.title': { pt: 'Técnicas Especializadas', en: 'Specialized Techniques' },
  'courses.categories.specialized.description': { pt: 'Métodos profissionais avançados', en: 'Advanced professional methods' },
  'courses.categories.products.title': { pt: 'Produtos das Abelhas', en: 'Bee Products' },
  'courses.categories.products.description': { pt: 'Produção e beneficiamento', en: 'Production and processing' },
  'courses.categories.special.title': { pt: 'Cursos Especiais', en: 'Special Courses' },
  'courses.categories.special.description': { pt: 'Conhecimentos únicos e diferenciados', en: 'Unique and differentiated knowledge' },
  'courses.categories.personalized.title': { pt: 'Serviços Personalizados', en: 'Personalized Services' },
  'courses.categories.personalized.description': { pt: 'Acompanhamento individualizado', en: 'Individual mentoring' },
  'courses.basic.productive': { pt: 'Apicultura Produtiva', en: 'Productive Beekeeping' },
  'courses.basic.productiveAdvanced': { pt: 'Apicultura Produtiva Avançada', en: 'Advanced Productive Beekeeping' },
  'courses.asf.practical': { pt: 'ASF Abelhas Sem Ferrão na Prática', en: 'Stingless Bees in Practice' },
  'courses.asf.practicalAdvanced': { pt: 'ASF Abelhas Sem Ferrão na Prática Avançada', en: 'Advanced Stingless Bees in Practice' },
  'courses.asf.propolis': { pt: 'Produção de Própolis ASF', en: 'ASF Propolis Production' },
  'courses.asf.propolis.badge': { pt: 'CURSO ONLINE DISPONÍVEL', en: 'ONLINE COURSE AVAILABLE' },
  'courses.asf.propolis.description': { pt: 'Aprenda técnicas profissionais de produção de própolis de abelhas sem ferrão', en: 'Learn professional techniques for stingless bee propolis production' },
  'courses.asf.propolis.cta': { pt: 'Comprar Curso', en: 'Buy Course' },
  'courses.specialized.division': { pt: 'Métodos Divisão, Multiplicação e União de Enxames', en: 'Division, Multiplication and Union Methods of Swarms' },
  'courses.specialized.queens': { pt: 'Produção de Rainhas', en: 'Queen Production' },
  'courses.specialized.wax': { pt: 'Produção de Cera', en: 'Wax Production' },
  'courses.products.propolisApis': { pt: 'Produção de Própolis Apis', en: 'Apis Propolis Production' },
  'courses.products.pollen': { pt: 'Produção de Pólen', en: 'Pollen Production' },
  'courses.products.mead': { pt: 'Hidromel', en: 'Mead' },
  'courses.products.apitoxin': { pt: 'Apitoxina', en: 'Apitoxin' },
  'courses.products.honeyCompound': { pt: 'Composto de Mel', en: 'Honey Compound' },
  'courses.products.royalJelly': { pt: 'Produção de geleia real', en: 'Royal Jelly Production' },
  'courses.products.allProducts': { pt: 'Produtos das Abelhas', en: 'Bee Products' },
  'courses.special.telluric': { pt: 'Energia Telúrica', en: 'Telluric Energy' },
  'courses.special.soap': { pt: 'Saboaria', en: 'Soap Making' },
  'courses.personalized.mentoring': { pt: 'Mentorias', en: 'Mentoring' },
  'courses.personalized.projects': { pt: 'Projetos', en: 'Projects' },
  'courses.bottomCta.title': { pt: 'Não encontrou o que procura?', en: "Didn't find what you're looking for?" },
  'courses.bottomCta.description': { pt: 'Entre em contato conosco para cursos personalizados e consultoria especializada.', en: 'Contact us for personalized courses and specialized consulting.' },
  'courses.bottomCta.button': { pt: 'Falar com Especialista', en: 'Talk to Specialist' },

  // About Section
  'about.title': { pt: 'Quem Somos', en: 'About Us' },
  'about.content': { 
    pt: 'Somos uma família dedicada à criação de abelhas. Eu, Victor Carrara, sou médico-veterinário de formação e apicultor e meliponicultor por paixão e profissão. Minha trajetória com as abelhas é marcada por anos de experiência na criação, no manejo e na produção de qualidade. Essa vivência, aliada ao conhecimento técnico e científico, me permite oferecer cursos completos, que unem prática de campo, ciência atualizada e a paixão pelo que fazemos.', 
    en: 'We are a family dedicated to beekeeping. I, Victor Carrara, am a veterinarian by training and a beekeeper and stingless beekeeper by passion and profession. My journey with bees is marked by years of experience in breeding, management, and quality production. This experience, combined with technical and scientific knowledge, allows me to offer complete courses that unite field practice, updated science, and passion for what we do.' 
  },
  'about.cta': { pt: 'Quero aprender agora', en: 'I Want to Learn Now' },

  // Mission Section
  'mission.title': { pt: 'Nossa Missão', en: 'Our Mission' },
  'mission.content': { 
    pt: 'Aprenda, produza e gere renda com conhecimento, experiência e paixão pelas abelhas.', 
    en: 'Learn, produce, and generate income with knowledge, experience, and passion for bees.' 
  },

  // Why Choose Us
  'why.title': { pt: 'Por que fazer um curso com a Br Abelhas?', en: 'Why take a course with Br Abelhas?' },
  'why.content': { 
    pt: 'Oferecemos cursos de apicultura e meliponicultura com qualidade, conteúdo atualizado e preços acessíveis, pensados para ajudar você a aumentar sua produtividade e transformar seu trabalho com abelhas em renda real.', 
    en: 'We offer beekeeping and stingless beekeeping courses with high-quality, up-to-date content and affordable prices, designed to help you boost your productivity and turn your work with bees into real income.' 
  },

  // Benefits
  'benefits.title': { pt: 'Benefícios dos Nossos Cursos', en: 'Benefits of Our Courses' },
  'benefits.updated': { pt: 'Conteúdo Atualizado', en: 'Updated Content' },
  'benefits.practical': { pt: 'Prática de Campo', en: 'Field Practice' },
  'benefits.productivity': { pt: 'Aumento de Produtividade', en: 'Increased Productivity' },
  'benefits.income': { pt: 'Transformar Paixão em Renda', en: 'Turn Passion into Income' },
  'benefits.cta': { pt: 'Quero garantir minha vaga', en: 'Reserve My Spot' },

  // Lead Magnet
  'leadmagnet.title': { pt: 'Produção de Própolis Abelhas Sem Ferrão', en: 'Stingless Bee Propolis Production' },
  'leadmagnet.subtitle': { pt: 'O primeiro e único material no Brasil totalmente dedicado à produção de própolis de ASF, desenvolvido para quem deseja produzir esse produto com qualidade e alto valor comercial.', en: 'The first and only material in Brazil fully dedicated to ASF propolis production, developed for those who want to produce this product with quality and high commercial value.' },
  'leadmagnet.cta': { pt: 'Comprar E-book', en: 'Buy E-book' },
  'leadmagnet.price': { pt: 'R$ 97,00', en: 'R$ 97.00' },
  'leadmagnet.installments': { pt: 'ou 12x de R$ 10,03', en: 'or 12x R$ 10.03' },
  'leadmagnet.guarantee': { pt: 'Garantia de 7 dias', en: '7-day guarantee' },
  'leadmagnet.benefit1': { pt: 'Técnicas de manejo para estimular a produção', en: 'Management techniques to stimulate production' },
  'leadmagnet.benefit2': { pt: 'Métodos de coleta, armazenamento e processamento', en: 'Collection, storage and processing methods' },
  'leadmagnet.benefit3': { pt: 'Boas práticas sanitárias e padronização', en: 'Sanitary practices and standardization' },

  // Social Proof
  'social.title': { pt: '+ de 1.800 alunos já transformaram sua relação com as abelhas', en: '1,800+ students have already transformed their relationship with bees' },
  'social.cta': { pt: 'Junte-se a eles e transforme sua paixão em produtividade', en: 'Join them and transform your passion into productivity' },

  // Gallery
  'gallery.title': { pt: 'Veja nossos alunos em ação', en: 'See our students in action' },
  'gallery.video.title': { pt: 'Colmeia Sem Rainha? Deixa as abelhas falarem: identifique pelo som', en: 'Queenless Hive? Let the bees speak: identify by sound' },

  // Awards
  'awards.badge': { pt: 'Reconhecimento', en: 'Recognition' },
  'awards.title': { pt: 'Prêmios e Reconhecimentos', en: 'Awards & Recognition' },
  'awards.subtitle': { pt: 'Excelência reconhecida pela FARGS-RS no 3º Concurso ASF-RS', en: 'Excellence recognized by FARGS-RS at the 3rd ASF-RS Contest' },
  'awards.event': { pt: '3º Concurso ASF-RS', en: '3rd ASF-RS Contest' },
  'awards.gold.product': { pt: 'Mel de Jataí', en: 'Jataí Honey' },
  'awards.silver.product': { pt: 'Mel de Borá', en: 'Borá Honey' },
  'awards.footer': { pt: 'Qualidade comprovada e reconhecida por especialistas do setor', en: 'Proven quality recognized by industry experts' },

  // Contact
  'contact.whatsapp.message': { 
    pt: 'Olá! Quero informações sobre o próximo curso de apicultura.', 
    en: "Hi! I'd like information about the next beekeeping course." 
  },

  // Footer
  'footer.brand.description': { 
    pt: 'Transformando paixão por abelhas em conhecimento, produtividade e renda. Mais de 1.800 alunos já descobriram o potencial da apicultura e meliponicultura.', 
    en: 'Transforming passion for bees into knowledge, productivity and income. Over 1,800 students have already discovered the potential of beekeeping and stingless beekeeping.' 
  },
  'footer.channels': { pt: 'Nossos Canais', en: 'Our Channels' },
  'footer.youtube.main': { pt: 'Canal BR Abelhas (@BR_ABELHAS)', en: 'BR Abelhas Channel (@BR_ABELHAS)' },
  'footer.youtube.asf': { pt: 'Canal BR Abelhas ASF (@BRAbelhasASF) - Abelhas Sem Ferrão', en: 'BR Abelhas ASF Channel (@BRAbelhasASF) - Stingless Bees' },
  'footer.quick_links': { pt: 'Links Rápidos', en: 'Quick Links' },
  'footer.rights': { pt: 'Todos os direitos reservados', en: 'All rights reserved' },
  'footer.privacy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
  'footer.made_by': { pt: 'Feito com 🐝 por Luiz Cesar – cesarcostar@gmail.com', en: 'Made with 🐝 by Luiz Cesar – cesarcostar@gmail.com' },

  // Professional Credential
  'hero.credential': { pt: 'Victor Carrara - Médico Veterinário', en: 'Victor Carrara - Veterinarian' },

  // Common
  'common.learn_more': { pt: 'Saiba mais', en: 'Learn more' },
  'common.contact_us': { pt: 'Entre em contato', en: 'Contact us' },
  'common.loading': { pt: 'Carregando...', en: 'Loading...' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};