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
  title: "Hi all, I'm yosra",
  subTitle: emoji(

    "Passionné par l'ingénierie logicielle, l'IA et le développement full-stack, je transforme les idées en solutions intelligentes et efficaces. Fort de mon expertise en Python, Java, C++ et JavaScript, je crée des applications fluides en utilisant FastAPI, Spring Boot et JEE. Toujours curieux et animé par l'innovation, j'adore transformer les défis en opportunités de créer, d'optimiser et d'inspirer. 🚀✨"    ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/fsyutycg6m82gc8s2agl2/cv_yosraelmimouni.pdf?rlkey=v4gbr64s5pkrld2ejpqkmh8vk&st=jc6nfce5&dl=0", // Set to empty to hide the button
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
      "⚡ Intégration d’API et services cloud (OpenAI API, Google Cloud)"
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
      desc: "Développement d’outils pour la préparation de données et l’analyse des performances d’un bot conversationnel.",
      descBullets: [
        "Développement d’un script Python avec BeautifulSoup pour nettoyer les fichiers HTML en supprimant les éléments non pertinents (CSS, JavaScript, commentaires).",
        "Extraction et structuration du contenu en sections distinctes en fonction des balises HTML (<h1>, <h2>, <p>).",
        "Utilisation de l’API OpenAI pour générer des résumés et structurer la documentation en un format hiérarchisé et exploitable.",
        "Mise en place d’un processus automatisé pour la gestion et l’amélioration de la documentation technique du bot.",
        "Contribution à l’optimisation des interactions utilisateur en améliorant l’accessibilité et la compréhension des réponses du bot."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Projets Réalisés",
  subtitle: "QUELQUES APPLICATIONS ET PLATEFORMES SUR LESQUELLES J'AI TRAVAILLÉ",
  projects: [
    {
      image: require("./assets/images/locationVoitureLogo.png"), // Remplace par le bon logo
      projectName: "Application Web de Location de Voitures",
      projectDesc: "Développement d’une plateforme complète permettant la gestion des véhicules, des clients, des réservations et des paiements.",
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
        "Système d’authentification sécurisé avec gestion des sessions utilisateur",
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
      projectDesc: "Développement d’une application desktop facilitant l’organisation et le suivi des projets et des tâches académiques pour les enseignants.",
      descBullets: [
        "Système d’authentification sécurisé avec gestion des comptes utilisateurs",
        "Gestion des projets et des tâches avec filtrage et recherche avancée",
        "Intégration d’outils analytiques pour le suivi des performances",
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
      projectDesc: "Développement d’un site web interactif permettant la gestion des formations et des inscriptions des apprenants.",
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
    },
    {
      image: require("./assets/images/pythonGamesLogo.png"), // Remplace par le bon logo
      projectName: "Jeux en Python avec Interface Graphique",
      projectDesc: "Développement d’une série de jeux interactifs en Python avec Tkinter, incluant Tic-Tac-Toe, le Pendu, Puissance 4 et un Quiz Mathématique.",
      descBullets: [
        "Interface graphique développée avec Tkinter pour une meilleure interaction utilisateur",
        "Utilisation de `random` pour générer des éléments aléatoires (ex: mots, nombres)",
        "Gestion des événements et des conditions de victoire pour chaque jeu",
        "Utilisation des bibliothèques `messagebox` et `ttk` pour améliorer l’expérience utilisateur"
      ],
      footerLink: [{
        name: "Voir le projet",
        url: "https://www.dropbox.com/scl/fi/9f7xwdlqh3ltptzjhumzp/projet-traitement-des-images2.pdf?rlkey=v55ylo6yjbxx6fj8dndgmpqnd&st=tkv05484&dl=0"
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
      image: require("./assets/images/googleCloudLogo.png"), // Remplace par une icône appropriée
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#" // Remplace par le lien de ta certification si disponible
        }
      ]
    },
    {
      title: "Formation en IA Générative",
      subtitle:
        "Formation réalisée avec Microsoft et LinkedIn sur les concepts et applications de l'intelligence artificielle générative.",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dropbox.com/scl/fi/8ivo4frr68e6rn4ksikvd/CertificateOfCompletion_Preparer-votre-carriere-dans-lIA-generative-par-Microsoft-et-LinkedIn-1.pdf?rlkey=bcp3nsvbu4x6xlrx3gd95a81c&st=51w6lq1z&dl=0" // Ajoute le lien vers la certification
        }
      ]
    },
    {
      title: "Formation en Power BI",
      subtitle:
        "Participation à l'atelier OpenSourceDays VI2 à ENSA Khouribga pour la maîtrise de Power BI.",
      image: require("./assets/images/powerBILogo.png"),
      imageAlt: "Power BI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dropbox.com/scl/fi/gqhdwqkazu6tv3trysigw/yosra-el-mimouni.png?rlkey=u15svg6ck9i7f3ex6cblzzumr&st=oue0fxv5&dl=0" // Ajoute le lien si disponible
        }
      ]
    },
    {
      title: "Formation en Programmation Orientée Objet (POO) - Java",
      subtitle:
        "Approfondissement des concepts de la POO en Java via Saylor.org.",
      image: require("./assets/images/javaLogo.webp"),
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.dropbox.com/scl/fi/cbki3js10io6v4khlg86v/7408555977YE.pdf?rlkey=1p6mykk0zecxvbmbtmoononi0&st=ew606n69&dl=0" // Ajoute le lien vers ta certification
        }
      ]
    },
    {
      title: "Formation en Python et C++",
      subtitle:
        "Certifications obtenues via Saylor.org attestant des compétences en Python et C++.",
      image: require("./assets/images/pythonCppLogo.png"),
      imageAlt: "Python & C++ Logo",
      footerLink: [
        {
          name: "Certification Python",
          url: "https://www.dropbox.com/scl/fi/l9vaz5ld953fgdwyc9wox/4991861690YE.pdf?rlkey=kqdlmfm67t3eu3gicu7npfx1b&st=ljrhjih8&dl=0" // Ajoute le lien vers ta certification Python
        },
        {
          name: "Certification C++",
          url: "https://www.dropbox.com/scl/fi/ts6nez7yk8ed1w8rt9y44/6383804297YE.pdf?rlkey=mvktp9p19yogui46zntae71y2&st=k28n601n&dl=0" // Ajoute le lien vers ta certification C++
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

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
    "Une question, une collaboration ou juste envie d’échanger ? N’hésitez pas à me contacter !",
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
