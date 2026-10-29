import React from 'react';
import '@/App.css';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import CookieConsent from './components/CookieConsent';

// file:// cannot serve deep links; keep normal browser URLs for the website.
const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

function App() {
  return (
    <div className="App">
      <Router>
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:service" element={<ServiceDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
