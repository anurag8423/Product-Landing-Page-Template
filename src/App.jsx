import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.page';
import Contact from './pages/Contact.page';

import Preloader from "./components/Preloader.component.jsx";
import Navbar from './components/Navbar.component';
import Footer from './components/Footer.component';
import JumpToTop from './components/JumpToTop.component';

function App() {
  return (
    <>
      <Preloader />
      <Router>
        <div className="bg-indigo-100 dark:bg-slate-900 light:bg-indigo-100 text-gray-900 dark:text-gray-300 tracking-[-0.01em] flex min-h-screen min-w-screen flex-col overflow-x-hidden font-hk">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <JumpToTop />
        </div>
      </Router>
    </>
  );
}

export default App;
