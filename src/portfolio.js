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
    "Passionate about software engineering, AI, and full-stack development, I transform ideas into intelligent and efficient solutions. With expertise in Python, Java, C++, and JavaScript, I craft seamless applications using FastAPI, Spring Boot, and JEE. Always curious and driven by innovation, I love turning challenges into opportunities to create, optimize, and inspire. 🚀✨"
    ),
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
  title: "What I Do",
  subTitle: "PASSIONATE SOFTWARE ENGINEER EXPLORING AI & FULL-STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Conception et développement d'applications web et desktop optimisées et intuitives"
    ),
    emoji(
      "⚡ Analyse et traitement de données avec Python, SQL et Power BI"
    ),
    emoji(
      "⚡ Intégration d’API et services tiers pour l'IA et le cloud computing (OpenAI API, Google Cloud)"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
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
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL Database",
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
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
  };

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École Nationale des Sciences Appliquées de Khouribga (ENSA Khouribga)",
      logo: require("./assets/images/ensakhLogo.png"), // Remplace par le bon logo
      subHeader: "Cycle Ingénieur en Génie Informatique",
      duration: "2022 - 2025",
      desc: "Formation approfondie en développement logiciel, intelligence artificielle et gestion des systèmes informatiques.",
      descBullets: [
        "Compétences en programmation : Python, Java, C++",
        "Développement web et bases de données : JavaScript, PHP, MySQL, PostgreSQL",
        "Analyse et visualisation de données avec Power BI et OpenAI API"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Développement Backend", // Expérience en backend avec FastAPI, Spring Boot, JEE
      progressPercentage: "85%"
    },
    {
      Stack: "Analyse et Gestion de Données", // Expérience en SQL, Power BI, OpenAI API
      progressPercentage: "80%"
    },
    {
      Stack: "Développement Full-Stack", // Expérience en HTML, CSS, JavaScript, PHP, JEE
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges
};


// Work experience section

const workExperiences = {
  display: true, // Set to true to show Work Experience Section
  experience: [
    {
      role: "Stagiaire en Développement IA & Analyse de Données",
      company: "Technology & Telecom",
      companylogo: require("./assets/images/technologyTelecomLogo.png"), // Ajoute le logo de l'entreprise
      date: "Juillet 2024",
      desc: "Développement d’outils d’intelligence artificielle pour l’analyse et l’optimisation des performances d’un chatbot.",
      descBullets: [
        "Extraction et traitement de données pour l'amélioration des interactions utilisateur",
        "Automatisation du processus d’analyse des performances du bot avec Python et Power BI",
        "Mise en place d’API pour l’intégration des outils dans un environnement existant"
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
      image: require("./assets/images/locationVoitureLogo.png"), // Remplace par le logo de ton projet
      projectName: "Application Web de Location de Voitures",
      projectDesc: "Développement d'une application web complète pour la gestion de location de véhicules.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/87xxvdo45rwdf1diksfgp/rapportLatexJEE.pdf?rlkey=rk66nt3d8j7fcc0ujfxjm4gno&st=ezqemipe&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerceLogo.png"), // Remplace par le logo du projet
      projectName: "Site Web d’E-Commerce",
      projectDesc: "Création d'un site web responsive pour la vente en ligne avec intégration de gestion de produits.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/p14t9d1jp950m0ekqbww8/Design-sans-titre-3.pdf?rlkey=2il8tc16jyhiygxscal8bljm4&st=kk1spqw4&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/suiviAcademiqueLogo.png"), // Remplace par le logo du projet
      projectName: "Application Desktop de Suivi Académique",
      projectDesc: "Développement d'une application de gestion des projets et tâches académiques en Java.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/aefftafdo9mke270lebmn/rapportJava-1.pdf?rlkey=q8pv0og3nkritro5ycq6dlg2g&st=ss7ore71&dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/gestionFormationLogo.png"), // Remplace par le logo du projet
      projectName: "Gestion de Centre de Formation",
      projectDesc: "Application développée en Python et SQL pour la gestion des formations et des étudiants.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://www.dropbox.com/scl/fi/roaermgok1ghcpev80094/RPR2.pdf?rlkey=dz6n3jqv1jowb3188ee9gwfvk&st=klz41gbc&dl=0"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
podcastSection = {} ;
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
