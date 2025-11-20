export const projects = [
  {
    id: 'location-voiture',
    title: "Application Web de Location de Voitures",
    description: "Plateforme complète pour la gestion des véhicules, clients, réservations et paiements.",
    images: [
      require('../assets/images/locationVoitureLogo.png')
    ],
    screenshots: [
      require('../assets/images/pageAttende.jpg'),
      require('../assets/images/pagechoixVoiture.jpg'),
      require('../assets/images/pagecredit.jpg'),
    ],
    technologies: ['Java EE', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Docker'],
    report: 'https://www.dropbox.com/scl/fi/87xxvdo45rwdf1diksfgp/rapportLatexJEE.pdf?rlkey=rk66nt3d8j7fcc0ujfxjm4gno&st=ezqemipe&dl=0',
    github: '',
    demo: '',
    objectif: `L'objectif principal du projet est de concevoir et de développer une application web de location de voitures. Cette application permet aux utilisateurs de consulter, réserver, louer, et gérer des véhicules. Elle vise à simplifier les opérations de gestion pour une entreprise de location, notamment en ce qui concerne les voitures, les clients, les réservations et les paiements.`,
    definition: `L'application est construite en utilisant Java EE pour la gestion du backend, complété par des outils comme Spring Boot pour optimiser le développement. Le frontend repose sur Thymeleaf, une bibliothèque intuitive pour le rendu des pages. Le système de gestion de la base de données est assuré par MySQL, avec une configuration Docker pour faciliter le déploiement.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `L'étude conceptuelle constitue la base fondamentale sur laquelle repose la conception de l'application. Cette phase préliminaire est essentielle à la réussite du projet. Elle consiste à approfondir les principes conceptuels qui orienteront le développement de l'application.`
      },
      {
        titre: 'La Méthode Agile',
        contenu: `L'approche Agile est préconisée pour ce projet en raison de sa flexibilité, de sa collaboration accrue avec les parties prenantes et de son adaptation continue aux changements. Scrum est utilisé pour organiser le travail en sprints, avec des rôles, artéfacts et cérémonies bien définis.`
      },
      {
        titre: 'Conception UML',
        contenu: `L'UML (Unified Modeling Language) est utilisé pour modéliser les différents aspects de l'application : diagramme de cas d'utilisation, diagramme de classes, diagramme de séquence.`
      }
    ],
    fonctionnalites: [
      "Authentification et gestion des comptes (inscription, connexion, gestion du profil)",
      "Gestion des véhicules (ajout, modification, suppression, consultation)",
      "Réservation et paiement en ligne sécurisé",
      "Tableau de bord administratif (suivi des réservations, gestion des clients, génération de rapports)",
      "Interface utilisateur réactive et accessible"
    ],
    conclusion: `Ce projet vise à fournir une solution complète et intuitive pour la gestion de la location de voitures. L'utilisation de technologies modernes telles que Java EE, Spring Boot, MySQL et Docker assure un système performant et scalable. L'approche Agile Scrum garantit une adaptation continue aux besoins des utilisateurs, assurant ainsi une expérience fluide et efficace pour les clients et les administrateurs.`
  },
  {
    id: 'ecommerce',
    title: "Site E-Commerce",
    description: "Plateforme de commerce en ligne avec gestion des produits, paniers et commandes.",
    images: [
      require('../assets/images/ecommerceLogo.png')
    ],
   
    screenshots: [
      require('../assets/images/pagepp.jpg'),
      require('../assets/images/gestionProduites.jpg'),
      require('../assets/images/gestioncategories.jpg'),
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    report: 'https://www.dropbox.com/scl/fi/p14t9d1jp950m0ekqbww8/Design-sans-titre-3.pdf?rlkey=2il8tc16jyhiygxscal8bljm4&st=kk1spqw4&dl=0',
    github: '',
    demo: 'https://yosraelmimouni.framer.website/huggl-2-0-website-made-in-framer',
    objectif: `Créer une plateforme de commerce en ligne offrant une expérience fluide et agréable pour acheter des produits, avec gestion complète des produits, catégories, paniers et commandes, et une navigation simple et intuitive.`,
    definition: `Le site e-commerce est développé avec HTML, CSS, JavaScript pour le front-end, PHP pour le back-end, et MySQL pour la base de données. Bootstrap et jQuery sont utilisés pour améliorer l'interface utilisateur.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Dans le cadre de notre projet en Développement Web, nous avons conçu et réalisé une plateforme de commerce en ligne visant à offrir aux utilisateurs une expérience fluide et agréable pour acheter des produits en ligne.`
      },
      {
        titre: 'Spécifications',
        contenu: `Front-End : HTML, CSS, JavaScript. Back-End : PHP. Base de données : MySQL. Autres outils : Bootstrap, jQuery.`
      }
    ],
    fonctionnalites: [
      "Inscription et Connexion : création de compte, espace personnalisé, panier et historique de commandes.",
      "Gestion des produits : ajout, modification, suppression, détails (libellé, prix, catégorie, image).",
      "Ajout au panier : gestion du panier, modification des quantités.",
      "Gestion des catégories : ajout, description, icône pour navigation.",
      "Finalisation des commandes : récapitulatif et validation.",
      "Gestion des sessions utilisateur pour maintenir l'état de connexion et du panier."
    ],
    conclusion: `Ce projet nous a permis de développer une plateforme e-commerce fonctionnelle permettant aux utilisateurs de parcourir, sélectionner et acheter des produits en ligne. Grâce à l'intégration de PHP, MySQL, HTML, CSS, et d'autres technologies, ce site offre une expérience complète et sécurisée pour la gestion des produits, des catégories et des utilisateurs.`,
    perspectives: [
      "Amélioration de l'interface utilisateur pour plus de fluidité et de responsivité.",
      "Optimisation du système de paiement avec intégration d'options en ligne.",
      "Ajout de fonctionnalités avancées : filtres, recommandations personnalisées.",
      "Développement d'une version mobile ou d'une application dédiée."
    ]
  },
  {
    id: 'suivi-academique',
    title: "Application de Gestion des Projets Académiques",
    description: "Application desktop pour l'organisation et le suivi des projets et tâches académiques.",
    images: [
      require('../assets/images/suiviAcademiqueLogo.png')
    ],
    screenshots: [
      require('../assets/images/gestionprojet.jpg'),
      require('../assets/images/appgestionprojet.jpg'),
      require('../assets/images/listedestaches.jpg'),
    ],
    technologies: ['Java', 'JavaFX', 'MySQL'],
    report: 'https://www.dropbox.com/scl/fi/aefftafdo9mke270lebmn/rapportJava-1.pdf?rlkey=q8pv0og3nkritro5ycq6dlg2g&st=ss7ore71&dl=0',
    github: '',
    demo: 'https://yosraelmimouni.framer.website/charmant-website-made-in-framer',
    objectif: `Concevoir une application de gestion des tâches et des projets académiques destinée aux professeurs, pour simplifier l'organisation et le suivi des projets et tâches, avec une interface intuitive et efficace.`,
    definition: `Application développée en Java avec interface JavaFX, connectée à une base de données MySQL. L'accent est mis sur la simplicité d'utilisation et la gestion efficace des projets et tâches.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Dans le cadre de notre formation en développement Java, nous avons entrepris la conception et la réalisation d'une application de gestion des tâches et des projets académiques destinée aux professeurs.`
      },
      {
        titre: 'Spécifications',
        contenu: `Connexion avec un Email (authentification sécurisée), gestion des projets (ajout, modification, clôture), gestion des tâches (ajout, modification, suppression), filtrage et recherche avancée, statistiques et visualisation des données.`
      }
    ],
    fonctionnalites: [
      "Connexion sécurisée par email.",
      "Gestion des projets académiques (ajout, modification, clôture).",
      "Gestion des tâches associées aux projets.",
      "Filtrage et recherche avancée des projets et tâches.",
      "Statistiques et visualisation des données."
    ],
    conclusion: `Ce projet nous a permis de développer une application fonctionnelle répondant aux exigences spécifiées. L'outil conçu facilite la gestion des projets académiques tout en améliorant l'organisation et le suivi des tâches.`,
    perspectives: [
      "Optimisation des fonctionnalités existantes pour une expérience plus fluide.",
      "Intégration de technologies avancées pour améliorer la performance et l'ergonomie.",
      "Ajout de rappels et notifications pour un meilleur suivi des tâches."
    ]
  },
  {
    id: 'gestion-formation',
    title: "Site web pour un centre de formation",
    description: "Site web interactif pour la gestion des formations et inscriptions des apprenants.",
    images: [
      require('../assets/images/gestionFormationLogo.png')
    ],
    screenshots: [
      require('../assets/images/pageacuelle.jpg'),
      require('../assets/images/pageacuelleformation.jpg'),
      require('../assets/images/inscription.jpg')
    ],
    technologies: ['Python', 'Flask', 'Django', 'MySQL', 'PostgreSQL', 'Bootstrap'],
    report: 'https://www.dropbox.com/scl/fi/roaermgok1ghcpev80094/RPR2.pdf?rlkey=dz6n3jqv1jowb3188ee9gwfvk&st=klz41gbc&dl=0',
    github: '',
    demo: '',
    objectif: `Faciliter la gestion des formations et des cours tout en optimisant l'expérience utilisateur grâce à une interface intuitive et interactive.`,
    definition: `Le projet est développé avec HTML, CSS, JavaScript pour le front-end, Python (Flask/Django) pour le back-end, et MySQL/PostgreSQL pour la base de données. Bootstrap et jQuery sont utilisés pour l'UI.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Dans le cadre de notre formation en Technologie Web, nous avons entrepris la conception et la réalisation d'un site web pour un centre de formation.`
      },
      {
        titre: 'Spécifications',
        contenu: `Front-End : HTML, CSS, JavaScript. Back-End : Python (Flask/Django). Base de données : MySQL / PostgreSQL. Autres outils : Bootstrap, jQuery.`
      }
    ],
    fonctionnalites: [
      "Gestion des formations (ajout, modification, suppression)",
      "Inscription des apprenants via formulaire interactif",
      "Espace administrateur pour gérer formateurs, inscriptions, contenu",
      "Système d'authentification sécurisé",
      "Moteur de recherche et filtrage avancé",
      "Statistiques et suivi des apprenants"
    ],
    conclusion: `Ce projet offre une gestion efficace des cours et des utilisateurs, tout en améliorant l'expérience globale des formateurs et des apprenants. Perspectives : optimisation de l'UI, IA pour recommandations, notifications, version mobile.`
  },
  
  {
    id: 'gestion-stock-vehicules',
    title: "Système de Gestion de Stock de Véhicules",
    description: "Application web complète pour l'optimisation de la gestion de stock de véhicules neufs et d'occasion avec méthode AMDEC.",
    images: [
      require('../assets/images/pagesproduits.jpg')
    ],
    screenshots: [
      require('../assets/images/alert.jpg'),
      require('../assets/images/mouvementhistorique.jpg'),
      require('../assets/images/pagedashboard.jpg')
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'AMDEC'],
    report: 'https://www.dropbox.com/scl/fi/vr50efb6or68axu73zf1k/rapport_de_projet_pfe-2.pdf?rlkey=bvn4kjnyykar8tmkgy32iwxjx&st=00iufich&dl=0',
    github: '',
    demo: '',
    objectif: `Remplacer un système manuel ou partiellement informatisé par une solution complète et fiable pour la gestion de stock de véhicules, intégrant la méthode AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité) pour garantir la qualité et la robustesse du système.`,
    definition: `L'application est développée avec HTML, CSS, JavaScript pour le frontend, PHP pour la logique métier et la gestion des données, et MySQL pour le stockage sécurisé et performant des informations. La méthode AMDEC est intégrée pour identifier et prévenir les défaillances potentielles du système.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Le rapport présente un projet de fin d'études en génie informatique visant à optimiser la gestion de stock de véhicules pour une entreprise spécialisée dans la vente de véhicules neufs et d'occasion. L'objectif principal est de remplacer un système manuel par une solution complète et fiable.`
      },
      {
        titre: 'Méthode AMDEC',
        contenu: `La méthode AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité) est intégrée pour garantir la qualité et la robustesse du système, en identifiant et prévenant les défaillances potentielles.`
      },
      {
        titre: 'Architecture Technique',
        contenu: `• Frontend : HTML, CSS, JavaScript pour une interface utilisateur responsive et intuitive.

• Backend : PHP pour la logique métier et la gestion des données.

• Base de données : MySQL pour le stockage sécurisé et performant.`
      }
    ],
    fonctionnalites: [
      "Gestion des véhicules : enregistrement des caractéristiques techniques et commerciales (marque, modèle, année, prix, état, etc.)",
      "Visualisation du stock : interface de consultation en temps réel avec filtres avancés pour des recherches multicritères",
      "Système d'alertes : notifications automatiques pour les stocks critiques et les véhicules en stock depuis longtemps",
      "Traçabilité des mouvements : historique complet des entrées et sorties de stock avec suivi des opérations par utilisateur",
      "Prévision de stock : estimation des niveaux de stock futurs basée sur l'historique des mouvements",
      "Tableau de bord analytique avec visualisations des données clés",
      "Modification et suppression sécurisées des données avec traçabilité des opérations"
    ],
    conclusion: `Ce projet démontre l'importance de la digitalisation dans la gestion des stocks, en offrant une solution robuste et évolutive. Les résultats obtenus incluent une réduction de 80% des erreurs de saisie, une amélioration significative de la visibilité sur les disponibilités en temps réel, et une diminution de 60% du temps de recherche d'informations.`,
    perspectives: [
      "Intégration avec d'autres systèmes (comptabilité, CRM)",
      "Ajout de modules d'analyse prédictive",
      "Développement d'une application mobile",
      "Intégration de l'intelligence artificielle pour l'optimisation des stocks"
    ]
  },
  {
    id: 'ensahome',
    title: "EnsaHome - Plateforme de Logements Étudiants",
    description: "Plateforme numérique moderne pour la recherche de logements et l'échange d'équipements entre étudiants des ENSA du Maroc.",
    images: [
      require('../assets/images/pageensahome1.jpg')
    ],
    screenshots: [
      require('../assets/images/pageensahome.jpg'),
      require('../assets/images/pageensahome1.jpg')
    ],
    technologies: ['Next.js', 'Spring Boot', 'MongoDB', 'Docker', 'Microservices'],
    report: 'https://www.dropbox.com/scl/fi/mxy290keu69j4dhhqj1e7/EnsaHome-2.pdf?rlkey=w10cn3poubkf05mwl3p1xqy2h&st=sikg41vs&dl=0',
    github: '',
    demo: '',
    objectif: `Simplifier la recherche de logements étudiants et faciliter l'échange d'équipements entre étudiants des Écoles Nationales des Sciences Appliquées (ENSA) du Maroc, tout en offrant une interface intuitive accessible sur tous les appareils.`,
    definition: `EnsaHome est développé avec Next.js pour le frontend, Spring Boot avec architecture microservices pour le backend, et un cluster MongoDB distribué géographiquement (sharding sur Khouribga, Marrakech, Agadir) pour optimiser les performances et la disponibilité.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Le projet EnsaHome est une plateforme numérique moderne destinée aux étudiants des Écoles Nationales des Sciences Appliquées (ENSA) du Maroc. Elle vise à connecter étudiants, propriétaires et administrateurs dans un écosystème centralisé.`
      },
      {
        titre: 'Architecture Technique',
        contenu: `Sharding géographique avec trois shards (Khouribga, Marrakech, Agadir), ReplicaSets avec trois nœuds par shard pour la haute disponibilité, et scalabilité pour étendre à d'autres villes.`
      },
      {
        titre: 'Méthodologie Agile',
        contenu: `Approche Scrum avec des sprints de deux semaines, phases claires : spécifications, conception UML, développement, tests et déploiement, avec tests d'utilisabilité pour valider l'expérience utilisateur.`
      }
    ],
    fonctionnalites: [
      "Gestion des profils utilisateurs : inscription sécurisée avec vérification des documents et système de rôles (étudiants, propriétaires, administrateurs)",
      "Recherche et publication de logements : filtrage avancé par localisation, prix, type de logement avec géolocalisation et carte interactive",
      "Échange d'équipements : plateforme d'achat, vente ou cession d'équipements entre étudiants avec inventaire et catégorisation",
      "Communication : messagerie intégrée et notifications push avec alertes pour nouvelles annonces ou messages",
      "Interface responsive accessible sur tous les appareils",
      "Système de géolocalisation avancée pour la recherche de logements"
    ],
    conclusion: `EnsaHome illustre comment une solution technique innovante peut répondre à des besoins concrets de la communauté étudiante. En combinant une architecture robuste (MongoDB shardé) avec une interface utilisateur intuitive (Next.js), le projet offre une plateforme performante et scalable. Les retours d'expérience positifs des étudiants confirment son impact sur la simplification de la vie étudiante.`,
    perspectives: [
      "Intégration de nouvelles fonctionnalités comme la géolocalisation avancée",
      "Extension à d'autres universités marocaines",
      "Marketplace élargi pour inclure des livres et du matériel pédagogique",
      "Développement d'applications mobiles natives"
    ]
  },
  {
    id: 'food-krust',
    title: "Food Krust - Application Mobile de Gestion de Repas",
    description: "Application Android pour aider les étudiants à gérer leurs repas quotidiens de manière simple, économique et équilibrée.",
    images: [
      require('../assets/images/ecranfood.jpg')
    ],
    screenshots: [
      require('../assets/images/wolcomepage.jpg'),
      require('../assets/images/pagedetaille.jpg'),
      require('../assets/images/pageprofile.jpg')
    ],
    technologies: ['Android', 'Java', 'SQLite', 'Firebase', 'XML'],
    report: 'https://www.dropbox.com/scl/fi/96yjlw49kspuaef3abovx/Green-Grey-Simple-Food-Recipe-Presentation.pdf?rlkey=eixp4uizxu205wz3fm6wbublg&st=xf4vcg7u&dl=0',
    github: '',
    demo: '',
    objectif: `Aider les étudiants à gérer leurs repas quotidiens de manière simple, économique et équilibrée, en résolvant les défis liés à la planification des repas pour les étudiants vivant loin de leur famille.`,
    definition: `Application mobile développée sous Android avec Java pour la logique métier, SQLite pour le stockage local des recettes et préférences, et Firebase pour l'authentification Google et la gestion des comptes.`,
    etudeConceptuelle: [
      {
        titre: 'Introduction',
        contenu: `Le projet Food Krust est une application mobile conçue pour aider les étudiants à gérer leurs repas quotidiens de manière simple, économique et équilibrée.`
      },
      {
        titre: 'Analyse des Besoins',
        contenu: `Identification des problématiques étudiantes : manque de temps, budget limité, difficultés de planification des repas.`
      },
      {
        titre: 'Architecture Technique',
        contenu: `• Frontend : Android Native (XML, Fragments)

• Backend : Java pour la logique métier

• Base de données : SQLite (stockage local des recettes et préférences)

• Authentification : Firebase (Google et gestion des comptes)`
      }
    ],
    fonctionnalites: [
      "Authentification : connexion via Google ou création de compte (profil étudiant ou standard)",
      "Planification des repas : organisation journalière (petit-déjeuner, déjeuner, dîner) avec suggestions adaptées",
      "Base de recettes : consultation et filtrage avancé (durée, budget, ingrédients) avec détails complets",
      "Partage communautaire : publication et commentaire de recettes par les utilisateurs",
      "Notifications intelligentes : rappels pour la préparation des repas et alertes pour nouvelles recettes"
    ],
    conclusion: `Food Krust illustre comment une application mobile ciblée peut améliorer le quotidien des étudiants en simplifiant la gestion des repas. Son architecture technique (Android, Java, SQLite) et ses fonctionnalités centrées utilisateur en font un outil pratique et accessible.`,
    perspectives: [
      "Ajout d'un système de liste de courses intégrée",
      "Extension à d'autres plateformes (iOS, web)",
      "Intégration de fonctionnalités de livraison de courses",
      "Développement d'un système de recommandations personnalisées"
    ]
  },
  {
    id: 'plateforme-incidents-ocp',
    title: "Plateforme de Gestion des Incidents Techniques avec IA",
    description: "Plateforme web et mobile intégrée pour la gestion des interventions techniques chez OCP, enrichie d'intelligence artificielle et d'outils d'analytics avancés.",
    images: [
      require('../assets/images/page_principale.jpg'),
     
    ],
    screenshots: [
      require('../assets/images/page_principale.jpg'),
      require('../assets/images/page_calendrier_Tech.jpg'),
      require('../assets/images/page_demandeur.jpg')
    ],
    technologies: ['ReactJS', 'Expo Go', 'Spring Boot', 'MySQL', 'Gemini API', 'Power BI', 'Docker'],
    report: 'https://www.dropbox.com/scl/fi/p8z1tsnk7dp6au3n7kxus/Rapport_PFA_yosra_Elmimouni.pdf?rlkey=5lz59fliyub6mavweh66usqs9&st=glbcgycg&dl=0',
    github: '',
    demo: '',
    objectif: `Moderniser les processus de maintenance industrielle d'OCP en développant une solution numérique intégrée qui optimise la gestion des interventions techniques, améliore la réactivité des équipes et s'aligne sur les objectifs de transformation digitale du groupe.`,
    definition: `Plateforme web et mobile sécurisée multi-niveaux intégrant ReactJS pour les interfaces web, Expo Go pour le développement mobile cross-platform, l'API Gemini pour l'assistance intelligente, et Microsoft Power BI pour l'analytique avancée. Le système propose des interfaces adaptées à quatre profils utilisateurs distincts avec standards de sécurité industrielle.`,
    etudeConceptuelle: [
      {
        titre: 'Contexte Industriel',
        contenu: `Projet réalisé en partenariat avec OCP Group (leader mondial des phosphates) dans le cadre de leur transformation numérique. Le site de Khouribga nécessitait une modernisation de ses processus de maintenance technique pour maintenir la continuité opérationnelle.`
      },
      {
        titre: 'Problématiques Identifiées',
        contenu: `• Gestion manuelle des demandes avec délais importants
        
  - Planification inefficace et coordination complexe entre équipes
  
  - Suivi fragmenté sans centralisation de l'historique
  
  - Manque d'outils mobiles adaptés au terrain
  
  - Analyse limitée sans tableaux de bord analytiques`
      },
      {
        titre: 'Architecture Technique',
        contenu: `• Frontend Web : ReactJS avec interfaces multi-rôles
  
  - Mobile : Expo Go pour cross-platform (iOS/Android)
  
  - Backend : Spring Boot avec API REST sécurisée (35 endpoints)
  
  - Base de données : MySQL avec ORM Spring Data JPA
  
  - IA : API Gemini pour chatbot intelligent
  
  - Analytics : Power BI avec Gateway sécurisé
  
  - Sécurité : JWT, BCrypt, Spring Security, CORS
  
  - Déploiement : Docker Desktop`
      }
    ],
    fonctionnalites: [
      "Gestion multi-rôles : Interfaces adaptées pour Administrateurs, Responsables, Techniciens (3 niveaux) et Demandeurs",
      "Workflow d'intervention : Création, validation, affectation, exécution et clôture avec traçabilité complète",
      "Méthodologie AMDEC : Analyse automatisée des équipements critiques avec alertes préventives",
      "Assistant IA Gemini : Chatbot contextuel pour résolution automatique et recherche intelligente dans l'historique",
      "Analytics Power BI : 15 KPIs temps réel, 12 rapports interactifs avec RLS (Row-Level Security)",
      "Application mobile : Interface dédiée demandeurs avec mode offline et géolocalisation",
      "Planification avancée : Calendrier intégré avec vues journalière, hebdomadaire et mensuelle",
      "Sécurité industrielle : Authentification JWT, chiffrement BCrypt, audit trail complet"
    ],
    conclusion: `Cette plateforme illustre parfaitement comment l'innovation technologique peut transformer concrètement les processus industriels tout en respectant les exigences de sécurité, de performance et de qualité d'un leader mondial comme OCP. La solution ne constitue pas seulement un succès technique, mais représente une véritable transformation digitale des processus de maintenance.`,
    perspectives: [
      "Extension à l'ensemble du groupe OCP (23 000 collaborateurs, 160 pays)",
      "Intégration de nouvelles technologies IA pour maintenance prédictive",
      "Développement de modules IoT pour monitoring temps réel des équipements",
      "Mise en place de fonctionnalités de réalité augmentée pour assistance terrain",
      "Expansion vers d'autres sites industriels du groupe en Afrique"
    ]
  }
]; 