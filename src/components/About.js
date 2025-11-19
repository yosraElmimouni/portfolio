import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0A192F;
  color: #CCD6F6;
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #64FFDA;
  margin-bottom: 2.5rem;
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
    background: #64FFDA;
  }
`;

const AboutTextBlock = styled(motion.div)`
  background: rgba(17, 34, 64, 0.96);
  border-radius: 18px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 28px;
  font-size: 1.13rem;
  color: #CCD6F6;
  box-shadow: 0 4px 24px 0 rgba(100, 255, 218, 0.13);
  line-height: 1.7;
  position: sticky;
  top: ${({ idx }) => idx * 80}px;
  z-index: ${({ idx }) => 10 + idx};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  transform-style: preserve-3d;
  
  &:hover {
    background: rgba(100, 255, 218, 0.12);
    box-shadow: 0 8px 32px 0 rgba(100, 255, 218, 0.18);
    transform: translateY(-2px) scale(1.01);
  }
`;

const aboutTexts = [
  "Salut ! Je suis Yosra, une passionnée d'informatique qui explore l'univers fascinant du développement logiciel et de l'intelligence artificielle. Toujours avide de nouveaux défis, j'aime transformer des idées en solutions innovantes et optimiser les systèmes pour une performance optimale. Entre code et créativité, chaque projet est une opportunité de repousser les limites et d'apprendre encore plus !",
  "Mon parcours en informatique a débuté par une solide formation en ingénierie logicielle, affinée au fil des années grâce à mes études à l'ENSA Khouribga. À travers mes projets académiques et personnels, j'ai acquis une expertise technique tout en développant une approche axée sur l'innovation et la résolution de problèmes. Pour moi, chaque ligne de code est une opportunité de créer des solutions intelligentes et performantes.",
  "Mon stack technologique reflète la diversité et l'évolution constante du monde du développement. De C, C++, Python, Java et JEE aux technologies web comme HTML, CSS, JavaScript et PHP, sans oublier l'administration Linux et la gestion de bases de données avec Oracle PL/SQL, j'aime explorer de nouveaux outils et affiner mes compétences. Toujours en quête d'innovation, je reste à l'affût des dernières tendances en développement, en intelligence artificielle et en administration système pour concevoir des solutions à la fois performantes et modernes."
];

const About = () => (
  <AboutSection id="about">
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        About Me
      </Title>
      <div>
        {aboutTexts.map((text, idx) => (
          <AboutTextBlock 
            key={idx} 
            idx={idx} 
            total={aboutTexts.length}
            initial={{ 
              opacity: 0, 
              x: idx % 2 === 0 ? -120 : 120,
              y: 20,
              scale: 0.95,
              rotateY: idx % 2 === 0 ? -5 : 5
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              y: 0,
              scale: 1,
              rotateY: 0
            }}
            transition={{ 
              duration: 1.4, 
              delay: idx * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.8, delay: idx * 0.15 },
              x: { duration: 1.2, delay: idx * 0.15 },
              y: { duration: 1.0, delay: idx * 0.15 + 0.1 },
              scale: { duration: 1.0, delay: idx * 0.15 + 0.2 },
              rotateY: { duration: 1.2, delay: idx * 0.15 }
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {text}
          </AboutTextBlock>
        ))}
      </div>
    </AboutContainer>
  </AboutSection>
);

export default About; 