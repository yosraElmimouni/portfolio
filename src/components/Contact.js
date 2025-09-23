import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
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

const ContactContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a192f;
  font-size: 1.2rem;
`;

const ContactText = styled.div`
  h3 {
    color: #64ffda;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #8892b0;
  }
`;

const ContactLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  border-bottom: 1px dashed rgba(100,255,218,0.35);
  transition: color 0.2s ease, border-color 0.2s ease;
  &:hover {
    color: #64ffda;
    border-color: #64ffda;
  }
`;

// Removed form: only contact info will be displayed
// Form components removed (no message form)

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

const contactInfo = [
  { icon: '📞', title: 'Téléphone', text: '+212-675632773', href: 'tel:+212675632773' },
  { icon: '✉️', title: 'Email', text: 'yosraelmimouni2003@gmail.com', href: 'mailto:yosraelmimouni2003@gmail.com' },
  { icon: '🐙', title: 'GitHub', text: 'github.com/yosraElmimouni', href: 'https://github.com/yosraElmimouni' },
  { icon: '💼', title: 'LinkedIn', text: 'linkedin.com/in/yosra-el-mimouni-5a40b12a3', href: 'https://www.linkedin.com/in/yosra-el-mimouni-5a40b12a3/' }
];

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const shapes = [
    { size: 100, x: '10%', y: '20%' },
    { size: 150, x: '80%', y: '40%' },
    { size: 80, x: '30%', y: '70%' },
    { size: 120, x: '70%', y: '80%' },
  ];

  // no-op

  return (
    <ContactSection id="contact">
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
      <ContactContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact
        </Title>
        <ContactContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactInfo>
            {contactInfo.map((item, index) => (
              <ContactItem
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <ContactIcon>{item.icon}</ContactIcon>
                <ContactText>
                  <h3>{item.title}</h3>
                  {item.href ? (
                    <ContactLink href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.text}
                    </ContactLink>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </ContactText>
              </ContactItem>
            ))}
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 