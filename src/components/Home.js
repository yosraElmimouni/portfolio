import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import profileImg from '../assets/images/CV.png';
import BlurText from './BlurText';
import { greeting } from '../portfolio';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

const Name = styled(motion.h1)`
  font-size: 48px;
  font-family: 'Roboto Mono', monospace;
  color: #64ffda;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: rgba(100, 255, 218, 0.1);
    border-radius: 10px;
    z-index: -1;
    transform: scale(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1);
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #8892b0;
`;

const FlipCardWrapper = styled.div`
  perspective: 1200px;
  width: 280px;
  height: 280px;
  margin: 2rem auto 0 auto;
`;

const FlipCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.4,0.2,0.2,1);
  cursor: pointer;
  will-change: transform;
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(100,255,218,0.15), 0 1.5px 8px 0 rgba(10,25,47,0.10);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipCardBack = styled(FlipCardFace)`
  transform: rotateY(180deg);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

const ModernCTAButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 0 0;
`;

const ModernCTAButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  border: none;
  border-radius: 48px;
  background: linear-gradient(90deg, #0a192f 0%, #64ffda 100%);
  color: #fff;
  font-family: 'Inter', 'Montserrat', 'Roboto', Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 1.1rem 2.8rem 1.1rem 2.2rem;
  box-shadow: 0 4px 32px 0 #64ffda22, 0 1.5px 8px 0 rgba(10,25,47,0.08);
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.22s, transform 0.18s, background 0.22s;
  will-change: box-shadow, transform, background;
  text-shadow: 0 1px 2px #0a192f22;
  &:hover {
    box-shadow: 0 8px 40px 0 #64ffda55, 0 0 0 6px #64ffda33;
    background: linear-gradient(90deg, #112240 0%, #64ffda 100%);
    transform: translateY(-2px) scale(1.035);
  }
  &:active {
    transform: scale(0.97);
    box-shadow: 0 2px 8px 0 #64ffda22;
  }
`;

const ModernCTAIcon = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 8px 0 #64ffda22;
  transition: background 0.22s, box-shadow 0.22s;
  ${ModernCTAButton}:hover & {
    background: #0a192f;
    box-shadow: 0 4px 16px 0 #64ffda44;
  }
`;

// Composant pour le verso animé
const AnimatedScrollCircle = () => (
  <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: '50px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <motion.svg
      width="200" height="200" viewBox="0 0 200 200"
      style={{ display: 'block' }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
    >
      <defs>
        <path id="circlePath" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
      </defs>
      <text fontSize="22" fill="#222" fontFamily="'Roboto Mono', monospace">
        <textPath xlinkHref="#circlePath" startOffset="0">
          ✦ SCROLL DOWN ✦ AND KNOW ME BETTER ✦ SCROLL DOWN ✦ AND KNOW ME BETTER ✦
        </textPath>
      </text>
    </motion.svg>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
      <svg width="36" height="36" viewBox="0 0 40 40">
        <g>
          <circle cx="20" cy="20" r="18" fill="none" stroke="#64ffda" strokeWidth="2" />
          <polyline points="14,18 20,26 26,18" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  </div>
);

const Home = () => {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const [isFlipped, setIsFlipped] = React.useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Créer des formes géométriques
    const shapes = [];
    const geometries = [
      new THREE.TetrahedronGeometry(1),
      new THREE.SphereGeometry(1),
      new THREE.CylinderGeometry(1, 1, 2),
      new THREE.OctahedronGeometry(1),
      new THREE.BoxGeometry(1, 1, 1)
    ];
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
    
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Basic rotation for 3D shapes (no cursor interaction)
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.001;
        shape.rotation.y += 0.001;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.clear();
    };
  }, []);

  return (
    <HomeContainer>
      <Canvas ref={canvasRef} />
      <Content style={{ y }}>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Yosra El Mimouni
        </Name>
        <FlipCardWrapper
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <FlipCard
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.4,0.2,0.2,1] }}
          >
            <FlipCardFace>
              <ProfileImage src={profileImg} alt="Profil Yosra El Mimouni" />
            </FlipCardFace>
            <FlipCardBack>
              <AnimatedScrollCircle />
            </FlipCardBack>
          </FlipCard>
        </FlipCardWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BlurText
            text="Étudiante en ingénierie des systèmes informatiques"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl"
          />
        </Title>
        <ModernCTAButtonWrapper style={{ gap: '1rem', flexWrap: 'wrap' }}>
          {greeting?.resumeLink && (
            <a href={`${greeting.resumeLink}&dl=1`} download="cv_yosra_el_mimouni.pdf" style={{ textDecoration: 'none' }}>
              <ModernCTAButton
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover="hover"
                whileTap="tap"
              >
                Télécharger mon CV
                <ModernCTAIcon
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 8, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="#64ffda" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ModernCTAIcon>
              </ModernCTAButton>
            </a>
          )}
        </ModernCTAButtonWrapper>
      </Content>
    </HomeContainer>
  );
};

export default Home; 