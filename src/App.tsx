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
import Reading from './pages/Reading';
// Blogs
import Blog from './pages/Blogs';
// Imports
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';


const mathJaxConfig = {
  loader: { load: ["[tex]/html"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]], // Enables both $...$ and \( ... \) for inline math
    displayMath: [["$$", "$$"], ["\\[", "\\]"]], // Enables both $$...$$ and \[ ... \] for block math
    tags: "none", // Disable automatic equation numbering for now
    packages: { "[+]": ["html"] }
  },
  startup: {
    typeset: true
  }
};

// Layout component to conditionally hide the Header on blog pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/writing/"); // Check if we are on a blog post page

  return (
    <div className="app">
      {!isBlogPost && <Header />} {/* Hide Header only for blog posts */}
      <Sidebar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MathJaxContext config={mathJaxConfig}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:id" element={<Blog />} />
            <Route path="/reading" element={<Reading />} />
          </Routes>
        </Layout>
      </MathJaxContext>
    </Router>
  );
};

export default App;
