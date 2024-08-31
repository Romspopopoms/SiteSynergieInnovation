import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';
import SynergieInnovationPage from './pages/SynergieInnovation';
import Loader from './components/Loader'; // Import du loader
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 3000); // Loader disparaît après 3 secondes max
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence exitBeforeEnter>
        {!isLoading && (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/SynergieInnovation" element={<SynergieInnovationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Vérification si l'appareil est mobile en fonction de la largeur de l'écran
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Désactiver le loader pour les mobiles
      setIsInitialLoading(false);
    } else {
      // Loader sur les appareils non mobiles
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Insertion du script Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-87DN704803`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-87DN704803');
    };
  }, []);

  return (
    <HelmetProvider>
      {isInitialLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="flex flex-col xl:gap-y-12 w-full">
            <AppContent />
          </div>
        </Router>
      )}
    </HelmetProvider>
  );
};

export default App;
