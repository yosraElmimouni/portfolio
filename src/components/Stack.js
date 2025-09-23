import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
  overflow: hidden;
`;

const StackContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #64ffda;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  perspective: 1000px;
`;

const FlipCardWrapper = styled.div`
  perspective: 1000px;
  height: 350px;
  cursor: pointer;
`;

const FlipCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 24px 0 rgba(100,255,218,0.13);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100,255,218,0.25);
    box-shadow: 0 8px 32px 0 rgba(100,255,218,0.18);
  }
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: rgba(200,255,218,0.2);
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SkillIcon = styled.i`
  font-size: 4rem;
  color: #64ffda;
  transition: all 0.3s ease;
  
  ${FlipCardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const SkillTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;

const SkillDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  font-size: 0.9rem;
  text-align: justify;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background: #64ffda;
  border-radius: 50%;
  filter: blur(20px);
`;

const skills = [
  {
    title: 'Linux',
    description: "Mon environnement de prédilection pour le développement et l'administration système. Sa stabilité et sa flexibilité en font un outil essentiel pour optimiser les performances et automatiser les tâches.",
    icon: 'fab fa-linux'
  },
  {
    title: 'MongoDB',
    description: "Base de données NoSQL flexible et performante, idéale pour les applications modernes nécessitant une grande évolutivité.",
    icon: 'fas fa-leaf'
  },
  {
    title: 'Docker',
    description: "Outil incontournable pour la containerisation et le déploiement d'applications dans des environnements isolés et reproductibles.",
    icon: 'fab fa-docker'
  },
  {
    title: 'Jenkins',
    description: "Serveur d'intégration continue permettant d'automatiser les tests, les builds et les déploiements.",
    icon: 'fas fa-cogs'
  },
  {
    title: 'Ansible',
    description: "Outil d'automatisation pour la gestion de configuration et le déploiement d'infrastructures.",
    icon: 'fas fa-robot'
  },
  
  {
    title: 'C#',
    description: "Langage moderne et polyvalent pour le développement d'applications Windows, web et mobiles.",
    icon: 'fas fa-code'
  },
  
  {
    title: 'UML',
    description: "Langage de modélisation pour la conception et la documentation des systèmes logiciels.",
    icon: 'fas fa-project-diagram'
  },
 
  {
    title: 'Firebase API',
    description: "Plateforme de développement d'applications mobiles et web avec authentification, base de données temps réel et hébergement.",
    icon: 'fas fa-fire'
  },
  {
    title: 'OpenAI API',
    description: "API d'intelligence artificielle pour l'intégration de modèles avancés de traitement du langage naturel.",
    icon: 'fas fa-brain'
  },
  
  {
    title: 'GitLab',
    description: "Plateforme DevOps complète pour la gestion de projets, CI/CD et collaboration.",
    icon: 'fab fa-gitlab'
  },
  {
    title: 'Jira',
    description: "Outil de gestion de projet agile pour le suivi des tâches, des bugs et des sprints.",
    icon: 'fas fa-tasks'
  },
  {
    title: 'HTML',
    description: "Langage de balisage standard pour la création de pages web.",
    icon: 'fab fa-html5'
  },
  {
    title: 'CSS',
    description: "Langage de style pour la mise en forme et la présentation des pages web.",
    icon: 'fab fa-css3-alt'
  },
  {
    title: 'PHP',
    description: "Langage de script côté serveur pour le développement web dynamique.",
    icon: 'fab fa-php'
  },
  
  {
    title: 'FastAPI',
    description: "Framework web moderne et rapide pour la création d'API en Python.",
    icon: 'fas fa-bolt'
  },
  {
    title: 'PL/SQL',
    description: "Mon outil de référence pour la gestion et l'optimisation des bases de données Oracle. Il permet d'automatiser les traitements, d'améliorer les performances et d'assurer l'intégrité des données.",
    icon: 'fas fa-database'
  },
  {
    title: 'Java',
    description: "Mon langage de prédilection pour développer des applications robustes et évolutives. Sa polyvalence et sa puissance en font un atout pour créer des solutions performantes, du backend aux applications desktop.",
    icon: 'fab fa-java'
  },
  {
    title: 'JavaScript',
    description: "Mon langage préféré pour créer des éléments interactifs et dynamiques. Il permet de concevoir des expériences utilisateur fluides et engageantes, en optimisant les interactions avant le développement complet.",
    icon: 'fab fa-js-square'
  },
  {
  	  title: 'React',
  	  description: "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes, réactives et composables. Idéale pour des SPA performantes avec un écosystème riche.",
  	  icon: 'fab fa-react'
  	},
  {
    title: 'Python',
    description: "Mon langage incontournable pour le développement rapide et l'analyse de données. Sa simplicité et sa puissance en font un outil idéal pour l'automatisation, l'IA et le traitement des données.",
    icon: 'fab fa-python'
  },
  {
    title: 'C/C++',
    description: "Mes langages fondamentaux pour la programmation système et l'optimisation des performances. Leur puissance et leur contrôle bas niveau en font des outils idéaux pour développer des applications efficaces et rapides.",
    icon: 'fas fa-code'
  },
  {
    title: 'SQL',
    description: "Mon outil essentiel pour la gestion et l'interrogation des bases de données. Il me permet de manipuler efficacement les données, d'optimiser les requêtes et de garantir l'intégrité des informations.",
    icon: 'fas fa-database'
  }
];

const Stack = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const shapes = [
    { size: 100, x: '10%', y: '20%' },
    { size: 150, x: '80%', y: '40%' },
    { size: 80, x: '30%', y: '70%' },
    { size: 120, x: '70%', y: '80%' },
  ];

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <StackSection id="stack">
      <BackgroundShapes>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              y,
              opacity
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </BackgroundShapes>
      <StackContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Stack
        </Title>
        <SkillsGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <FlipCardWrapper
              key={skill.title}
              onClick={() => handleCardClick(index)}
            >
              <FlipCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
              >
                <CardFace>
                  <SkillIcon className={skill.icon} />
                  <SkillTitle style={{marginTop: '1rem', fontSize: '1.2rem'}}>{skill.title}</SkillTitle>
                </CardFace>
                <CardBack>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </CardBack>
              </FlipCard>
            </FlipCardWrapper>
          ))}
        </SkillsGrid>
      </StackContainer>
    </StackSection>
  );
};

export default Stack;
