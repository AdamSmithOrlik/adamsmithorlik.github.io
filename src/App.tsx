// src/App.tsx

import React from 'react';
// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Writing from './pages/Writing';
import Research from './pages/Research';
// Blogs
import ExampleBlog from './pages/Blogs';
// Imports
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
                <Route path="/writing" element={<Writing />} />
                <Route path="/writing/:id" element={<ExampleBlog />} />
            </Routes>
            </div>
            <Footer />
        </div>
        </MathJaxContext>
    </Router>
  );
};

export default App;