import {React, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col xl:gap-y-12 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ajoutez d'autres routes ici pour vos autres pages */}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
