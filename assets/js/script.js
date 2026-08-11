// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Language toggle (English / Spanish, persists via localStorage)
const translations = {
  'nav.about': 'Acerca de',
  'nav.experience': 'Experiencia',
  'nav.skills': 'Habilidades',
  'nav.certifications': 'Certificaciones',
  'nav.education': 'Educación',
  'nav.contact': 'Contacto',

  'hero.eyebrow': 'Hola, soy',
  'hero.role': 'Ingeniero Senior de Confiabilidad de Sitios y DevOps &mdash; Infraestructura en la Nube e Ingeniería de Datos',
  'hero.meta': '📍 Guadalajara, Jalisco, México &nbsp;·&nbsp; 9+ años en TI, nube y DevOps',
  'hero.viewExperience': 'Ver Experiencia',
  'hero.getInTouch': 'Contactar',

  'about.title': 'Acerca de',
  'about.p1': `Ingeniero Senior de Confiabilidad de Sitios con más de 9 años de experiencia diseñando,
        automatizando y operando plataformas en la nube escalables, seguras y de alto rendimiento. Me
        especializo en construir infraestructura en la que los equipos pueden confiar &mdash; con un enfoque
        principal en AWS, Kubernetes y prácticas modernas de DevOps.`,
  'about.p2': `Del lado de la infraestructura, mi experiencia abarca arquitectura en la nube, Ingeniería de
        Confiabilidad de Sitios (SRE), ingeniería de datos y observabilidad de plataformas. He diseñado y
        operado sistemas distribuidos que exigen alta disponibilidad, tolerancia a fallos y baja
        latencia a escala.`,
  'about.p3': `Del lado del desarrollo, he trabajado en toda la pila con Java, JavaScript, Node.js, Go,
        Python y scripting de shell &mdash; respaldado por bases de datos y cachés como MySQL,
        PostgreSQL, MongoDB y Redis. Esta perspectiva full-stack me da una comprensión más
        profunda de las aplicaciones que corren sobre la infraestructura que construyo.`,
  'about.p4': `A lo largo de mi carrera he trabajado extensamente con Kubernetes, Terraform, Docker, AWS
        Glue, Spark, Delta Lake, Lake Formation, FastAPI y pipelines de CI/CD &mdash; construyendo
        plataformas de datos modernas usando arquitectura medallion, desarrollando pipelines ETL, integrando
        sistemas empresariales como NetSuite, e implementando infraestructura como código en entornos
        de nube.`,
  'about.p5': `También estoy explorando activamente la inteligencia artificial y la IA generativa. He estado construyendo
        soluciones de Generación Aumentada por Recuperación (RAG) usando Amazon Bedrock y modelos Claude,
        integrando bases de conocimiento empresarial con IA conversacional, y evaluando frameworks
        como LangChain y LangGraph para aplicaciones inteligentes.`,
  'about.p6': `Más allá del trabajo técnico, disfruto resolver desafíos complejos de infraestructura, mejorar
        la confiabilidad de los sistemas y diseñar soluciones en la nube que escalen. Tengo un fuerte interés en
        el desarrollo de productos y el emprendimiento &mdash; particularmente productos SaaS y soluciones
        impulsadas por IA. Originario de Chennai, Tamil Nadu, India, actualmente vivo en Guadalajara,
        Jalisco, México.`,

  'experience.title': 'Experiencia y Proyectos',

  'exp.ulab.tagline': 'Aplicaciones de cuidado dental — Infraestructura en la Nube, Ingeniería de Datos y Agentes de IA',
  'exp.ulab.li1': 'Configuración del entorno usando Kubernetes y ECS para el despliegue de aplicaciones.',
  'exp.ulab.li2': 'Introducción de OPA con Istio en Kubernetes para controlar la autorización de usuarios según las URLs de la API REST.',
  'exp.ulab.li3': 'Construcción de una aplicación en Go que gestiona la autenticación de usuarios con OKTA.',
  'exp.ulab.li4': 'Aprovisionamiento de recursos de Kubernetes y despliegues de aplicaciones mediante Flux y Flagger, usando Flagger para despliegues canary.',
  'exp.ulab.li5': 'Configuración de pipelines de build en GitHub Actions y AWS CodePipeline.',
  'exp.ulab.li6': 'Construcción de plataformas de datos modernas usando arquitectura medallion, desarrollo de pipelines ETL e integración de sistemas empresariales como NetSuite con AWS Glue, Spark, Delta Lake y Lake Formation.',
  'exp.ulab.li7': 'Construcción de agentes de IA y soluciones de Generación Aumentada por Recuperación (RAG) usando Amazon Bedrock y modelos Claude, integrando bases de conocimiento empresarial con IA conversacional, y evaluando frameworks como LangChain y LangGraph.',

  'exp.ideas2it.tagline': 'Servicios y consultoría de TI — proyectos de clientes a continuación',

  'exp.netsmart.tagline': 'Software de salud con soluciones innovadoras',
  'exp.netsmart.li1': 'Desarrollo de plantillas de CloudFormation para gestionar infraestructura como código.',
  'exp.netsmart.li2': 'Construcción de nanoservicios usando AWS Lambda, SQS y API Gateway; configuración de pipelines de build en AWS CodePipeline.',
  'exp.netsmart.li3': 'Dockerización de todos los microservicios y despliegue en AWS ECS; configuración de monitoreo de aplicaciones con Splunk y Grafana.',
  'exp.netsmart.li4': 'Configuración de servidores bastión e instancias RDS en AWS.',
  'exp.netsmart.li5': 'Gestión de instancias EC2 usando AWS OpsWorks.',

  'exp.huron.tagline': 'Una plataforma de computación en la nube descentralizada impulsada por IA',
  'exp.huron.li1': 'Construcción y gestión de servicios de aplicación incluyendo Consul, Traefik, Weave Net, Nomad y Spotinst.',
  'exp.huron.li2': 'Configuración de pipelines de build en Jenkins.',
  'exp.huron.li3': 'Dockerización de todos los microservicios y despliegue en AWS EKS.',
  'exp.huron.li4': 'Construcción y gestión de una nube interna usando OpenStack.',
  'exp.huron.li5': 'Configuración de Kubernetes en servidores independientes y despliegue de todos los servicios; uso de Terraform para infraestructura como código.',

  'exp.ita.p1': 'Contribución a un motor de búsqueda de adquisición de talento.',

  'exp.pipecandy.tagline': 'Una plataforma de inteligencia de mercado que rastrea el panorama global del comercio electrónico',
  'exp.pipecandy.li1': 'Desarrollo de módulos de crawler en Go y despliegue en AWS Batch.',
  'exp.pipecandy.li2': 'Desarrollo de scripts en Python para gestionar todos los pipelines de datos.',
  'exp.pipecandy.li3': 'Dockerización de todos los servicios ETL y despliegue en AWS Batch.',
  'exp.pipecandy.li4': 'Dockerización de todos los servicios web y despliegue en AWS ECS.',
  'exp.pipecandy.li5': 'Configuración de Ansible para gestionar las configuraciones de servidores EC2.',

  'skills.title': 'Habilidades e Idiomas',
  'skills.h.programming': 'Lenguajes de Programación y Scripting',
  'skills.h.frameworks': 'Frameworks y Librerías',
  'skills.h.databases': 'Bases de Datos y Caché',
  'skills.h.dataEngineering': 'Ingeniería de Datos',
  'skills.h.cloud': 'Plataformas en la Nube',
  'skills.h.containerization': 'Contenedorización',
  'skills.h.cicd': 'CI/CD e Infraestructura como Código',
  'skills.h.gitops': 'GitOps y Políticas',
  'skills.h.awsManaged': 'Servicios Administrados de AWS',
  'skills.h.webServers': 'Servidores Web y Enrutadores',
  'skills.h.networking': 'Redes y Herramientas en la Nube',
  'skills.h.observability': 'Observabilidad y Servicios de Aplicación',
  'skills.h.ai': 'IA e IA Generativa',
  'skills.h.os': 'Plataformas de Sistema Operativo',
  'skills.h.vcs': 'Control de Versiones y Sistemas de Seguimiento',
  'skills.h.devTools': 'Herramientas de Desarrollo y Build',
  'skills.h.languages': 'Idiomas',
  'skills.lang.english': 'Inglés',
  'skills.lang.tamil': 'Tamil <small>(nativo)</small>',
  'skills.lang.spanish': 'Español <small>(básico)</small>',
  'skills.lang.german': 'Alemán <small>(básico)</small>',

  'certifications.title': 'Certificaciones',
  'education.title': 'Educación',

  'contact.title': 'Contacto',
  'contact.text': 'No dudes en conectar en LinkedIn o revisar mi trabajo en GitHub.',
  'contact.linkedin': 'Conectar en LinkedIn',
  'contact.github': 'Ver GitHub',

  'footer.text': '&copy; <span id="year"></span> Kumar Albert. Construido con HTML y CSS.',
};

const originalContent = new Map();
document.querySelectorAll('[data-i18n]').forEach((el) => {
  originalContent.set(el, el.innerHTML);
});

const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const pageMeta = {
  title: { en: document.title, es: 'Kumar Albert — Ingeniero de Software' },
  description: {
    en: document.querySelector('meta[name="description"]').getAttribute('content'),
    es: 'Kumar Albert — Ingeniero de Software con más de 9 años de experiencia en desarrollo web, infraestructura en la nube y DevOps.',
  },
};

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'es' && translations[key]) {
      el.innerHTML = translations[key];
    } else {
      el.innerHTML = originalContent.get(el);
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.title = lang === 'es' ? pageMeta.title.es : pageMeta.title.en;
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', lang === 'es' ? pageMeta.description.es : pageMeta.description.en);
  langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang');
applyLanguage(savedLang || 'en');

langToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('lang');
  applyLanguage(current === 'es' ? 'en' : 'es');
});

// Theme toggle (persists via localStorage)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark';
  iconSun.style.display = isDark ? 'none' : 'block';
  iconMoon.style.display = isDark ? 'block' : 'none';
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme || 'dark');

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll fade-in for sections
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
fadeEls.forEach((el) => observer.observe(el));
