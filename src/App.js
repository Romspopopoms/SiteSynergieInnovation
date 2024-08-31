import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';
import SynergieInnovationPage from './pages/SynergieInnovation';
import Loader from './components/Loader'; // Import du loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de ressources de 2 secondes
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 3000); // Vous pouvez ajuster le temps
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
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

              {/* Ajoutez d'autres routes ici pour vos autres pages */}
            </Routes>
          </div>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;
