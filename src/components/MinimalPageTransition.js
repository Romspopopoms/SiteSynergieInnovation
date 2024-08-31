import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MinimalPageTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 500); // Ajustez ce délai selon vos besoins
    return () => clearTimeout(timer);
  }, [location]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="h-full w-1/3 bg-white animate-slide"></div>
      </div>
    </div>
  );
};

export default MinimalPageTransition;