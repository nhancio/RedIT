import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PlacementCompanies from './components/PlacementCompanies';
import PlacementProcess from './components/PlacementProcess';
import SuccessStories from './components/SuccessStories';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ServicesSection />
      <PlacementCompanies />
      <PlacementProcess />
      <SuccessStories />
      <ContactSection />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;