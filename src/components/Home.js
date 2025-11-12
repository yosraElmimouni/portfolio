import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStyleContext } from '../contexts/StyleContext';
import { greeting } from '../portfolio';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/developer.json'; // Assurez-vous que ce fichier existe ou remplacez-le par un autre

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 5%;
  background-color: var(--darkBackground); /* Utilisation du nouveau darkBackground */
  color: var(--textColorDark);
  transition: background-color 0.5s ease, color 0.5s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const TextContent = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  margin-bottom: 40px;
  z-index: 10;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--accentColor); /* Utilisation de la couleur d'accent */

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: var(--textColorDark);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--subTitle);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(motion(Link))`
  padding: 12px 25px;
  background-color: var(--accentColor);
  color: var(--primaryColor);
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--buttonHover);
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(motion(Link))`
  padding: 12px 25px;
  background-color: transparent;
  color: var(--accentColor);
  border: 2px solid var(--accentColor);
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 196, 0.1);
    transform: translateY(-3px);
  }
`;

const LottieWrapper = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  height: auto;
  z-index: 10;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { isDark } = useStyleContext();

  return (
    <HomeContainer id="home" variants={containerVariants} initial="hidden" animate="visible">
      <TextContent>
        <Title variants={itemVariants}>
          {greeting.title}
        </Title>
        <SubTitle variants={itemVariants}>
          {greeting.subtitle}
        </SubTitle>
        <Description variants={itemVariants}>
          {greeting.description}
        </Description>
        <ButtonGroup variants={itemVariants}>
          <PrimaryButton to="/#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Voir mes Projets
          </PrimaryButton>
          {greeting?.resumeLink && (
            <SecondaryButton to={greeting.resumeLink} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Télécharger CV
            </SecondaryButton>
          )}
        </ButtonGroup>
      </TextContent>
      <LottieWrapper variants={itemVariants}>
        {/* Lottie animation will be displayed here */}
        <Lottie animationData={animationData} loop={true} />
      </LottieWrapper>
    </HomeContainer>
  );
};

export default Home;
