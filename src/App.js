import React, { useState } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="app">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <NavBar />

      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <ContactSection />
        <p className="made-by">Made By Aayush🤖</p>
      </main>
    </div>
  );
}

export default App;
