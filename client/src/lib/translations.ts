import type { Language } from "@shared/schema";

export const translations: Record<Language, {
  nav: {
    home: string;
    programs: string;
    blog: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    learnMore: string;
    viewPrograms: string;
  };
  achievements: {
    title: string;
    subtitle: string;
    loading: string;
    error: string;
    items?: string[];
  };
  services: {
    title: string;
    subtitle: string;
    ipardTitle: string;
    ipardDesc: string;
    ipardFeature1: string;
    ipardFeature2: string;
    ipardFeature3: string;
    financialTitle: string;
    financialDesc: string;
    financialFeature1: string;
    financialFeature2: string;
    financialFeature3: string;
    consultingTitle: string;
    consultingDesc: string;
    consultingFeature1: string;
    consultingFeature2: string;
    consultingFeature3: string;
    learnMore: string;
  };
  clients: {
    title: string;
    subtitle: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    wantMore: string;
    newsletterDesc: string;
    loading: string;
    error: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    emailLabel: string;
    serviceInterest: string;
    message: string;
    selectService: string;
    ipardPrograms: string;
    financialAid: string;
    businessConsulting: string;
    businessPlanDev: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    errorDesc: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    ipard: string;
    financialAid: string;
    consulting: string;
    businessPlans: string;
    marketAccess: string;
    GrantsAndFinancing:string;
    companyTitle: string;
    aboutUs: string;
    ourTeam: string;
    careers: string;
    contactUs: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    subscribe: string;
    subscribing: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    errorDesc: string;
  };
  home: {
    loadingContent: string;
    slide1Title: string;
    slide1Subtitle: string;
    slide2Title: string;
    slide2Subtitle: string;
    slide3Title: string;
    slide3Subtitle: string;
  };
    about: {
        heroTitle: string;
        heroSubtitle: string;
        whoWeAreTitle: string;
        overviewP1: string;
        overviewP2: string;
        regionalDevTitle: string;
        serbiaOffice: string;
        bosniaOffice: string;
        accountingOffice: string;
        whatWeOfferTitle: string;
        accessFinanceTitle: string;
        accessFinanceList: string[];
        marketAccessTitle: string;
        marketAccessList: string[];
        specialReportsTitle: string;
        specialReportsList: string[];
        missionStatement: string;
        valuesTitle: string; // The title for the section
        valuesSubtitle: string; // The subtitle for the section
        teamTitle: string;
        teamSubtitle: string;
        ctaJoinTitle: string;
        ctaJoinSubtitle: string;
        viewPositions: string;
        contactUsCta: string;
        // 👇 NEW: Define the nested values object here
        values: {
            "Results-Oriented": string;
            "We focus on delivering measurable outcomes and tangible value to our clients": string;
            "Client-Centric": string;
            "Your success is our priority. We build long-term partnerships based on trust": string;
            "Excellence": string;
            "We maintain the highest standards of professionalism and expertise": string;
            "Innovation": string;
            "We leverage the latest technologies and methodologies to drive success": string;
        };
    };
  team: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
    methodsTitle: string;
    methodsSubtitle: string;
    getDirections: string;
    headquartersLabel: string;
    officesTitle: string;
    businessHoursTitle: string;
    dayMonFri: string;
    daySaturday: string;
    daySunday: string;
    closed: string;
    monFriHours: string;
    saturdayHours: string;
    mapIntro: string;
    mapClickHint: string;
    emergencySupportTitle: string;
    emergencySupportDesc: string;
    faqsTitle: string;
    methods: {
      phone: { title: string; description: string; details: string; availability: string; };
      email: { title: string; description: string; details: string; availability: string; };
      inPerson: { title: string; description: string; details: string; availability: string; };
      online: { title: string; description: string; details: string; availability: string; };
    };
    faqs: { question: string; answer: string; }[];
  };
  programs: {
    viewAllServices: string;
    floatingNumber: string;
        flaotingButton: string;
    buttonText:string;
    services: {
      financialConsulting: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      accessToFinance: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      grants: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      businessConsulting: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      marketing: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      marketAccess: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      esg: {
        title: string;
        subtitle: string;
        description: string;
        items: string[];
      };
    };
  };
}> = {
  sr: {
    nav: {
      home: "Почетна",
      programs: "Услуги",
      blog: "Совети",
      about: "О нама",
      contact: "Контакт",
    },
    hero: {
      title: "Трансформишите ваше пољопривредно пословање",
      subtitle: "Приступите до €1.3М ИПАРД финансирања за модернизацију пољопривреде и рурални развој",
      learnMore: "Сазнајте више",
      viewPrograms: "Погледајте програме",
    },
    achievements: {
      title: "Наша достигнућа 2024",
      subtitle: "Пружамо изузетне резултате нашим клијентима у свим секторима",
      loading: "Учитавање...",
      error: "Није могуће учитати достигнућа у овом тренутку.",
    },
    services: {
      title: "Наше свеобухватне услуге",
      subtitle: "Од ИПАРД финансирања до пословног консалтинга, пружамо комплетну подршку за ваш раст",
      ipardTitle: "ИПАРД програми",
      ipardDesc: "Приступите ЕУ финансирању до €1.3М за пољопривредне инвестиције, прерађивачке погоне и пројекте руралног развоја.",
      ipardFeature1: "ИПАРД I - Пољопривредне инвестиције",
      ipardFeature2: "ИПАРД II - Модернизација прераде",
      ipardFeature3: "ИПАРД III - Рурални туризам",
      financialTitle: "Финансијска помоћ",
      financialDesc: "Свеобухватна подршка за производне и туристичке секторе са грантовима, субвенцијама и повољним кредитима.",
      financialFeature1: "Програми подршке производњи",
      financialFeature2: "Грантови за развој туризма",
      financialFeature3: "Финансирање промоције извоза",
      consultingTitle: "Пословно консалтинг",
      consultingDesc: "Стручно вођење за микро предузећа и свеобухватне услуге израде пословних планова.",
      consultingFeature1: "Консалтинг за микро предузећа",
      consultingFeature2: "Израда пословних планова",
      consultingFeature3: "Стратешко планирање",
      learnMore: "Сазнајте више",
    },
    clients: {
      title: "Поверење водећих предузећа",
      subtitle: "Помогли смо стотинама компанија у секторима пољопривреде, туризма и производње",
    },
    blog: {
      title: "Најновије вести и приче",
      subtitle: "Останите информисани уз нашу стручну анализу и приче о успеху клијената",
      readMore: "Прочитајте више",
      viewAll: "Погледајте све објаве",
      wantMore: "Желите да прочитате више?",
      newsletterDesc: "Примајте наше најновије увиде о ИПАРД финансирању, пословним приликама и причама о успеху директно на вашу е-пошту.",
      loading: "Учитавање...",
      error: "Није могуће учитати чланке у овом тренутку.",
    },
    contact: {
      title: "Спремни сте да развијете своје пословање?",
      subtitle: "Разговарајмо о томе како можемо да вам помогнемо да приступите финансирању и остварите своје пословне циљеве.",
      phone: "Телефон",
      email: "Е-пошта",
      address: "Адреса",
      formTitle: "Добијте бесплатну консултацију",
      firstName: "Име",
      lastName: "Презиме",
      emailLabel: "Е-пошта",
      serviceInterest: "Заинтересовани сте за",
      message: "Порука",
      selectService: "Изаберите услугу",
      ipardPrograms: "ИПАРД програми",
      financialAid: "Финансијска помоћ",
      businessConsulting: "Пословно консалтинг",
      businessPlanDev: "Израда пословног плана",
      messagePlaceholder: "Реците нам о свом пројекту...",
      send: "Пошаљи поруку",
      sending: "Слање...",
      successTitle: "Порука успешно послата!",
      successDesc: "Ускоро ћемо вас контактирати.",
      errorTitle: "Грешка при слању поруке",
      errorDesc: "Молимо покушајте поново касније.",
    },
    footer: {
      tagline: "Стручно финансијско консалтинг и решења за финансирање за секторе пољопривреде, туризма и производње. Ваш успех је наша мисија.",
      servicesTitle: "Услуге",
      ipard: "ИПАРД програми",
      financialAid: "Финансијска помоћ",
      consulting: "Пословно консалтинг",
      businessPlans: "Пословни планови",
      marketAccess:"",
      GrantsAndFinancing:"",
      companyTitle: "Компанија",
      aboutUs: "О нама",
      ourTeam: "Наш тим",
      careers: "Каријере",
      contactUs: "Контакт",
      copyright: "© 2025 WVP Plus Consulting. Сва права задржана.",
      privacy: "Политика приватности",
      terms: "Услови коришћења",
    },
    newsletter: {
      title: "Пратите наше вести",
      subtitle: "Будите у току са најновијим ИПАРД смерницама и пословним саветима",
      placeholder: "Унесите вашу е-пошту",
      subscribe: "Претплатите се",
      subscribing: "Претплата...",
      successTitle: "Успешна претплата!",
      successDesc: "Хвала што сте се претплатили на наш билтен.",
      errorTitle: "Грешка при претплати",
      errorDesc: "Молимо покушајте поново касније.",
    },
    home: {
      loadingContent: "Учитавање садржаја странице...",
        slide1Title: "For the clients we choose the best!",
        slide1Subtitle: "3000 clients and counting",
        slide2Title: "Our way of work",
        slide2Subtitle: "Meet how we work, and learn why our aproach gives best results",
        slide3Title: "Experts in the finance field",
        slide3Subtitle: "Strategic business planning and financial advisory services to accelerate your growth",
    },
      about: {
          // Hero Section
          heroTitle: "Our Company", // Placeholder for the actual content of t.about.heroTitle
          heroSubtitle: "Dedicated to providing comprehensive financial and market access consulting.", // Placeholder for the actual content of t.about.heroSubtitle

          // Company Overview
          whoWeAreTitle: "Who We Are",
          overviewP1: "WVP PLUS CONSULTING is part of the Austrian WVP GROUP, whose primary focus is financial consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries and has been active in Macedonia since 2005.",
          overviewP2: "Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian companies and citizens. Over five years, we have supported more than 3,000 clients, facilitated over €80M in loans, and secured more than €25M in grants.",
          regionalDevTitle: "Regional Development",
          serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Serbia",
          bosniaOffice: "2024 — WFP PLUS CONSULTING LLC Bosnia",
          accountingOffice: "2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)",
          whatWeOfferTitle: "What We Offer",

          // What We Offer
          accessFinanceTitle: "Access to Finance:",
          accessFinanceList: [
              "Banking credit products",
              "Leasing",
              "Factoring",
              "Government support instruments",
              "Non-banking financial support",
              "Mergers & acquisitions",
              "Equity crowdfunding",
              "Business angels",
              "Capital instruments",
              "Grants / co-financing"
          ],
          marketAccessTitle: "Market Access:",
          marketAccessList: [
              "Company digitalization",
              "Energy efficiency audit (PiNE model)",
              "Circular economy development",
              "Employee protection matrix",
              "Export strategy & planning",
              "Product design & development",
              "Marketing strategy & branding",
              "Financial capacity diagnostics"
          ],
          specialReportsTitle: "Specialized Reports:",
          specialReportsList: [
              "Business plans",
              "Investment programs",
              "Due diligence",
              "Cost-benefit analysis"
          ],
          missionStatement: "Our mission is to deeply understand each company, identify its financial and market needs, and connect it with the right instruments to achieve real, measurable results. With over 25 experts, we ensure top-level consulting and long-term partnerships.",

          // Company Values
          valuesTitle: "Our Values",
          valuesSubtitle: "The principles that drive our work and shape our commitment to excellence.",

          // Team Section
          teamTitle: "Meet Our Team",
          teamSubtitle: "Experienced professionals dedicated to your success",

          // CTA Section
          ctaJoinTitle: "Join Our Team",
          ctaJoinSubtitle: "We're always looking for talented professionals to join our growing team",
          viewPositions: "View Open Positions",
          contactUsCta: "Contact Us",

          values: {
              "Results-Oriented": "Ориентираност кон Резултати",
              "We focus on delivering measurable outcomes and tangible value to our clients": "Се фокусираме на испорака на мерливи резултати и опиплива вредност за нашите клиенти",
              "Client-Centric": "Фокус на Клиентот",
              "Your success is our priority. We build long-term partnerships based on trust": "Вашиот успех е наш приоритет. Градиме долгорочни партнерства засновани на доверба",
              "Excellence": "Извонредност",
              "We maintain the highest standards of professionalism and expertise": "Одржуваме највисоки стандарди на професионалност и експертиза",
              "Innovation": "Иновација",
              "We leverage the latest technologies and methodologies to drive success": "Користиме најнови технологии и методологии за да постигнеме успех"
          },
      },
    team: {
      title: "",
      subtitle: "",
      description: "",
      cta: "",
    },
    contactPage: {
      heroTitle: "",
      heroSubtitle: "",
      methodsTitle: "",
      methodsSubtitle: "",
      getDirections: "",
      headquartersLabel: "",
      officesTitle: "",
      businessHoursTitle: "",
      dayMonFri: "",
      daySaturday: "",
      daySunday: "",
      closed: "",
      monFriHours: "",
      saturdayHours: "",
      mapIntro: "",
      mapClickHint: "",
      emergencySupportTitle: "",
      emergencySupportDesc: "",
      faqsTitle: "",
      methods: {
        phone: { title: "", description: "", details: "", availability: "" },
        email: { title: "", description: "", details: "", availability: "" },
        inPerson: { title: "", description: "", details: "", availability: "" },
        online: { title: "", description: "", details: "", availability: "" },
      },
      faqs: [
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
      ],
    },
    programs: {
      viewAllServices: "Погледај све услуге",
        floatingNumber:"+389 78 348 860",
        flaotingButton:"Закажете  консултације",
        buttonText:"Закажете консултације",
      services: {
        financialConsulting: {
          title: "Финансијско савјетовање",
          subtitle: "Кредитна дијагностика • Пословно планирање • Структурирање инвестicija",
          description:
            "Оптимизација финансијских операција и креирање робусних билансних структура. Испоручујемо пословне планове, due diligence, инвестиционе програме и cost-benefit анализе прилагођене очекивањима инвеститора и кредитора.",
          items: [
            "Пословни план",
            "Due diligence",
            "Инвестициони програм",
            "Cost-benefit анализа",
          ],
        },
        accessToFinance: {
          title: "Приступ финансијама",
          subtitle: "Кредитни саветници • Структурно финансирање",
          description:
            "Испоручујемо кредитну дијагностику и препоруке структуре за нове и постојеће инвестиције. Наши кредитни саветници истражују понуде и препоручују оптималну рочност, валуту, динамику и камату.",
          items: [
            "Банкарски кредитни производи",
            "Лизинг",
            "Факторинг",
            "Осигурање потраживања",
            "Алтернативно финансирање",
          ],
        },
        grants: {
          title: "Грантови и суфинансирање",
          subtitle: "Припрема пројеката • Праћење грантова",
          description:
            "Пуна припрема и праћење пријава за грантове и суфинансирање за националне и међународне инструменте, укључујући ИПАРД, ИПА, GIZ, ФИТД и ЕУ средства — максимизирање могућности.",
          items: [
            "IPARD / IPA / GIZ",
            "FITD и национални програми",
            "EBRD blended finance",
            "ЕУ структурни инструменти",
            "До 90% поврата",
          ],
        },
        businessConsulting: {
          title: "Бизнис консалтинг",
          subtitle: "Организациона дијагностика • QUINTAUM",
          description:
            "Користећи QUINTAUM методологију (210 индикатора) дијагностикујемо културу, благостање запослених и ефикасност менаџмента, уз коучинг и програме развоја запослених.",
          items: [
            "QUINTAUM дијагностика (210 KPI)",
            "Коучинг и лидерски програми",
            "Планови развоја запослених",
            "Дугорочно праћење организације",
          ],
        },
        marketing: {
          title: "Маркетинг и развој бизниса",
          subtitle: "Брендирање • Стратегија раста • Дигитал",
          description:
            "Интегрисани маркетинг и развој бизниса који повећава видљивост бренда и доноси мерљив раст — од истраживања и стратегије до извршења кампања и оптимизације РОИ.",
          items: [
            "Стратешко планирање",
            "Истраживање тржишта",
            "Брендинг и идентитет",
            "Дигиталне кампање и аналитика",
          ],
        },
        marketAccess: {
          title: "Приступ тржишту",
          subtitle: "Експорт стратегија • Идентификација купаца",
          description:
            "Подршка компанијама које траже нова међународна тржишта: истраживања, план извоза, дигитална спремност, енергетски аудити и проналажење купаца за структуриран и ниско-ризичан улазак.",
          items: [
            "Истраживање тржишта и анализа потенцијала",
            "Спремност за дигитализацију",
            "Енергетски аудит (PiNE)",
            "План извоза и проналазак купаца",
          ],
        },
        esg: {
          title: "ESG стандардизација",
          subtitle: "Нефинансијско извештавање • Пут мапа усаглашености",
          description:
            "Дијагностика и софтверски подржана имплементација ESG стандарда: еколошки, друштвени и управљачки индикатори, мапирање ризика и нефинансијско извештавање у складу са прописима.",
          items: [
            "ESG дијагностика и извештавање",
            "Еколошки и друштвени индикатори",
            "Мапирање корпоративног управљања",
            "Пут мапа усаглашености",
          ],
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      programs: "Services",
      blog: "Financial Advices",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Transform Your Agricultural Business",
      subtitle: "Access up to €1.3M in IPARD funding for agricultural modernization and rural development",
      learnMore: "Learn More",
      viewPrograms: "View Programs",
    },
    achievements: {
      title: "Our  Achievements",
      subtitle: "Together with our clients, we achieve exceptional results across all sectors!",
      loading: "Loading...",
      error: "Unable to load achievements at this time.",
      // Added list rendering support
      // Shown on Home results section instead of numeric counters when present
      items: [
        "over 3000 successfully completed projects",
        "over 25 million euros in approved grants",
        "over 80 million euros in approved financial credits",
      ] as unknown as any,
    },
    services: {

      title: "See how we can help you",
      subtitle: "From access to finance to market and strategic business development, we offer complete support for your business growth and development",
      ipardTitle: "Financial Consulting",
      ipardDesc: "Access EU funding up to €1.3M for agricultural investments, processing facilities, and rural development projects.",
      ipardFeature1: "IPARD I - Agricultural Investment",
      ipardFeature2: "IPARD II - Processing Modernization",
      ipardFeature3: "IPARD III - Rural Tourism",
      financialTitle: "Financial Aid",
      financialDesc: "Comprehensive support for manufacturing and tourism sectors with grants, subsidies, and favorable loans.",
      financialFeature1: "Manufacturing Support Programs",
      financialFeature2: "Tourism Development Grants",
      financialFeature3: "Export Promotion Funding",
      consultingTitle: "Business Consulting",
      consultingDesc: "Expert guidance for micro businesses and comprehensive business plan development services.",
      consultingFeature1: "Micro Business Consulting",
      consultingFeature2: "Business Plan Development",
      consultingFeature3: "Strategic Planning",
      learnMore: "Learn More",
    },
    clients: {
      title: "Trusted by Leading Businesses",
      subtitle: "We've helped hundreds of companies across agriculture, tourism, and manufacturing sectors",
    },
    blog: {
      title: "Finance in everyday practice",
      subtitle: "Learn more about financial news, our experiences and success stories",
      readMore: "Read More",
      viewAll: "View All Posts",
      wantMore: "Want to Read More?",
      newsletterDesc: "Get our latest insights on IPARD funding, business opportunities, and success stories delivered directly to your inbox.",
      loading: "Loading...",
      error: "Unable to load blog posts at this time.",
    },
    contact: {
      title: "Ready to Grow Your Business?",
      subtitle: "Let's discuss how we can help you access funding and achieve your business goals.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      formTitle: "Ask question - Solve your dilema",
      firstName: "First Name",
      lastName: "Last Name",
      emailLabel: "Email",
      serviceInterest: "Service Interest",
      message: "Message",
      selectService: "Select a service",
      ipardPrograms: "IPARD Programs",
      financialAid: "Financial Aid",
      businessConsulting: "Business Consulting",
      businessPlanDev: "Business Plan Development",
      messagePlaceholder: "Tell us about your project...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent successfully!",
      successDesc: "We will contact you soon.",
      errorTitle: "Error sending message",
      errorDesc: "Please try again later.",
    },
    footer: {
      tagline: "For our clients we always choose the best !",
      servicesTitle: "Services",
      ipard: "Financial Consulting",
      financialAid: "Access to finance through credit products",
      consulting: "Business Consulting",
      businessPlans: "Marketing and business development",
      marketAccess: "Market access",
      GrantsAndFinancing: "Grants and co-financing",
      companyTitle: "Company",
      aboutUs: "About Us",
      ourTeam: "Our Team",
      careers: "Careers",
      contactUs: "Contact",
      copyright: "© 2025 WVP Plus Consulting. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    newsletter: {
      title: "Stay Updated",
      subtitle: "Get the latest IPARD guidelines and business tips",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      successTitle: "Successfully subscribed!",
      successDesc: "Thank you for subscribing to our newsletter.",
      errorTitle: "Subscription failed",
      errorDesc: "Please try again later.",
    },
    home: {
      loadingContent: "Loading page content...",
        slide1Title: "For the clients we choose the best!",
        slide1Subtitle: "3000 clients and counting",
        slide2Title: "Our way of work",
        slide2Subtitle: "Meet how we work, and learn why our aproach gives best results",
        slide3Title: "Experts in the finance field",
        slide3Subtitle: "Strategic business planning and financial advisory services to accelerate your growth",
    },
      about: {
          // Hero Section
          heroTitle: "Our Company", // Placeholder for the actual content of t.about.heroTitle
          heroSubtitle: "Dedicated to providing comprehensive financial and market access consulting.", // Placeholder for the actual content of t.about.heroSubtitle

          // Company Overview
          whoWeAreTitle: "Who We Are",
          overviewP1: "WVP PLUS CONSULTING is part of the Austrian WVP GROUP, whose primary focus is financial consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries and has been active in Macedonia since 2005.",
          overviewP2: "Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian companies and citizens. Over five years, we have supported more than 3,000 clients, facilitated over €80M in loans, and secured more than €25M in grants.",
          regionalDevTitle: "Regional Development",
          serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Serbia",
          bosniaOffice: "2024 — WFP PLUS CONSULTING LLC Bosnia",
          accountingOffice: "2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)",
          whatWeOfferTitle: "What We Offer",

          // What We Offer
          accessFinanceTitle: "Access to Finance:",
          accessFinanceList: [
              "Banking credit products",
              "Leasing",
              "Factoring",
              "Government support instruments",
              "Non-banking financial support",
              "Mergers & acquisitions",
              "Equity crowdfunding",
              "Business angels",
              "Capital instruments",
              "Grants / co-financing"
          ],
          marketAccessTitle: "Market Access:",
          marketAccessList: [
              "Company digitalization",
              "Energy efficiency audit (PiNE model)",
              "Circular economy development",
              "Employee protection matrix",
              "Export strategy & planning",
              "Product design & development",
              "Marketing strategy & branding",
              "Financial capacity diagnostics"
          ],
          specialReportsTitle: "Specialized Reports:",
          specialReportsList: [
              "Business plans",
              "Investment programs",
              "Due diligence",
              "Cost-benefit analysis"
          ],
          missionStatement: "Our mission is to deeply understand each company, identify its financial and market needs, and connect it with the right instruments to achieve real, measurable results. With over 25 experts, we ensure top-level consulting and long-term partnerships.",

          // Company Values
          valuesTitle: "Our Values",
          valuesSubtitle: "The principles that drive our work and shape our commitment to excellence.",

          // Team Section
          teamTitle: "Meet Our Team",
          teamSubtitle: "Experienced professionals dedicated to your success",

          // CTA Section
          ctaJoinTitle: "Join Our Team",
          ctaJoinSubtitle: "We're always looking for talented professionals to join our growing team",
          viewPositions: "View Open Positions",
          contactUsCta: "Contact Us",

          values: {
              "Results-Oriented": "Results-Oriented",
              "We focus on delivering measurable outcomes and tangible value to our clients": "We focus on delivering measurable outcomes and tangible value to our clients",
              "Client-Centric": "Client-Centric",
              "Your success is our priority. We build long-term partnerships based on trust": "Your success is our priority. We build long-term partnerships based on trust",
              "Excellence": "Excellence",
              "We maintain the highest standards of professionalism and expertise": "We maintain the highest standards of professionalism and expertise",
              "Innovation": "Innovation",
              "We leverage the latest technologies and methodologies to drive success": "We leverage the latest technologies and methodologies to drive success"
          },
      },
    team: {
      title: "Our Team",
      subtitle: "Largest team of Experts",
      description: "Our diverse team brings together decades of expertise in financial consulting, market access, and agri-food technology. We are passionate about supporting farmers and businesses to achieve sustainable growth and unlock new opportunities in the European and global markets. We are here to partner with you every step of the way.",
      cta: "Connect With Our Experts",
    },
    contactPage: {
      heroTitle: "Contact Us",
      heroSubtitle: "Ready to take your business to the next level? Get in touch with our expert consultants today",
      methodsTitle: "How Can We Help You?",
      methodsSubtitle: "Choose the most convenient way to reach our team",
      getDirections: "Get Directions",
      headquartersLabel: "Headquarters",
      officesTitle: "Our Office",
      businessHoursTitle: "Business Hours",
      dayMonFri: "Monday - Friday",
      daySaturday: "Saturday",
      daySunday: "Sunday",
      closed: "Closed",
      monFriHours: "08:00 - 17:00",
      saturdayHours: "09:00 - 13:00",
      mapIntro: "Interactive map showing all office locations",
      mapClickHint: "Click on any office card above to get directions",
      emergencySupportTitle: "Emergency Support:",
      emergencySupportDesc: "For urgent matters outside business hours, please email us and we'll respond as soon as possible.",
      faqsTitle: "Frequently Asked Questions",
      methods: {
        phone: { title: "Phone Support", description: "Speak directly with our consultants", details: "+381 11 123 4567", availability: "Mon-Fri 8:00-17:00" },
        email: { title: "Email Support", description: "Get detailed responses to your questions", details: "info@wvpplus.rs", availability: "24/7 response within 24 hours" },
        inPerson: { title: "In-Person Consultation", description: "Schedule a face-to-face meeting", details: "Available in all offices", availability: "By appointment only" },
        online: { title: "Online Consultation", description: "Video calls for remote clients", details: "Zoom, Teams, or preferred platform", availability: "Flexible scheduling" },
      },
      faqs: [
        { question: "How long does the IPARD application process take?", answer: "The typical IPARD application process takes 3-6 months from initial consultation to funding approval, depending on the complexity of your project and completeness of documentation." },
        { question: "What documents do I need to prepare for funding applications?", answer: "Required documents typically include business registration, financial statements, project documentation, environmental permits, and a detailed business plan. We provide a complete checklist during consultation." },
        { question: "Do you provide support for businesses outside Serbia?", answer: "While our primary focus is on Serbian businesses, we do provide consulting services for international companies looking to invest in Serbia or access EU funding programs." },
        { question: "What are your consultation fees?", answer: "We offer free initial consultations to assess your project. Our service fees are transparent and discussed upfront, typically structured as a percentage of successfully secured funding." },
      ],
    },
    programs: {
      viewAllServices: "View All Services",
        floatingNumber:"+389 78 348 860",
        flaotingButton:"Scheldue Consultation",
       
      buttonText:"Scheldue Consultation",
      services: {
        financialConsulting: {
          title: "Financial Consulting",
          subtitle: "Credit diagnostics • Business planning • Investment structuring",
          description:
            "Comprehensive analysis tailored to your business model to optimize the client's financial operations, preparation of credit business diagnostics and ensuring a quality structure of financial statements.",
          items: [
            "Business plan",
            "Due diligence",
            "Investment program",
            "Feasibility/Cost-Benefit report",
          ],
        },
        accessToFinance: {
          title: "Access to Finance",
          subtitle: "Credit advisors • Structured financing",
          description:
            "Through the services of credit promoter and credit advisor, credit diagnostics and recommendations for a financial structure suitable for existing and future investments are provided. Our credit advisors research market offers and recommend optimal maturity, currency, dynamics and financial arrangements.",
          items: [
            "Banking credit products",
            "Leasing",
            "Factoring",
            "Accounts receivable insurance",
            "Alternative financing",
          ],
        },
        grants: {
          title: "Grants & Co-Financing",
          subtitle: "Project preparation • Grant monitoring",
          description:
            "Monitoring calls and full preparation of grant and co-financing applications available through national and international instruments, including IPARD, IPA, GIZ, INOVA and EU funds - maximizing opportunities to obtain soft or fully non-refundable financial resources.",
          items: [
            "IPARD, IPA, GIZ",
            "INOVA & national programs",
            "EBRD blended finance",
            "EU structural instruments",
            "Up to 90% return potential",
          ],
        },
        businessConsulting: {
          title: "Business Consulting",
          subtitle: "Organizational diagnostics • QUINTAUM",
          description:
            "Using the QUINTAUM methodology (210 indicators) we diagnose organizational culture, employee well-being and management effectiveness, then propose and organize coaching and employee development programs.",
          items: [
            "QUINTAUM diagnostics (210 KPIs)",
            "Coaching & leadership programs",
            "Employee development plans",
            "Long-term organizational monitoring",
          ],
        },
        marketing: {
          title: "Marketing & Business Development",
          subtitle: "Branding • Growth strategy • Digitalization",
          description:
            "Integrated marketing and business development that increases brand visibility and drives measurable growth - from market research and strategic planning to campaign implementation and optimization of investments (ROI).",
          items: [
            "Strategic planning",
            "Market research",
            "Branding & identity",
            "Digital campaigns & analytics",
          ],
        },
        marketAccess: {
          title: "Market Access",
          subtitle: "Export strategy • Buyer identification",
          description:
            "Support for companies seeking new international markets: research, export planning, digital readiness, energy audits and buyer discovery to make export entry structured and low-risk.",
          items: [
            "Market research & potential analysis",
            "Digitalization readiness",
            "Energy efficiency audit (PiNE)",
            "Export plan & buyer sourcing",
          ],
        },
        esg: {
          title: "ESG Standardization",
          subtitle: "Non-financial reporting • Compliance roadmap",
          description:
            "Diagnostics and software-enabled implementation of ESG standards: environmental, social and governance metrics, risk mapping and non-financial reporting aligned with legal requirements.",
          items: [
            "ESG diagnostics & reporting",
            "Environmental & social indicators",
            "Governance mapping",
            "Compliance roadmap",
          ],
        },
      },
    },
  },
    mk: {
        nav: {
            home: "Почетна",
            programs: "Услуги",
            blog: "Финансиски Совети",
            about: "За нас",
            contact: "Контакт",
        },
        hero: {
            title: "Трансформирајте го вашиот земјоделски бизнис",
            subtitle: "Пристапете до 1.3 милиони евра преку IPARD фондовите за земјоделска модернизација и рурален развој",
            learnMore: "Дознајте повеќе",
            viewPrograms: "Видете ги програмите",
        },
        achievements: {
            title: "Нашите достигнувања",
            subtitle: "Со нашите клиенти остваруваме исклучителни резултати во сите сектори!",
            loading: "Се вчитува...",
            error: "Не може да се вчитаат достигнувањата во моментов.",
            items: [
                "над 3000 успешно завршени проекти",
                "над 25 милиони евра одобрени грантови",
                "над 80 милиони евра одобрени финансиски кредити",
            ] as unknown as any,
        },
    services: {
            title: "Погледнете како можеме да ви помогнеме",
            subtitle: "Од пристап до финансии до пазарен и стратешки развој на бизнисот, ние нудиме целосна поддршка за вашиот деловен раст и развој",
            ipardTitle: "Финансиски консалтинг",
            ipardDesc: "Пристап до ЕУ фондови до 1.3 милиони евра за земјоделски инвестиции, преработувачки капацитети и проекти за рурален развој.",
            ipardFeature1: "IPARD I - Земјоделски инвестиции",
            ipardFeature2: "IPARD II - Модернизација на преработка",
            ipardFeature3: "IPARD III - Рурален туризам",
            financialTitle: "Финансиска помош",
            financialDesc: "Сеопфатна поддршка за производствениот и туристичкиот сектор со грантови, субвенции и поволни заеми.",
            financialFeature1: "Програми за поддршка на производството",
            financialFeature2: "Грантови за развој на туризмот",
            financialFeature3: "Финансирање за промоција на извозот",
            consultingTitle: "Бизнис консалтинг",
            consultingDesc: "Стручно водство за микро бизниси и услуги за развој на сеопфатни бизнис планови.",
            consultingFeature1: "Консалтинг за микро бизниси",
            consultingFeature2: "Изработка на бизнис планови",
            consultingFeature3: "Стратешко планирање",
            learnMore: "Дознајте повеќе",
        },
        clients: {
            title: "Доверба од водечки компании",
            subtitle: "Помогнавме на стотици компании во секторите земјоделство, туризам и производство",
        },
        blog: {
            title: "Финансиите низ секојдневната пракса",
            subtitle: "Дознајте повеќе за финансиските новости, нашите искуства и успешни приказни",
            readMore: "Прочитај повеќе",
            viewAll: "Сите објави",
            wantMore: "Сакате да прочитате повеќе?",
            newsletterDesc: "Добивајте ги најновите увиди за финансирање, деловни можности и успешни приказни директно во вашето сандаче.",
            loading: "Се вчитува...",
            error: "Не може да се вчитаат објавите во моментов.",
        },
        contact: {
            title: "Подготвени за раст на вашиот бизнис?",
            subtitle: "Ајде да разговараме како можеме да ви помогнеме да пристапите до средства и да ги остварите вашите деловни цели.",
            phone: "Телефон",
            email: "Е-пошта",
            address: "Адреса",
            formTitle: "Поставете прашање - Решете ја дилемата",
            firstName: "Име",
            lastName: "Презиме",
            emailLabel: "Е-пошта",
            serviceInterest: "Услуга од интерес",
            message: "Порака",
            selectService: "Изберете услуга",
            ipardPrograms: "IPARD Програми",
            financialAid: "Финансиска помош",
            businessConsulting: "Бизнис консалтинг",
            businessPlanDev: "Изработка на бизнис план",
            messagePlaceholder: "Кажете ни нешто повеќе за вашиот проект...",
            send: "Испрати порака",
            sending: "Се испраќа...",
            successTitle: "Пораката е успешно испратена!",
            successDesc: "Ќе ве контактираме наскоро.",
            errorTitle: "Грешка при испраќање",
            errorDesc: "Ве молиме обидете се повторно подоцна.",
        },
        footer: {
            tagline: "За нашите клиенти секогаш го избираме најдоброто!",
            servicesTitle: "Услуги",
            ipard: "Финансиски консалтинг",
            financialAid: "Пристап до финансии преку кредитни производи",
            consulting: "Бизнис консалтинг",
            businessPlans: "Маркетинг и бизнис развој",
            marketAccess: "Пристап до пазари",
            GrantsAndFinancing: "Грантови и кофинансирање",
            companyTitle: "Компанија",
            aboutUs: "За нас",
            ourTeam: "Нашиот тим",
            careers: "Кариера",
            contactUs: "Контакт",
            copyright: "© 2025 WVP Plus Consulting. Сите права се задржани.",
            privacy: "Политика за приватност",
            terms: "Услови за користење",
        },
        newsletter: {
            title: "Бидете во тек",
            subtitle: "Добивајте ги најновите IPARD насоки и бизнис совети",
            placeholder: "Внесете ја вашата е-пошта",
            subscribe: "Претплати се",
            subscribing: "Се претплатувате...",
            successTitle: "Успешна претплата!",
            successDesc: "Ви благодариме што се претплативте на нашиот билтен.",
            errorTitle: "Неуспешна претплата",
            errorDesc: "Ве молиме обидете се повторно подоцна.",
        },
        home: {
            loadingContent: "Вчитување на содржината...",
            slide1Title: "За клиентите го бираме најдоброто!",
            slide1Subtitle: "преку 3000 клиенти",
            slide2Title: "Нашиот начин на работа",
            slide2Subtitle: "Запознајте се како работиме и зошто нашиот пристап дава најдобри резултати",
            slide3Title: "Експерти во областа на финансиите",
            slide3Subtitle: "Стратешко бизнис планирање и финансиски советодавни услуги за забрзување на вашиот раст",
        },
        about: {
            // Hero Section
            heroTitle: "Нашата Компанија",
            heroSubtitle: "Посветени на обезбедување сеопфатно финансиско и пазарно пристапно консалтинг.",

            // Company Overview
            whoWeAreTitle: "Кои Сме Ние",
            overviewP1: "ВВП ПЛУС КОНСАЛТИНГ е дел од австриската ВВП ГРУПА, чиј примарен фокус е финансиски консалтинг. Основана во 1985 година во Грац, Австрија, групата сега работи во 10 земји од Југоисточна Европа и е активна во Македонија од 2005 година.",
            overviewP2: "Од своето основање во 2019 година, ВВП ПЛУС КОНСАЛТИНГ има за цел да обезбеди целосен финансиски пристап до македонските компании и граѓани. За пет години, поддржавме повеќе од 3.000 клиенти, овозможивме преку 80 милиони евра заеми и обезбедивме повеќе од 25 милиони евра грантови.",
            regionalDevTitle: "Регионален Развој",
            serbiaOffice: "2022 — ВВП ПЛУС КОНСАЛТИНГ ДОО Србија",
            bosniaOffice: "2024 — ВФП ПЛУС КОНСАЛТИНГ ДОО Босна",
            accountingOffice: "2024 — ВВП СМЕТКОВОДСТВО ДОО Македонија (данок, сметководство, ревизија)",
            whatWeOfferTitle: "Што Нудиме",

            // What We Offer
            accessFinanceTitle: "Пристап до Финансии:",
            accessFinanceList: [
                "Банкарски кредитни производи",
                "Лизинг",
                "Факторинг",
                "Владини инструменти за поддршка",
                "Небанкарска финансиска поддршка",
                "Спојувања и превземања",
                "Групово финансирање на капитал (Equity crowdfunding)",
                "Бизнис ангели",
                "Капитални инструменти",
                "Грантови / кофинансирање"
            ],
            marketAccessTitle: "Пристап до Пазарот:",
            marketAccessList: [
                "Дигитализација на компанијата",
                "Аудит за енергетска ефикасност (PiNE модел)",
                "Развој на циркуларна економија",
                "Матрица за заштита на вработените",
                "Стратегија и планирање на извоз",
                "Дизајн и развој на производи",
                "Маркетинг стратегија и брендирање",
                "Дијагностика на финансиски капацитет"
            ],
            specialReportsTitle: "Специјализирани Извештаи:",
            specialReportsList: [
                "Бизнис планови",
                "Инвестициски програми",
                "Длабинска анализа (Due diligence)",
                "Анализа на трошоци и придобивки (Cost-benefit analysis)"
            ],
            missionStatement: "Нашата мисија е длабоко да ја разбереме секоја компанија, да ги идентификуваме нејзините финансиски и пазарни потреби и да ја поврземе со вистинските инструменти за постигнување реални, мерливи резултати. Со над 25 експерти, обезбедуваме врвен консалтинг и долгорочни партнерства.",

            // Company Values
            valuesTitle: "Нашите Вредности",
            valuesSubtitle: "Принципите кои ја водат нашата работа и го обликуваат нашиот ангажман за извонредност.",

            // Team Section
            teamTitle: "Запознајте го Нашиот Тим",
            teamSubtitle: "Искусни професионалци посветени на вашиот успех",

            // CTA Section
            ctaJoinTitle: "Придружете се на Нашиот Тим",
            ctaJoinSubtitle: "Секогаш бараме талентирани професионалци да се приклучат на нашиот растечки тим",
            viewPositions: "Погледнете Отворени Позиции",
            contactUsCta: "Контактирајте нѐ",

            values: {
                "Results-Oriented": "Ориентираност кон Резултати",
                "We focus on delivering measurable outcomes and tangible value to our clients": "Се фокусираме на испорака на мерливи резултати и опиплива вредност за нашите клиенти",
                "Client-Centric": "Фокус на Клиентот",
                "Your success is our priority. We build long-term partnerships based on trust": "Вашиот успех е наш приоритет. Градиме долгорочни партнерства засновани на доверба",
                "Excellence": "Извонредност",
                "We maintain the highest standards of professionalism and expertise": "Одржуваме највисоки стандарди на професионалност и експертиза",
                "Innovation": "Иновација",
                "We leverage the latest technologies and methodologies to drive success": "Користиме најнови технологии и методологии за да постигнеме успех"
            },

        },
        team: {
            title: "Нашиот тим",
            subtitle: "Најголемиот тим на експерти",
            description: "Нашиот мултидисциплинарен тим носи богато искуство во финансиски консалтинг и развој на инвестиции во различни индустрии, со посебен фокус на земјоделство и рурален развој, туризам и „зелени инвестиции“. Им помагаме на клиентите да пристапат до државните програми за финансиска поддршка и фондовите на Европската Унија, и да ги претворат нивните идеи во одржливи и реализирани инвестиции. За нашите клиенти – ние сме партнери во процесот на раст.",
            cta: "Поврзете се со нашите експерти",
        },
        contactPage: {
            heroTitle: "Контактирајте не",
            heroSubtitle: "Подготвени да го подигнете вашиот бизнис на следното ниво? Контактирајте ги нашите стручни консултанти денес",
            methodsTitle: "Како можеме да ви помогнеме?",
            methodsSubtitle: "Изберете го најпогодниот начин за контакт со нашиот тим",
            getDirections: "Насоки",
            headquartersLabel: "Седиште",
            officesTitle: "Нашите канцеларии",
            businessHoursTitle: "Работно време",
            dayMonFri: "Понеделник - Петок",
            daySaturday: "Сабота",
            daySunday: "Недела",
            closed: "Затворено",
            monFriHours: "08:00 - 17:00",
            saturdayHours: "09:00 - 13:00",
            mapIntro: "Интерактивна мапа со локациите на сите канцеларии",
            mapClickHint: "Кликнете на било која канцеларија погоре за насоки",
            emergencySupportTitle: "Итна поддршка:",
            emergencySupportDesc: "За итни прашања надвор од работното време, ве молиме испратете ни е-пошта и ќе одговориме што е можно поскоро.",
            faqsTitle: "Често поставувани прашања",
            methods: {
                phone: { title: "Телефонска поддршка", description: "Разговарајте директно со нашите консултанти", details: "+389 78 348 860", availability: "Пон-Пет 8:00-17:00" },
                email: { title: "Е-пошта поддршка", description: "Добијте детални одговори на вашите прашања", details: "info@wvpplus.rs", availability: "24/7 одговор во рок од 24 часа" },
                inPerson: { title: "Консултации во живо", description: "Закажете состанок лице-в-лице", details: "Достапно во сите канцеларии", availability: "Само со закажување" },
                online: { title: "Онлајн консултации", description: "Видео повици за клиенти од далечина", details: "Zoom, Teams или преферирана платформа", availability: "Флексибилно закажување" },
            },
            faqs: [
                { question: "Колку трае процесот на аплицирање за IPARD?", answer: "Типичниот процес на аплицирање за IPARD трае 3-6 месеци од почетната консултација до одобрувањето на средствата, во зависност од сложеноста на вашиот проект и комплетноста на документацијата." },
                { question: "Кои документи треба да ги подготвам за аплицирање?", answer: "Потребните документи обично вклучуваат регистрација на бизнисот, финансиски извештаи, проектна документација, еколошки дозволи и детален бизнис план. Обезбедуваме целосна листа за проверка за време на консултациите." },
                { question: "Дали обезбедувате поддршка за бизниси надвор од Србија?", answer: "Иако нашиот примарен фокус се бизнисите во регионот, обезбедуваме консултантски услуги и за меѓународни компании кои сакаат да инвестираат или да пристапат до програмите за финансирање на ЕУ." },
                { question: "Кои се цените за вашите консултации?", answer: "Нудиме бесплатни првични консултации за проценка на вашиот проект. Нашите такси за услуги се транспарентни и однапред договорени, обично структурирани како процент од успешно обезбедените средства." },
            ],
        },
        programs: {
            viewAllServices: "Сите услуги",
            floatingNumber:"+389 78 348 860",
        flaotingButton:"Закажете \n состанок",
            buttonText:"Закажете состанок",
            services: {
                financialConsulting: {
                    title: "Финансиски консалтинг",
                    subtitle: "Кредитна дијагностика • Бизнис планирање • Структуирање на инвестиции",
                    description:
                        "Сеопфатна анализа прилагодена кон Вашиот бизнис модел со цел оптимизација на финансиското работење на клиентот, изработка на кредитна бизнис дијагностика и обезбедување квалитетна структура на финансиските извештаи.",
                    items: [
                        "Бизнис план",
                        "Длабинска анализа (Due diligence)",
                        "Инвестициска програма",
                        "Извештај за исплатливост/оправданост на инвестицијата (cost benefit analysis)",
                    ],
                },
                accessToFinance: {
                    title: "Пристап до финансии",
                    subtitle: "Кредитни советници • Структурирано финансирање",
                    description:
                        "Преку услугите кредитен промотор и кредитен советник се овозможува кредитна дијагностика и препораки за финансиска конструкција соодветна за постоечките и идните инвестиции. Нашите кредитни советници ги истражуваат понудите на пазарот и препорачуваат оптимална рочност, валута, динамика и финансиски аранжмани.",
                    items: [
                        "Банкарски кредитни производи",
                        "Лизинг",
                        "Факторинг",
                        "Осигурување на побарувања",
                        "Алтернативно финансирање",
                    ],
                },
                grants: {
                    title: "Грантови и кофинансирање",
                    subtitle: "Подготовка на проекти • Мониторинг на грантови",
                    description:
                        "Следење на повици и целосна подготовка на апликации за грантови и кофинансирање достапни преку национални и меѓународни инструменти, вклучувајќи ИПАРД, ИПА, ГИЗ, ИНОВА и ЕУ фондови - максимизирајќи ги можностите за добивање „меки“ или целосно бесповратни финансиски средства.",
                    items: [
                        "ИПАРД, ИПА, ГИЗ",
                        "ИНОВА и национални програми",
                        "ЕБРД комбинирано финансирање",
                        "ЕУ структурни инструменти",
                        "Потенцијал за поврат до 90%",
                    ],
                },
                businessConsulting: {
                    title: "Бизнис консалтинг",
                    subtitle: "Организациска дијагностика • QUINTAUM",
                    description:
                        "Користејќи ја методологијата QUINTAUM (210 индикатори) дијагностицираме организациска култура, благосостојба на вработените и ефективност на менаџментот, а потоа предложуваме и организираме коучинг и програми за развој на вработените.",
                    items: [
                        "QUINTAUM дијагностика (210 KPI)",
                        "Коучинг и лидерски програми",
                        "Планови за развој на вработени",
                        "Долгорочен организациски мониторинг",
                    ],
                },
                marketing: {
                    title: "Маркетинг и бизнис развој",
                    subtitle: "Брендирање • Стратегија за раст • Дигитализација",
                    description:
                        "Интегриран маркетинг и бизнис развој кој ја зголемува видливоста на брендот и носи мерлив раст - од истражување на пазарот и стратешко планирање до спроведување на кампањи и оптимизација на инвестициите (ROI).",
                    items: [
                        "Стратешко планирање",
                        "Истражување на пазарот",
                        "Брендирање и идентитет",
                        "Дигитални кампањи и аналитика",
                    ],
                },
                marketAccess: {
                    title: "Пристап до пазари",
                    subtitle: "Извозна стратегија • Идентификација на купувачи",
                    description:
                        "Поддршка за компании кои бараат нови меѓународни пазари: истражување, планирање на извозот, дигитална подготвеност, енергетски ревизии и пронаоѓање купувачи за влез на извозниот пазар со низок ризик.",
                    items: [
                        "Истражување на пазарот и анализа на потенцијал",
                        "Подготвеност за дигитализација",
                        "Ревизија на енергетска ефикасност (PiNE)",
                        "Извозен план и наоѓање купувачи",
                    ],
                },
                esg: {
                    title: "ESG Стандардизација",
                    subtitle: "Нефинансиско известување • Патоказ за усогласеност",
                    description:
                        "Дијагностика и софтверски овозможена имплементација на ESG стандарди: еколошки, социјални и управувачки метрики, мапирање на ризици и нефинансиско известување усогласено со законските барања.",
                    items: [
                        "ESG дијагностика и известување",
                        "Еколошки и социјални индикатори",
                        "Мапирање на управувањето",
                        "Патоказ за усогласеност",
                    ],
                },
            },
        },
    },
  me: {
    nav: {
      home: "Početna",
      programs: "Programi",
      blog: "Blog",
      about: "O nama",
      contact: "Kontakt",
    },
    hero: {
      title: "Transformišite vaše poljoprivredno poslovanje",
      subtitle: "Pristupite do €1.3M IPARD finansiranja za poljoprivrednu modernizaciju i ruralni razvoj",
      learnMore: "Saznajte više",
      viewPrograms: "Pogledajte programe",
    },
    achievements: {
      title: "Naša dostignuća 2024",
      subtitle: "Pružamo izuzetne rezultate našim klijentima u svim sektorima",
      loading: "Učitavanje...",
      error: "Nije moguće učitati dostignuća u ovom trenutku.",
    },
    services: {
      title: "Naše sveobuhvatne usluge",
      subtitle: "Od IPARD finansiranja do poslovnog konsaltinga, pružamo potpunu podršku za vaš rast",
      ipardTitle: "IPARD programi",
      ipardDesc: "Pristup EU finansiranju do €1.3M za poljoprivredne investicije, prerađivačke pogone i projekte ruralnog razvoja.",
      ipardFeature1: "IPARD I - Poljoprivredne investicije",
      ipardFeature2: "IPARD II - Modernizacija prerade",
      ipardFeature3: "IPARD III - Ruralni turizam",
      financialTitle: "Finansijska pomoć",
      financialDesc: "Sveobuhvatna podrška za proizvodne i turističke sektore sa grantovima, subvencijama i povoljnim kreditima.",
      financialFeature1: "Programi podrške proizvodnji",
      financialFeature2: "Grantovi za razvoj turizma",
      financialFeature3: "Finansiranje promocije izvoza",
      consultingTitle: "Poslovno konsalting",
      consultingDesc: "Stručno vođenje za mikro preduzeća i sveobuhvatne usluge izrade poslovnih planova.",
      consultingFeature1: "Konsalting za mikro preduzeća",
      consultingFeature2: "Izrada poslovnih planova",
      consultingFeature3: "Strateško planiranje",
      learnMore: "Saznajte više",
    },
    clients: {
      title: "Povjerenje vodećih preduzeća",
      subtitle: "Pomogli smo stotinama kompanija u sektorima poljoprivrede, turizma i proizvodnje",
    },
    blog: {
      title: "Najnoviji uvidi i priče",
      subtitle: "Ostanite informisani uz našu stručnu analizu i priče o uspjehu klijenata",
      readMore: "Pročitajte više",
      viewAll: "Pogledajte sve objave",
      wantMore: "Želite da pročitate više?",
      newsletterDesc: "Primajte naše najnovije uvide o IPARD finansiranju, poslovnim prilikama i pričama o uspjehu direktno na vašu e-poštu.",
      loading: "Učitavanje...",
      error: "Nije moguće učitati članke u ovom trenutku.",
    },
    contact: {
      title: "Spremni ste da razvijete svoje poslovanje?",
      subtitle: "Razgovarajmo o tome kako možemo da vam pomognemo da pristupite finansiranju i ostvarite svoje poslovne ciljeve.",
      phone: "Telefon",
      email: "E-pošta",
      address: "Adresa",
      formTitle: "Dobijte besplatnu konsultaciju",
      firstName: "Ime",
      lastName: "Prezime",
      emailLabel: "E-pošta",
      serviceInterest: "Interesuje vas",
      message: "Poruka",
      selectService: "Izaberite uslugu",
      ipardPrograms: "IPARD programi",
      financialAid: "Finansijska pomoć",
      businessConsulting: "Poslovno konsalting",
      businessPlanDev: "Izrada poslovnog plana",
      messagePlaceholder: "Recite nam o svom projektu...",
      send: "Pošalji poruku",
      sending: "Slanje...",
      successTitle: "Poruka uspješno poslata!",
      successDesc: "Uskoro ćemo vas kontaktirati.",
      errorTitle: "Greška pri slanju poruke",
      errorDesc: "Molimo pokušajte ponovo kasnije.",
    },
    footer: {
      tagline: "Stručno finansijsko konsalting i rješenja za finansiranje za sektore poljoprivrede, turizma i proizvodnje. Vaš uspjeh je naša misija.",
      servicesTitle: "Usluge",
      ipard: "IPARD programi",
      financialAid: "Finansijska pomoć",
      consulting: "Poslovno konsalting",
      businessPlans: "Poslovni planovi",
      marketAccess:"",
        GrantsAndFinancing:"",
      companyTitle: "Kompanija",
      aboutUs: "O nama",
      ourTeam: "Naš tim",
      careers: "Karijere",
      contactUs: "Kontakt",
      copyright: "© 2025 WVP Plus Consulting. Sva prava zadržana.",
      privacy: "Politika privatnosti",
      terms: "Uslovi korišćenja",
    },
    newsletter: {
      title: "Pratite naše vijesti",
      subtitle: "Budite u toku sa najnovijim IPARD smjernicama i poslovnim savjetima",
      placeholder: "Unesite vašu e-poštu",
      subscribe: "Pretplatite se",
      subscribing: "Pretplata...",
      successTitle: "Uspješna pretplata!",
      successDesc: "Hvala što ste se pretplatili na naš bilten.",
      errorTitle: "Greška pri pretplati",
      errorDesc: "Molimo pokušajte ponovo kasnije.",
    },
    home: {
      loadingContent: "Učitavanje sadržaja stranice...",
        slide1Title: "For the clients we choose the best!",
        slide1Subtitle: "3000 clients and counting",
        slide2Title: "Our way of work",
        slide2Subtitle: "Meet how we work, and learn why our aproach gives best results",
        slide3Title: "Experts in the finance field",
        slide3Subtitle: "Strategic business planning and financial advisory services to accelerate your growth",
    },
      about: {
          // Hero Section
          heroTitle: "Our Company", // Placeholder for the actual content of t.about.heroTitle
          heroSubtitle: "Dedicated to providing comprehensive financial and market access consulting.", // Placeholder for the actual content of t.about.heroSubtitle

          // Company Overview
          whoWeAreTitle: "Who We Are",
          overviewP1: "WVP PLUS CONSULTING is part of the Austrian WVP GROUP, whose primary focus is financial consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries and has been active in Macedonia since 2005.",
          overviewP2: "Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian companies and citizens. Over five years, we have supported more than 3,000 clients, facilitated over €80M in loans, and secured more than €25M in grants.",
          regionalDevTitle: "Regional Development",
          serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Serbia",
          bosniaOffice: "2024 — WFP PLUS CONSULTING LLC Bosnia",
          accountingOffice: "2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)",
          whatWeOfferTitle: "What We Offer",

          // What We Offer
          accessFinanceTitle: "Access to Finance:",
          accessFinanceList: [
              "Banking credit products",
              "Leasing",
              "Factoring",
              "Government support instruments",
              "Non-banking financial support",
              "Mergers & acquisitions",
              "Equity crowdfunding",
              "Business angels",
              "Capital instruments",
              "Grants / co-financing"
          ],
          marketAccessTitle: "Market Access:",
          marketAccessList: [
              "Company digitalization",
              "Energy efficiency audit (PiNE model)",
              "Circular economy development",
              "Employee protection matrix",
              "Export strategy & planning",
              "Product design & development",
              "Marketing strategy & branding",
              "Financial capacity diagnostics"
          ],
          specialReportsTitle: "Specialized Reports:",
          specialReportsList: [
              "Business plans",
              "Investment programs",
              "Due diligence",
              "Cost-benefit analysis"
          ],
          missionStatement: "Our mission is to deeply understand each company, identify its financial and market needs, and connect it with the right instruments to achieve real, measurable results. With over 25 experts, we ensure top-level consulting and long-term partnerships.",

          // Company Values
          valuesTitle: "Our Values",
          valuesSubtitle: "The principles that drive our work and shape our commitment to excellence.",

          // Team Section
          teamTitle: "Meet Our Team",
          teamSubtitle: "Experienced professionals dedicated to your success",

          // CTA Section
          ctaJoinTitle: "Join Our Team",
          ctaJoinSubtitle: "We're always looking for talented professionals to join our growing team",
          viewPositions: "View Open Positions",
          contactUsCta: "Contact Us",

          values: {
              "Results-Oriented": "Ориентираност кон Резултати",
              "We focus on delivering measurable outcomes and tangible value to our clients": "Се фокусираме на испорака на мерливи резултати и опиплива вредност за нашите клиенти",
              "Client-Centric": "Фокус на Клиентот",
              "Your success is our priority. We build long-term partnerships based on trust": "Вашиот успех е наш приоритет. Градиме долгорочни партнерства засновани на доверба",
              "Excellence": "Извонредност",
              "We maintain the highest standards of professionalism and expertise": "Одржуваме највисоки стандарди на професионалност и експертиза",
              "Innovation": "Иновација",
              "We leverage the latest technologies and methodologies to drive success": "Користиме најнови технологии и методологии за да постигнеме успех"
          },
      },
    team: {
      title: "",
      subtitle: "",
      description: "",
      cta: "",
    },
    contactPage: {
      heroTitle: "",
      heroSubtitle: "",
      methodsTitle: "",
      methodsSubtitle: "",
      getDirections: "",
      headquartersLabel: "",
      officesTitle: "",
      businessHoursTitle: "",
      dayMonFri: "",
      daySaturday: "",
      daySunday: "",
      closed: "",
      monFriHours: "",
      saturdayHours: "",
      mapIntro: "",
      mapClickHint: "",
      emergencySupportTitle: "",
      emergencySupportDesc: "",
      faqsTitle: "",
      methods: {
        phone: { title: "", description: "", details: "", availability: "" },
        email: { title: "", description: "", details: "", availability: "" },
        inPerson: { title: "", description: "", details: "", availability: "" },
        online: { title: "", description: "", details: "", availability: "" },
      },
      faqs: [
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
      ],
    },
    programs: {
      viewAllServices: "Pogledaj sve usluge",
        floatingNumber:"+389 78 348 860",
        flaotingButton:"Закажете \n  консултације",
        buttonText:"Zakazete konsultacii",
      services: {
        financialConsulting: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        accessToFinance: { title: "", subtitle: "", description: "", items: ["", "", "", "", ""] },
        grants: { title: "", subtitle: "", description: "", items: ["", "", "", "", ""] },
        businessConsulting: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        marketing: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        marketAccess: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        esg: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
      },
    },
  },
  bs: {
    nav: {
      home: "Početna",
      programs: "Programi",
      blog: "Blog",
      about: "O nama",
      contact: "Kontakt",
    },
    hero: {
      title: "Transformišite vaše poljoprivredno poslovanje",
      subtitle: "Pristupite do €1.3M IPARD finansiranja za poljoprivrednu modernizaciju i ruralni razvoj",
      learnMore: "Saznajte više",
      viewPrograms: "Pogledajte programe",
    },
    achievements: {
      title: "Naša dostignuća 2024",
      subtitle: "Pružamo izuzetne rezultate našim klijentima u svim sektorima",
      loading: "Učitavanje...",
      error: "Nije moguće učitati dostignuća u ovom trenutku.",
    },
    services: {
      title: "Naše sveobuhvatne usluge",
      subtitle: "Od IPARD finansiranja do poslovnog konsaltinga, pružamo potpunu podršku za vaš rast",
      ipardTitle: "IPARD programi",
      ipardDesc: "Pristup EU finansiranju do €1.3M za poljoprivredne investicije, prerađivačke pogone i projekte ruralnog razvoja.",
      ipardFeature1: "IPARD I - Poljoprivredne investicije",
      ipardFeature2: "IPARD II - Modernizacija prerade",
      ipardFeature3: "IPARD III - Ruralni turizam",
      financialTitle: "Finansijska pomoć",
      financialDesc: "Sveobuhvatna podrška za proizvodne i turističke sektore sa grantovima, subvencijama i povoljnim kreditima.",
      financialFeature1: "Programi podrške proizvodnji",
      financialFeature2: "Grantovi za razvoj turizma",
      financialFeature3: "Finansiranje promocije izvoza",
      consultingTitle: "Poslovno konsalting",
      consultingDesc: "Stručno vođenje za mikro preduzeća i sveobuhvatne usluge izrade poslovnih planova.",
      consultingFeature1: "Konsalting za mikro preduzeća",
      consultingFeature2: "Izrada poslovnih planova",
      consultingFeature3: "Strateško planiranje",
      learnMore: "Saznajte više",
    },
    clients: {
      title: "Povjerenje vodećih preduzeća",
      subtitle: "Pomogli smo stotinama kompanija u sektorima poljoprivrede, turizma i proizvodnje",
    },
    blog: {
      title: "Najnoviji uvidi i priče",
      subtitle: "Ostanite informisani uz našu stručnu analizu i priče o uspjehu klijenata",
      readMore: "Pročitajte više",
      viewAll: "Pogledajte sve objave",
      wantMore: "Želite da pročitate više?",
      newsletterDesc: "Primajte naše najnovije uvide o IPARD finansiranju, poslovnim prilikama i pričama o uspjehu direktno na vašu e-poštu.",
      loading: "Učitavanje...",
      error: "Nije moguće učitati članke u ovom trenutku.",
    },
    contact: {
      title: "Spremni ste da razvijete svoje poslovanje?",
      subtitle: "Razgovarajmo o tome kako možemo da vam pomognemo da pristupite finansiranju i ostvarite svoje poslovne ciljeve.",
      phone: "Telefon",
      email: "E-pošta",
      address: "Adresa",
      formTitle: "Dobijte besplatnu konsultaciju",
      firstName: "Ime",
      lastName: "Prezime",
      emailLabel: "E-mail",
      serviceInterest: "Interesuje vas",
      message: "Poruka",
      selectService: "Izaberite uslugu",
      ipardPrograms: "IPARD programi",
      financialAid: "Finansijska pomoć",
      businessConsulting: "Poslovno konsalting",
      businessPlanDev: "Izrada poslovnog plana",
      messagePlaceholder: "Recite nam o svom projektu...",
      send: "Pošalji poruku",
      sending: "Slanje...",
      successTitle: "Poruka uspješno poslata!",
      successDesc: "Uskoro ćemo vas kontaktirati.",
      errorTitle: "Greška pri slanju poruke",
      errorDesc: "Molimo pokušajte ponovo kasnije.",
    },
    footer: {
      tagline: "Stručno finansijsko konsalting i rješenja za finansiranje za sektore poljoprivrede, turizma i proizvodnje. Vaš uspjeh je naša misija.",
      servicesTitle: "Usluge",
      ipard: "IPARD programi",
      financialAid: "Finansijska pomoć",
      consulting: "Poslovno konsalting",
      businessPlans: "Poslovni planovi",
        marketAccess:"",
      GrantsAndFinancing:"",
      companyTitle: "Kompanija",
      aboutUs: "O nama",
      ourTeam: "Naš tim",
      careers: "Karijere",
      contactUs: "Kontakt",
      copyright: "© 2025 WVP Plus Consulting. Sva prava zadržana.",
      privacy: "Politika privatnosti",
      terms: "Uslovi korištenja",
    },
    newsletter: {
      title: "Pratite naše vijesti",
      subtitle: "Budite u toku sa najnovijim IPARD smjernicama i poslovnim savjetima",
      placeholder: "Unesite vašu e-poštu",
      subscribe: "Pretplatite se",
      subscribing: "Pretplata...",
      successTitle: "Uspješna pretplata!",
      successDesc: "Hvala što ste se pretplatili na naš bilten.",
      errorTitle: "Greška pri pretplati",
      errorDesc: "Molimo pokušajte ponovo kasnije.",
    },
    home: {
      loadingContent: "Učitavanje sadržaja stranice...",
        slide1Title: "For the clients we choose the best!",
        slide1Subtitle: "3000 clients and counting",
        slide2Title: "Our way of work",
        slide2Subtitle: "Meet how we work, and learn why our aproach gives best results",
        slide3Title: "Experts in the finance field",
        slide3Subtitle: "Strategic business planning and financial advisory services to accelerate your growth",
    },
      about: {
          // Hero Section
          heroTitle: "Our Company", // Placeholder for the actual content of t.about.heroTitle
          heroSubtitle: "Dedicated to providing comprehensive financial and market access consulting.", // Placeholder for the actual content of t.about.heroSubtitle

          // Company Overview
          whoWeAreTitle: "Who We Are",
          overviewP1: "WVP PLUS CONSULTING is part of the Austrian WVP GROUP, whose primary focus is financial consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries and has been active in Macedonia since 2005.",
          overviewP2: "Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian companies and citizens. Over five years, we have supported more than 3,000 clients, facilitated over €80M in loans, and secured more than €25M in grants.",
          regionalDevTitle: "Regional Development",
          serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Serbia",
          bosniaOffice: "2024 — WFP PLUS CONSULTING LLC Bosnia",
          accountingOffice: "2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)",
          whatWeOfferTitle: "What We Offer",

          // What We Offer
          accessFinanceTitle: "Access to Finance:",
          accessFinanceList: [
              "Banking credit products",
              "Leasing",
              "Factoring",
              "Government support instruments",
              "Non-banking financial support",
              "Mergers & acquisitions",
              "Equity crowdfunding",
              "Business angels",
              "Capital instruments",
              "Grants / co-financing"
          ],
          marketAccessTitle: "Market Access:",
          marketAccessList: [
              "Company digitalization",
              "Energy efficiency audit (PiNE model)",
              "Circular economy development",
              "Employee protection matrix",
              "Export strategy & planning",
              "Product design & development",
              "Marketing strategy & branding",
              "Financial capacity diagnostics"
          ],
          specialReportsTitle: "Specialized Reports:",
          specialReportsList: [
              "Business plans",
              "Investment programs",
              "Due diligence",
              "Cost-benefit analysis"
          ],
          missionStatement: "Our mission is to deeply understand each company, identify its financial and market needs, and connect it with the right instruments to achieve real, measurable results. With over 25 experts, we ensure top-level consulting and long-term partnerships.",

          // Company Values
          valuesTitle: "Our Values",
          valuesSubtitle: "The principles that drive our work and shape our commitment to excellence.",

          // Team Section
          teamTitle: "Meet Our Team",
          teamSubtitle: "Experienced professionals dedicated to your success",

          // CTA Section
          ctaJoinTitle: "Join Our Team",
          ctaJoinSubtitle: "We're always looking for talented professionals to join our growing team",
          viewPositions: "View Open Positions",
          contactUsCta: "Contact Us",

          values: {
              "Results-Oriented": "Ориентираност кон Резултати",
              "We focus on delivering measurable outcomes and tangible value to our clients": "Се фокусираме на испорака на мерливи резултати и опиплива вредност за нашите клиенти",
              "Client-Centric": "Фокус на Клиентот",
              "Your success is our priority. We build long-term partnerships based on trust": "Вашиот успех е наш приоритет. Градиме долгорочни партнерства засновани на доверба",
              "Excellence": "Извонредност",
              "We maintain the highest standards of professionalism and expertise": "Одржуваме највисоки стандарди на професионалност и експертиза",
              "Innovation": "Иновација",
              "We leverage the latest technologies and methodologies to drive success": "Користиме најнови технологии и методологии за да постигнеме успех"
          },
      },
    team: {
      title: "",
      subtitle: "",
      description: "",
      cta: "",
    },
    contactPage: {
        heroTitle: "",
        heroSubtitle: "",
        methodsTitle: "",
        methodsSubtitle: "",
        getDirections: "",
        headquartersLabel: "",
        businessHoursTitle: "",
        dayMonFri: "",
        daySaturday: "",
        daySunday: "",
        closed: "",
        faqsTitle: "",
        methods: {
            phone: {
                title: "", description: "", availability: "",
                details: ""
            },
            email: {
                title: "", description: "", availability: "",
                details: ""
            },
            inPerson: {
                title: "", description: "", availability: "",
                details: ""
            },
            online: {
                title: "", description: "", availability: "",
                details: ""
            },
        },
        faqs: [
            {question: "", answer: ""},
            {question: "", answer: ""},
            {question: "", answer: ""},
            {question: "", answer: ""},
        ],
        officesTitle: "",
        monFriHours: "",
        saturdayHours: "",
        mapIntro: "",
        mapClickHint: "",
        emergencySupportTitle: "",
        emergencySupportDesc: ""
    },
    programs: {
      viewAllServices: "Pogledaj sve usluge",
        floatingNumber:"+389 78 348 860",
        flaotingButton:"Закажете \n  консултације",
        buttonText:"",
      services: {
        financialConsulting: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        accessToFinance: { title: "", subtitle: "", description: "", items: ["", "", "", "", ""] },
        grants: { title: "", subtitle: "", description: "", items: ["", "", "", "", ""] },
        businessConsulting: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        marketing: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        marketAccess: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
        esg: { title: "", subtitle: "", description: "", items: ["", "", "", ""] },
      },
    },
  },
};

// --- Fallback mechanism ---
// Some languages may have missing keys or intentionally empty strings while translation is in progress.
// This utility deeply merges language dictionaries with English (en) as the base, and
// treats undefined, null or empty-string values in the override as "missing" and thus falls back to English.
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMergeWithEnglishFallback<T>(enBase: T, langObj: any): T {
  if (!isObject(enBase)) return (langObj ?? enBase) as T;

  const result: any = Array.isArray(enBase) ? [...(langObj ?? enBase)] : { ...enBase };

  for (const key of Object.keys(enBase as any)) {
    const baseVal: any = (enBase as any)[key];
    const overrideVal: any = isObject(langObj) ? langObj[key] : undefined;

    if (isObject(baseVal)) {
      result[key] = deepMergeWithEnglishFallback(baseVal, overrideVal);
    } else {
      // If override is missing or an empty string, fall back to English base value
      const isMissing = overrideVal === undefined || overrideVal === null || (typeof overrideVal === "string" && overrideVal.trim() === "");
      result[key] = isMissing ? baseVal : overrideVal;
    }
  }
  return result as T;
}

// Build merged translations once at module load
const mergedTranslations: typeof translations = (() => {
  const en = translations.en;
  const out: any = { ...translations };
  for (const lang of Object.keys(translations) as Language[]) {
    if (lang === "en") {
      out[lang] = en;
      continue;
    }
    out[lang] = deepMergeWithEnglishFallback(en, translations[lang]);
  }
  return out as typeof translations;
})();

export function useTranslations() {
  return mergedTranslations;
}
