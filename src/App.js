import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap') {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 2500); // Chargement réduit à 2 secondes
      return () => clearTimeout(timer);
    }
  }, [location]);

  // Génère l'URL canonique basée sur l'URL actuelle
  const currentUrl = `https://synergieinnovation.fr${location.pathname}`;

  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          >
            <Helmet>
              {/* URL Canonical dynamique pour chaque page */}
              <link rel="canonical" href={currentUrl} />
            </Helmet>

            <Suspense fallback={<Loader />}>
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
    if (navigator.userAgent === 'ReactSnap') {
      setIsInitialLoading(false);
    } else {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setIsInitialLoading(false);
      } else {
        const timer = setTimeout(() => {
          setIsInitialLoading(false);
        }, 4000); // Réduction du temps de chargement initial à 2 secondes
        return () => clearTimeout(timer);
      }
    }
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
