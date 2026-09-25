import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Hand,
  Leaf,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Quote,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import aiDataImage from "@/assets/ai-data-project.jpg";
import cvUrl from "@/assets/CV_Yosra_El_Mimouni.pdf";
import newsroomImage from "@/assets/newsroom-project.jpg";
import yosraPortrait from "@/assets/yosra-portrait.png";
import shot0 from "@/assets/projects/ocp-home.jpg";
import shot1 from "@/assets/projects/ocp-technician-calendar.jpg";
import shot2 from "@/assets/projects/ocp-requester-app.jpg";
import shot3 from "@/assets/projects/ocp-intervention-list.jpg";
import shot4 from "@/assets/projects/ensahome-listings.jpg";
import shot5 from "@/assets/projects/ensahome-notifications.jpg";
import shot6 from "@/assets/projects/stock-vehicles.jpg";
import shot7 from "@/assets/projects/stock-alerts.jpg";
import shot8 from "@/assets/projects/stock-dashboard.jpg";
import shot9 from "@/assets/projects/foodkrust-splash.jpg";
import shot10 from "@/assets/projects/foodkrust-home.jpg";
import shot11 from "@/assets/projects/foodkrust-recipe.jpg";
import shot12 from "@/assets/projects/foodkrust-profile.jpg";
import shot13 from "@/assets/projects/rental-home.jpg";
import shot14 from "@/assets/projects/rental-choose-car.jpg";
import shot15 from "@/assets/projects/rental-booking.jpg";
import shot16 from "@/assets/projects/rental-payment.jpg";
import shot17 from "@/assets/projects/shop-login.jpg";
import shot18 from "@/assets/projects/shop-product.jpg";
import shot19 from "@/assets/projects/shop-products-admin.jpg";
import shot20 from "@/assets/projects/shop-categories-admin.jpg";
import shot21 from "@/assets/projects/tracker-statistics.jpg";
import shot22 from "@/assets/projects/tracker-login.jpg";
import shot23 from "@/assets/projects/tracker-tasks.jpg";
import shot24 from "@/assets/projects/training-dashboard.jpg";
import shot25 from "@/assets/projects/training-student-area.jpg";
import shot26 from "@/assets/projects/training-registration.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yosra El Mimouni — Full-Stack Software Engineer" },
      { name: "description", content: "Portfolio and CV of Yosra El Mimouni: full-stack, mobile, DevOps and AI engineering projects." },
      { property: "og:title", content: "Yosra El Mimouni — Full-Stack Software Engineer" },
      { property: "og:description", content: "Ten software projects, professional experience, education and technical skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];

const skillGroups = [
  { title: "Full-stack", items: ["Angular", "React", "React Native", "Next.js", "Ionic", "Capacitor", "Spring Boot", "NestJS", "GraphQL"] },
  { title: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS"] },
  { title: "Architecture", items: ["Microservices", "REST APIs", "API Gateway", "Eureka", "Kafka", "RabbitMQ", "JMS"] },
  { title: "Data & cloud", items: ["PostgreSQL", "MySQL", "MongoDB", "Neon", "Cloudinary", "Render"] },
  { title: "Quality & DevOps", items: ["Docker", "Jenkins", "GitLab CI", "JUnit", "Mockito", "Jest", "SonarQube", "Swagger", "Zipkin"] },
  { title: "Security & delivery", items: ["JWT", "Azure Entra ID", "MSAL", "Git", "Jira", "Confluence", "Agile Scrum"] },
];

const projects = [
  {
    numeral: "I", title: "NewsRoom", context: "Full-stack & mobile engineer · Capgemini, for France Télévisions",
    description: "An intelligent newsroom application for journalists, bringing article management, media capture, an editorial agenda, monitoring and an AI assistant into one hybrid mobile and web tool.",
    achievements: ["Built a hybrid Ionic/Capacitor app with offline mode and background sync for reporters in the field", "Developed a React web version alongside a NestJS and PostgreSQL API", "Integrated Azure Entra ID authentication and a Gemini-powered editorial assistant"],
    technologies: ["Angular / Ionic", "React", "NestJS", "PostgreSQL", "Capacitor", "Gemini API"], image: newsroomImage, imageAlt: "NewsRoom editorial application interface",
  },
  {
    numeral: "II", title: "Technical Incident Platform, with AI", context: "Full-stack & DevOps intern · OCP Group, Khouribga",
    description: "A secure, multi-role web and mobile platform modernizing how OCP teams manage technical interventions, from request to closure, with an AI assistant and live analytics.",
    achievements: ["Delivered role-based interfaces across 35 secured REST endpoints with Spring Boot, JWT and BCrypt", "Built a Gemini-powered chatbot for contextual troubleshooting and history search", "Shipped 15 real-time KPIs, 12 Power BI reports and an Expo mobile app with offline mode"],
    technologies: ["ReactJS", "Expo Go", "Spring Boot", "MySQL", "Gemini API", "Power BI", "Docker"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/p8z1tsnk7dp6au3n7kxus/Rapport_PFA_yosra_Elmimouni.pdf?rlkey=5lz59fliyub6mavweh66usqs9&st=glbcgycg&dl=0" }], screenshots: [{ src: shot0, alt: "OCP incident platform: main landing page" }, { src: shot1, alt: "OCP incident platform: technician planning calendar" }, { src: shot2, alt: "OCP incident platform: requester mobile app download page" }, { src: shot3, alt: "OCP incident platform: technician intervention list" }],
  },
  {
    numeral: "III", title: "EnsaHome", context: "Personal project · Full-stack, microservices",
    description: "A platform connecting students across Morocco’s ENSA schools to housing listings and equipment exchange, built as a distributed microservices system.",
    achievements: ["Built the frontend in Next.js and backend as Spring Boot microservices", "Designed a MongoDB cluster sharded across Khouribga, Marrakech and Agadir with replica sets", "Added geolocation search, an equipment marketplace and messaging with push notifications"],
    technologies: ["Next.js", "Spring Boot", "MongoDB", "Docker", "Microservices"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/mxy290keu69j4dhhqj1e7/EnsaHome-2.pdf?rlkey=w10cn3poubkf05mwl3p1xqy2h&st=sikg41vs&dl=0" }], screenshots: [{ src: shot4, alt: "EnsaHome: equipment listing with photo carousel" }, { src: shot5, alt: "EnsaHome: student profile and notifications" }],
  },
  {
    numeral: "IV", title: "Vehicle Stock Management, with AMDEC", context: "Graduation project · Full-stack",
    description: "A system replacing a manual stock process for a new-and-used vehicle dealership, designed around the AMDEC failure-analysis method.",
    achievements: ["Built vehicle tracking, live stock views, multi-criteria search and complete movement history", "Applied AMDEC with automated alerts for critical or aging stock", "Reduced data-entry errors by 80% and search time by 60%"],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "AMDEC"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/vr50efb6or68axu73zf1k/rapport_de_projet_pfe-2.pdf?rlkey=bvn4kjnyykar8tmkgy32iwxjx&st=00iufich&dl=0" }], screenshots: [{ src: shot6, alt: "Vehicle stock management: vehicle catalogue" }, { src: shot7, alt: "Vehicle stock management: stock alerts" }, { src: shot8, alt: "Vehicle stock management: analytics dashboard" }],
  },
  {
    numeral: "V", title: "Food Krust", context: "Personal project · Android",
    description: "An Android app helping students plan daily meals simply, affordably and healthily.",
    achievements: ["Built natively in Java with SQLite and Firebase Google sign-in", "Delivered meal planning, recipe filters and community sharing", "Added smart notifications for meal preparation and new recipes"],
    technologies: ["Android", "Java", "SQLite", "Firebase", "XML"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/96yjlw49kspuaef3abovx/Green-Grey-Simple-Food-Recipe-Presentation.pdf?rlkey=eixp4uizxu205wz3fm6wbublg&st=xf4vcg7u&dl=0" }], screenshots: [{ src: shot9, alt: "Food Krust: welcome screen" }, { src: shot10, alt: "Food Krust: home with recipes" }, { src: shot11, alt: "Food Krust: recipe detail" }, { src: shot12, alt: "Food Krust: profile screen" }], layout: "phones",
  },
  {
    numeral: "VI", title: "Car Rental Web App", context: "Academic project · Full-stack",
    description: "A complete platform for a car rental business, bringing vehicles, customers, reservations and payments into one place.",
    achievements: ["Built the backend with Java EE and Spring Boot with Thymeleaf views", "Modeled use-case, class and sequence diagrams using Agile Scrum", "Containerized the application with Docker"],
    technologies: ["Java EE", "Spring Boot", "MySQL", "Thymeleaf", "Docker"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/87xxvdo45rwdf1diksfgp/rapportLatexJEE.pdf?rlkey=rk66nt3d8j7fcc0ujfxjm4gno&st=ezqemipe&dl=0" }], screenshots: [{ src: shot13, alt: "Car rental app: home page with search" }, { src: shot14, alt: "Car rental app: vehicle selection" }, { src: shot15, alt: "Car rental app: reservation details" }, { src: shot16, alt: "Car rental app: online payment" }],
  },
  {
    numeral: "VII", title: "E-Commerce Site", context: "Academic project · Full-stack",
    description: "An online shopping platform with product, category, cart and order management.",
    achievements: ["Built the storefront with Bootstrap and jQuery, backed by PHP and MySQL", "Implemented accounts, cart management and checkout", "Added an administration area for products and categories"],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/p14t9d1jp950m0ekqbww8/Design-sans-titre-3.pdf?rlkey=2il8tc16jyhiygxscal8bljm4&st=kk1spqw4&dl=0" }], screenshots: [{ src: shot17, alt: "E-commerce site: login page" }, { src: shot18, alt: "E-commerce site: product details" }, { src: shot19, alt: "E-commerce site: product management" }, { src: shot20, alt: "E-commerce site: category management" }],
  },
  {
    numeral: "VIII", title: "Academic Project Tracker", context: "Academic project · Desktop",
    description: "A desktop application helping professors organize and track academic projects and tasks.",
    achievements: ["Built with Java and JavaFX connected to MySQL", "Added secure email login, project and task management, and filtering", "Delivered progress statistics and data visualization"],
    technologies: ["Java", "JavaFX", "MySQL"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/aefftafdo9mke270lebmn/rapportJava-1.pdf?rlkey=q8pv0og3nkritro5ycq6dlg2g&st=ss7ore71&dl=0" }], screenshots: [{ src: shot21, alt: "Academic project tracker: statistics dashboard" }, { src: shot22, alt: "Academic project tracker: login screen" }, { src: shot23, alt: "Academic project tracker: task list" }],
  },
  {
    numeral: "IX", title: "Training Center Website", context: "Academic project · Full-stack",
    description: "An interactive website for managing courses and learner registrations at a training center.",
    achievements: ["Built a Python backend with a relational database", "Created registration forms and an administration area for trainers and content", "Added search, filtering and learner statistics"],
    technologies: ["Python", "Flask", "Django", "MySQL", "PostgreSQL", "Bootstrap"], links: [{ label: "Report", href: "https://www.dropbox.com/scl/fi/roaermgok1ghcpev80094/RPR2.pdf?rlkey=dz6n3jqv1jowb3188ee9gwfvk&st=klz41gbc&dl=0" }], screenshots: [{ src: shot24, alt: "Training center site: dashboard" }, { src: shot25, alt: "Training center site: student area" }, { src: shot26, alt: "Training center site: student registration form" }],
  },
  {
    numeral: "X", title: "AI Document Digest", context: "AI & data intern · Technology & Telecom",
    description: "A web data-extraction and summarization project turning a technical chatbot’s documentation into clear AI-generated summaries.",
    achievements: ["Scraped and structured technical documentation with Python and BeautifulSoup", "Served the pipeline through a FastAPI backend", "Generated readable summaries with the OpenAI API"],
    technologies: ["Python", "BeautifulSoup", "FastAPI", "OpenAI API"], image: aiDataImage, imageAlt: "AI document extraction and summarization pipeline",
  },
] as const;

const experiences = [
  { date: "March — August 2026", title: "Graduation Internship — Full-Stack & Mobile Engineer", place: "Capgemini Casablanca", copy: "Built NewsRoom for mobile and web, with a NestJS/PostgreSQL API, Azure Entra ID authentication and a Gemini assistant for journalists." },
  { date: "July — August 2025", title: "Internship — Full-Stack & DevOps", place: "OCP Group, Khouribga", copy: "Delivered an incident-management platform across web and mobile, with a Spring Boot API, an AI chatbot and Power BI operational dashboards." },
  { date: "July 2024", title: "Introductory Internship — AI & Data Analysis", place: "Technology & Telecom", copy: "Structured technical documentation for a chatbot and generated OpenAI summaries using Python, BeautifulSoup and FastAPI." },
];

const certifications: { name: string; issuer: string; description?: string; tags?: string[]; href?: string }[] = [
  { name: "GraphQL Fundamentals", issuer: "Udemy · 06/2026" },
  { name: "Ionic App Development", issuer: "Udemy · 04/2026" },
  { name: "NestJS Backend Development", issuer: "Udemy · 04/2026" },
  { name: "React.js Application Development", issuer: "Class Central · 07/2025", tags: ["React"] },
  {
    name: "MongoDB Administration & Queries", issuer: "CodeSignal · 03/2025",
    description: "Working with NoSQL databases and optimizing queries for modern applications.",
    tags: ["MongoDB", "NoSQL"],
    href: "https://www.dropbox.com/scl/fi/5wdtxo8o7uwush9nl8ia9/certificate.pdf?rlkey=vwlobld49wbdcs1zgmv2s06rw&st=obd3khsg&dl=0",
  },
  {
    name: "Docker Fundamentals", issuer: "DataScientist.fr · 02/2025",
    description: "Core Docker concepts: images, containers, Dockerfile, volumes and networks, plus containerization best practices and local execution.",
    tags: ["Docker"],
    href: "https://www.dropbox.com/scl/fi/q6tc8q1f8wxjkeyuanqk8/Introduction_-_Docker_yosra_el_mimouni_certificat.pdf?rlkey=7a4ml7c2kxvf8pbh37vnhj9rg&st=uiafzhye&dl=0",
  },
  {
    name: "Cloud Computing Fundamentals", issuer: "Google Cloud Skills Boost · 02/2025",
    description: "Cloud application deployment, modern infrastructure management and automation of cloud services.",
    tags: ["Cloud", "Google"],
    href: "https://www.cloudskillsboost.google/public_profiles/21065ca7-d93d-4534-ad2b-5ef9653fb484/badges/18584849",
  },
  {
    name: "Agile Project Management", issuer: "HP LIFE · 09/2024 · Certificate of Completion (online course)",
    description: "MVP, iterative vs incremental delivery, Scrum and Kanban, and applying agile approaches to improve project management and product development.",
    tags: ["Agile", "Scrum", "Kanban", "Project management"],
    href: "https://www.dropbox.com/scl/fi/6lzjnxldalwy930pormal/certificate-1.pdf?rlkey=1xkr9o1yzuqdi5znl8yfd80bp&st=u82x0fge&dl=0",
  },
  {
    name: "Generative AI Career Preparation", issuer: "Microsoft & LinkedIn · 04/2024",
    description: "The challenges and applications of generative AI, with hands-on experiments in AI-assisted content creation.",
    tags: ["AI", "Microsoft", "LinkedIn"],
    href: "https://www.dropbox.com/scl/fi/8ivo4frr68e6rn4ksikvd/CertificateOfCompletion_Preparer-votre-carriere-dans-lIA-generative-par-Microsoft-et-LinkedIn-1.pdf?rlkey=bcp3nsvbu4x6xlrx3gd95a81c&st=51w6lq1z&dl=0",
  },
  {
    name: "Power BI", issuer: "OpenSourceDays workshop, ENSA Khouribga · 05/2023",
    description: "Data visualization and analysis, interactive dashboards and report automation.",
    tags: ["Data", "Power BI"],
    href: "https://www.dropbox.com/scl/fi/gqhdwqkazu6tv3trysigw/yosra-el-mimouni.png?rlkey=u15svg6ck9i7f3ex6cblzzumr&st=oue0fxv5&dl=0",
  },
  {
    name: "Object-Oriented Programming in Java", issuer: "Saylor.org · 12/2022",
    description: "Object-oriented programming principles and their practical application in Java.",
    tags: ["Java", "OOP"],
    href: "https://www.dropbox.com/scl/fi/cbki3js10io6v4khlg86v/7408555977YE.pdf?rlkey=1p6mykk0zecxvbmbtmoononi0&st=ew606n69&dl=0",
  },
  {
    name: "Python", issuer: "Saylor.org · 11/2022",
    description: "Python fundamentals consolidated through hands-on exercises and projects.",
    tags: ["Python"],
    href: "https://www.dropbox.com/scl/fi/l9vaz5ld953fgdwyc9wox/4991861690YE.pdf?rlkey=kqdlmfm67t3eu3gicu7npfx1b&st=ljrhjih8&dl=0",
  },
  {
    name: "C++", issuer: "Saylor.org · 11/2022",
    description: "C++ fundamentals consolidated through hands-on exercises and projects.",
    tags: ["C++"],
    href: "https://www.dropbox.com/scl/fi/ts6nez7yk8ed1w8rt9y44/6383804297YE.pdf?rlkey=mvktp9p19yogui46zntae71y2&st=k28n601n&dl=0",
  },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionHeading({ chapter, title, intro }: { chapter: string; title: string; intro?: string }) {
  return <Reveal className="mb-12 md:mb-16"><p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary"><span className="h-px w-8 bg-gold" />{chapter}</p><div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end"><h2 className="max-w-3xl font-serif text-4xl leading-[1.08] font-medium text-balance sm:text-5xl md:text-6xl">{title}</h2>{intro && <p className="max-w-xl leading-7 text-muted-foreground md:justify-self-end">{intro}</p>}</div></Reveal>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id.charAt(0).toUpperCase() + visible.target.id.slice(1)); }, { rootMargin: "-30% 0px -55%", threshold: [0.1, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl"><nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation"><a href="#home" className="font-serif text-lg font-semibold">Yosra El Mimouni<span className="text-gold">.</span></a><div className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={`relative py-2 text-sm transition-colors ${active === item ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{item}{active === item && <motion.span layoutId="nav-indicator" className="absolute inset-x-0 -bottom-0.5 h-px bg-primary" />}</a>)}</div><Button variant="icon" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></nav>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-border bg-background px-5 py-5 lg:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3 font-serif text-xl">{item}</a>)}</motion.div>}</header>;
}

function PortraitVisual() {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-md lg:max-w-lg"><motion.div animate={reduce ? {} : { y: [0, -9, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="paper-shadow relative mx-auto w-[82%] overflow-hidden rounded-t-[46%] rounded-b-lg border border-border bg-card p-2"><img src={yosraPortrait} alt="Portrait of Yosra El Mimouni" width={768} height={1066} className="aspect-[0.72/1] w-full rounded-t-[45%] rounded-b-md object-cover object-top" /><div className="absolute inset-x-2 bottom-2 h-20 bg-gradient-to-t from-card/80 to-transparent" aria-hidden="true" /></motion.div><motion.div animate={reduce ? {} : { y: [0, -6, 0], rotate: [0, 2, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="paper-shadow absolute top-[15%] -right-1 rounded-md border border-border bg-background/95 px-4 py-3 sm:right-0"><div className="flex items-center gap-2 font-serif text-lg"><motion.span className="inline-flex origin-bottom-right text-gold" animate={reduce ? {} : { rotate: [0, 18, -8, 18, 0] }} transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}><Hand className="size-5" aria-hidden="true" /></motion.span>Hello, I’m Yosra</div></motion.div><motion.div animate={reduce ? {} : { x: [0, 7, 0], y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="paper-shadow absolute bottom-[8%] left-0 rounded-md border border-border bg-paper-deep px-3 py-2 font-mono text-xs text-ink-soft"><Code2 className="mr-2 inline size-4 text-primary" />build · learn · create</motion.div><div className="absolute top-5 right-[4%] -z-10 h-[94%] w-[82%] rounded-t-[46%] rounded-b-lg border border-border bg-secondary/60" /></motion.div>;
}

function ProjectGallery({ shots, layout, className = "" }: { shots: readonly { src: string; alt: string }[]; layout?: string | undefined; className?: string }) {
  const [active, setActive] = useState(0);
  if (layout === "phones") return <div className={`paper-shadow flex items-end justify-center gap-3 overflow-hidden rounded-lg border border-border bg-paper-deep px-4 py-8 sm:gap-5 ${className}`}>{shots.map((shot) => <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" className="h-36 w-auto rounded-md border border-border bg-card object-contain sm:h-56 lg:h-64" />)}</div>;
  const current = shots[active];
  if (!current) return null;
  return <div className={className}><div className="paper-shadow relative aspect-[1.54/1] overflow-hidden rounded-lg border border-border bg-paper-deep"><img key={current.src} src={current.src} alt={current.alt} loading="lazy" className="absolute inset-0 h-full w-full rounded-md object-scale-down p-3" /></div>{shots.length > 1 && <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Project screenshots">{shots.map((shot, i) => <button key={shot.src} type="button" onClick={() => setActive(i)} aria-label={`Show screenshot ${i + 1}: ${shot.alt}`} aria-pressed={i === active} className={`h-14 w-20 overflow-hidden rounded-md border bg-card transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${i === active ? "border-gold opacity-100" : "border-border opacity-60 hover:opacity-100"}`}><img src={shot.src} alt="" loading="lazy" className="size-full object-cover" /></button>)}</div>}</div>;
}

function ProjectEntry({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const hasImage = "image" in project;
  const { numeral, title } = project;
  return <Reveal className="border-t border-border py-14 md:py-20"><article className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14"><div className={index % 2 === 1 ? "lg:order-2" : ""}><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{project.numeral}.</p><h3 className="font-serif text-3xl font-medium sm:text-5xl">{project.title}</h3><p className="mt-3 text-sm font-medium text-gold">{project.context}</p><p className="mt-6 leading-7 text-muted-foreground">{project.description}</p><ul className="mt-7 space-y-3">{project.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{achievement}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-ink-soft">{technology}</span>)}</div>{"links" in project && <div className="mt-6 flex flex-wrap gap-5">{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-gold pb-0.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{link.label === "Report" ? <FileText className="size-4 text-gold" aria-hidden="true" /> : <ExternalLink className="size-4 text-gold" aria-hidden="true" />}{link.label}<span className="sr-only"> — {project.title} (opens in a new tab)</span></a>)}</div>}</div>{"screenshots" in project ? <ProjectGallery shots={project.screenshots} layout={"layout" in project ? project.layout : undefined} className={index % 2 === 1 ? "lg:order-1" : ""} /> : hasImage ? <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className={`paper-shadow overflow-hidden rounded-lg border border-border bg-card p-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}><img src={project.image} alt={project.imageAlt} loading="lazy" width={1408} height={912} className="aspect-[1.54/1] w-full rounded-md object-cover" /></motion.div> : <div aria-hidden="true" className={`relative flex aspect-[1.54/1] items-center justify-center overflow-hidden rounded-lg border border-border bg-paper-deep ${index % 2 === 1 ? "lg:order-1" : ""}`}><span className="font-serif text-[8rem] leading-none text-primary/15 sm:text-[11rem]">{numeral}</span><span className="absolute bottom-6 left-6 max-w-[75%] font-serif text-xl text-foreground/75">{title}</span></div>}</article></Reveal>;
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  return <div className="overflow-clip bg-background"><Navbar /><motion.div style={{ scaleY: progress, transformOrigin: "top" }} className="fixed top-18 right-3 z-40 hidden h-24 w-2 rounded-b-sm bg-primary shadow-md lg:block" aria-hidden="true"><div className="absolute -bottom-2 size-0 border-x-4 border-t-8 border-x-transparent border-t-primary" /></motion.div><main>
    <section id="home" className="relative flex min-h-[min(900px,100svh)] scroll-mt-18 items-center pt-24 pb-12"><div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}><p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary"><span className="h-px w-8 bg-gold" />Software Engineer · Full-Stack Developer</p><h1 className="max-w-3xl font-serif text-5xl leading-[1.02] font-medium text-balance sm:text-6xl lg:text-7xl">I build digital experiences, <em className="font-medium text-primary">one idea</em> at a time.</h1><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">I’m Yosra El Mimouni, a software engineer working across full-stack, mobile, DevOps and AI-powered applications.</p><div className="mt-9 flex flex-wrap gap-3"><Button variant="editorial" size="lg" asChild><a href="#projects">Explore my work <ArrowDown /></a></Button><Button variant="editorialOutline" size="lg" asChild><a href={cvUrl} download="CV_Yosra_El_Mimouni.pdf"><Download />Download CV</a></Button></div><div className="mt-8 flex items-center gap-3"><Button variant="icon" size="icon" asChild><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button><Button variant="icon" size="icon" asChild><a href="https://www.linkedin.com/in/yosra-elmimouni" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button><span className="ml-2 text-xs text-muted-foreground">Based in Casablanca, Morocco</span></div></motion.div><PortraitVisual /></div></section>

    <section id="about" className="scroll-mt-18 border-y border-border bg-card/55 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter One · About" title="Curiosity, translated into useful software." /><div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><Reveal><Quote className="mb-5 size-8 text-gold" /><p className="font-serif text-2xl leading-relaxed italic sm:text-3xl">“When I’m not coding, you’ll probably find me somewhere with a good book.”</p></Reveal><Reveal className="space-y-5 text-base leading-8 text-muted-foreground"><p>A Computer Engineering graduate from ENSA Khouribga, I enjoy untangling complex problems and transforming early ideas into dependable digital products.</p><p>My experience spans hybrid mobile applications, secure APIs, microservices, data platforms and AI assistants. I value clean architecture, useful interfaces and thoughtful collaboration.</p><div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium text-foreground sm:grid-cols-3"><span>Autonomy</span><span>Problem solving</span><span>Teamwork</span></div></Reveal></div></div></section>

    <section id="skills" className="scroll-mt-18 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter Two · Skills" title="A working library of technologies." intro="A CV-grounded toolkit spanning product interfaces, secure services, distributed systems and dependable delivery." /><div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => <Reveal key={group.title} className={`group min-h-64 border-b border-border p-6 transition-colors hover:bg-card sm:border-r ${index >= 4 ? "sm:border-b-0" : ""} lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0`}><div className="flex items-start justify-between"><h3 className="font-serif text-2xl">{group.title}</h3><span className="text-xs text-gold">0{index + 1}</span></div><div className="mt-8 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-sm bg-secondary/70 px-2.5 py-1.5 text-xs text-secondary-foreground transition-transform group-hover:-translate-y-0.5">{item}</span>)}</div></Reveal>)}</div></div></section>

    <section id="projects" className="scroll-mt-18 bg-card/55 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter Three" title="Projects" intro="Ten chapters from internships, a graduation project, and things I built to learn — each one a different problem worth solving." />{projects.map((project, index) => <ProjectEntry key={project.title} project={project} index={index} />)}</div></section>

    <section id="experience" className="scroll-mt-18 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter Four · Experience" title="Internships & Experience" intro="Three internships, from a first look at AI and data to a full graduation project." /><div className="max-w-3xl">{experiences.map((item, index) => <Reveal key={item.date} className="relative grid grid-cols-[42px_1fr] gap-5 pb-12 last:pb-0"><div className="relative flex justify-center"><span className="z-10 mt-1 flex size-9 items-center justify-center rounded-full border border-gold bg-background font-serif text-sm text-primary">{index + 1}</span>{index < experiences.length - 1 && <span className="absolute top-10 bottom-0 w-px bg-border" />}</div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.date}</p><h3 className="mt-2 font-serif text-2xl">{item.title}</h3><p className="mt-1 text-sm font-medium text-gold">{item.place}</p><p className="mt-3 leading-7 text-muted-foreground">{item.copy}</p></div></Reveal>)}</div></div></section>

    <section id="education" className="scroll-mt-18 border-y border-border bg-card/55 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter Five · Education" title="Education" intro="Where the engineering foundations were built." /><div className="grid gap-10 md:grid-cols-2 md:gap-16"><Reveal className="border-y border-border py-8"><GraduationCap className="size-7 text-gold" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">2021 — 2026</p><h3 className="mt-2 font-serif text-3xl">Engineering Degree in Computer Science</h3><p className="mt-2 text-muted-foreground">ENSA Khouribga</p></Reveal><Reveal className="border-y border-border py-8"><BookOpen className="size-7 text-gold" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">2021</p><h3 className="mt-2 font-serif text-3xl">Baccalaureate in Physical Sciences</h3><p className="mt-2 text-muted-foreground">Lycée Hassan II Aoufous, Errachidia</p></Reveal></div></div></section>

    <section id="certifications" className="scroll-mt-18 py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="Chapter Six · Certifications" title="Certifications" intro="Courses and credentials that keep the toolkit current." /><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{certifications.map((cert) => <Reveal key={cert.name} className="bg-card p-6 sm:[&:last-child:nth-child(odd)]:col-span-2"><p className="font-serif text-xl">{cert.name}</p><p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>{cert.description && <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{cert.description}</p>}{cert.tags && <div className="mt-4 flex flex-wrap gap-2">{cert.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-ink-soft">{tag}</span>)}</div>}{cert.href && <a href={cert.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><FileText className="size-4 text-gold" aria-hidden="true" />View certification<span className="sr-only"> — {cert.name} (opens in a new tab)</span></a>}</Reveal>)}</div></div></section>

    <section className="border-y border-border bg-paper-deep py-20 md:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading chapter="A short interlude" title="Beyond the Code" /><div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">{[[BookOpen, "Reading", "Ideas in every margin"], [Leaf, "Nature", "Space to think"], [Lightbulb, "Learning", "Always in progress"], [BriefcaseBusiness, "Creating", "Problems worth solving"]].map(([Icon, title, copy]) => { const InterestIcon = Icon as typeof BookOpen; return <Reveal key={title as string} className="bg-card p-6 sm:p-8"><InterestIcon className="size-6 text-gold" /><h3 className="mt-8 font-serif text-xl">{title as string}</h3><p className="mt-1 text-xs text-muted-foreground">{copy as string}</p></Reveal>; })}</div></div></section>

    <section id="contact" className="scroll-mt-18 py-24 md:py-36"><Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8"><p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact · The next chapter</p><h2 className="font-serif text-5xl leading-tight font-medium text-balance sm:text-6xl md:text-7xl">Have an idea worth building?</h2><p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-muted-foreground">I’m open to software engineering opportunities, ambitious products and meaningful collaborations.</p><div className="mt-9 flex justify-center"><Button variant="editorial" size="lg" asChild><a href="mailto:yosra.elmimouni.it@gmail.com"><Mail />Start a conversation <ArrowRight /></a></Button></div><div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground"><a href="mailto:yosra.elmimouni.it@gmail.com" className="transition-colors hover:text-foreground">Email</a><a href="https://www.linkedin.com/in/yosra-elmimouni" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">GitHub</a></div></Reveal></section>
  </main><footer className="border-t border-border py-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© 2026 Yosra El Mimouni</p><p className="font-serif italic">Designed like a story. Engineered with care.</p></div></footer></div>;
}