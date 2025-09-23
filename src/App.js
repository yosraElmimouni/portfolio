import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import Achievement from '../src/containers/achievement/Achievement';
import ParticleBackground from './components/ParticleBackground';
import { StyleProvider } from './contexts/StyleContext';
import { useState } from 'react';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => setIsDark((prev) => !prev);
  return (
    <StyleProvider value={{ isDark, changeTheme }}>
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Stack />
              <Projects />
                <Experience />
                <Achievement />
              <Contact />
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <ParticleBackground />
      </AppContainer>
    </Router>
    </StyleProvider>
  );
};

export default App;
