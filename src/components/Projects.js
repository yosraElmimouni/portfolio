import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
  overflow: hidden;
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px 0 rgba(100,255,218,0.10);
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(100,255,218,0.18);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 220px;
  height: 140px;
  object-fit: contain;
  margin: 2rem auto 1rem auto;
  display: block;
  background: #112240;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.3rem;
  margin: 0.5rem 0 0.7rem 0;
  text-align: center;
`;

const ProjectDescription = styled.p`
  color: #bfcbe6;
  font-size: 1rem;
  margin: 0 1.2rem 1.2rem 1.2rem;
  text-align: center;
`;

const ProjectBadges = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const Badge = styled(motion.span)`
  background: #112240;
  color: #64ffda;
  border-radius: 14px;
  padding: 0.3rem 0.9rem;
  font-size: 0.95rem;
  font-weight: 600;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
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

const Projects = () => {
  const navigate = useNavigate();
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </Title>
        <ProjectsGrid
          initial="hidden"
          whileInView="visible"
          variants={{}}
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <ProjectImage src={project.images[0]} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectBadges
                initial="hidden"
                whileInView="visible"
                variants={{}}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, bidx) => (
                  <Badge
                    key={bidx}
                    custom={bidx}
                    variants={badgeFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {tech}
                  </Badge>
                ))}
              </ProjectBadges>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 