/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Statistics } from './components/Statistics';
import { VisitingCard } from './components/VisitingCard';
import { ResumeSection, ResumePreviewModal } from './components/ResumeModal';
import { SocialConnect } from './components/SocialConnect';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EasterEggModal } from './components/EasterEggModal';
import { playCyberSound } from './utils/helpers';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Handle dark mode class on documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    playCyberSound('toggle', soundEnabled);
    setIsDarkMode((prev) => !prev);
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    playCyberSound('toggle', nextState);
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen relative text-slate-100 ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-900'}`}>
      
      {/* Interactive Cyber Particle Background with mouse ripple */}
      <BackgroundCanvas isDarkMode={isDarkMode} />

      {/* Cyber Cursor for desktop with hover detection */}
      <CustomCursor />

      {/* Sticky Futuristic Navbar with Sound and Theme toggles */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleDarkMode}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onTriggerEasterEgg={() => setEasterEggActive(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          soundEnabled={soundEnabled}
          onOpenVisitingCard={() => {
            const el = document.getElementById('visiting-card');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 2. About Section */}
        <About soundEnabled={soundEnabled} />

        {/* 3. Skills Section with Progress Bars and Circular Gauges */}
        <Skills soundEnabled={soundEnabled} />

        {/* 4. Projects Section with 3D Tilt & Details Inspection */}
        <Projects soundEnabled={soundEnabled} />

        {/* 5. Services Section with Service Requesting */}
        <Services
          soundEnabled={soundEnabled}
          onSelectService={handleSelectService}
        />

        {/* 6. Experience Timeline */}
        <Experience soundEnabled={soundEnabled} />

        {/* 7. Education & Qualifications */}
        <Education />

        {/* 8. Achievements Bento Grid */}
        <Achievements />

        {/* 9. Statistics & Animated Numerical Metrics */}
        <Statistics />

        {/* 10. Holographic Digital Visiting Card with Scannable QR Code & .vcf Download */}
        <VisitingCard soundEnabled={soundEnabled} />

        {/* 11. Curriculum Vitae & Official Resume */}
        <ResumeSection
          soundEnabled={soundEnabled}
          onOpenPreview={() => setIsResumeModalOpen(true)}
        />

        {/* 12. Social Media & Channels Directory */}
        <SocialConnect soundEnabled={soundEnabled} />

        {/* 13. Contact & WhatsApp Transmission Terminal */}
        <Contact
          soundEnabled={soundEnabled}
          prefilledService={prefilledService}
        />
      </main>

      {/* Futuristic Footer */}
      <Footer soundEnabled={soundEnabled} />

      {/* Interactive Modals */}
      <EasterEggModal
        isOpen={easterEggActive}
        onClose={() => setEasterEggActive(false)}
        soundEnabled={soundEnabled}
      />

      <ResumePreviewModal
        soundEnabled={soundEnabled}
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
