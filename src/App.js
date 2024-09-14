import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader'; // Import du loader

// Lazy-loading des pages pour optimiser le bundle
const Home = lazy(() => import('./pages/HomePage'));
const SynergieInnovationPage = lazy(() => import('./pages/SynergieInnovation'));
const VoxUnity = lazy(() => import('./pages/Vox/VoxUnity'));
const VoxUnityLogo = lazy(() => import('./pages/Vox/VoxUnityLogo'));
const VoxUnityCharteGraphique = lazy(() => import('./pages/Vox/VoxUnityCharteGraphique'));
const VoxUnityWebDesign = lazy(() => import('./pages/Vox/VoxUnityWebDesign'));
const VoxUnityCom = lazy(() => import('./pages/Vox/VoxUnityCom'));
const Accueil = lazy(() => import('./pages/Imma/Accueil'));
const ImmaMissio = lazy(() => import('./pages/Imma/ImmaMissio'));
const ImmaMissioCharteGraphique = lazy(() => import('./pages/Imma/ImmaMissioCharteGraphique'));
const ImmaMissioWebDesign = lazy(() => import('./pages/Imma/ImmaMissioWebDesign'));
const ImmaMissioCom = lazy(() => import('./pages/Imma/ImmaMissioCom'));

const AppContent = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false); // Gestion du chargement des pages

  useEffect(() => {
    setIsPageLoading(true); // Démarre le chargement à chaque changement de route
    const timer = setTimeout(() => setIsPageLoading(false), 500); // 500ms pour donner un effet fluide
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isPageLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader /> {/* Loader seulement pendant le chargement de la page */}
          </motion.div>
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Animation plus rapide
          >
            <Suspense fallback={null}> {/* Pas de loader lors du suspense après le premier chargement */}
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/SynergieInnovation" element={<SynergieInnovationPage />} />
                <Route path="/VoxUnity" element={<VoxUnity />} />
                <Route path="/VoxUnityLogo" element={<VoxUnityLogo />} />
                <Route path="/VoxUnityCharteGraphique" element={<VoxUnityCharteGraphique />} />
                <Route path="/VoxUnityWebDesign" element={<VoxUnityWebDesign />} />
                <Route path="/VoxUnityCom" element={<VoxUnityCom />} />
                <Route path="/Accueil" element={<Accueil />} />
                <Route path="/ImmaMissio" element={<ImmaMissio />} />
                <Route path="/ImmaMissioCharteGraphique" element={<ImmaMissioCharteGraphique />} />
                <Route path="/ImmaMissioWebDesign" element={<ImmaMissioWebDesign />} />
                <Route path="/ImmaMissioCom" element={<ImmaMissioCom />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 2500); // Chargement initial de 2,5 secondes
    return () => clearTimeout(timer);
  }, []);

  // Intégration de Google Tag Manager uniquement si l'utilisateur n'est pas un robot comme React Snap
  useEffect(() => {
    if (navigator.userAgent !== 'ReactSnap') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-87DN704803`;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-87DN704803');
      };
    }
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
