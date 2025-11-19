import React, {useEffect, useState, useContext} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "../components/About";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import "../styles/animations.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <div className="section-animate">
              <Greeting />
            </div>
            <div className="section-animate-left">
              <About />
            </div>
            <div className="section-animate-left">
              <Skills />
            </div>
            <div className="section-animate-right">
              <StackProgress />
            </div>
            <div className="section-animate">
              <Education />
            </div>
            <div className="section-animate-left">
              <WorkExperience />
            </div>
            <div className="section-animate-right">
              <Projects />
            </div>
            <div className="section-animate">
              <StartupProject />
            </div>
            <div className="section-animate-left">
              <Achievement />
            </div>
            <div className="section-animate-right">
              <Blogs />
            </div>
            <div className="section-animate">
              <Talks />
            </div>
            <div className="section-animate-left">
              <Twitter />
            </div>
            <div className="section-animate-right">
              <Podcast />
            </div>
            <div className="section-animate">
              <Profile />
            </div>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
