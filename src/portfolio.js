/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yosra El mimouni",
  title: "Développeuse Full-Stack & Ingénieure IA",
  subTitle: emoji(

    "Je transforme les idées en solutions logicielles intelligentes et efficaces. Forte de mon expertise en développement Full-Stack (Java EE, Spring Boot, FastAPI) et en Intelligence Artificielle, je suis passionnée par la création d'expériences utilisateur fluides et l'optimisation des performances. Mon objectif : allier l'élégance du code à l'utilité fonctionnelle. 🚀✨"    ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/1pj9l7nvr0edk2vabbsuv/CV_yosra_el_mimouni__DEV_.pdf?rlkey=b47p3syzm8edc3nuvthbn3w46&st=0anzrhme&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yosraElmimouni",
  linkedin: "https://www.linkedin.com/in/yosra-el-mimouni-5a40b12a3/",
  gmail: "yosraelmimouni@gmail.com",
  gitlab: "https://gitlab.com/yosraelmimouni2003",
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Ce que je fais",
  subTitle: "INGÉNIEURE LOGICIEL PASSIONNÉE EXPLORANT L'IA & LE DÉVELOPPEMENT FULL-STACK",
  skills: [
    emoji(
      "⚡ Développement d'applications web et desktop avec Java, Python, C++ et JavaScript"
    ),
    emoji(
      "⚡ Analyse et visualisation de données avec Power BI, SQL et OpenAI API"
    ),
    emoji(
      "⚡ Conception et gestion de bases de données (MySQL, PostgreSQL, MongoDB, Oracle PL/SQL)"
    ),
    emoji(
      "⚡ Intégration d'API et services cloud (OpenAI API, Google Cloud)"
    ),
    emoji(
      "⚡ Collaboration et gestion de versions avec GitHub, GitLab et Jira"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      title: "Agile Project Management",
      subtitle:
        "HP LIFE – Certificate of Completion (online course)",
      description:
        "MVP, itératif vs incrémental, Scrum & Kanban, et application des approches agiles pour améliorer la gestion de projet et le développement produit.",
      date: "Septembre 2024",
      image: require("./assets/images/hp-life-agile.png"),
      imageAlt: "HP LIFE Agile Project Management",
      tags: ["Agile", "Scrum", "Kanban", "Gestion de projet"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/6lzjnxldalwy930pormal/certificate-1.pdf?rlkey=1xkr9o1yzuqdi5znl8yfd80bp&st=u82x0fge&dl=0"
        }
      ]
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL (MySQL, PostgreSQL, Oracle PL/SQL)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub / GitLab",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "OpenAI API",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
  };

// Education Section

const educationInfo = {
  display: true, // Mettre à false pour masquer cette section
  schools: [
    {
      schoolName: "École Nationale des Sciences Appliquées de Khouribga (ENSA Khouribga)",
      logo: require("./assets/images/ensakhLogo.png"), // Assurez-vous d'avoir le bon logo
      subHeader: "Cycle Ingénieur en Génie Informatique",
      duration: "2022 - 2025",
      desc: "Formation approfondie en développement logiciel, intelligence artificielle et gestion des systèmes informatiques.",
      descBullets: [
        "Maîtrise des langages de programmation : Python, Java, C, C++",
        "Développement web avec JavaScript, PHP, JEE, FastAPI",
        "Conception et gestion de bases de données : MySQL, PostgreSQL, MongoDB, Oracle PL/SQL",
        "Analyse et visualisation de données avec Power BI et SQL",
        "Utilisation des outils de gestion et de collaboration : GitHub, GitLab, Jira",
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Afficher la section des compétences
  experience: [
    {
      Stack: "Développement Backend", // FastAPI, Spring Boot, JEE
      progressPercentage: "85%"
    },
    {
      Stack: "Développement Frontend", // HTML, CSS, JavaScript, PHP
      progressPercentage: "80%"
    },
    {
      Stack: "Analyse et Gestion de Données", // SQL, Power BI, OpenAI API
      progressPercentage: "85%"
    },
    {
      Stack: "Gestion et Conception de Bases de Données", // MySQL, PostgreSQL, MongoDB, Oracle PL/SQL
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing & API", // OpenAI API, Google Cloud
      progressPercentage: "60%"
    },
    {
      Stack: "Gestion de Version & Outils de Collaboration", // GitHub, GitLab, Jira
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Mettre à true pour afficher les badges CodersRank
};



// Work experience section

const workExperiences = {
  display: true, // Afficher la section Expérience Professionnelle
  experience: [
    {
      role: "Stagiaire en Développement IA & Analyse de Données",
      company: "Technology & Telecom",
      companylogo: require("./assets/images/technologyTelecomLogo.png"), // Vérifie que le logo est disponible
      date: "Juillet - Août 2024",
      desc: "Développement d'outils pour la préparation de données et l'analyse des performances d'un bot conversationnel.",
      descBullets: [
        "Développement d'un script Python avec BeautifulSoup pour nettoyer les fichiers HTML en supprimant les éléments non pertinents (CSS, JavaScript, commentaires).",
        "Extraction et structuration du contenu en sections distinctes en fonction des balises HTML (<h1>, <h2>, <p>).",
        "Utilisation de l'API OpenAI pour générer des résumés et structurer la documentation en un format hiérarchisé et exploitable.",
        "Mise en place d'un processus automatisé pour la gestion et l'amélioration de la documentation technique du bot.",
        "Contribution à l'optimisation des interactions utilisateur en améliorant l'accessibilité et la compréhension des réponses du bot."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Désactivé pour utiliser les données locales de projets.js
  display: false // Désactivé car nous utilisons les données locales (bigProjects)
};
// Some big projects you have worked on

const bigProjects = {
  title: "Projets Réalisés",
  subtitle: "QUELQUES APPLICATIONS ET PLATEFORMES SUR LESQUELLES J'AI TRAVAILLÉ",
  projects: [
    {
      image: require("./assets/images/locationVoitureLogo.png"), // Remplace par le bon logo
      projectName: "Application Web de Location de Voitures",
      projectDesc: "Développement d'une plateforme complète permettant la gestion des véhicules, des clients, des réservations et des paiements.",
      descBullets: [
        "Développement backend avec Java EE et Spring Boot",
        "Frontend construit avec Thymeleaf pour un rendu dynamique",
        "Gestion des bases de données avec MySQL et déploiement via Docker",
        "Adoption de la méthodologie Agile Scrum pour une flexibilité maximale"
      ],
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/87xxvdo45rwdf1diksfgp/rapportLatexJEE.pdf?rlkey=rk66nt3d8j7fcc0ujfxjm4gno&st=ezqemipe&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerceLogo.png"), // Remplace par le bon logo
      projectName: "Site E-Commerce",
      projectDesc: "Développement d'une plateforme de commerce en ligne avec gestion des produits, des catégories, des paniers et des commandes.",
      descBullets: [
        "Frontend développé avec HTML, CSS, JavaScript et Bootstrap",
        "Backend en PHP et base de données MySQL",
        "Système d'authentification sécurisé avec gestion des sessions utilisateur",
        "Ajout d'un panier interactif et d'un processus de commande optimisé"
      ],
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/p14t9d1jp950m0ekqbww8/Design-sans-titre-3.pdf?rlkey=2il8tc16jyhiygxscal8bljm4&st=kk1spqw4&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/suiviAcademiqueLogo.png"), // Remplace par le bon logo
      projectName: "Application de Gestion des Projets Académiques",
      projectDesc: "Développement d'une application desktop facilitant l'organisation et le suivi des projets et des tâches académiques pour les enseignants.",
      descBullets: [
        "Système d'authentification sécurisé avec gestion des comptes utilisateurs",
        "Gestion des projets et des tâches avec filtrage et recherche avancée",
        "Intégration d'outils analytiques pour le suivi des performances",
        "Développement en Java avec JavaFX et base de données MySQL"
      ],
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/aefftafdo9mke270lebmn/rapportJava-1.pdf?rlkey=q8pv0og3nkritro5ycq6dlg2g&st=ss7ore71&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/gestionFormationLogo.png"), // Remplace par le bon logo
      projectName: "Site Web pour un Centre de Formation",
      projectDesc: "Développement d'un site web interactif permettant la gestion des formations et des inscriptions des apprenants.",
      descBullets: [
        "Développement frontend avec HTML, CSS, JavaScript et Bootstrap",
        "Backend en Python (Flask/Django) et base de données MySQL/PostgreSQL",
        "Espace administrateur pour la gestion des formations et utilisateurs",
        "Moteur de recherche avancé et système de notifications"
      ],
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/roaermgok1ghcpev80094/RPR2.pdf?rlkey=dz6n3jqv1jowb3188ee9gwfvk&st=klz41gbc&dl=0"
        }
      ]
    }
  ],
  display: true // Mettre à false pour masquer cette section
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications et Réalisations 🏆 "),
  subtitle:
    "Certifications, formations et projets marquants qui témoignent de mon engagement et de mes compétences.",

  achievementsCards: [
    {
      title: "Formation en Cloud Computing",
      subtitle:
        "Certifiée par Google Cloud Skills Boost, acquisition de compétences sur les technologies cloud.",
      description: "J'ai suivi cette formation pour approfondir mes connaissances sur le déploiement d'applications cloud, la gestion d'infrastructures modernes et l'automatisation des services cloud.",
      date: "Mars 2024",
      image: require("./assets/images/googleCloudLogo.png"),
      imageAlt: "Google Cloud Logo",
      tags: ["Cloud", "Google"],
      badge: "Top",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.cloudskillsboost.google/public_profiles/21065ca7-d93d-4534-ad2b-5ef9653fb484/badges/18584849"
        }
      ]
    },
    {
      title: "Formation en Docker",
      subtitle:
        "Certification obtenue sur DataScientist.fr (Fondamentaux).",
      description:
        "Validation des concepts de base de Docker: images, conteneurs, Dockerfile, volumes et réseaux; bonnes pratiques de conteneurisation et exécution locale.",
      date: "Février 2025",
      image: require("./assets/images/docker.png"),
      imageAlt: "Certificat Docker - DataScientist.fr",
      tags: ["Docker"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/q6tc8q1f8wxjkeyuanqk8/Introduction_-_Docker_yosra_el_mimouni_certificat.pdf?rlkey=7a4ml7c2kxvf8pbh37vnhj9rg&st=uiafzhye&dl=0"
        }
      ]
    },
    {
      title: "Formation en IA Générative",
      subtitle:
        "Formation réalisée avec Microsoft et LinkedIn sur les concepts et applications de l'intelligence artificielle générative.",
      description: "Cette formation m'a permis de comprendre les enjeux et les applications de l'IA générative, ainsi que d'expérimenter des outils concrets pour la création de contenu assistée par IA.",
      date: "Avril 2024",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft AI Logo",
      tags: ["IA", "Microsoft", "LinkedIn"],
      badge: "Nouveau",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/8ivo4frr68e6rn4ksikvd/CertificateOfCompletion_Preparer-votre-carriere-dans-lIA-generative-par-Microsoft-et-LinkedIn-1.pdf?rlkey=bcp3nsvbu4x6xlrx3gd95a81c&st=51w6lq1z&dl=0"
        }
      ]
    },
    {
      title: "Formation en Power BI",
      subtitle:
        "Participation à l'atelier OpenSourceDays VI2 à ENSA Khouribga pour la maîtrise de Power BI.",
      description: "J'ai acquis des compétences avancées en visualisation et analyse de données, création de dashboards interactifs et automatisation de rapports.",
      date: "Mai 2023",
      image: require("./assets/images/powerBILogo.png"),
      imageAlt: "Power BI Logo",
      tags: ["Data", "Power BI"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/gqhdwqkazu6tv3trysigw/yosra-el-mimouni.png?rlkey=u15svg6ck9i7f3ex6cblzzumr&st=oue0fxv5&dl=0"
        }
      ]
    },
    {
      title: "Formation en Programmation Orientée Objet (POO) - Java",
      subtitle:
        "Approfondissement des concepts de la POO en Java via Saylor.org.",
      description: "Cette certification atteste de ma maîtrise des principes de la programmation orientée objet et de leur application concrète en Java.",
      date: "Décembre 2022",
      image: require("./assets/images/javaLogo.webp"),
      imageAlt: "Java Logo",
      tags: ["Java", "POO"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/cbki3js10io6v4khlg86v/7408555977YE.pdf?rlkey=1p6mykk0zecxvbmbtmoononi0&st=ew606n69&dl=0"
        }
      ]
    },
    {
      title: "Formation en Python",
      subtitle:
        "Certification obtenue via Saylor.org attestant des compétences en Python.",
      description: "J'ai consolidé mes bases en programmation Python à travers des exercices pratiques et des projets concrets.",
      date: "Novembre 2022",
      image: require("./assets/images/PYTHONLOGO.png"),
      imageAlt: "Python Logo",
      tags: ["Python"],
      badge: "",
      footerLink: [
        {
          name: "Certification Python",
          url: "https://www.dropbox.com/scl/fi/l9vaz5ld953fgdwyc9wox/4991861690YE.pdf?rlkey=kqdlmfm67t3eu3gicu7npfx1b&st=ljrhjih8&dl=0"
        }
      ]
    },
    {
      title: "Formation en C++",
      subtitle:
        "Certification obtenue via Saylor.org attestant des compétences en C++.",
      description: "J'ai consolidé mes bases en programmation C++ à travers des exercices pratiques et des projets concrets.",
      date: "Novembre 2022",
      image: require("./assets/images/cpplogo.png"),
      imageAlt: "C++ Logo",
      tags: ["C++"],
      badge: "",
      footerLink: [
        {
          name: "Certification C++",
          url: "https://www.dropbox.com/scl/fi/ts6nez7yk8ed1w8rt9y44/6383804297YE.pdf?rlkey=mvktp9p19yogui46zntae71y2&st=k28n601n&dl=0"
        }
      ]
    },
    {
      title: "Formation en MongoDB",
      subtitle: "Certification obtenue via CodeSignal attestant des compétences en MongoDB.",
      description: "J'ai appris à manipuler des bases de données NoSQL et à optimiser les requêtes pour des applications modernes.",
      date: "2023",
      image: require("./assets/images/mongo.jpg"),
      imageAlt: "MongoDB Logo",
      tags: ["MongoDB", "NoSQL"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.dropbox.com/scl/fi/5wdtxo8o7uwush9nl8ia9/certificate.pdf?rlkey=vwlobld49wbdcs1zgmv2s06rw&st=obd3khsg&dl=0"
        }
      ]
    },
    {
      title: "Formation en React",
      subtitle: "Certification obtenue via ClassCentrale attestant des compétences en React.",
      description: "J'ai appris à manipuler des bases de données NoSQL et à optimiser les requêtes pour des applications modernes.",
      date: "2025",
      image: require("./assets/images/ReactLogo (1).png"),
      imageAlt: "React Logo",
      tags: ["React"],
      badge: "",
      footerLink: [
        {
          name: "Voir la certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Sort achievements by date (desc) using French month names
const __frenchMonthToIndex = {
  janvier: 0,
  février: 1,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
  decembre: 11
};

function __parseFrenchDateToTs(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return 0;
  const trimmed = dateStr.trim().toLowerCase();
  // Cases: "2025" or "Mars 2024"
  const yearOnlyMatch = trimmed.match(/^(\d{4})$/);
  if (yearOnlyMatch) {
    const y = parseInt(yearOnlyMatch[1], 10);
    return new Date(y, 11, 31).getTime();
  }
  const parts = trimmed.split(/\s+/); // [mois, année]
  if (parts.length >= 2) {
    const month = __frenchMonthToIndex[parts[0]];
    const year = parseInt(parts[1], 10);
    if (!isNaN(year)) {
      const m = typeof month === "number" ? month : 11; // default Dec if unknown
      return new Date(year, m, 28).getTime();
    }
  }
  // Fallback: try Date.parse
  const fallback = Date.parse(dateStr);
  return isNaN(fallback) ? 0 : fallback;
}

achievementSection.achievementsCards.sort((a, b) => {
  const ta = __parseFrenchDateToTs(a.date);
  const tb = __parseFrenchDateToTs(b.date);
  return tb - ta; // newest first
});

// Blogs Section

const blogSection = {
  title: "Partage & Apprentissage",
  subtitle:
    "Passionnée par l'intelligence artificielle et le développement logiciel, je compte bientôt partager mes expériences et découvertes à travers des articles et tutoriels.",
  displayMediumBlogs: false, // Désactivé pour l'instant, à activer si tu publies sur Medium
  blogs: [],
  display: true // La section reste visible pour montrer ton intention de partager du contenu
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me Contacter 📩"),
  subtitle:
    "Une question, une collaboration ou juste envie d'échanger ? N'hésitez pas à me contacter !",
  number: "+212-675632773",
  email_address: "yosraelmimouni@gmail.com"
};
export const talkSection = {} ;
export const podcastSection = {} ;
export const twitterDetails = {} ;

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
