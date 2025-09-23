import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { greeting, resumeSection } from '../portfolio';

const Section = styled.section`
  min-height: 40vh;
  padding: 4rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.2rem;
  color: #64ffda;
  margin-bottom: 0.75rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.05rem;
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.9rem 1.4rem;
  border: 1px solid #64ffda;
  color: #64ffda;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease, transform 0.1s ease;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: rgba(100,255,218,0.1);
    transform: translateY(-1px);
  }
`;

const Resume = () => {
  if (!resumeSection.display) return null;
  const href = greeting?.resumeLink || '';
  return (
    <Section id="resume">
      <Container>
        <Title initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {resumeSection.title || 'Mon CV'}
        </Title>
        {resumeSection.subtitle && (
          <Subtitle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            {resumeSection.subtitle}
          </Subtitle>
        )}
        {href && (
          <Button href={`${href}&dl=1`} download="cv_yosra_el_mimouni.pdf">
            Télécharger mon CV
          </Button>
        )}
      </Container>
    </Section>
  );
};

export default Resume;


