import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';
import SynergieInnovationPage from './pages/SynergieInnovation';
import VoxUnity from "./pages/VoxUnity"
import VoxUnityLogo from "./pages/VoxUnityLogo"
import VoxUnityCharteGraphique from "./pages/VoxUnityCharteGraphique"
import Loader from './components/Loader'; // Import du loader
import { AnimatePresence, motion } from 'framer-motion';
import VoxUnityWebDesign from './pages/VoxUnityWebDesign';
import VoxUnityCom from './pages/VoxUnityCom';


const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 4000); // Prolongation de la durée de l'animation
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence mode='wait'>
        {!isLoading && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Prolongation de la transition pour éviter les éclats blancs
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/SynergieInnovation" element={<SynergieInnovationPage />} />
              <Route path="/VoxUnity" element={<VoxUnity />} />
              <Route path="/VoxUnityLogo" element={<VoxUnityLogo />} />
              <Route path="/VoxUnityCharteGraphique" element={<VoxUnityCharteGraphique />} />
              <Route path="/VoxUnityWebDesign" element={<VoxUnityWebDesign />} />
              <Route path="/VoxUnityCom" element={<VoxUnityCom />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setIsInitialLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 4000); // Alignement avec la durée de la transition
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
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
