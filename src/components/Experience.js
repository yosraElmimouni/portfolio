import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #8892b0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 95%;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #64ffda;
    transform: translateX(-50%);
  }
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  width: 20px;
  height: 20px;
  background: #64ffda;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const ExperienceCard = styled.div`
  width: 48%;
  max-width: 48%;
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid #64ffda;
  border-radius: 12px;
  padding: 1rem 1rem 1rem 0.5rem;
  box-shadow: 0 4px 10px rgba(100, 255, 218, 0.1);
  margin-left: 0;
  margin-right: auto;

  &.right {
    margin-left: auto;
    margin-right: 0;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #64ffda;
`;

const Experience = () => {
  // Newest first for a professional, reverse-chronological timeline
  const experiences = [
    {
      id: 2,
      jobTitle: "Stage PFA – Développement d’une plateforme web/mobile pour la gestion des incidents techniques",
      company: "OCP Group – ENSA Khouribga",
      period: " juillet - août 2025",
      description: `Conception et implémentation d’une plateforme de gestion des interventions techniques intégrant IA, sécurité avancée et analytics.`,
      points: [
        "Analyse des besoins industriels et modélisation UML (cas d’usage, séquence, classes).",
        "Développement d’une application web avec ReactJS et mobile cross-platform avec Expo Go.",
        "Implémentation d’API REST sécurisées avec Spring Boot, JWT, BCrypt et gestion des rôles.",
        "Intégration d’un chatbot IA (API Gemini) pour assistance aux utilisateurs et recherche intelligente.",
        "Mise en œuvre de la méthodologie AMDEC pour la gestion préventive des équipements critiques.",
        "Déploiement de tableaux de bord Power BI interactifs avec RLS et actualisation automatique.",
        "Utilisation de Docker pour la conteneurisation et Postman pour les tests API.",
      ],
      technologies: [
        "ReactJS", 
        "Expo/React Native", 
        "Spring Boot", 
        "MySQL/PostgreSQL", 
        "JWT & BCrypt", 
        "Docker", 
        "Power BI", 
        "Gemini AI API"
      ]
    },
    {
      id: 1,
      jobTitle: "Stage en Développement IA & Analyse de Données",
      company: "Technology & Telecom",
      period: "Juillet - Août 2024",
      description: `Développement d'outils pour la préparation de données et l'analyse des performances d'un bot conversationnel.`,
      points: [
        "Développement d'un script Python avec BeautifulSoup pour nettoyer les fichiers HTML en supprimant les éléments non pertinents (CSS, JavaScript, commentaires).",
        "Extraction et structuration du contenu en sections distinctes en fonction des balises HTML (<h1>, <h2>, <p>).",
        "Utilisation de l'API OpenAI pour générer des résumés et structurer la documentation en un format hiérarchisé et exploitable.",
        "Mise en place d'un processus automatisé pour la gestion et l'amélioration de la documentation technique du bot.",
        "Contribution à l'optimisation des interactions utilisateur en améliorant l'accessibilité et la compréhension des réponses du bot."
      ],
      technologies: ["Python", "BeautifulSoup", "OpenAI API", "Automatisation", "HTML"]
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <ExperienceContainer id="experience">
      <Container>
        <Title
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Expérience Professionnelle
        </Title>
        <Subtitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Mon parcours professionnel et mes réalisations
        </Subtitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
            >
              <TimelineDot />
              <ExperienceCard className={index % 2 === 0 ? '' : 'right'}>
                <JobTitle>{exp.jobTitle}</JobTitle>
                <Company>{exp.company}</Company>
                <Period>{exp.period}</Period>
                <Description>{exp.description}</Description>
                <div style={{width: '100%'}}>
                  <ul style={{ color: '#8892b0', marginBottom: '1rem', marginTop: '-0.5rem', paddingLeft: '1.2em' }}>
                    {exp.points && exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <Technologies>
                  {exp.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </Technologies>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
