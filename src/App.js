import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';
import SynergieInnovationPage from './pages/SynergieInnovation';
import Loader from './components/Loader'; // Import du loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérification si l'appareil est mobile en fonction de la largeur de l'écran
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Désactiver le loader pour les mobiles
      setIsLoading(false);
    } else {
      // Loader sur les appareils non mobiles
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
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
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="flex flex-col xl:gap-y-12 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SynergieInnovation" element={<SynergieInnovationPage />} />
              {/* Redirection par défaut vers la page d'accueil */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;
