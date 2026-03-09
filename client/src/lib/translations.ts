import type { Language } from "@shared/schema";


export const translations: Record<
  Language,
  {
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
      supertitle: string;
      supersubtitle: string;
      titleDetails:string;
      title1: string;
      subtitle1: string;
      title2: string;
      subtitle2: string;
      title3: string;
      subtitle3: string;
      loading: string;
      error: string;
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
      GrantsAndFinancing: string;
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
        Excellence: string;
        "We maintain the highest standards of professionalism and expertise": string;
        Innovation: string;
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
        phone: {
          title: string;
          description: string;
          details: string;
          availability: string;
        };
        email: {
          title: string;
          description: string;
          details: string;
          availability: string;
        };
        inPerson: {
          title: string;
          description: string;
          details: string;
          availability: string;
        };
        online: {
          title: string;
          description: string;
          details: string;
          availability: string;
        };
      };
      faqs: { question: string; answer: string }[];
    };
    programs: {
      viewAllServices: string;
      floatingNumber: string;
      flaotingButton: string;
      buttonText: string;
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
  }
> = {
  sr: {
  nav: {
    home: "Početna",
    programs: "Usluge",
    blog: "Finansijski saveti",
    about: "O nama",
    contact: "Kontakt",
  },

  hero: {
    title: "Transformišite svoj poljoprivredni biznis",
    subtitle:
      "Pristupite IPARD finansiranju do €1.3M za modernizaciju poljoprivrede i ruralni razvoj",
    learnMore: "Saznaj više",
    viewPrograms: "Pogledaj programe",
  },

  achievements: {
    supertitle: "Naša dostignuća",
    supersubtitle:
      "Zajedno sa našim klijentima postižemo izuzetne rezultate u svim sektorima!",
    titleDetails: "Do 31.12.2025",
    title1: "Uspešno realizovani projekti",
    subtitle1: "Više od 4.300 uspešno realizovanih projekata",
    title2: "Odobrena bespovratna sredstva",
    subtitle2: "Više od 35 miliona evra isplaćenih grantova",
    title3: "Odobreni krediti",
    subtitle3: "Više od 80 miliona evra finansijskih kredita",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati podatke.",
  },

  services: {
    title: "Pogledajte kako vam možemo pomoći",
    subtitle:
      "Od pristupa finansijama do tržišta i strateškog razvoja poslovanja, nudimo potpunu podršku za rast vašeg biznisa",
    ipardTitle: "Finansijski konsalting",
    ipardDesc:
      "Pristup EU fondovima do €1.3M za investicije u poljoprivredu, preradu i projekte ruralnog razvoja.",
    ipardFeature1: "IPARD I - Investicije u poljoprivredu",
    ipardFeature2: "IPARD II - Modernizacija prerade",
    ipardFeature3: "IPARD III - Ruralni turizam",

    financialTitle: "Finansijska podrška",
    financialDesc:
      "Sveobuhvatna podrška za proizvodni i turistički sektor kroz grantove, subvencije i povoljne kredite.",
    financialFeature1: "Programi podrške proizvodnji",
    financialFeature2: "Grantovi za razvoj turizma",
    financialFeature3: "Finansiranje izvoza",

    consultingTitle: "Biznis konsalting",
    consultingDesc:
      "Stručna podrška za mikro preduzeća i razvoj kompletnih biznis planova.",
    consultingFeature1: "Konsalting za mikro biznise",
    consultingFeature2: "Izrada biznis planova",
    consultingFeature3: "Strateško planiranje",

    learnMore: "Saznaj više",
  },

  clients: {
    title: "Poverenje vodećih kompanija",
    subtitle:
      "Pomogli smo stotinama kompanija iz sektora poljoprivrede, turizma i proizvodnje",
  },

  blog: {
    title: "Finansije u svakodnevnoj praksi",
    subtitle:
      "Saznajte više o finansijskim novostima, našim iskustvima i uspešnim pričama",
    readMore: "Pročitaj više",
    viewAll: "Pogledaj sve objave",
    wantMore: "Želite da čitate više?",
    newsletterDesc:
      "Dobijajte najnovije informacije o IPARD fondovima, poslovnim prilikama i uspešnim projektima direktno na vaš email.",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati blog objave.",
  },

  contact: {
    title: "Spremni da razvijete svoj biznis?",
    subtitle:
      "Razgovarajmo o tome kako vam možemo pomoći da dobijete finansiranje i ostvarite svoje poslovne ciljeve.",
    phone: "Telefon",
    email: "Email",
    address: "Adresa",

    formTitle: "Postavite pitanje - rešite dilemu",

    firstName: "Ime",
    lastName: "Prezime",
    emailLabel: "Email",
    serviceInterest: "Zainteresovana usluga",
    message: "Poruka / pitanje",

    selectService: "Izaberite uslugu",
    ipardPrograms: "IPARD programi",
    financialAid: "Finansijska podrška",
    businessConsulting: "Biznis konsalting",
    businessPlanDev: "Izrada biznis plana",

    messagePlaceholder: "Recite nam nešto o vašem projektu...",

    send: "Pošalji poruku",
    sending: "Slanje...",

    successTitle: "Poruka je uspešno poslata!",
    successDesc: "Kontaktiraćemo vas uskoro.",

    errorTitle: "Greška pri slanju poruke",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },

  footer: {
    tagline: "Za naše klijente uvek biramo najbolje!",
    servicesTitle: "Usluge",

    ipard: "Finansijski konsalting",
    financialAid: "Pristup finansijama kroz kreditne proizvode",
    consulting: "Biznis konsalting",
    businessPlans: "Marketing i razvoj poslovanja",
    marketAccess: "Pristup tržištu",
    GrantsAndFinancing: "Grantovi i sufinansiranje",

    companyTitle: "Kompanija",

    aboutUs: "O nama",
    ourTeam: "Naš tim",
    careers: "Karijera",
    contactUs: "Kontakt",

    copyright: "© 2025 WVP Plus Consulting. Sva prava zadržana.",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
  },

  newsletter: {
    title: "Budite u toku",
    subtitle: "Dobijajte najnovije IPARD smernice i poslovne savete",
    placeholder: "Unesite vaš email",
    subscribe: "Pretplati se",
    subscribing: "Pretplata...",

    successTitle: "Uspešno ste se pretplatili!",
    successDesc: "Hvala vam na prijavi za naš newsletter.",

    errorTitle: "Pretplata nije uspela",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },

  home: {
    loadingContent: "Učitavanje sadržaja stranice...",
    slide1Title: "Za klijente biramo najbolje!",
    slide1Subtitle: "4300 klijenata i dalje rastemo",
    slide2Title: "Naš način rada",
    slide2Subtitle:
      "Upoznajte način na koji radimo i zašto naš pristup daje najbolje rezultate",
    slide3Title: "Eksperti u oblasti finansija",
    slide3Subtitle:
      "Strateško planiranje poslovanja i finansijski saveti za ubrzani rast",
  },

  about: {
    
    heroTitle: "Naša kompanija",
    heroSubtitle:
      "Posvećeni pružanju sveobuhvatnih konsultantskih usluga u oblasti finansija i pristupa tržištu.",

    whoWeAreTitle: "Ko smo mi",

    overviewP1:
      "WVP PLUS CONSULTING je deo austrijske WVP GROUP čija je osnovna delatnost finansijski konsalting. Osnovana 1985. godine u Gracu, Austrija, grupa danas posluje u 10 zemalja jugoistočne Evrope i prisutna je u Makedoniji od 2005. godine.",

    overviewP2:
      "Od osnivanja 2019. godine, WVP PLUS CONSULTING ima za cilj da obezbedi pun pristup finansijama makedonskim kompanijama i građanima. Za pet godina podržali smo više od 3.000 klijenata, obezbedili preko €80M kredita i više od €25M grantova.",

    regionalDevTitle: "Regionalni razvoj",

    serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Srbija",
    bosniaOffice: "2024 — WVP PLUS CONSULTING LLC Bosna",
    accountingOffice:
      "2024 — WVP ACCOUNTING LLC Makedonija (porezi, računovodstvo, revizija)",

    whatWeOfferTitle: "Šta nudimo",

    accessFinanceTitle: "Pristup finansijama:",

    accessFinanceList: [
      "Bankarski kreditni proizvodi",
      "Lizing",
      "Faktoring",
      "Instrumenti državne podrške",
      "Nebankarska finansijska podrška",
      "Spajanja i akvizicije",
      "Equity crowdfunding",
      "Biznis anđeli",
      "Kapitalni instrumenti",
      "Grantovi / sufinansiranje",
    ],

    marketAccessTitle: "Pristup tržištu:",

    marketAccessList: [
      "Digitalizacija kompanije",
      "Energetski audit (PiNE model)",
      "Razvoj cirkularne ekonomije",
      "Matrica zaštite zaposlenih",
      "Izvozna strategija i planiranje",
      "Dizajn i razvoj proizvoda",
      "Marketing strategija i brendiranje",
      "Dijagnostika finansijskog kapaciteta",
    ],

    specialReportsTitle: "Specijalizovani izveštaji:",

    specialReportsList: [
      "Biznis planovi",
      "Investicioni programi",
      "Due diligence",
      "Cost-benefit analiza",
    ],

    missionStatement:
      "Naša misija je da dubinski razumemo svaku kompaniju, identifikujemo njene finansijske i tržišne potrebe i povežemo je sa pravim instrumentima kako bi ostvarila konkretne i merljive rezultate. Sa više od 25 stručnjaka obezbeđujemo vrhunski konsalting i dugoročna partnerstva.",

    // Company Values
    valuesTitle: "Naše Vrednosti",
    valuesSubtitle:
      "Principi koji vode naš rad i oblikuju našu posvećenost izvrsnosti.",

    // Team Section
    teamTitle: "Upoznajte Naš Tim",
    teamSubtitle: "Iskusni profesionalci posvećeni vašem uspjehu",

    // CTA Section
    ctaJoinTitle: "Pridružite se Našem Timu",
    ctaJoinSubtitle:
      "Uvijek tražimo talentovane profesionalce da se pridruže našem rastućem timu",
    viewPositions: "Pogledajte Otvorene Pozicije",
    contactUsCta: "Kontaktirajte Nas",

    values: {
      "Results-Oriented": "Orijentisanost ka Rezultatima",
      "We focus on delivering measurable outcomes and tangible value to our clients":
        "Fokusiramo se na isporuku mjerljivih rezultata i opipljive vrijednosti za naše klijente",
      "Client-Centric": "Fokus na Klijenta",
      "Your success is our priority. We build long-term partnerships based on trust":
        "Vaš uspjeh je naš prioritet. Gradimo dugoročna partnerstva zasnovana na povjerenju",
      Excellence: "Izvrsnost",
      "We maintain the highest standards of professionalism and expertise":
        "Održavamo najviše standarde profesionalnosti i ekspertize",
      Innovation: "Inovacija",
      "We leverage the latest technologies and methodologies to drive success":
        "Koristimo najnovije tehnologije i metodologije za postizanje uspjeha",
    },
  },

  team: {
    title: "Naš tim",
    subtitle: "Najveći tim stručnjaka",
    description:
      "Mi smo multidisciplinarni tim sa bogatim iskustvom u finansijskom konsaltingu i razvoju investicija. Specijalizovani smo za proizvodnju, agribiznis, ruralni razvoj, turizam i projekte zelene energije.",
    cta: "Povežite se sa našim stručnjacima",
  },

  contactPage: {
    heroTitle: "Spremni da podignete svoj biznis na novi nivo?",
    heroSubtitle: "Kontaktirajte naš tim stručnjaka već danas.",
    methodsTitle: "Kako vam možemo pomoći?",
    methodsSubtitle: "Izaberite najpogodniji način da kontaktirate naš tim",
    getDirections: "Preuzmi uputstva",
    headquartersLabel: "Sedište",
    officesTitle: "Naša kancelarija",
    businessHoursTitle: "Radno vreme",
    dayMonFri: "Ponedeljak - Petak",
    daySaturday: "Subota",
    daySunday: "Nedelja",
    closed: "Zatvoreno",
    monFriHours: "08:00 - 17:00",
    saturdayHours: "09:00 - 13:00",
    mapIntro: "Interaktivna mapa sa lokacijama svih kancelarija",
    mapClickHint: "Kliknite na bilo koju karticu kancelarije iznad za uputstva",
    emergencySupportTitle: "Hitna podrška:",
    emergencySupportDesc:
      "Za hitne stvari van radnog vremena, pošaljite nam email i odgovorićemo što je pre moguće.",
    faqsTitle: "Često postavljana pitanja",
    methods: {
      phone: {
        title: "Telefonska podrška",
        description: "Razgovarajte direktno sa našim konsultantima",
        details: "+389 76 337 800 \n +389 76 337 801",
        availability: "Pon-Pet 8:00-17:00",
      },
      email: {
        title: "Email podrška",
        description: "Dobijte detaljne odgovore na vaša pitanja",
        details: "info@wvpconsulting.com",
        availability: "24/7 odgovor u roku od 24 sata",
      },
      inPerson: {
        title: "Lična konsultacija",
        description: "Zakažite sastanak uživo",
        details: "Dostupno u svim kancelarijama",
        availability: "Samo po dogovoru",
      },
      online: {
        title: "Online konsultacija",
        description: "Video pozivi za klijente na daljinu",
        details: "Zoom, Teams, ili preferirana platforma",
        availability: "Fleksibilno zakazivanje",
      },
    },
    faqs: [
      {
        question: "Koliko traje proces prijave za IPARD?",
        answer:
          "Tipičan proces prijave za IPARD traje 3-6 meseci od početne konsultacije do odobrenja sredstava, u zavisnosti od složenosti vašeg projekta i kompletnosti dokumentacije.",
      },
      {
        question: "Koje dokumente treba da pripremim za prijavu?",
        answer:
          "Potrebni dokumenti obično uključuju registraciju biznisa, finansijske izveštaje, projektnu dokumentaciju, ekološke dozvole i detaljan biznis plan. Obezbeđujemo kompletnu listu za proveru tokom konsultacija.",
      },
      {
        question: "Da li pružate podršku biznisima van Srbije?",
        answer:
          "Iako je naš primarni fokus na srpskim biznisima, pružamo konsultantske usluge i za međunarodne kompanije koje žele da investiraju u Srbiju ili pristupe programima EU finansiranja.",
      },
      {
        question: "Koje su vaše cene konsultacija?",
        answer:
          "Nudimo besplatne početne konsultacije za procenu vašeg projekta. Naše naknade za usluge su transparentne i unapred dogovorene, obično strukturisane kao procenat od uspešno obezbeđenih sredstava.",
      },
    ],
  },

  programs: {
    viewAllServices: "Pogledaj sve usluge",
    floatingNumber: "+389 78 348 860",
    flaotingButton: "Zakažite konsultacije",
    buttonText: "Zakažite konsultacije",
    services: {
      financialConsulting: {
        title: "Finansijski konsalting",
        subtitle: "Kreditna dijagnostika • Biznis planiranje • Strukturiranje investicija",
        description:
          "Sveobuhvatna analiza prilagođena vašem biznis modelu za optimizaciju finansijskih operacija klijenta, pripremu kreditne biznis dijagnostike i osiguranje kvalitetne strukture finansijskih izvještaja.",
        items: [
          "Biznis plan",
          "Due diligence",
          "Investicioni program",
          "Izvještaj izvodljivosti/cost-benefit analiza",
        ],
      },
      accessToFinance: {
        title: "Pristup finansijama",
        subtitle: "Kreditni savjetnici • Strukturirano finansiranje",
        description:
          "Kroz usluge kreditnog promotera i kreditnog savjetnika, obezbjeđuje se kreditna dijagnostika i preporuke za finansijsku strukturu pogodnu za postojeće i buduće investicije.",
        items: [
          "Bankarski kreditni proizvodi",
          "Lizing",
          "Faktoring",
          "Osiguranje potraživanja",
          "Alternativno finansiranje",
        ],
      },
      grants: {
        title: "Grantovi i kofinansiranje",
        subtitle: "Priprema projekata • Praćenje grantova",
        description:
          "Praćenje konkursa i kompletna priprema prijava za grantove i kofinansiranje dostupne kroz nacionalne i međunarodne instrumente, uključujući IPARD, IPA, GIZ i EU fondove.",
        items: [
          "IPARD, IPA, GIZ",
          "Nacionalni programi",
          "EBRD blended finance",
          "EU strukturni instrumenti",
          "Do 90% povrata",
        ],
      },
      businessConsulting: {
        title: "Biznis konsalting",
        subtitle: "Organizaciona dijagnostika • QUINTAUM",
        description:
          "Koristeći QUINTAUM metodologiju (210 indikatora) dijagnostikujemo organizacionu kulturu, blagostanje zaposlenih i efikasnost menadžmenta.",
        items: [
          "QUINTAUM dijagnostika (210 KPI)",
          "Coaching i liderstvo programi",
          "Planovi razvoja zaposlenih",
          "Dugoročno organizaciono praćenje",
        ],
      },
      marketing: {
        title: "Marketing i razvoj biznisa",
        subtitle: "Brendiranje • Strategija rasta • Digitalizacija",
        description:
          "Integrisani marketing i razvoj biznisa koji povećava vidljivost brenda i donosi mjerljiv rast.",
        items: [
          "Strateško planiranje",
          "Istraživanje tržišta",
          "Brendiranje i identitet",
          "Digitalne kampanje i analitika",
        ],
      },
      marketAccess: {
        title: "Pristup tržištu",
        subtitle: "Izvozna strategija • Identifikacija kupaca",
        description:
          "Podrška kompanijama koje traže nova međunarodna tržišta kroz istraživanje, planiranje izvoza i pronalaženje kupaca.",
        items: [
          "Istraživanje tržišta i analiza potencijala",
          "Spremnost za digitalizaciju",
          "Energetski audit (PiNE)",
          "Izvozni plan i pronalaženje kupaca",
        ],
      },
      esg: {
        title: "ESG standardizacija",
        subtitle: "Nefinansijsko izvještavanje • Mapa usklađenosti",
        description:
          "Dijagnostika i softverski omogućena implementacija ESG standarda: ekološki, društveni i upravljački indikatori.",
        items: [
          "ESG dijagnostika i izvještavanje",
          "Ekološki i društveni indikatori",
          "Mapiranje upravljanja",
          "Mapa usklađenosti",
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
      subtitle:
        "Access up to €1.3M in IPARD funding for agricultural modernization and rural development",
      learnMore: "Learn More",
      viewPrograms: "View Programs",
    },
    achievements: {
      supertitle: "Our Achievements",
      supersubtitle:
        "Together with our clients, we achieve exceptional results across all sectors!",
      titleDetails:"Until 31.12.2025",
      title1: "Successfully completed projects",
      subtitle1: "Over 4,300 successfully completed projects",
      title2: "Approved grants",
      subtitle2: "Over 35 million euros in paid grants",
      title3: "Approved credits",
      subtitle3: "Over 80 million euros in paid financial credits",
      loading: "Loading...",
      error: "Unable to load achievements at this time.",
    },
    services: {
      title: "See how we can help you",
      subtitle:
        "From access to finance to market and strategic business development, we offer complete support for your business growth and development",
      ipardTitle: "Financial Consulting",
      ipardDesc:
        "Access EU funding up to €1.3M for agricultural investments, processing facilities, and rural development projects.",
      ipardFeature1: "IPARD I - Agricultural Investment",
      ipardFeature2: "IPARD II - Processing Modernization",
      ipardFeature3: "IPARD III - Rural Tourism",
      financialTitle: "Financial Aid",
      financialDesc:
        "Comprehensive support for manufacturing and tourism sectors with grants, subsidies, and favorable loans.",
      financialFeature1: "Manufacturing Support Programs",
      financialFeature2: "Tourism Development Grants",
      financialFeature3: "Export Promotion Funding",
      consultingTitle: "Business Consulting",
      consultingDesc:
        "Expert guidance for micro businesses and comprehensive business plan development services.",
      consultingFeature1: "Micro Business Consulting",
      consultingFeature2: "Business Plan Development",
      consultingFeature3: "Strategic Planning",
      learnMore: "Learn More",
    },
    clients: {
      title: "Trusted by Leading Businesses",
      subtitle:
        "We've helped hundreds of companies across agriculture, tourism, and manufacturing sectors",
    },
    blog: {
      title: "Finance in everyday practice",
      subtitle:
        "Learn more about financial news, our experiences and success stories",
      readMore: "Read More",
      viewAll: "View All Posts",
      wantMore: "Want to Read More?",
      newsletterDesc:
        "Get our latest insights on IPARD funding, business opportunities, and success stories delivered directly to your inbox.",
      loading: "Loading...",
      error: "Unable to load blog posts at this time.",
    },
    contact: {
      title: "Ready to Grow Your Business?",
      subtitle:
        "Let's discuss how we can help you access funding and achieve your business goals.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      formTitle: "Ask question - Solve your dilema",
      firstName: "First Name",
      lastName: "Last Name",
      emailLabel: "Email",
      serviceInterest: "Service Interest",
      message: "Message/Question",
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
      slide1Subtitle: "4300 clients and counting",
      slide2Title: "Our way of work",
      slide2Subtitle:
        "Meet how we work, and learn why our aproach gives best results",
      slide3Title: "Experts in the finance field",
      slide3Subtitle:
        "Strategic business planning and financial advisory services to accelerate your growth",
    },
    about: {
      // Hero Section
      heroTitle: "Our Company", // Placeholder for the actual content of t.about.heroTitle
      heroSubtitle:
        "Dedicated to providing comprehensive financial and market access consulting.", // Placeholder for the actual content of t.about.heroSubtitle

      // Company Overview
      whoWeAreTitle: "Who We Are",
      overviewP1:
        "WVP PLUS CONSULTING is part of the Austrian WVP GROUP, whose primary focus is financial consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries and has been active in Macedonia since 2005.",
      overviewP2:
        "Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian companies and citizens. Over five years, we have supported more than 3,000 clients, facilitated over €80M in loans, and secured more than €25M in grants.",
      regionalDevTitle: "Regional Development",
      serbiaOffice: "2022 — WVP PLUS CONSULTING LLC Serbia",
      bosniaOffice: "2024 — WFP PLUS CONSULTING LLC Bosnia",
      accountingOffice:
        "2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)",
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
        "Grants / co-financing",
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
        "Financial capacity diagnostics",
      ],
      specialReportsTitle: "Specialized Reports:",
      specialReportsList: [
        "Business plans",
        "Investment programs",
        "Due diligence",
        "Cost-benefit analysis",
      ],
      missionStatement:
        "Our mission is to deeply understand each company, identify its financial and market needs, and connect it with the right instruments to achieve real, measurable results. With over 25 experts, we ensure top-level consulting and long-term partnerships.",

      // Company Values
      valuesTitle: "Our Values",
      valuesSubtitle:
        "The principles that drive our work and shape our commitment to excellence.",

      // Team Section
      teamTitle: "Meet Our Team",
      teamSubtitle: "Experienced professionals dedicated to your success",

      // CTA Section
      ctaJoinTitle: "Join Our Team",
      ctaJoinSubtitle:
        "We're always looking for talented professionals to join our growing team",
      viewPositions: "View Open Positions",
      contactUsCta: "Contact Us",

      values: {
        "Results-Oriented": "Results-Oriented",
        "We focus on delivering measurable outcomes and tangible value to our clients":
          "We focus on delivering measurable outcomes and tangible value to our clients",
        "Client-Centric": "Client-Centric",
        "Your success is our priority. We build long-term partnerships based on trust":
          "Your success is our priority. We build long-term partnerships based on trust",
        Excellence: "Excellence",
        "We maintain the highest standards of professionalism and expertise":
          "We maintain the highest standards of professionalism and expertise",
        Innovation: "Innovation",
        "We leverage the latest technologies and methodologies to drive success":
          "We leverage the latest technologies and methodologies to drive success",
      },
    },
    team: {
      title: "Our Team",
      subtitle: "Largest team of Experts",
      description:
        "We are a multidisciplinary team with extensive experience in financial consulting and investment development. While we work across many industries, we specialize in manufacturing, agribusiness, rural development, tourism, and green energy projects. By helping clients navigate government support and EU funding, we transform concepts into profitable realities. We are dedicated to building sustainable, export-ready businesses.",
      cta: "Connect With Our Experts",
    },
    contactPage: {
      heroTitle: "Ready to take your business to the next level?",
      heroSubtitle: "Get in touch with our team of experts today.",
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
      emergencySupportDesc:
        "For urgent matters outside business hours, please email us and we'll respond as soon as possible.",
      faqsTitle: "Frequently Asked Questions",
      methods: {
        phone: {
          title: "Phone Support",
          description: "Speak directly with our consultants",
          details: "+389 76 337 800 \n +389 76 337 801",
          availability: "Mon-Fri 8:00-17:00",
        },
        email: {
          title: "Email Support",
          description: "Get detailed responses to your questions",
          details: "info@wvpconsulting.com",
          availability: "24/7 response within 24 hours",
        },
        inPerson: {
          title: "In-Person Consultation",
          description: "Schedule a face-to-face meeting",
          details: "Available in all offices",
          availability: "By appointment only",
        },
        online: {
          title: "Online Consultation",
          description: "Video calls for remote clients",
          details: "Zoom, Teams, or preferred platform",
          availability: "Flexible scheduling",
        },
      },
      faqs: [
        {
          question: "How long does the IPARD application process take?",
          answer:
            "The typical IPARD application process takes 3-6 months from initial consultation to funding approval, depending on the complexity of your project and completeness of documentation.",
        },
        {
          question:
            "What documents do I need to prepare for funding applications?",
          answer:
            "Required documents typically include business registration, financial statements, project documentation, environmental permits, and a detailed business plan. We provide a complete checklist during consultation.",
        },
        {
          question: "Do you provide support for businesses outside Serbia?",
          answer:
            "While our primary focus is on Serbian businesses, we do provide consulting services for international companies looking to invest in Serbia or access EU funding programs.",
        },
        {
          question: "What are your consultation fees?",
          answer:
            "We offer free initial consultations to assess your project. Our service fees are transparent and discussed upfront, typically structured as a percentage of successfully secured funding.",
        },
      ],
    },
    programs: {
      viewAllServices: "View All Services",
      floatingNumber: "+389 78 348 860",
      flaotingButton: "Schedule Consultation",

      buttonText: "Schedule Consultation",
      services: {
        financialConsulting: {
          title: "Financial Consulting",
          subtitle:
            "Credit diagnostics • Business planning • Investment structuring",
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
      subtitle:
        "Пристапете до 1.3 милиони евра преку IPARD фондовите за земјоделска модернизација и рурален развој",
      learnMore: "Дознајте повеќе",
      viewPrograms: "Видете ги програмите",
    },
    achievements: {
      supertitle: "Нашите достигнувања",
      supersubtitle:
        "Заедно со нашите клиенти, постигнуваме исклучителни резултати во сите сектори!",
      titleDetails:"До 31.12.2025",
      title1: "Успешно завршени проекти",
      subtitle1: "Над 4.300 успешно завршени проекти",
      title2: "Исплатени грантови",
      subtitle2: "Над 35 милиони евра во исплатени грантови",
      title3: "Исплатени кредити",
      subtitle3: "Над 80 милиони евра во исплатени финансиски кредити",
      loading: "Вчитување...",
      error: "Во моментот не е можно да се вчитаат достигнувањата.",
    },
    services: {
      title: "Погледнете како можеме да ви помогнеме",
      subtitle:
        "Од пристап до финансии до пазарен и стратешки развој на бизнисот, ние нудиме целосна поддршка за вашиот деловен раст и развој",
      ipardTitle: "Финансиски консалтинг",
      ipardDesc:
        "Пристап до ЕУ фондови до 1.3 милиони евра за земјоделски инвестиции, преработувачки капацитети и проекти за рурален развој.",
      ipardFeature1: "IPARD I - Земјоделски инвестиции",
      ipardFeature2: "IPARD II - Модернизација на преработка",
      ipardFeature3: "IPARD III - Рурален туризам",
      financialTitle: "Финансиска помош",
      financialDesc:
        "Сеопфатна поддршка за производствениот и туристичкиот сектор со грантови, субвенции и поволни заеми.",
      financialFeature1: "Програми за поддршка на производството",
      financialFeature2: "Грантови за развој на туризмот",
      financialFeature3: "Финансирање за промоција на извозот",
      consultingTitle: "Бизнис консалтинг",
      consultingDesc:
        "Стручно водство за микро бизниси и услуги за развој на сеопфатни бизнис планови.",
      consultingFeature1: "Консалтинг за микро бизниси",
      consultingFeature2: "Изработка на бизнис планови",
      consultingFeature3: "Стратешко планирање",
      learnMore: "Дознајте повеќе",
    },
    clients: {
      title: "Доверба од водечки компании",
      subtitle:
        "Помогнавме на стотици компании во секторите земјоделство, туризам и производство",
    },
    blog: {
      title: "Финансиите низ секојдневната пракса",
      subtitle:
        "Дознајте повеќе за финансиските новости, нашите искуства и успешни приказни",
      readMore: "Прочитај повеќе",
      viewAll: "Сите објави",
      wantMore: "Сакате да прочитате повеќе?",
      newsletterDesc:
        "Добивајте ги најновите увиди за финансирање, деловни можности и успешни приказни директно во вашето сандаче.",
      loading: "Се вчитува...",
      error: "Не може да се вчитаат објавите во моментов.",
    },
    contact: {
      title: "Подготвени за раст на вашиот бизнис?",
      subtitle:
        "Ајде да разговараме како можеме да ви помогнеме да пристапите до средства и да ги остварите вашите деловни цели.",
      phone: "Телефон",
      email: "Е-пошта",
      address: "Адреса",
      formTitle: "Поставете прашање - Решете ја дилемата",
      firstName: "Име",
      lastName: "Презиме",
      emailLabel: "Е-пошта",
      serviceInterest: "Услуга од интерес",
      message: "Порака/Прашање",
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
      slide1Subtitle: "преку 4300 клиенти",
      slide2Title: "Нашиот начин на работа",
      slide2Subtitle:
        "Запознајте се како работиме и зошто нашиот пристап дава најдобри резултати",
      slide3Title: "Експерти во областа на финансиите",
      slide3Subtitle:
        "Стратешко бизнис планирање и финансиски советодавни услуги за забрзување на вашиот раст",
    },
    about: {
      // Hero Section
      heroTitle: "Нашата Компанија",
      heroSubtitle:
        "Посветени на обезбедување сеопфатно финансиско и пазарно пристапно консалтинг.",

      // Company Overview
      whoWeAreTitle: "Кои Сме Ние",
      overviewP1:
        "ВФП Плус Консалтинг е дел од реномираната австриска групација WVP GROUP, со традиција што датира од 1985 година. Со седиште во Грац, Австрија, групацијата денес е присутна во 10 земји низ Југоисточна Европа, носејќи експертиза, доверба и иновативни решенија во делот на финансиското советување.\n",
      overviewP2:
        "Во Македонија, групацијата е активна од 2005 година, додека ВФП Плус Консалтинг започнува со работа во 2019 година како трета компанија од групацијата (од вкупно 6-те) присутна на македонскиот пазар.",
      regionalDevTitle: "Регионален Развој",
      serbiaOffice: "2022 — ВВП ПЛУС КОНСАЛТИНГ ДОО Србија",
      bosniaOffice: "2024 — ВФП ПЛУС КОНСАЛТИНГ ДОО Босна",
      accountingOffice:
        "2024 — ВВП СМЕТКОВОДСТВО ДОО Македонија (данок, сметководство, ревизија)",
      whatWeOfferTitle: "Што Нудиме",

      // What We Offer
      accessFinanceTitle: "Пристап до Финансии:",
      accessFinanceList: [
        "Грантови / кофинансирање",
        "Банкарски кредитни производи",
        "Лизинг",
        "Факторинг",
        "Владини инструменти за поддршка",
        "Небанкарска финансиска поддршка",
        "Спојувања и превземања",
        "Групово финансирање на капитал (Equity crowdfunding)",
        "Бизнис ангели",
        "Капитални инструменти",
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
        "Дијагностика на финансиски капацитет",
      ],
      specialReportsTitle: "Специјализирани Извештаи:",
      specialReportsList: [
        "Бизнис планови",
        "Инвестициски програми",
        "Длабинска анализа (Due diligence)",
        "Анализа на трошоци и придобивки (Cost-benefit analysis)",
      ],
      missionStatement:
        "Нашата мисија е да овозможиме целосен пристап до финансии за компании и граѓани, зголемувајќи ја нивната конкурентност и одржливост.",

      // Company Values
      valuesTitle: "Нашите Вредности",
      valuesSubtitle:
        "Принципите кои ја водат нашата работа и го обликуваат нашиот ангажман за извонредност.",

      // Team Section
      teamTitle: "Запознајте го Нашиот Тим",
      teamSubtitle: "Искусни професионалци посветени на вашиот успех",

      // CTA Section
      ctaJoinTitle: "Придружете се на Нашиот Тим",
      ctaJoinSubtitle:
        "Секогаш бараме талентирани професионалци да се приклучат на нашиот растечки тим",
      viewPositions: "Погледнете Отворени Позиции",
      contactUsCta: "Контактирајте нѐ",

      values: {
        "Results-Oriented": "Ориентираност кон Резултати",
        "We focus on delivering measurable outcomes and tangible value to our clients":
          "Се фокусираме на испорака на мерливи резултати и опиплива вредност за нашите клиенти",
        "Client-Centric": "Фокус на Клиентот",
        "Your success is our priority. We build long-term partnerships based on trust":
          "Вашиот успех е наш приоритет. Градиме долгорочни партнерства засновани на доверба",
        Excellence: "Извонредност",
        "We maintain the highest standards of professionalism and expertise":
          "Одржуваме највисоки стандарди на професионалност и експертиза",
        Innovation: "Иновација",
        "We leverage the latest technologies and methodologies to drive success":
          "Користиме најнови технологии и методологии за да постигнеме успех",
      },
    },
    team: {
      title: "Нашиот тим",
      subtitle: "Најголемиот тим на експерти",
      description:
        "Нашиот мултидисциплинарен тим носи богато искуство во финансиски консалтинг и развој на инвестиции во различни индустрии, со посебен фокус на производствените компании, агро секторот, рурален развој, туризам и „зелени инвестиции“. Им помагаме на клиентите да пристапат до државните програми за финансиска поддршка и фондовите на Европската Унија, и да ги претворат нивните идеи во одржливи и реализирани инвестиции. Наша задача е заеднички да создаваме одржлив раст и извозно ориентирани компании.\n" +
        "\n" +
        "За нашите клиенти – ние сме партнери во процесот на раст.",
      cta: "Поврзете се со нашите експерти",
    },
    contactPage: {
      heroTitle:
        "Дали сте подготвени да го подигнете вашиот бизнис на следното ниво?",
      heroSubtitle:
        "Стапете во контакт со нашиот тим од професионалци уште денес",
      methodsTitle: "Како можеме да ви помогнеме?",
      methodsSubtitle:
        "Изберете го најпогодниот начин за контакт со нашиот тим",
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
      emergencySupportDesc:
        "За итни прашања надвор од работното време, ве молиме испратете ни е-пошта и ќе одговориме што е можно поскоро.",
      faqsTitle: "Често поставувани прашања",
      methods: {
        phone: {
          title: "Телефонска поддршка",
          description: "Разговарајте директно со нашите консултанти",
          details: "+389 76 337 800 \n +389 76 337 801",
          availability: "Пон-Пет 8:00-17:00",
        },
        email: {
          title: "Е-пошта поддршка",
          description: "Добијте детални одговори на вашите прашања",
          details: "info@wvpconsulting.com",
          availability: "24/7 одговор во рок од 24 часа",
        },
        inPerson: {
          title: "Консултации во живо",
          description: "Закажете состанок лице-в-лице",
          details: "Достапно во нашите канцеларии",
          availability: "Само со закажување",
        },
        online: {
          title: "Онлајн консултации",
          description: "Видео повици за клиенти од далечина",
          details: "Zoom, Teams или преферирана платформа",
          availability: "Флексибилно закажување",
        },
      },
      faqs: [
        {
          question: "Колку трае процесот на аплицирање за IPARD?",
          answer:
            "Типичниот процес на аплицирање за IPARD трае 3-6 месеци од почетната консултација до одобрувањето на средствата, во зависност од сложеноста на вашиот проект и комплетноста на документацијата.",
        },
        {
          question: "Кои документи треба да ги подготвам за аплицирање?",
          answer:
            "Потребните документи обично вклучуваат регистрација на бизнисот, финансиски извештаи, проектна документација, еколошки дозволи и детален бизнис план. Обезбедуваме целосна листа за проверка за време на консултациите.",
        },
        {
          question: "Дали обезбедувате поддршка за бизниси надвор од Србија?",
          answer:
            "Иако нашиот примарен фокус се бизнисите во регионот, обезбедуваме консултантски услуги и за меѓународни компании кои сакаат да инвестираат или да пристапат до програмите за финансирање на ЕУ.",
        },
        {
          question: "Кои се цените за вашите консултации?",
          answer:
            "Нудиме бесплатни првични консултации за проценка на вашиот проект. Нашите такси за услуги се транспарентни и однапред договорени, обично структурирани како процент од успешно обезбедените средства.",
        },
      ],
    },
    programs: {
      viewAllServices: "Сите услуги",
      floatingNumber: "+389 78 348 860",
      flaotingButton: "Закажете \n состанок",
      buttonText: "Закажете состанок",
      services: {
        financialConsulting: {
          title: "Финансиски консалтинг",
          subtitle:
            "Кредитна дијагностика • Бизнис планирање • Структуирање на инвестиции",
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
  
 me:{
  nav: {
    home: "Početna",
    programs: "Usluge",
    blog: "Finansijski Savjeti",
    about: "O Nama",
    contact: "Kontakt",
  },
  hero: {
    title: "Transformišite Vaše Poljoprivredno Poslovanje",
    subtitle:
      "Pristupite do €1.3M IPARD sredstava za modernizaciju poljoprivrede i ruralni razvoj",
    learnMore: "Saznajte Više",
    viewPrograms: "Pogledajte Programe",
  },
  achievements: {
    supertitle: "Naša Dostignuća",
    supersubtitle:
      "Zajedno sa našim klijentima, postižemo izuzetne rezultate u svim sektorima!",
    titleDetails:"Do 31.12.2025",
    title1: "Uspešno završeni projekti",
    subtitle1: "Preko 4,300 uspešno završenih projekata",
    title2: "Odobrene subvencije",
    subtitle2: "Preko 35 miliona evra u plaćenim subvencijama",
    title3: "Odobreni krediti",
    subtitle3: "Preko 80 miliona evra u plaćenim finansijskim kreditima",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati dostignuća.",
  },
  services: {
    title: "Pogledajte kako Vam možemo pomoći",
    subtitle:
      "Od pristupa finansijama do tržišta i strateškog razvoja poslovanja, nudimo kompletnu podršku za rast i razvoj Vašeg biznisa",
    ipardTitle: "Finansijsko Savjetovanje",
    ipardDesc:
      "Pristupite EU sredstvima do €1.3M za poljoprivredne investicije, preradivačke objekte i projekte ruralnog razvoja.",
    ipardFeature1: "IPARD I - Poljoprivredna Investicija",
    ipardFeature2: "IPARD II - Modernizacija Prerade",
    ipardFeature3: "IPARD III - Ruralni Turizam",
    financialTitle: "Finansijska Pomoć",
    financialDesc:
      "Sveobuhvatna podrška za proizvodni i turistički sektor sa subvencijama, grantovima i povoljnim kreditima.",
    financialFeature1: "Programi Podrške Proizvodnji",
    financialFeature2: "Grantovi za Razvoj Turizma",
    financialFeature3: "Finansiranje Promocije Izvoza",
    consultingTitle: "Poslovno Savjetovanje",
    consultingDesc:
      "Stručno vođenje za mikro preduzeća i usluge razvoja sveobuhvatnih poslovnih planova.",
    consultingFeature1: "Savjetovanje za Mikro Biznis",
    consultingFeature2: "Razvoj Poslovnog Plana",
    consultingFeature3: "Strateško Planiranje",
    learnMore: "Saznajte Više",
  },
  clients: {
    title: "Poverenje Vodećih Kompanija",
    subtitle:
      "Pomogli smo stotinama kompanija u poljoprivredi, turizmu i proizvodnom sektoru",
  },
  blog: {
    title: "Finansije u svakodnevnoj praksi",
    subtitle:
      "Saznajte više o finansijskim vijestima, našim iskustvima i pričama o uspjehu",
    readMore: "Pročitajte Više",
    viewAll: "Pogledajte Sve Objave",
    wantMore: "Želite Pročitati Više?",
    newsletterDesc:
      "Dobijte naša najnovija znanja o IPARD finansiranju, poslovnim prilikama i pričama o uspjehu direktno u Vaš inbox.",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati objave na blogu.",
  },
  contact: {
    title: "Spremni za Rast Vašeg Biznisa?",
    subtitle:
      "Razgovarajmo o tome kako Vam možemo pomoći da pristupite finansiranju i ostvarite Vaše poslovne ciljeve.",
    phone: "Telefon",
    email: "Email",
    address: "Adresa",
    formTitle: "Postavite pitanje - Riješite Vašu dilemu",
    firstName: "Ime",
    lastName: "Prezime",
    emailLabel: "Email",
    serviceInterest: "Zainteresovani za Uslugu",
    message: "Poruka/Pitanje",
    selectService: "Izaberite uslugu",
    ipardPrograms: "IPARD Programi",
    financialAid: "Finansijska Pomoć",
    businessConsulting: "Poslovno Savjetovanje",
    businessPlanDev: "Razvoj Poslovnog Plana",
    messagePlaceholder: "Recite nam o Vašem projektu...",
    send: "Pošaljite Poruku",
    sending: "Slanje...",
    successTitle: "Poruka uspešno poslana!",
    successDesc: "Kontaktiraćemo Vas uskoro.",
    errorTitle: "Greška pri slanju poruke",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },
  footer: {
    tagline: "Za naše klijente uvijek biramo najbolje!",
    servicesTitle: "Usluge",
    ipard: "Finansijsko Savjetovanje",
    financialAid: "Pristup finansijama kroz kreditne proizvode",
    consulting: "Poslovno Savjetovanje",
    businessPlans: "Marketing i razvoj poslovanja",
    marketAccess: "Pristup tržištu",
    GrantsAndFinancing: "Subvencije i sufinansiranje",
    companyTitle: "Kompanija",
    aboutUs: "O Nama",
    ourTeam: "Naš Tim",
    careers: "Karijera",
    contactUs: "Kontakt",
    copyright: "© 2025 WVP Plus Consulting. Sva prava zadržana.",
    privacy: "Politika Privatnosti",
    terms: "Uslovi Korišćenja",
  },
  newsletter: {
    title: "Ostanite Informisani",
    subtitle: "Dobijte najnovije IPARD smjernice i poslovne savete",
    placeholder: "Unesite Vaš email",
    subscribe: "Pretplatite se",
    subscribing: "Pretplata...",
    successTitle: "Uspešno ste se pretplatili!",
    successDesc: "Hvala Vam na pretplati na naš newsletter.",
    errorTitle: "Pretplata nije uspjela",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },
  home: {
    loadingContent: "Učitavanje sadržaja stranice...",
    slide1Title: "Za klijente biramo najbolje!",
    slide1Subtitle: "4300 klijenata i dalje rastemo",
    slide2Title: "Naš način rada",
    slide2Subtitle:
      "Upoznajte kako radimo i saznajte zašto naš pristup daje najbolje rezultate",
    slide3Title: "Eksperti u oblasti finansija",
    slide3Subtitle:
      "Strateško poslovno planiranje i finansijski savjetodavni servisi za ubrzanje Vašeg rasta",
  },
  about: {
    // Hero Section
    heroTitle: "Naša Kompanija",
    heroSubtitle:
      "Posvećeni pružanju sveobuhvatnog finansijskog savjetovanja i pristupa tržištu.",

    // Company Overview
    whoWeAreTitle: "Ko Smo Mi",
    overviewP1:
      "WVP PLUS CONSULTING je dio austrijske WVP GRUPE, čija je primarna fokus finansijsko savjetovanje. Osnovana 1985. u Grazu, Austrija, grupa sada posluje u 10 zemalja jugoistočne Evrope i aktivna je u Makedoniji od 2005.",
    overviewP2:
      "Od svog osnivanja 2019, WVP PLUS CONSULTING je imao za cilj da obezbijedi puni finansijski pristup makedonskim kompanijama i građanima. Tokom pet godina, podržali smo više od 3,000 klijenata, omogućili preko €80M u kreditima i osigurali više od €25M u grantovima.",
    regionalDevTitle: "Regionalni Razvoj",
    serbiaOffice: "2022 — WVP PLUS CONSULTING DOO Srbija",
    bosniaOffice: "2024 — WFP PLUS CONSULTING DOO Bosna",
    accountingOffice:
      "2024 — WVP ACCOUNTING DOO Makedonija (porezi, knjigovodstvo, revizija)",
    whatWeOfferTitle: "Šta Nudimo",

    // What We Offer
    accessFinanceTitle: "Pristup Finansijama:",
    accessFinanceList: [
      "Bankarski kreditni proizvodi",
      "Lizing",
      "Faktoring",
      "Instrumenti državne podrške",
      "Nebankarska finansijska podrška",
      "Spajanja i akvizicije",
      "Equity crowdfunding",
      "Poslovni anđeli",
      "Kapitalni instrumenti",
      "Grantovi / sufinansiranje",
    ],
    marketAccessTitle: "Pristup Tržištu:",
    marketAccessList: [
      "Digitalizacija kompanije",
      "Energetski efikasan audit (PiNE model)",
      "Razvoj cirkularne ekonomije",
      "Matrica zaštite zaposlenih",
      "Strategija i planiranje izvoza",
      "Dizajn i razvoj proizvoda",
      "Marketinška strategija i brendiranje",
      "Dijagnostika finansijske sposobnosti",
    ],
    specialReportsTitle: "Specijalizovana Izvješća:",
    specialReportsList: [
      "Poslovni planovi",
      "Investicioni programi",
      "Due diligence",
      "Analiza troškova i koristi",
    ],
    missionStatement:
      "Naša misija je da duboko razumijemo svaku kompaniju, identifikujemo njene finansijske i tržišne potrebe i povežemo je sa pravim instrumentima za postizanje stvarnih, mjerljivih rezultata. Sa preko 25 eksperata, osiguravamo vrhunsko savjetovanje i dugoročne partnertske odnose.",

    // Company Values
    valuesTitle: "Naše Vrijednosti",
    valuesSubtitle:
      "Principi koji pokreću naš rad i oblikuju našu posvećenost izvrsnosti.",

    // Team Section
    teamTitle: "Upoznajte Naš Tim",
    teamSubtitle: "Iskusni profesionalci posvećeni Vašem uspjehu",

    // CTA Section
    ctaJoinTitle: "Pridružite Se Našem Timu",
    ctaJoinSubtitle:
      "Uvijek tražimo talentovane profesionalce da se pridruže našem rastućem timu",
    viewPositions: "Pogledajte Otvorene Pozicije",
    contactUsCta: "Kontaktirajte Nas",

    values: {
      "Results-Oriented": "Orijentisani na Rezultate",
      "We focus on delivering measurable outcomes and tangible value to our clients":
        "Fokusirani smo na dostavljanje mjerljivih ishoda i stvarne vrijednosti našim klijentima",
      "Client-Centric": "Centrirani na Klijenta",
      "Your success is our priority. We build long-term partnerships based on trust":
        "Vaš uspjeh je naš prioritet. Gradimo dugoročne partnertve odnose zasnovane na povjerenju",
      Excellence: "Izvrsnost",
      "We maintain the highest standards of professionalism and expertise":
        "Održavamo najviše standarde profesionalnosti i stručnosti",
      Innovation: "Inovacija",
      "We leverage the latest technologies and methodologies to drive success":
        "Koristimo najnovije tehnologije i metodologije za postizanje uspjeha",
    },
  },
  team: {
    title: "Naš Tim",
    subtitle: "Najveći tim Eksperata",
    description:
      "Mi smo multidisciplinarni tim sa obimnim iskustvom u finansijskom savjetovanju i razvoju investicija. Iako radimo u mnogim industrijama, specijalizovani smo za proizvodnju, agrobiznis, ruralni razvoj, turizam i projekte zelene energije. Pomažući klijentima da se snađu u državnoj podršci i EU finansiranju, transformišemo koncepte u profitabilne realnosti. Posvećeni smo izgradnji održivih, spremnih za izvoz biznisa.",
    cta: "Povežite se sa Našim Ekspertima",
  },
  contactPage: {
    heroTitle: "Spremni da odvedete Vaš biznis na viši nivo?",
    heroSubtitle: "Stupite u kontakt sa našim timom eksperata danas.",
    methodsTitle: "Kako Vam Možemo Pomoći?",
    methodsSubtitle: "Izaberite najpogodniji način da kontaktirate naš tim",
    getDirections: "Dobijte Upute",
    headquartersLabel: "Sedište",
    officesTitle: "Naša Kancelarija",
    businessHoursTitle: "Radno Vrijeme",
    dayMonFri: "Ponedjeljak - Petak",
    daySaturday: "Subota",
    daySunday: "Nedjelja",
    closed: "Zatvoreno",
    monFriHours: "08:00 - 17:00",
    saturdayHours: "09:00 - 13:00",
    mapIntro: "Interaktivna mapa koja prikazuje sve lokacije kancelarija",
    mapClickHint: "Kliknite na bilo koju karticu kancelarije iznad da dobijete upute",
    emergencySupportTitle: "Hitna Podrška:",
    emergencySupportDesc:
      "Za hitna pitanja izvan radnog vremena, molimo pošaljite nam email i odgovorićemo Vam što je prije moguće.",
    faqsTitle: "Često Postavljana Pitanja",
    methods: {
      phone: {
        title: "Telefonska Podrška",
        description: "Razgovarajte direktno sa našim savjetnicima",
        details: "+389 76 337 800 \n +389 76 337 801",
        availability: "Pon-Pet 8:00-17:00",
      },
      email: {
        title: "Email Podrška",
        description: "Dobijte detaljne odgovore na Vaša pitanja",
        details: "info@wvpconsulting.com",
        availability: "24/7 odgovor unutar 24 sata",
      },
      inPerson: {
        title: "Lična Konsultacija",
        description: "Zakažite sastanak uživo",
        details: "Dostupno u svim kancelarijama",
        availability: "Samo po dogovoru",
      },
      online: {
        title: "Online Konsultacija",
        description: "Video pozivi za udaljene klijente",
        details: "Zoom, Teams, ili preferirana platforma",
        availability: "Fleksibilno zakazivanje",
      },
    },
    faqs: [
      {
        question: "Koliko traje IPARD proces prijave?",
        answer:
          "Tipičan IPARD proces prijave traje 3-6 mjeseci od početne konsultacije do odobrenja finansiranja, zavisno od složenosti Vašeg projekta i potpunosti dokumentacije.",
      },
      {
        question:
          "Koja dokumenta trebam pripremiti za prijave za finansiranje?",
        answer:
          "Potrebna dokumenta obično uključuju registraciju biznisa, finansijske izvještaje, projektnu dokumentaciju, ekološke dozvole i detaljan poslovni plan. Pružamo kompletnu kontrolnu listu tokom konsultacije.",
      },
      {
        question: "Da li pružate podršku za biznise izvan Srbije?",
        answer:
          "Iako je naš primarni fokus na srpskim biznisima, pružamo savjetodavne usluge za međunarodne kompanije koje žele da investiraju u Srbiju ili pristupe programima EU finansiranja.",
      },
      {
        question: "Kolike su Vaše naknade za konsultacije?",
        answer:
          "Nudimo besplatne početne konsultacije za procjenu Vašeg projekta. Naše naknade za usluge su transparentne i diskutovane unaprijed, obično strukturirane kao procenat uspešno osiguranog finansiranja.",
      },
    ],
  },
  programs: {
    viewAllServices: "Pogledajte Sve Usluge",
    floatingNumber: "+389 78 348 860",
    flaotingButton: "Zakažite Konsultaciju",

    buttonText: "Zakažite Konsultaciju",
    services: {
      financialConsulting: {
        title: "Finansijsko Savjetovanje",
        subtitle:
          "Kreditna dijagnostika • Poslovno planiranje • Strukturiranje investicija",
        description:
          "Sveobuhvatna analiza prilagođena Vašem poslovnom modelu za optimizaciju finansijskih operacija klijenta, priprema kreditne poslovne dijagnostike i osiguranje kvalitetne strukture finansijskih izvještaja.",
        items: [
          "Poslovni plan",
          "Due diligence",
          "Investicioni program",
          "Izvještaj o izvodljivosti/troškovima i koristima",
        ],
      },
      accessToFinance: {
        title: "Pristup Finansijama",
        subtitle: "Kreditni savjetnici • Strukturirano finansiranje",
        description:
          "Kroz usluge kreditnog promotora i kreditnog savjetnika, pruža se kreditna dijagnostika i preporuke za finansijsku strukturu pogodnu za postojeće i buduće investicije. Naši kreditni savjetnici istražuju tržišne ponude i preporučuju optimalnu dospelost, valutu, dinamiku i finansijske aranžmane.",
        items: [
          "Bankarski kreditni proizvodi",
          "Lizing",
          "Faktoring",
          "Osiguranje potraživanja",
          "Alternativno finansiranje",
        ],
      },
      grants: {
        title: "Grantovi i Sufinansiranje",
        subtitle: "Priprema projekata • Praćenje grantova",
        description:
          "Praćenje poziva i puna priprema prijava za grantove i sufinansiranje dostupnih kroz nacionalne i međunarodne instrumente, uključujući IPARD, IPA, GIZ, INOVA i EU fondove - maksimiziranje prilika za dobijanje mekih ili potpuno nevratnih finansijskih sredstava.",
        items: [
          "IPARD, IPA, GIZ",
          "INOVA i nacionalni programi",
          "EBRD blended finance",
          "EU strukturni instrumenti",
          "Potencijal povrata do 90%",
        ],
      },
      businessConsulting: {
        title: "Poslovno Savjetovanje",
        subtitle: "Organizaciona dijagnostika • QUINTAUM",
        description:
          "Korišćenjem QUINTAUM metodologije (210 indikatora) dijagnostikujemo organizacionu kulturu, dobrobit zaposlenih i efikasnost menadžmenta, zatim predlažemo i organizujemo coaching i programe razvoja zaposlenih.",
        items: [
          "QUINTAUM dijagnostika (210 KPI-jeva)",
          "Coaching i liderski programi",
          "Planovi razvoja zaposlenih",
          "Dugoročno organizaciono praćenje",
        ],
      },
      marketing: {
        title: "Marketing i Razvoj Poslovanja",
        subtitle: "Brendiranje • Strategija rasta • Digitalizacija",
        description:
          "Integrirani marketing i razvoj poslovanja koji povećava vidljivost brenda i pokreće mjerljivi rast - od istraživanja tržišta i strateškog planiranja do implementacije kampanja i optimizacije investicija (ROI).",
        items: [
          "Strateško planiranje",
          "Istraživanje tržišta",
          "Brendiranje i identitet",
          "Digitalne kampanje i analitika",
        ],
      },
      marketAccess: {
        title: "Pristup Tržištu",
        subtitle: "Izvozna strategija • Identifikacija kupaca",
        description:
          "Podrška kompanijama koje traže nova međunarodna tržišta: istraživanje, izvozno planiranje, digitalna spremnost, energetski auditi i otkrivanje kupaca kako bi ulazak na izvozno tržište bio strukturiran i niskorizičan.",
        items: [
          "Istraživanje tržišta i analiza potencijala",
          "Digitalna spremnost",
          "Energetski efikasan audit (PiNE)",
          "Izvozni plan i pronalaženje kupaca",
        ],
      },
      esg: {
        title: "ESG Standardizacija",
        subtitle: "Nefinansijsko izvještavanje • Putokaz usklađenosti",
        description:
          "Dijagnostika i softverski omogućena implementacija ESG standarda: ekološki, društveni i upravljački indikatori, mapiranje rizika i nefinansijsko izvještavanje usklađeno sa zakonskim zahtjevima.",
        items: [
          "ESG dijagnostika i izvještavanje",
          "Ekološki i društveni indikatori",
          "Mapiranje upravljanja",
          "Putokaz usklađenosti",
        ],
      },
    },
  },
},
 bs:{
  nav: {
    home: "Početna",
    programs: "Usluge",
    blog: "Finansijski Savjeti",
    about: "O Nama",
    contact: "Kontakt",
  },
  hero: {
    title: "Transformišite Vaše Poljoprivredno Poslovanje",
    subtitle:
      "Pristupite do €1.3M IPARD sredstava za modernizaciju poljoprivrede i ruralni razvoj",
    learnMore: "Saznajte Više",
    viewPrograms: "Pogledajte Programe",
  },
  achievements: {
    supertitle: "Naša Dostignuća",
    supersubtitle:
      "Zajedno sa našim klijentima, postižemo izuzetne rezultate u svim sektorima!",
    titleDetails:"Do 31.12.2025",
    title1: "Uspješno završeni projekti",
    subtitle1: "Preko 4,300 uspješno završenih projekata",
    title2: "Odobrene subvencije",
    subtitle2: "Preko 35 miliona eura u plaćenim subvencijama",
    title3: "Odobreni krediti",
    subtitle3: "Preko 80 miliona eura u plaćenim finansijskim kreditima",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati dostignuća.",
  },
  services: {
    title: "Pogledajte kako Vam možemo pomoći",
    subtitle:
      "Od pristupa finansijama do tržišta i strateškog razvoja poslovanja, nudimo kompletnu podršku za rast i razvoj Vašeg biznisa",
    ipardTitle: "Finansijsko Savjetovanje",
    ipardDesc:
      "Pristupite EU sredstvima do €1.3M za poljoprivredne investicije, prerađivačke objekte i projekte ruralnog razvoja.",
    ipardFeature1: "IPARD I - Poljoprivredna Investicija",
    ipardFeature2: "IPARD II - Modernizacija Prerade",
    ipardFeature3: "IPARD III - Ruralni Turizam",
    financialTitle: "Finansijska Pomoć",
    financialDesc:
      "Sveobuhvatna podrška za proizvodni i turistički sektor sa subvencijama, grantovima i povoljnim kreditima.",
    financialFeature1: "Programi Podrške Proizvodnji",
    financialFeature2: "Grantovi za Razvoj Turizma",
    financialFeature3: "Finansiranje Promocije Izvoza",
    consultingTitle: "Poslovno Savjetovanje",
    consultingDesc:
      "Stručno vođenje za mikro preduzeća i usluge razvoja sveobuhvatnih poslovnih planova.",
    consultingFeature1: "Savjetovanje za Mikro Biznis",
    consultingFeature2: "Razvoj Poslovnog Plana",
    consultingFeature3: "Strateško Planiranje",
    learnMore: "Saznajte Više",
  },
  clients: {
    title: "Povjerenje Vodećih Kompanija",
    subtitle:
      "Pomogli smo stotinama kompanija u poljoprivredi, turizmu i proizvodnom sektoru",
  },
  blog: {
    title: "Finansije u svakodnevnoj praksi",
    subtitle:
      "Saznajte više o finansijskim vijestima, našim iskustvima i pričama o uspjehu",
    readMore: "Pročitajte Više",
    viewAll: "Pogledajte Sve Objave",
    wantMore: "Želite Pročitati Više?",
    newsletterDesc:
      "Dobijte naša najnovija znanja o IPARD finansiranju, poslovnim prilikama i pričama o uspjehu direktno u Vaš inbox.",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati objave na blogu.",
  },
  contact: {
    title: "Spremni za Rast Vašeg Biznisa?",
    subtitle:
      "Razgovarajmo o tome kako Vam možemo pomoći da pristupite finansiranju i ostvarite Vaše poslovne ciljeve.",
    phone: "Telefon",
    email: "Email",
    address: "Adresa",
    formTitle: "Postavite pitanje - Riješite Vašu dilemu",
    firstName: "Ime",
    lastName: "Prezime",
    emailLabel: "Email",
    serviceInterest: "Zainteresovani za Uslugu",
    message: "Poruka/Pitanje",
    selectService: "Izaberite uslugu",
    ipardPrograms: "IPARD Programi",
    financialAid: "Finansijska Pomoć",
    businessConsulting: "Poslovno Savjetovanje",
    businessPlanDev: "Razvoj Poslovnog Plana",
    messagePlaceholder: "Recite nam o Vašem projektu...",
    send: "Pošaljite Poruku",
    sending: "Slanje...",
    successTitle: "Poruka uspješno poslana!",
    successDesc: "Kontaktiraćemo Vas uskoro.",
    errorTitle: "Greška pri slanju poruke",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },
  footer: {
    tagline: "Za naše klijente uvijek biramo najbolje!",
    servicesTitle: "Usluge",
    ipard: "Finansijsko Savjetovanje",
    financialAid: "Pristup finansijama kroz kreditne proizvode",
    consulting: "Poslovno Savjetovanje",
    businessPlans: "Marketing i razvoj poslovanja",
    marketAccess: "Pristup tržištu",
    GrantsAndFinancing: "Subvencije i sufinansiranje",
    companyTitle: "Kompanija",
    aboutUs: "O Nama",
    ourTeam: "Naš Tim",
    careers: "Karijera",
    contactUs: "Kontakt",
    copyright: "© 2025 WVP Plus Consulting. Sva prava zadržana.",
    privacy: "Politika Privatnosti",
    terms: "Uslovi Korišćenja",
  },
  newsletter: {
    title: "Ostanite Informisani",
    subtitle: "Dobijte najnovije IPARD smjernice i poslovne savjete",
    placeholder: "Unesite Vaš email",
    subscribe: "Pretplatite se",
    subscribing: "Pretplata...",
    successTitle: "Uspješno ste se pretplatili!",
    successDesc: "Hvala Vam na pretplati na naš newsletter.",
    errorTitle: "Pretplata nije uspjela",
    errorDesc: "Molimo pokušajte ponovo kasnije.",
  },
  home: {
    loadingContent: "Učitavanje sadržaja stranice...",
    slide1Title: "Za klijente biramo najbolje!",
    slide1Subtitle: "4300 klijenata i dalje rastemo",
    slide2Title: "Naš način rada",
    slide2Subtitle:
      "Upoznajte kako radimo i saznajte zašto naš pristup daje najbolje rezultate",
    slide3Title: "Eksperti u oblasti finansija",
    slide3Subtitle:
      "Strateško poslovno planiranje i finansijsko savjetodavne usluge za ubrzanje Vašeg rasta",
  },
  about: {
    // Hero Section
    heroTitle: "Naša Kompanija",
    heroSubtitle:
      "Posvećeni pružanju sveobuhvatnog finansijskog savjetovanja i pristupa tržištu.",

    // Company Overview
    whoWeAreTitle: "Ko Smo Mi",
    overviewP1:
      "WVP PLUS CONSULTING je dio austrijske WVP GRUPE, čija je primarna fokus finansijsko savjetovanje. Osnovana 1985. u Grazu, Austrija, grupa sada posluje u 10 zemalja jugoistočne Evrope i aktivna je u Makedoniji od 2005.",
    overviewP2:
      "Od svog osnivanja 2019, WVP PLUS CONSULTING je imao za cilj da obezbijedi puni finansijski pristup makedonskim kompanijama i građanima. Tokom pet godina, podržali smo više od 3,000 klijenata, omogućili preko €80M u kreditima i osigurali više od €25M u grantovima.",
    regionalDevTitle: "Regionalni Razvoj",
    serbiaOffice: "2022 — WVP PLUS CONSULTING DOO Srbija",
    bosniaOffice: "2024 — WFP PLUS CONSULTING DOO Bosna",
    accountingOffice:
      "2024 — WVP ACCOUNTING DOO Makedonija (porezi, knjigovodstvo, revizija)",
    whatWeOfferTitle: "Šta Nudimo",

    // What We Offer
    accessFinanceTitle: "Pristup Finansijama:",
    accessFinanceList: [
      "Bankarski kreditni proizvodi",
      "Lizing",
      "Faktoring",
      "Instrumenti državne podrške",
      "Nebankarska finansijska podrška",
      "Spajanja i akvizicije",
      "Equity crowdfunding",
      "Poslovni anđeli",
      "Kapitalni instrumenti",
      "Grantovi / sufinansiranje",
    ],
    marketAccessTitle: "Pristup Tržištu:",
    marketAccessList: [
      "Digitalizacija kompanije",
      "Energetski efikasan audit (PiNE model)",
      "Razvoj cirkularne ekonomije",
      "Matrica zaštite zaposlenih",
      "Strategija i planiranje izvoza",
      "Dizajn i razvoj proizvoda",
      "Marketinška strategija i brendiranje",
      "Dijagnostika finansijske sposobnosti",
    ],
    specialReportsTitle: "Specijalizovana Izvješća:",
    specialReportsList: [
      "Poslovni planovi",
      "Investicioni programi",
      "Due diligence",
      "Analiza troškova i koristi",
    ],
    missionStatement:
      "Naša misija je da duboko razumijemo svaku kompaniju, identifikujemo njene finansijske i tržišne potrebe i povežemo je sa pravim instrumentima za postizanje stvarnih, mjerljivih rezultata. Sa preko 25 eksperata, osiguravamo vrhunsko savjetovanje i dugoročne partnerske odnose.",

    // Company Values
    valuesTitle: "Naše Vrijednosti",
    valuesSubtitle:
      "Principi koji pokreću naš rad i oblikuju našu posvećenost izvrsnosti.",

    // Team Section
    teamTitle: "Upoznajte Naš Tim",
    teamSubtitle: "Iskusni profesionalci posvećeni Vašem uspjehu",

    // CTA Section
    ctaJoinTitle: "Pridružite Se Našem Timu",
    ctaJoinSubtitle:
      "Uvijek tražimo talentovane profesionalce da se pridruže našem rastućem timu",
    viewPositions: "Pogledajte Otvorene Pozicije",
    contactUsCta: "Kontaktirajte Nas",

    values: {
      "Results-Oriented": "Orijentisani na Rezultate",
      "We focus on delivering measurable outcomes and tangible value to our clients":
        "Fokusirani smo na dostavljanje mjerljivih ishoda i stvarne vrijednosti našim klijentima",
      "Client-Centric": "Centrirani na Klijenta",
      "Your success is our priority. We build long-term partnerships based on trust":
        "Vaš uspjeh je naš prioritet. Gradimo dugoročne partnerske odnose zasnovane na povjerenju",
      Excellence: "Izvrsnost",
      "We maintain the highest standards of professionalism and expertise":
        "Održavamo najviše standarde profesionalnosti i stručnosti",
      Innovation: "Inovacija",
      "We leverage the latest technologies and methodologies to drive success":
        "Koristimo najnovije tehnologije i metodologije za postizanje uspjeha",
    },
  },
  team: {
    title: "Naš Tim",
    subtitle: "Najveći tim Eksperata",
    description:
      "Mi smo multidisciplinarni tim sa obimnim iskustvom u finansijskom savjetovanju i razvoju investicija. Iako radimo u mnogim industrijama, specijalizovani smo za proizvodnju, agrobiznis, ruralni razvoj, turizam i projekte zelene energije. Pomažući klijentima da se snađu u državnoj podršci i EU finansiranju, transformišemo koncepte u profitabilne realnosti. Posvećeni smo izgradnji održivih, spremnih za izvoz biznisa.",
    cta: "Povežite se sa Našim Ekspertima",
  },
  contactPage: {
    heroTitle: "Spremni da odvedete Vaš biznis na viši nivo?",
    heroSubtitle: "Stupite u kontakt sa našim timom eksperata danas.",
    methodsTitle: "Kako Vam Možemo Pomoći?",
    methodsSubtitle: "Izaberite najpogodniji način da kontaktirate naš tim",
    getDirections: "Dobijte Upute",
    headquartersLabel: "Sjedište",
    officesTitle: "Naša Kancelarija",
    businessHoursTitle: "Radno Vrijeme",
    dayMonFri: "Ponedjeljak - Petak",
    daySaturday: "Subota",
    daySunday: "Nedjelja",
    closed: "Zatvoreno",
    monFriHours: "08:00 - 17:00",
    saturdayHours: "09:00 - 13:00",
    mapIntro: "Interaktivna mapa koja prikazuje sve lokacije kancelarija",
    mapClickHint: "Kliknite na bilo koju karticu kancelarije iznad da dobijete upute",
    emergencySupportTitle: "Hitna Podrška:",
    emergencySupportDesc:
      "Za hitna pitanja izvan radnog vremena, molimo pošaljite nam email i odgovorićemo Vam što je prije moguće.",
    faqsTitle: "Često Postavljana Pitanja",
    methods: {
      phone: {
        title: "Telefonska Podrška",
        description: "Razgovarajte direktno sa našim savjetnicima",
        details: "+389 76 337 800 \n +389 76 337 801",
        availability: "Pon-Pet 8:00-17:00",
      },
      email: {
        title: "Email Podrška",
        description: "Dobijte detaljne odgovore na Vaša pitanja",
        details: "info@wvpconsulting.com",
        availability: "24/7 odgovor unutar 24 sata",
      },
      inPerson: {
        title: "Lična Konsultacija",
        description: "Zakažite sastanak uživo",
        details: "Dostupno u svim kancelarijama",
        availability: "Samo po dogovoru",
      },
      online: {
        title: "Online Konsultacija",
        description: "Video pozivi za udaljene klijente",
        details: "Zoom, Teams, ili preferirana platforma",
        availability: "Fleksibilno zakazivanje",
      },
    },
    faqs: [
      {
        question: "Koliko traje IPARD proces prijave?",
        answer:
          "Tipičan IPARD proces prijave traje 3-6 mjeseci od početne konsultacije do odobrenja finansiranja, zavisno od složenosti Vašeg projekta i potpunosti dokumentacije.",
      },
      {
        question:
          "Koja dokumenta trebam pripremiti za prijave za finansiranje?",
        answer:
          "Potrebna dokumenta obično uključuju registraciju biznisa, finansijske izvještaje, projektnu dokumentaciju, ekološke dozvole i detaljan poslovni plan. Pružamo kompletnu kontrolnu listu tokom konsultacije.",
      },
      {
        question: "Da li pružate podršku za biznise izvan Srbije?",
        answer:
          "Iako je naš primarni fokus na srpskim biznisima, pružamo savjetodavne usluge za međunarodne kompanije koje žele da investiraju u Srbiju ili pristupe programima EU finansiranja.",
      },
      {
        question: "Kolike su Vaše naknade za konsultacije?",
        answer:
          "Nudimo besplatne početne konsultacije za procjenu Vašeg projekta. Naše naknade za usluge su transparentne i diskutovane unaprijed, obično strukturirane kao procenat uspješno osiguranog finansiranja.",
      },
    ],
  },
  programs: {
    viewAllServices: "Pogledajte Sve Usluge",
    floatingNumber: "+389 78 348 860",
    flaotingButton: "Zakažite Konsultaciju",

    buttonText: "Zakažite Konsultaciju",
    services: {
      financialConsulting: {
        title: "Finansijsko Savjetovanje",
        subtitle:
          "Kreditna dijagnostika • Poslovno planiranje • Strukturiranje investicija",
        description:
          "Sveobuhvatna analiza prilagođena Vašem poslovnom modelu za optimizaciju finansijskih operacija klijenta, priprema kreditne poslovne dijagnostike i osiguranje kvalitetne strukture finansijskih izvještaja.",
        items: [
          "Poslovni plan",
          "Due diligence",
          "Investicioni program",
          "Izvještaj o izvodljivosti/troškovima i koristima",
        ],
      },
      accessToFinance: {
        title: "Pristup Finansijama",
        subtitle: "Kreditni savjetnici • Strukturirano finansiranje",
        description:
          "Kroz usluge kreditnog promotora i kreditnog savjetnika, pruža se kreditna dijagnostika i preporuke za finansijsku strukturu pogodnu za postojeće i buduće investicije. Naši kreditni savjetnici istražuju tržišne ponude i preporučuju optimalnu dospelost, valutu, dinamiku i finansijske aranžmane.",
        items: [
          "Bankarski kreditni proizvodi",
          "Lizing",
          "Faktoring",
          "Osiguranje potraživanja",
          "Alternativno finansiranje",
        ],
      },
      grants: {
        title: "Grantovi i Sufinansiranje",
        subtitle: "Priprema projekata • Praćenje grantova",
        description:
          "Praćenje poziva i puna priprema prijava za grantove i sufinansiranje dostupnih kroz nacionalne i međunarodne instrumente, uključujući IPARD, IPA, GIZ, INOVA i EU fondove - maksimiziranje prilika za dobijanje mekih ili potpuno nevratnih finansijskih sredstava.",
        items: [
          "IPARD, IPA, GIZ",
          "INOVA i nacionalni programi",
          "EBRD blended finance",
          "EU strukturni instrumenti",
          "Potencijal povrata do 90%",
        ],
      },
      businessConsulting: {
        title: "Poslovno Savjetovanje",
        subtitle: "Organizaciona dijagnostika • QUINTAUM",
        description:
          "Korišćenjem QUINTAUM metodologije (210 indikatora) dijagnostikujemo organizacionu kulturu, dobrobit zaposlenih i efikasnost menadžmenta, zatim predlažemo i organizujemo coaching i programe razvoja zaposlenih.",
        items: [
          "QUINTAUM dijagnostika (210 KPI-jeva)",
          "Coaching i liderski programi",
          "Planovi razvoja zaposlenih",
          "Dugoročno organizaciono praćenje",
        ],
      },
      marketing: {
        title: "Marketing i Razvoj Poslovanja",
        subtitle: "Brendiranje • Strategija rasta • Digitalizacija",
        description:
          "Integrirani marketing i razvoj poslovanja koji povećava vidljivost brenda i pokreće mjerljivi rast - od istraživanja tržišta i strateškog planiranja do implementacije kampanja i optimizacije investicija (ROI).",
        items: [
          "Strateško planiranje",
          "Istraživanje tržišta",
          "Brendiranje i identitet",
          "Digitalne kampanje i analitika",
        ],
      },
      marketAccess: {
        title: "Pristup Tržištu",
        subtitle: "Izvozna strategija • Identifikacija kupaca",
        description:
          "Podrška kompanijama koje traže nova međunarodna tržišta: istraživanje, izvozno planiranje, digitalna spremnost, energetski auditi i otkrivanje kupaca kako bi ulazak na izvozno tržište bio strukturiran i niskorizičan.",
        items: [
          "Istraživanje tržišta i analiza potencijala",
          "Digitalna spremnost",
          "Energetski efikasan audit (PiNE)",
          "Izvozni plan i pronalaženje kupaca",
        ],
      },
      esg: {
        title: "ESG Standardizacija",
        subtitle: "Nefinansijsko izvještavanje • Putokaz usklađenosti",
        description:
          "Dijagnostika i softverski omogućena implementacija ESG standarda: ekološki, društveni i upravljački indikatori, mapiranje rizika i nefinansijsko izvještavanje usklađeno sa zakonskim zahtjevima.",
        items: [
          "ESG dijagnostika i izvještavanje",
          "Ekološki i društveni indikatori",
          "Mapiranje upravljanja",
          "Putokaz usklađenosti",
        ],
      },
    },
  },
},
hr:{
  nav: {
    home: "Početna",
    programs: "Usluge",
    blog: "Financijski Savjeti",
    about: "O Nama",
    contact: "Kontakt",
  },
  hero: {
    title: "Transformirajte Vaše Poljoprivredno Poslovanje",
    subtitle:
      "Pristupite do €1.3M IPARD sredstava za modernizaciju poljoprivrede i ruralni razvoj",
    learnMore: "Saznajte Više",
    viewPrograms: "Pogledajte Programe",
  },
  achievements: {
    supertitle: "Naša Dostignuća",
    supersubtitle:
      "Zajedno s našim klijentima, postižemo izuzetne rezultate u svim sektorima!",
    titleDetails:"Do 31.12.2025",
    title1: "Uspješno završeni projekti",
    subtitle1: "Preko 4,300 uspješno završenih projekata",
    title2: "Odobrene subvencije",
    subtitle2: "Preko 35 milijuna eura u plaćenim subvencijama",
    title3: "Odobreni krediti",
    subtitle3: "Preko 80 milijuna eura u plaćenim financijskim kreditima",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati dostignuća.",
  },
  services: {
    title: "Pogledajte kako Vam možemo pomoći",
    subtitle:
      "Od pristupa financijama do tržišta i strateškog razvoja poslovanja, nudimo kompletnu podršku za rast i razvoj Vašeg biznisa",
    ipardTitle: "Financijsko Savjetovanje",
    ipardDesc:
      "Pristupite EU sredstvima do €1.3M za poljoprivredne investicije, prerađivačke objekte i projekte ruralnog razvoja.",
    ipardFeature1: "IPARD I - Poljoprivredna Investicija",
    ipardFeature2: "IPARD II - Modernizacija Prerade",
    ipardFeature3: "IPARD III - Ruralni Turizam",
    financialTitle: "Financijska Pomoć",
    financialDesc:
      "Sveobuhvatna podrška za proizvodni i turistički sektor s subvencijama, grantovima i povoljnim kreditima.",
    financialFeature1: "Programi Podrške Proizvodnji",
    financialFeature2: "Grantovi za Razvoj Turizma",
    financialFeature3: "Financiranje Promocije Izvoza",
    consultingTitle: "Poslovno Savjetovanje",
    consultingDesc:
      "Stručno vođenje za mikro poduzeća i usluge razvoja sveobuhvatnih poslovnih planova.",
    consultingFeature1: "Savjetovanje za Mikro Biznis",
    consultingFeature2: "Razvoj Poslovnog Plana",
    consultingFeature3: "Strateško Planiranje",
    learnMore: "Saznajte Više",
  },
  clients: {
    title: "Povjerenje Vodećih Tvrtki",
    subtitle:
      "Pomogli smo stotinama tvrtki u poljoprivredi, turizmu i proizvodnom sektoru",
  },
  blog: {
    title: "Financije u svakodnevnoj praksi",
    subtitle:
      "Saznajte više o financijskim vijestima, našim iskustvima i pričama o uspjehu",
    readMore: "Pročitajte Više",
    viewAll: "Pogledajte Sve Objave",
    wantMore: "Želite Pročitati Više?",
    newsletterDesc:
      "Dobijte naša najnovija znanja o IPARD financiranju, poslovnim prilikama i pričama o uspjehu izravno u Vaš inbox.",
    loading: "Učitavanje...",
    error: "Trenutno nije moguće učitati objave na blogu.",
  },
  contact: {
    title: "Spremni za Rast Vašeg Biznisa?",
    subtitle:
      "Razgovarajmo o tome kako Vam možemo pomoći da pristupite financiranju i ostvarite Vaše poslovne ciljeve.",
    phone: "Telefon",
    email: "Email",
    address: "Adresa",
    formTitle: "Postavite pitanje - Riješite Vašu dilemu",
    firstName: "Ime",
    lastName: "Prezime",
    emailLabel: "Email",
    serviceInterest: "Zainteresirani za Uslugu",
    message: "Poruka/Pitanje",
    selectService: "Izaberite uslugu",
    ipardPrograms: "IPARD Programi",
    financialAid: "Financijska Pomoć",
    businessConsulting: "Poslovno Savjetovanje",
    businessPlanDev: "Razvoj Poslovnog Plana",
    messagePlaceholder: "Recite nam o Vašem projektu...",
    send: "Pošaljite Poruku",
    sending: "Slanje...",
    successTitle: "Poruka uspješno poslana!",
    successDesc: "Kontaktirat ćemo Vas uskoro.",
    errorTitle: "Greška pri slanju poruke",
    errorDesc: "Molimo pokušajte ponovno kasnije.",
  },
  footer: {
    tagline: "Za naše klijente uvijek biramo najbolje!",
    servicesTitle: "Usluge",
    ipard: "Financijsko Savjetovanje",
    financialAid: "Pristup financijama kroz kreditne proizvode",
    consulting: "Poslovno Savjetovanje",
    businessPlans: "Marketing i razvoj poslovanja",
    marketAccess: "Pristup tržištu",
    GrantsAndFinancing: "Subvencije i sufinanciranje",
    companyTitle: "Tvrtka",
    aboutUs: "O Nama",
    ourTeam: "Naš Tim",
    careers: "Karijera",
    contactUs: "Kontakt",
    copyright: "© 2025 WVP Plus Consulting. Sva prava pridržana.",
    privacy: "Politika Privatnosti",
    terms: "Uvjeti Korištenja",
  },
  newsletter: {
    title: "Ostanite Informirani",
    subtitle: "Dobijte najnovije IPARD smjernice i poslovne savjete",
    placeholder: "Unesite Vaš email",
    subscribe: "Pretplatite se",
    subscribing: "Pretplata...",
    successTitle: "Uspješno ste se pretplatili!",
    successDesc: "Hvala Vam na pretplati na naš newsletter.",
    errorTitle: "Pretplata nije uspjela",
    errorDesc: "Molimo pokušajte ponovno kasnije.",
  },
  home: {
    loadingContent: "Učitavanje sadržaja stranice...",
    slide1Title: "Za klijente biramo najbolje!",
    slide1Subtitle: "4300 klijenata i dalje rastemo",
    slide2Title: "Naš način rada",
    slide2Subtitle:
      "Upoznajte kako radimo i saznajte zašto naš pristup daje najbolje rezultate",
    slide3Title: "Eksperti u području financija",
    slide3Subtitle:
      "Strateško poslovno planiranje i financijsko savjetodavne usluge za ubrzanje Vašeg rasta",
  },
  about: {
    // Hero Section
    heroTitle: "Naša Tvrtka",
    heroSubtitle:
      "Posvećeni pružanju sveobuhvatnog financijskog savjetovanja i pristupa tržištu.",

    // Company Overview
    whoWeAreTitle: "Tko Smo Mi",
    overviewP1:
      "WVP PLUS CONSULTING je dio austrijske WVP GRUPE, čija je primarna fokus financijsko savjetovanje. Osnovana 1985. u Grazu, Austrija, grupa sada posluje u 10 zemalja jugoistočne Europe i aktivna je u Makedoniji od 2005.",
    overviewP2:
      "Od svog osnivanja 2019, WVP PLUS CONSULTING je imao za cilj da osigura puni financijski pristup makedonskim tvrtkama i građanima. Tijekom pet godina, podržali smo više od 3,000 klijenata, omogućili preko €80M u kreditima i osigurali više od €25M u grantovima.",
    regionalDevTitle: "Regionalni Razvoj",
    serbiaOffice: "2022 — WVP PLUS CONSULTING DOO Srbija",
    bosniaOffice: "2024 — WFP PLUS CONSULTING DOO Bosna",
    accountingOffice:
      "2024 — WVP ACCOUNTING DOO Makedonija (porezi, knjigovodstvo, revizija)",
    whatWeOfferTitle: "Što Nudimo",

    // What We Offer
    accessFinanceTitle: "Pristup Financijama:",
    accessFinanceList: [
      "Bankarski kreditni proizvodi",
      "Leasing",
      "Faktoring",
      "Instrumenti državne podrške",
      "Nebankarska financijska podrška",
      "Spajanja i akvizicije",
      "Equity crowdfunding",
      "Poslovni anđeli",
      "Kapitalni instrumenti",
      "Grantovi / sufinanciranje",
    ],
    marketAccessTitle: "Pristup Tržištu:",
    marketAccessList: [
      "Digitalizacija tvrtke",
      "Energetski učinkoviti audit (PiNE model)",
      "Razvoj cirkularne ekonomije",
      "Matrica zaštite zaposlenih",
      "Strategija i planiranje izvoza",
      "Dizajn i razvoj proizvoda",
      "Marketinška strategija i brendiranje",
      "Dijagnostika financijske sposobnosti",
    ],
    specialReportsTitle: "Specijalizirana Izvješća:",
    specialReportsList: [
      "Poslovni planovi",
      "Investicijski programi",
      "Due diligence",
      "Analiza troškova i koristi",
    ],
    missionStatement:
      "Naša misija je duboko razumjeti svaku tvrtku, identificirati njene financijske i tržišne potrebe i povezati je s pravim instrumentima za postizanje stvarnih, mjerljivih rezultata. S preko 25 eksperata, osiguravamo vrhunsko savjetovanje i dugoročne partnerske odnose.",

    // Company Values
    valuesTitle: "Naše Vrijednosti",
    valuesSubtitle:
      "Principi koji pokreću naš rad i oblikuju našu posvećenost izvrsnosti.",

    // Team Section
    teamTitle: "Upoznajte Naš Tim",
    teamSubtitle: "Iskusni profesionalci posvećeni Vašem uspjehu",

    // CTA Section
    ctaJoinTitle: "Pridružite Se Našem Timu",
    ctaJoinSubtitle:
      "Uvijek tražimo talentirane profesionalce da se pridruže našem rastućem timu",
    viewPositions: "Pogledajte Otvorene Pozicije",
    contactUsCta: "Kontaktirajte Nas",

    values: {
      "Results-Oriented": "Orijentirani na Rezultate",
      "We focus on delivering measurable outcomes and tangible value to our clients":
        "Fokusirani smo na dostavljanje mjerljivih ishoda i stvarne vrijednosti našim klijentima",
      "Client-Centric": "Centrirani na Klijenta",
      "Your success is our priority. We build long-term partnerships based on trust":
        "Vaš uspjeh je naš prioritet. Gradimo dugoročne partnerske odnose temeljene na povjerenju",
      Excellence: "Izvrsnost",
      "We maintain the highest standards of professionalism and expertise":
        "Održavamo najviše standarde profesionalnosti i stručnosti",
      Innovation: "Inovacija",
      "We leverage the latest technologies and methodologies to drive success":
        "Koristimo najnovije tehnologije i metodologije za postizanje uspjeha",
    },
  },
  team: {
    title: "Naš Tim",
    subtitle: "Najveći tim Eksperata",
    description:
      "Mi smo multidisciplinarni tim s obimnim iskustvom u financijskom savjetovanju i razvoju investicija. Iako radimo u mnogim industrijama, specijalizirani smo za proizvodnju, agrobiznis, ruralni razvoj, turizam i projekte zelene energije. Pomažući klijentima da se snađu u državnoj podršci i EU financiranju, transformiramo koncepte u profitabilne realnosti. Posvećeni smo izgradnji održivih, spremnih za izvoz biznisa.",
    cta: "Povežite se s Našim Ekspertima",
  },
  contactPage: {
    heroTitle: "Spremni odvesti Vaš biznis na višu razinu?",
    heroSubtitle: "Stupite u kontakt s našim timom eksperata danas.",
    methodsTitle: "Kako Vam Možemo Pomoći?",
    methodsSubtitle: "Izaberite najpogodniji način da kontaktirate naš tim",
    getDirections: "Dobijte Upute",
    headquartersLabel: "Sjedište",
    officesTitle: "Naš Ured",
    businessHoursTitle: "Radno Vrijeme",
    dayMonFri: "Ponedjeljak - Petak",
    daySaturday: "Subota",
    daySunday: "Nedjelja",
    closed: "Zatvoreno",
    monFriHours: "08:00 - 17:00",
    saturdayHours: "09:00 - 13:00",
    mapIntro: "Interaktivna karta koja prikazuje sve lokacije ureda",
    mapClickHint: "Kliknite na bilo koju karticu ureda iznad da dobijete upute",
    emergencySupportTitle: "Hitna Podrška:",
    emergencySupportDesc:
      "Za hitna pitanja izvan radnog vremena, molimo pošaljite nam email i odgovorit ćemo Vam što je prije moguće.",
    faqsTitle: "Često Postavljana Pitanja",
    methods: {
      phone: {
        title: "Telefonska Podrška",
        description: "Razgovarajte izravno s našim savjetnicima",
        details: "+389 76 337 800 \n +389 76 337 801",
        availability: "Pon-Pet 8:00-17:00",
      },
      email: {
        title: "Email Podrška",
        description: "Dobijte detaljne odgovore na Vaša pitanja",
        details: "info@wvpconsulting.com",
        availability: "24/7 odgovor unutar 24 sata",
      },
      inPerson: {
        title: "Osobna Konsultacija",
        description: "Zakažite sastanak uživo",
        details: "Dostupno u svim uredima",
        availability: "Samo po dogovoru",
      },
      online: {
        title: "Online Konsultacija",
        description: "Video pozivi za udaljene klijente",
        details: "Zoom, Teams, ili preferirana platforma",
        availability: "Fleksibilno zakazivanje",
      },
    },
    faqs: [
      {
        question: "Koliko traje IPARD proces prijave?",
        answer:
          "Tipičan IPARD proces prijave traje 3-6 mjeseci od početne konsultacije do odobrenja financiranja, ovisno o složenosti Vašeg projekta i potpunosti dokumentacije.",
      },
      {
        question:
          "Koja dokumenta trebam pripremiti za prijave za financiranje?",
        answer:
          "Potrebna dokumenta obično uključuju registraciju biznisa, financijske izvještaje, projektnu dokumentaciju, ekološke dozvole i detaljan poslovni plan. Pružamo kompletnu kontrolnu listu tijekom konsultacije.",
      },
      {
        question: "Pružate li podršku za biznise izvan Srbije?",
        answer:
          "Iako je naš primarni fokus na srpskim biznisima, pružamo savjetodavne usluge za međunarodne tvrtke koje žele investirati u Srbiju ili pristupiti programima EU financiranja.",
      },
      {
        question: "Kolike su Vaše naknade za konsultacije?",
        answer:
          "Nudimo besplatne početne konsultacije za procjenu Vašeg projekta. Naše naknade za usluge su transparentne i diskutirane unaprijed, obično strukturirane kao postotak uspješno osiguranog financiranja.",
      },
    ],
  },
  programs: {
    viewAllServices: "Pogledajte Sve Usluge",
    floatingNumber: "+389 78 348 860",
    flaotingButton: "Zakažite Konsultaciju",

    buttonText: "Zakažite Konsultaciju",
    services: {
      financialConsulting: {
        title: "Financijsko Savjetovanje",
        subtitle:
          "Kreditna dijagnostika • Poslovno planiranje • Strukturiranje investicija",
        description:
          "Sveobuhvatna analiza prilagođena Vašem poslovnom modelu za optimizaciju financijskih operacija klijenta, priprema kreditne poslovne dijagnostike i osiguranje kvalitetne strukture financijskih izvještaja.",
        items: [
          "Poslovni plan",
          "Due diligence",
          "Investicijski program",
          "Izvještaj o izvedivosti/troškovima i koristima",
        ],
      },
      accessToFinance: {
        title: "Pristup Financijama",
        subtitle: "Kreditni savjetnici • Strukturirano financiranje",
        description:
          "Kroz usluge kreditnog promotora i kreditnog savjetnika, pruža se kreditna dijagnostika i preporuke za financijsku strukturu pogodnu za postojeće i buduće investicije. Naši kreditni savjetnici istražuju tržišne ponude i preporučuju optimalnu dospelost, valutu, dinamiku i financijske aranžmane.",
        items: [
          "Bankarski kreditni proizvodi",
          "Leasing",
          "Faktoring",
          "Osiguranje potraživanja",
          "Alternativno financiranje",
        ],
      },
      grants: {
        title: "Grantovi i Sufinanciranje",
        subtitle: "Priprema projekata • Praćenje grantova",
        description:
          "Praćenje poziva i puna priprema prijava za grantove i sufinanciranje dostupnih kroz nacionalne i međunarodne instrumente, uključujući IPARD, IPA, GIZ, INOVA i EU fondove - maksimiziranje prilika za dobivanje mekih ili potpuno nevratnih financijskih sredstava.",
        items: [
          "IPARD, IPA, GIZ",
          "INOVA i nacionalni programi",
          "EBRD blended finance",
          "EU strukturni instrumenti",
          "Potencijal povrata do 90%",
        ],
      },
      businessConsulting: {
        title: "Poslovno Savjetovanje",
        subtitle: "Organizacijska dijagnostika • QUINTAUM",
        description:
          "Korištenjem QUINTAUM metodologije (210 indikatora) dijagnosticiramo organizacijsku kulturu, dobrobit zaposlenih i učinkovitost menadžmenta, zatim predlažemo i organiziramo coaching i programe razvoja zaposlenih.",
        items: [
          "QUINTAUM dijagnostika (210 KPI-jeva)",
          "Coaching i leaderski programi",
          "Planovi razvoja zaposlenih",
          "Dugoročno organizacijsko praćenje",
        ],
      },
      marketing: {
        title: "Marketing i Razvoj Poslovanja",
        subtitle: "Brendiranje • Strategija rasta • Digitalizacija",
        description:
          "Integrirani marketing i razvoj poslovanja koji povećava vidljivost brenda i pokreće mjerljivi rast - od istraživanja tržišta i strateškog planiranja do implementacije kampanja i optimizacije investicija (ROI).",
        items: [
          "Strateško planiranje",
          "Istraživanje tržišta",
          "Brendiranje i identitet",
          "Digitalne kampanje i analitika",
        ],
      },
      marketAccess: {
        title: "Pristup Tržištu",
        subtitle: "Izvozna strategija • Identifikacija kupaca",
        description:
          "Podrška tvrtkama koje traže nova međunarodna tržišta: istraživanje, izvozno planiranje, digitalna spremnost, energetski auditi i otkrivanje kupaca kako bi ulazak na izvozno tržište bio strukturiran i niskorizičan.",
        items: [
          "Istraživanje tržišta i analiza potencijala",
          "Digitalna spremnost",
          "Energetski učinkoviti audit (PiNE)",
          "Izvozni plan i pronalaženje kupaca",
        ],
      },
      esg: {
        title: "ESG Standardizacija",
        subtitle: "Nefinancijsko izvještavanje • Putokaz usklađenosti",
        description:
          "Dijagnostika i softverski omogućena implementacija ESG standarda: ekološki, društveni i upravljački indikatori, mapiranje rizika i nefinancijsko izvještavanje usklađeno sa zakonskim zahtjevima.",
        items: [
          "ESG dijagnostika i izvještavanje",
          "Ekološki i društveni indikatori",
          "Mapiranje upravljanja",
          "Putokaz usklađenosti",
        ],
      },
    },
  },
},

  sq: {
    nav: {
      home: "Ballina",
      programs: "Shërbimet",
      blog: "Këshilla Financiare",
      about: "Rreth nesh",
      contact: "Kontakti",
    },
    hero: {
      title: "Transformoni biznesin tuaj bujqësor",
      subtitle:
        "Qasuni deri në 1.3 milionë euro përmes fondeve IPARD për modernizimin e bujqësisë dhe zhvillimin rural",
      learnMore: "Mësoni më shumë",
      viewPrograms: "Shikoni programet",
    },
    achievements: {
      supertitle: "Arritjet tona",
      supersubtitle:
        "Së bashku me klientët tanë, arrijmë rezultate të jashtëzakonshme në të gjitha sektorët!",
      titleDetails: "Deri më 31.12.2025",
      title1: "Projekte të përfunduara me sukses",
      subtitle1: "Mbi 4.300 projekte të përfunduara me sukses",
      title2: "Grante të paguara",
      subtitle2: "Mbi 35 milionë euro në grante të paguara",
      title3: "Kredi të paguara",
      subtitle3: "Mbi 80 milionë euro në kredi financiare të paguara",
      loading: "Duke u ngarkuar...",
      error: "Për momentin nuk mund të ngarkohen arritjet.",
    },
    services: {
      title: "Shikoni si mund t'ju ndihmojmë",
      subtitle:
        "Nga qasja në financa deri te zhvillimi i tregut dhe strategjik i biznesit, ne ofrojmë mbështetje të plotë për rritjen dhe zhvillimin e biznesit tuaj",
      ipardTitle: "Konsulencë financiare",
      ipardDesc:
        "Qasje në fondet e BE-së deri në 1.3 milionë euro për investime bujqësore, kapacitete përpunuese dhe projekte të zhvillimit rural.",
      ipardFeature1: "IPARD I - Investime bujqësore",
      ipardFeature2: "IPARD II - Modernizimi i përpunimit",
      ipardFeature3: "IPARD III - Turizmi rural",
      financialTitle: "Ndihma financiare",
      financialDesc:
        "Mbështetje gjithëpërfshirëse për sektorin e prodhimit dhe turizmit me grante, subvencione dhe kredi të favorshme.",
      financialFeature1: "Programe për mbështetje të prodhimit",
      financialFeature2: "Grante për zhvillimin e turizmit",
      financialFeature3: "Financim për promovimin e eksportit",
      consultingTitle: "Konsulencë biznesi",
      consultingDesc:
        "Udhëzim profesional për mikro bizneset dhe shërbime për zhvillimin e planeve gjithëpërfshirëse të biznesit.",
      consultingFeature1: "Konsulencë për mikro bizneset",
      consultingFeature2: "Hartimi i planeve të biznesit",
      consultingFeature3: "Planifikim strategjik",
      learnMore: "Mësoni më shumë",
    },
    clients: {
      title: "Besimi nga kompanitë udhëheqëse",
      subtitle:
        "Kemi ndihmuar qindra kompani në sektorët e bujqësisë, turizmit dhe prodhimit",
    },
    blog: {
      title: "Financat në praktikën e përditshme",
      subtitle:
        "Mësoni më shumë për lajmet financiare, përvojat tona dhe historitë e suksesit",
      readMore: "Lexoni më shumë",
      viewAll: "Të gjitha postimet",
      wantMore: "Dëshironi të lexoni më shumë?",
      newsletterDesc:
        "Merrni njohuritë më të fundit për financimin, mundësitë e biznesit dhe historitë e suksesit direkt në kutinë tuaj postare.",
      loading: "Duke u ngarkuar...",
      error: "Nuk mund të ngarkohen postimet për momentin.",
    },
    contact: {
      title: "Jeni gati për rritjen e biznesit tuaj?",
      subtitle:
        "Le të bisedojmë se si mund t'ju ndihmojmë të qaseni në fonde dhe të arrini qëllimet tuaja të biznesit.",
      phone: "Telefoni",
      email: "E-posta",
      address: "Adresa",
      formTitle: "Bëni një pyetje - Zgjidhni dilemën",
      firstName: "Emri",
      lastName: "Mbiemri",
      emailLabel: "E-posta",
      serviceInterest: "Shërbimi që ju intereson",
      message: "Mesazhi/Pyetja",
      selectService: "Zgjidhni shërbimin",
      ipardPrograms: "Programet IPARD",
      financialAid: "Ndihma financiare",
      businessConsulting: "Konsulencë biznesi",
      businessPlanDev: "Hartimi i planit të biznesit",
      messagePlaceholder: "Na tregoni diçka më shumë për projektin tuaj...",
      send: "Dërgo mesazhin",
      sending: "Duke u dërguar...",
      successTitle: "Mesazhi u dërgua me sukses!",
      successDesc: "Do t'ju kontaktojmë së shpejti.",
      errorTitle: "Gabim gjatë dërgimit",
      errorDesc: "Ju lutem provoni përsëri më vonë.",
    },
    footer: {
      tagline: "Për klientët tanë gjithmonë zgjedhim më të mirën!",
      servicesTitle: "Shërbimet",
      ipard: "Konsulencë financiare",
      financialAid: "Qasje në financa përmes produkteve kreditore",
      consulting: "Konsulencë biznesi",
      businessPlans: "Marketing dhe zhvillim biznesi",
      marketAccess: "Qasje në tregje",
      GrantsAndFinancing: "Grante dhe bashkëfinancim",
      companyTitle: "Kompania",
      aboutUs: "Rreth nesh",
      ourTeam: "Ekipi ynë",
      careers: "Karriera",
      contactUs: "Kontakti",
      copyright: "© 2025 WVP Plus Consulting. Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e privatësisë",
      terms: "Kushtet e përdorimit",
    },
    newsletter: {
      title: "Qëndroni të informuar",
      subtitle: "Merrni udhëzimet më të fundit të IPARD dhe këshillat e biznesit",
      placeholder: "Shkruani e-postën tuaj",
      subscribe: "Abonohuni",
      subscribing: "Duke u abonuar...",
      successTitle: "Abonimi i suksesshëm!",
      successDesc: "Ju faleminderit që u abonuat në buletinin tonë.",
      errorTitle: "Abonimi i pasuksesshëm",
      errorDesc: "Ju lutem provoni përsëri më vonë.",
    },
    home: {
      loadingContent: "Duke u ngarkuar përmbajtja...",
      slide1Title: "Për klientët zgjedhim më të mirën!",
      slide1Subtitle: "mbi 4300 klientë",
      slide2Title: "Mënyra jonë e punës",
      slide2Subtitle:
        "Njihuni me mënyrën tonë të punës dhe pse qasja jonë jep rezultatet më të mira",
      slide3Title: "Ekspertë në fushën e financave",
      slide3Subtitle:
        "Planifikim strategjik i biznesit dhe shërbime këshilluese financiare për përshpejtimin e rritjes suaj",
    },
    about: {
      heroTitle: "Kompania Jonë",
      heroSubtitle:
        "Të përkushtuar në ofrimin e konsulencës gjithëpërfshirëse financiare dhe të qasjes në treg.",
      whoWeAreTitle: "Kush Jemi Ne",
      overviewP1:
        "WVP Plus Consulting është pjesë e grupit të njohur austriak WVP GROUP, me traditë që daton nga viti 1985. Me seli në Grac, Austri, grupi sot është i pranishëm në 10 vende në Evropën Juglindore, duke sjellë ekspertizë, besim dhe zgjidhje inovative në fushën e këshillimit financiar.\n",
      overviewP2:
        "Në Maqedoni, grupi është aktiv nga viti 2005, ndërsa WVP Plus Consulting fillon punën në vitin 2019 si kompania e tretë e grupit (nga gjithsej 6) e pranishme në tregun maqedonas.",
      regionalDevTitle: "Zhvillimi Rajonal",
      serbiaOffice: "2022 — WVP PLUS CONSULTING DOO Serbi",
      bosniaOffice: "2024 — WVP PLUS CONSULTING DOO Bosnjë",
      accountingOffice:
        "2024 — WVP KONTABILITET DOO Maqedoni (tatim, kontabilitet, auditim)",
      whatWeOfferTitle: "Çfarë Ofrojmë",
      accessFinanceTitle: "Qasja në Financa:",
      accessFinanceList: [
        "Grante / bashkëfinancim",
        "Produkte kreditore bankare",
        "Lizing",
        "Faktoring",
        "Instrumente qeveritare për mbështetje",
        "Mbështetje financiare jobankare",
        "Bashkime dhe blerje",
        "Financim grupor i kapitalit (Equity crowdfunding)",
        "Engjëj biznesi",
        "Instrumente kapitale",
      ],
      marketAccessTitle: "Qasja në Treg:",
      marketAccessList: [
        "Digjitalizimi i kompanisë",
        "Auditim i efiçencës energjetike (modeli PiNE)",
        "Zhvillimi i ekonomisë qarkore",
        "Matrica e mbrojtjes së punëtorëve",
        "Strategji dhe planifikim i eksportit",
        "Dizajn dhe zhvillim i produkteve",
        "Strategji marketingu dhe brendim",
        "Diagnostikim i kapacitetit financiar",
      ],
      specialReportsTitle: "Raporte të Specializuara:",
      specialReportsList: [
        "Plane biznesi",
        "Programe investimi",
        "Analizë e thellë (Due diligence)",
        "Analizë e shpenzimeve dhe përfitimeve (Cost-benefit analysis)",
      ],
      missionStatement:
        "Misioni ynë është të mundësojmë qasje të plotë në financa për kompanitë dhe qytetarët, duke rritur konkurrencën dhe qëndrueshmërinë e tyre.",
      valuesTitle: "Vlerat Tona",
      valuesSubtitle:
        "Parimet që udhëheqin punën tonë dhe formësojnë angazhimin tonë për përsosmëri.",
      teamTitle: "Njihni Ekipin Tonë",
      teamSubtitle: "Profesionistë me përvojë të përkushtuar ndaj suksesit tuaj",
      ctaJoinTitle: "Bashkohuni me Ekipin Tonë",
      ctaJoinSubtitle:
        "Gjithmonë kërkojmë profesionistë të talentuar për t'u bashkuar me ekipin tonë në rritje",
      viewPositions: "Shikoni Pozitat e Hapura",
      contactUsCta: "Na kontaktoni",
      values: {
        "Results-Oriented": "Orientim drejt Rezultateve",
        "We focus on delivering measurable outcomes and tangible value to our clients":
          "Fokusohemi në ofrimin e rezultateve të matshme dhe vlerës konkrete për klientët tanë",
        "Client-Centric": "Fokus te Klienti",
        "Your success is our priority. We build long-term partnerships based on trust":
          "Suksesi juaj është prioriteti ynë. Ndërtojmë partneritete afatgjata të bazuara në besim",
        Excellence: "Përsosmëri",
        "We maintain the highest standards of professionalism and expertise":
          "Mbajmë standardet më të larta të profesionalizmit dhe ekspertizës",
        Innovation: "Inovacion",
        "We leverage the latest technologies and methodologies to drive success":
          "Përdorim teknologjitë dhe metodologjitë më të fundit për të arritur suksesin",
      },
    },
    team: {
      title: "Ekipi ynë",
      subtitle: "Ekipi më i madh i ekspertëve",
      description:
        "Ekipi ynë multidisiplinar sjell përvojë të pasur në konsulencë financiare dhe zhvillim të investimeve në industri të ndryshme, me fokus të veçantë në kompanitë prodhuese, sektorin bujqësor, zhvillimin rural, turizmin dhe 'investimet e gjelbra'. U ndihmojmë klientëve të qasen në programet shtetërore për mbështetje financiare dhe fondet e Bashkimit Evropian, dhe t'i kthejnë idetë e tyre në investime të qëndrueshme dhe të realizuara. Detyra jonë është të krijojmë së bashku rritje të qëndrueshme dhe kompani të orientuara drejt eksportit.\n" +
        "\n" +
        "Për klientët tanë – ne jemi partnerë në procesin e rritjes.",
      cta: "Lidhuni me ekspertët tanë",
    },
    contactPage: {
      heroTitle:
        "A jeni gati ta çoni biznesin tuaj në nivelin e ardhshëm?",
      heroSubtitle:
        "Kontaktoni ekipin tonë të profesionistëve që sot",
      methodsTitle: "Si mund t'ju ndihmojmë?",
      methodsSubtitle:
        "Zgjidhni mënyrën më të përshtatshme për kontakt me ekipin tonë",
      getDirections: "Udhëzime",
      headquartersLabel: "Selia",
      officesTitle: "Zyrat tona",
      businessHoursTitle: "Orari i punës",
      dayMonFri: "E hënë - E premte",
      daySaturday: "E shtunë",
      daySunday: "E diel",
      closed: "Mbyllur",
      monFriHours: "08:00 - 17:00",
      saturdayHours: "09:00 - 13:00",
      mapIntro: "Hartë interaktive me vendndodhjet e të gjitha zyrave",
      mapClickHint: "Klikoni mbi çdo zyrë më lart për udhëzime",
      emergencySupportTitle: "Mbështetje urgjente:",
      emergencySupportDesc:
        "Për pyetje urgjente jashtë orarit të punës, ju lutem na dërgoni e-postë dhe do të përgjigjemi sa më shpejt të jetë e mundur.",
      faqsTitle: "Pyetjet e bëra shpesh",
      methods: {
        phone: {
          title: "Mbështetje telefonike",
          description: "Bisedoni drejtpërdrejt me konsulentët tanë",
          details: "+389 76 337 800 \n +389 76 337 801",
          availability: "Hën-Pre 8:00-17:00",
        },
        email: {
          title: "Mbështetje me e-postë",
          description: "Merrni përgjigje të detajuara për pyetjet tuaja",
          details: "info@wvpconsulting.com",
          availability: "24/7 përgjigje brenda 24 orëve",
        },
        inPerson: {
          title: "Konsultime në person",
          description: "Caktoni një takim ballë për ballë",
          details: "E disponueshme në zyrat tona",
          availability: "Vetëm me caktim",
        },
        online: {
          title: "Konsultime online",
          description: "Video thirrje për klientë në distancë",
          details: "Zoom, Teams ose platforma e preferuar",
          availability: "Caktim fleksibël",
        },
      },
      faqs: [
        {
          question: "Sa kohë zgjat procesi i aplikimit për IPARD?",
          answer:
            "Procesi tipik i aplikimit për IPARD zgjat 3-6 muaj nga konsultimi fillestar deri te miratimi i fondeve, në varësi të kompleksitetit të projektit tuaj dhe plotësisë së dokumentacionit.",
        },
        {
          question: "Cilat dokumente duhet të përgatit për aplikim?",
          answer:
            "Dokumentet e nevojshme zakonisht përfshijnë regjistrimin e biznesit, raportet financiare, dokumentacionin e projektit, lejet mjedisore dhe planin e detajuar të biznesit. Ofrojmë listë të plotë kontrolli gjatë konsultimeve.",
        },
        {
          question: "A ofroni mbështetje për biznese jashtë Serbisë?",
          answer:
            "Edhe pse fokusi ynë kryesor janë bizneset në rajon, ofrojmë shërbime konsulence edhe për kompani ndërkombëtare që dëshirojnë të investojnë ose të qasen në programet e financimit të BE-së.",
        },
        {
          question: "Cilat janë çmimet për konsultimet tuaja?",
          answer:
            "Ofrojmë konsultime fillestare falas për vlerësimin e projektit tuaj. Tarifat tona janë transparente dhe të dakordësuara paraprakisht, zakonisht të strukturuara si përqindje e fondeve të siguruara me sukses.",
        },
      ],
    },
    programs: {
      viewAllServices: "Të gjitha shërbimet",
      floatingNumber: "+389 78 348 860",
      flaotingButton: "Caktoni \n takim",
      buttonText: "Caktoni takim",
      services: {
        financialConsulting: {
          title: "Konsulencë financiare",
          subtitle:
            "Diagnostikim kreditor • Planifikim biznesi • Strukturim investimesh",
          description:
            "Analizë gjithëpërfshirëse e përshtatur ndaj modelit tuaj të biznesit me qëllim optimizimin e funksionimit financiar të klientit, hartimin e diagnostikimit kreditor të biznesit dhe sigurimin e strukturës cilësore të raporteve financiare.",
          items: [
            "Plan biznesi",
            "Analizë e thellë (Due diligence)",
            "Program investimi",
            "Raport i fizibilitetit/arsyeshmërisë së investimit (cost benefit analysis)",
          ],
        },
        accessToFinance: {
          title: "Qasja në financa",
          subtitle: "Këshilltarë kreditore • Financim i strukturuar",
          description:
            "Përmes shërbimeve promovues kreditor dhe këshilltar kreditor mundësohet diagnostikim kreditor dhe rekomandime për konstruksion financiar të përshtatshëm për investimet ekzistuese dhe të ardhshme. Këshilltarët tanë kreditore hulumtojnë ofertat e tregut dhe rekomandojnë afat optimal, valutë, dinamikë dhe aranzhime financiare.",
          items: [
            "Produkte kreditore bankare",
            "Lizing",
            "Faktoring",
            "Sigurim i kërkesave",
            "Financim alternativ",
          ],
        },
        grants: {
          title: "Grante dhe bashkëfinancim",
          subtitle: "Përgatitja e projekteve • Monitorim i granteve",
          description:
            "Ndjekja e thirrjeve dhe përgatitja e plotë e aplikacioneve për grante dhe bashkëfinancim të disponueshme përmes instrumenteve kombëtare dhe ndërkombëtare, duke përfshirë IPARD, IPA, GIZ, INOVA dhe fondet e BE-së - duke maksimizuar mundësitë për marrjen e fondeve 'të buta' ose plotësisht të pakthyeshme financiare.",
          items: [
            "IPARD, IPA, GIZ",
            "INOVA dhe programe kombëtare",
            "EBRD financim i kombinuar",
            "Instrumente strukturore të BE-së",
            "Potencial për kthim deri në 90%",
          ],
        },
        businessConsulting: {
          title: "Konsulencë biznesi",
          subtitle: "Diagnostikim organizativ • QUINTAUM",
          description:
            "Duke përdorur metodologjinë QUINTAUM (210 tregues) diagnostikojmë kulturën organizative, mirëqenien e punëtorëve dhe efektivitetin e menaxhimit, e pastaj propozojmë dhe organizojmë coaching dhe programe për zhvillimin e punëtorëve.",
          items: [
            "Diagnostikim QUINTAUM (210 KPI)",
            "Coaching dhe programe udhëheqjeje",
            "Plane për zhvillimin e punëtorëve",
            "Monitorim afatgjatë organizativ",
          ],
        },
        marketing: {
          title: "Marketing dhe zhvillim biznesi",
          subtitle: "Brendim • Strategji për rritje • Digjitalizim",
          description:
            "Marketing i integruar dhe zhvillim biznesi që rrit dukshmërinë e brendit dhe sjell rritje të matshme - nga hulumtimi i tregut dhe planifikimi strategjik deri te zbatimi i fushatave dhe optimizimi i investimeve (ROI).",
          items: [
            "Planifikim strategjik",
            "Hulumtim i tregut",
            "Brendim dhe identitet",
            "Fushata digjitale dhe analitikë",
          ],
        },
        marketAccess: {
          title: "Qasja në tregje",
          subtitle: "Strategji eksporti • Identifikim i blerësve",
          description:
            "Mbështetje për kompanitë që kërkojnë tregje të reja ndërkombëtare: hulumtim, planifikim i eksportit, gatishmëri digjitale, auditime energjetike dhe gjetje blerësish për hyrje në tregun e eksportit me risk të ulët.",
          items: [
            "Hulumtim i tregut dhe analizë e potencialit",
            "Gatishmëri për digjitalizim",
            "Auditim i efiçencës energjetike (PiNE)",
            "Plan eksporti dhe gjetje blerësish",
          ],
        },
        esg: {
          title: "Standardizim ESG",
          subtitle: "Raportim jofinanciar • Udhërrëfyes pajtueshmërie",
          description:
            "Diagnostikim dhe implementim i mundësuar me softuer i standardeve ESG: metrika mjedisore, sociale dhe të qeverisjes, hartëzim i risqeve dhe raportim jofinanciar i harmonizuar me kërkesat ligjore.",
          items: [
            "Diagnostikim dhe raportim ESG",
            "Tregues mjedisorë dhe socialë",
            "Hartëzim i qeverisjes",
            "Udhërrëfyes pajtueshmërie",
          ],
        },
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

  const result: any = Array.isArray(enBase)
    ? [...(langObj ?? enBase)]
    : { ...enBase };

  for (const key of Object.keys(enBase as any)) {
    const baseVal: any = (enBase as any)[key];
    const overrideVal: any = isObject(langObj) ? langObj[key] : undefined;

    if (isObject(baseVal)) {
      result[key] = deepMergeWithEnglishFallback(baseVal, overrideVal);
    } else {
      // If override is missing or an empty string, fall back to English base value
      const isMissing =
        overrideVal === undefined ||
        overrideVal === null ||
        (typeof overrideVal === "string" && overrideVal.trim() === "");
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
