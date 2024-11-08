import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';
import Home from './pages/Home/Home';  
import About from './pages/About/About';  
import Services from './pages/Services/Services';
import Clients from './pages/Clients/Clients'; 
import Contact from './pages/Contact/Contact'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingIcons />
    </Router>
  );
}

export default App;
