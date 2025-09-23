import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  max-width: 1050px;
  margin: 3.5rem auto 2rem auto;
  background: rgba(10,25,47,0.98);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(100,255,218,0.10);
  padding: 2.5rem 2rem 2rem 2rem;
  color: #ccd6f6;
  position: relative;
`;

const FixedBackButton = styled(motion.button)`
  position: fixed;
  top: 2.2rem;
  left: 2.2rem;
  z-index: 100;
  background: #0a192f;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 24px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px 0 #64ffda22;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: #64ffda;
    color: #0a192f;
  }
`;

const Title = styled(motion.h1)`
  color: #64ffda;
  font-size: 2.7rem;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: 1.2px;
`;

const Badges = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 2.2rem;
  justify-content: center;
`;

const Badge = styled(motion.span)`
  background: #112240;
  color: #64ffda;
  border-radius: 16px;
  padding: 0.4rem 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 4px 0 rgba(100,255,218,0.10);
`;

const ScreenshotsGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const Screenshot = styled.img`
  width: 270px;
  height: 170px;
  object-fit: contain;
  background: #112240;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(100,255,218,0.10);
`;

const MainRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
  }
`;

const DetailsCol = styled.div`
  flex: 2 1 600px;
  min-width: 320px;
`;

const ReportCol = styled.div`
  flex: 0 0 220px;
  min-width: 180px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const Section = styled(motion.section)`
  margin-bottom: 2.2rem;
`;

const SectionTitle = styled(motion.h3)`
  color: #64ffda;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  margin-top: 1.2rem;
`;

const Paragraph = styled(motion.div)`
  font-size: 1.08rem;
  color: #bfcbe6;
  margin-bottom: 1.1rem;
  white-space: pre-line;
`;

const ReportButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  background: linear-gradient(90deg, #64ffda 0%, #0a192f 100%);
  color: #0a192f;
  border: none;
  border-radius: 24px;
  padding: 0.9rem 2.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px 0 #64ffda22;
  text-align: left;
  &:hover {
    background: linear-gradient(90deg, #0a192f 0%, #64ffda 100%);
    color: #fff;
  }
`;

const List = styled(motion.ul)`
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
  color: #bfcbe6;
`;

const ListItem = styled(motion.li)`
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const badgeFade = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return <Container>Projet introuvable.</Container>;
  }

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ staggerChildren: 0.1 }}
    >
      <FixedBackButton
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => navigate(-1)}
      >
        <span style={{fontSize: '1.3em', lineHeight: 1, marginRight: '0.3em'}}>←</span>Retour
      </FixedBackButton>
      <Title
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
      >
        {project.title}
      </Title>
      <Badges
        initial="hidden"
        animate="visible"
        variants={{}}
        transition={{ staggerChildren: 0.07, delayChildren: 0.25 }}
      >
        {project.technologies.map((tech, idx) => (
          <Badge
            key={idx}
            custom={idx}
            variants={badgeFade}
            initial="hidden"
            animate="visible"
          >
            {tech}
          </Badge>
        ))}
      </Badges>
      <ScreenshotsGrid>
        {project.screenshots && project.screenshots.map((img, idx) => (
          <Screenshot src={img} alt={project.title + ' screenshot ' + (idx+1)} key={idx} />
        ))}
      </ScreenshotsGrid>
      <MainRow>
        <ReportCol>
          {project.report && <ReportButton href={project.report} target="_blank" rel="noopener noreferrer" variants={fadeUp}>rapport</ReportButton>}
        </ReportCol>
        <DetailsCol>
          <Section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <SectionTitle variants={fadeUp}>Présentation du Projet</SectionTitle>
            <Paragraph variants={fadeUp}>{project.objectif}</Paragraph>
            <Paragraph variants={fadeUp}>{project.definition}</Paragraph>
          </Section>
          <Section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <SectionTitle variants={fadeUp}>Étude Conceptuelle</SectionTitle>
            {project.etudeConceptuelle && project.etudeConceptuelle.map((s, idx) => (
              <div key={idx}>
                <SectionTitle style={{fontSize: '1.08rem', marginTop: '0.7rem'}} variants={fadeUp}>{s.titre}</SectionTitle>
                <Paragraph variants={fadeUp}>{s.contenu}</Paragraph>
              </div>
            ))}
          </Section>
          <Section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <SectionTitle variants={fadeUp}>Fonctionnalités Clés</SectionTitle>
            <List>
              {project.fonctionnalites && project.fonctionnalites.map((f, idx) => (
                <ListItem key={idx} variants={fadeUp}>{f}</ListItem>
              ))}
            </List>
          </Section>
          <Section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <SectionTitle variants={fadeUp}>Conclusion</SectionTitle>
            <Paragraph variants={fadeUp}>{project.conclusion}</Paragraph>
          </Section>
        </DetailsCol>
      </MainRow>
    </Container>
  );
};

export default ProjectDetail; 