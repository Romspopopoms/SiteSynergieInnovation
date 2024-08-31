import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';
import SynergieInnovationPage from './pages/SynergieInnovation';
import Loader from './components/Loader'; // Import du loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Loader pour mobile
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Forcer le rendu après 3 secondes
      return () => clearTimeout(timer);
    } else {
      // Loader pour non mobile
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 3000);
      };

      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
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
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <Router>
            <div className="flex flex-col xl:gap-y-12 w-full">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/SynergieInnovation" element={<SynergieInnovationPage />} />
                {/* Ajoutez d'autres routes ici pour vos autres pages */}
              </Routes>
            </div>
          </Router>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
