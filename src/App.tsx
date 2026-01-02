import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PlacementCompanies from './components/PlacementCompanies';
import PlacementProcess from './components/PlacementProcess';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import StudentPortal from './components/StudentPortal';
import EnrollModal from './components/EnrollModal';

function App() {
  const [showStudentPortal, setShowStudentPortal] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Check URL hash for student portal
    const handleHashChange = () => {
      if (window.location.hash === '#student-portal') {
        setShowStudentPortal(true);
      } else {
        setShowStudentPortal(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Expose global function for opening enroll modal
  useEffect(() => {
    (window as any).openEnrollModal = (courseName?: string) => {
      setSelectedCourse(courseName);
      setIsEnrollOpen(true);
    };
  }, []);

  if (showStudentPortal) {
    return (
      <div className="min-h-screen bg-black hero-background">
        <Header />
        <StudentPortal />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black hero-background">
      <Header />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PlacementCompanies />
      <PlacementProcess />
      <SuccessStories />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppChat />
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        courseName={selectedCourse}
      />
    </div>
  );
}

export default App;