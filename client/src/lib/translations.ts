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
  };
}> = {
  sr: {
    nav: {
      home: "Почетна",
      programs: "Програми",
      blog: "Блог",
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
    },
  },
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Transform Your Agricultural Business",
      subtitle: "Access up to €1.3M in IPARD funding for agricultural modernization and rural development",
      learnMore: "Learn More",
      viewPrograms: "View Programs",
    },
    achievements: {
      title: "Our 2024 Achievements",
      subtitle: "Delivering exceptional results for our clients across all sectors",
      loading: "Loading...",
      error: "Unable to load achievements at this time.",
    },
    services: {
      title: "Our Comprehensive Services",
      subtitle: "From IPARD funding to business consulting, we provide end-to-end support for your growth journey",
      ipardTitle: "IPARD Programs",
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
      title: "Latest Insights & Stories",
      subtitle: "Stay informed with our expert analysis and client success stories",
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
      formTitle: "Get Free Consultation",
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
      tagline: "Expert financial consulting and funding solutions for agriculture, tourism, and manufacturing sectors. Your success is our mission.",
      servicesTitle: "Services",
      ipard: "IPARD Programs",
      financialAid: "Financial Aid",
      consulting: "Business Consulting",
      businessPlans: "Business Plans",
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
    },
  },
  mk: {
    nav: {
      home: "Дома",
      programs: "Програми",
      blog: "Блог",
      about: "За нас",
      contact: "Контакт",
    },
    hero: {
      title: "Трансформирајте го вашиот земјоделски бизнис",
      subtitle: "Пристап до €1.3М ИПАРД финансирање за модернизација на земјоделството и рурален развој",
      learnMore: "Дознајте повеќе",
      viewPrograms: "Погледнете програми",
    },
    achievements: {
      title: "Наши достигнувања 2024",
      subtitle: "Обезбедуваме исклучителни резултати за нашите клиенти во сите сектори",
      loading: "Вчитување...",
      error: "Не е можно да се вчитаат достигнувањата во овој момент.",
    },
    services: {
      title: "Наши сеопфатни услуги",
      subtitle: "Од ИПАРД финансирање до бизнис консалтинг, обезбедуваме целосна поддршка за вашиот раст",
      ipardTitle: "ИПАРД програми",
      ipardDesc: "Пристап до ЕУ финансирање до €1.3М за земјоделски инвестиции, преработувачки објекти и проекти за рурален развој.",
      ipardFeature1: "ИПАРД I - Земјоделска инвестиција",
      ipardFeature2: "ИПАРД II - Модернизација на преработка",
      ipardFeature3: "ИПАРД III - Рурален туризам",
      financialTitle: "Финансиска помош",
      financialDesc: "Сеопфатна поддршка за производствени и туристички сектори со грантови, субвенции и поволни кредити.",
      financialFeature1: "Програми за поддршка на производството",
      financialFeature2: "Грантови за развој на туризмот",
      financialFeature3: "Финансирање за промоција на извозот",
      consultingTitle: "Бизнис консалтинг",
      consultingDesc: "Експертско водење за микро бизниси и сеопфатни услуги за развој на бизнис планови.",
      consultingFeature1: "Консалтинг за микро бизниси",
      consultingFeature2: "Развој на бизнис планови",
      consultingFeature3: "Стратешко планирање",
      learnMore: "Дознајте повеќе",
    },
    clients: {
      title: "Доверба од водечки бизниси",
      subtitle: "Им помогнавме на стотици компании во секторите земјоделство, туризам и производство",
    },
    blog: {
      title: "Најнови сознанија и приказни",
      subtitle: "Останете информирани со нашата стручна анализа и приказни за успех на клиентите",
      readMore: "Прочитајте повеќе",
      viewAll: "Погледнете ги сите објави",
      wantMore: "Сакате да прочитате повеќе?",
      newsletterDesc: "Добивајте ги нашите најнови сознанија за ИПАРД финансирање, бизнис можности и приказни за успех директно во вашето сандаче.",
      loading: "Вчитување...",
      error: "Не е можно да се вчитаат објавите во овој момент.",
    },
    contact: {
      title: "Подготвени сте да го развиете вашиот бизнис?",
      subtitle: "Да разговараме за тоа како можеме да ви помогнеме да пристапите до финансирање и да ги постигнете вашите бизнис цели.",
      phone: "Телефон",
      email: "Е-пошта",
      address: "Адреса",
      formTitle: "Добијте бесплатна консултација",
      firstName: "Име",
      lastName: "Презиме",
      emailLabel: "Е-пошта",
      serviceInterest: "Интерес за услуга",
      message: "Порака",
      selectService: "Изберете услуга",
      ipardPrograms: "ИПАРД програми",
      financialAid: "Финансиска помош",
      businessConsulting: "Бизнис консалтинг",
      businessPlanDev: "Развој на бизнис план",
      messagePlaceholder: "Кажете ни за вашиот проект...",
      send: "Испрати порака",
      sending: "Испраќање...",
      successTitle: "Пораката е успешно испратена!",
      successDesc: "Наскоро ќе ве контактираме.",
      errorTitle: "Грешка при испраќање на пораката",
      errorDesc: "Обидете се повторно подоцна.",
    },
    footer: {
      tagline: "Експертско финансиско консалтинг и решенија за финансирање за секторите земјоделство, туризам и производство. Вашиот успех е наша мисија.",
      servicesTitle: "Услуги",
      ipard: "ИПАРД програми",
      financialAid: "Финансиска помош",
      consulting: "Бизнис консалтинг",
      businessPlans: "Бизнис планови",
      companyTitle: "Компанија",
      aboutUs: "За нас",
      ourTeam: "Наш тим",
      careers: "Кариери",
      contactUs: "Контакт",
      copyright: "© 2025 WVP Plus Consulting. Сите права се задржани.",
      privacy: "Политика на приватност",
      terms: "Услови на користење",
    },
    newsletter: {
      title: "Останете ажурирани",
      subtitle: "Добивајте ги најновите ИПАРД насоки и бизнис совети",
      placeholder: "Внесете ја вашата е-пошта",
      subscribe: "Претплатете се",
      subscribing: "Претплаќање...",
      successTitle: "Успешно претплатени!",
      successDesc: "Ви благодариме што се претплативте на нашиот билтен.",
      errorTitle: "Претплатата не успеа",
      errorDesc: "Обидете се повторно подоцна.",
    },
    home: {
      loadingContent: "Вчитување на содржина на страницата...",
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
    },
  },
};

export function useTranslations() {
  return translations;
}
