// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
        <MathJaxContext> 
        <div className="app">
            <Header />
            <Sidebar />
            <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
            </Routes>
            </div>
            <Footer />
        </div>
        </MathJaxContext>
    </Router>
  );
};

export default App;