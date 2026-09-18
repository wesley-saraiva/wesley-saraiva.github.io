const translations = {
  pt: {
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    languageLabel: "Selecionar idioma",
    menuLabel: "Abrir menu",
    mainTechLabel: "Tecnologias principais",
    profileLabel: "Foto de Wesley Saraiva",
    navAbout: "Sobre",
    navTechnologies: "Tecnologias",
    navProjects: "Projetos",
    navServices: "Serviços",
    navContact: "Contato",
    heroGreeting: "OLÁ, EU SOU WESLEY",
    heroLineOne: "Desenvolvedor",
    heroLineTwo: "Flutter & Java",
    heroDescription: "Desenvolvo aplicativos, APIs e sistemas sob medida, transformando necessidades reais em soluções digitais.",
    heroProjects: "Ver meus projetos",
    heroServices: "Contratar meus serviços",
    aboutLabel: "SOBRE MIM",
    aboutTitle: "Transformando ideias em software.",
    aboutLead: "Sou Wesley Saraiva, desenvolvedor com formação em Sistemas de Informação e foco no desenvolvimento de aplicativos e sistemas.",
    aboutDescription: "Meu principal foco é Flutter para aplicações e Java com Spring Boot para APIs e soluções backend, seguindo boas práticas de engenharia de software e arquitetura bem definida.",
    aboutEducation: "Formação",
    aboutDegree: "Sistemas de Informação",
    aboutSpecialty: "Especialidade",
    aboutDatabase: "Banco de dados",
    technologiesLabel: "TECNOLOGIAS",
    technologiesTitle: "Ferramentas que utilizo",
    technologiesIntro: "Uma stack moderna para criar produtos multiplataforma, APIs organizadas e dados confiáveis.",
    flutterDescription: "Aplicações multiplataforma",
    dartDescription: "Linguagem para Flutter",
    javaDescription: "Desenvolvimento backend",
    springDescription: "APIs e aplicações backend",
    mysqlDescription: "Banco de dados relacional",
    gitDescription: "Versionamento de código",
    servicesLabel: "SERVIÇOS",
    servicesTitle: "Como posso ajudar",
    servicesDescription: "Desenvolvo soluções modernas para empresas e projetos específicos, com foco em qualidade, organização e manutenção.",
    serviceAppsTitle: "Desenvolvimento de Aplicativos",
    serviceAppsText: "Aplicativos modernos e responsivos com Flutter para diferentes plataformas.",
    serviceBackendTitle: "Backend & APIs",
    serviceBackendText: "APIs REST e serviços backend com Java e Spring Boot integrados a bancos de dados.",
    serviceCustomTitle: "Sistemas Personalizados",
    serviceCustomText: "Soluções sob medida para transformar processos e necessidades reais em sistemas digitais.",
    projectsLabel: "PROJETOS",
    projectsTitle: "Projetos que estou desenvolvendo",
    projectsIntro: "Projetos criados para resolver problemas reais com tecnologias modernas de aplicações e backend.",
    projectStatus: "EM DESENVOLVIMENTO",
    residentGreeting: "Olá, morador",
    accessGranted: "ACESSO LIBERADO",
    projectDescription: "Sistema de gestão e controle de acesso para organizar moradores, visitantes, veículos, registros de entrada, reservas, encomendas, ocorrências, contribuições e notificações.",
    projectDetailsButton: "Explorar funcionalidades",
    projectHideButton: "Ocultar funcionalidades",
    featureOne: "Documento digital e validação do morador",
    featureTwo: "Autorização e agendamento de visitantes",
    featureThree: "Controle de acesso, placas e horários",
    featureFour: "Contribuições, reservas e notificações",
    contactLabel: "VAMOS CONVERSAR",
    contactTitle: "Pronto para criar algo útil?",
    contactText: "Estou aberto a oportunidades júnior, colaborações e projetos Flutter ou Java.",
    footerText: "Desenvolvido no Brasil para o mundo."
  },
  en: {
    skip: "Skip to content",
    navLabel: "Main navigation",
    languageLabel: "Select language",
    menuLabel: "Open menu",
    mainTechLabel: "Main technologies",
    profileLabel: "Photo of Wesley Saraiva",
    navAbout: "About",
    navTechnologies: "Technologies",
    navProjects: "Projects",
    navServices: "Services",
    navContact: "Contact",
    heroGreeting: "HELLO, I'M WESLEY",
    heroLineOne: "Flutter & Java",
    heroLineTwo: "Developer",
    heroDescription: "I build modern applications, APIs and custom software solutions designed to solve real-world problems.",
    heroProjects: "View my projects",
    heroServices: "Work with me",
    aboutLabel: "ABOUT ME",
    aboutTitle: "Turning ideas into software.",
    aboutLead: "I am Wesley Saraiva, a developer with a degree in Information Systems focused on building applications and software solutions.",
    aboutDescription: "My main focus is Flutter for applications and Java with Spring Boot for APIs and backend solutions, following sound software engineering and architecture practices.",
    aboutEducation: "Education",
    aboutDegree: "Information Systems",
    aboutSpecialty: "Specialty",
    aboutDatabase: "Database",
    technologiesLabel: "TECHNOLOGIES",
    technologiesTitle: "Technologies I work with",
    technologiesIntro: "A modern stack for cross-platform products, well-structured APIs and reliable data.",
    flutterDescription: "Cross-platform applications",
    dartDescription: "Programming language for Flutter",
    javaDescription: "Backend development",
    springDescription: "APIs and backend applications",
    mysqlDescription: "Relational database",
    gitDescription: "Version control",
    servicesLabel: "SERVICES",
    servicesTitle: "How I can help",
    servicesDescription: "I build modern solutions for businesses and specific projects, focusing on quality, clean structure and maintainability.",
    serviceAppsTitle: "Application Development",
    serviceAppsText: "Modern, responsive Flutter applications for multiple platforms.",
    serviceBackendTitle: "Backend & APIs",
    serviceBackendText: "REST APIs and backend services using Java and Spring Boot with database integration.",
    serviceCustomTitle: "Custom Software Solutions",
    serviceCustomText: "Tailored solutions that transform real-world processes and needs into digital systems.",
    projectsLabel: "PROJECTS",
    projectsTitle: "Projects I am building",
    projectsIntro: "Projects created to solve real-world problems with modern application and backend technologies.",
    projectStatus: "IN DEVELOPMENT",
    residentGreeting: "Hello, resident",
    accessGranted: "ACCESS GRANTED",
    projectDescription: "A management and access-control system for residents, visitors, vehicles, entry records, reservations, packages, occurrences, contributions and notifications.",
    projectDetailsButton: "Explore features",
    projectHideButton: "Hide features",
    featureOne: "Digital resident ID and validation",
    featureTwo: "Visitor authorization and scheduling",
    featureThree: "Access, license plate and time tracking",
    featureFour: "Contributions, reservations and notifications",
    contactLabel: "LET'S CONNECT",
    contactTitle: "Ready to build something useful?",
    contactText: "I am open to junior roles, collaborations and Flutter or Java projects.",
    footerText: "Built in Brazil for the world."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const detailsButton = document.querySelector(".details-button");
const detailsPanel = document.querySelector("#project-details");

const browserLanguage = navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
let currentLanguage = localStorage.getItem("portfolio-language") || browserLanguage;

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = language === "pt"
    ? "WS Dev | Wesley Saraiva — Desenvolvedor Flutter & Java"
    : "WS Dev | Wesley Saraiva — Flutter & Java Developer";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (detailsButton) {
    const expanded = detailsButton.getAttribute("aria-expanded") === "true";
    detailsButton.querySelector("span:first-child").textContent = expanded
      ? dictionary.projectHideButton
      : dictionary.projectDetailsButton;
  }

  localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navMenu.classList.toggle("is-open", !open);
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

detailsButton?.addEventListener("click", () => {
  const expanded = detailsButton.getAttribute("aria-expanded") === "true";
  detailsButton.setAttribute("aria-expanded", String(!expanded));
  detailsPanel.hidden = expanded;
  detailsButton.querySelector("span:first-child").textContent = expanded
    ? translations[currentLanguage].projectDetailsButton
    : translations[currentLanguage].projectHideButton;
  detailsButton.querySelector("span:last-child").textContent = expanded ? "＋" : "−";
});

document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
