import { useEffect, useRef, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';
import RocketScroll from './components/RocketScroll'
import Footer from './components/Footer';
import Content from './content/Content.json';

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <RocketScroll />
      <div ref={headerRef}><Header /></div>
      {windowWidth <= 768 ? <Hamburger headerHeight={headerHeight} /> : <Navbar />}
      <div className="main-content">
        {/* Sections: Home, About, Research, Blog */}
        <div id="home" className="section">
          <div className="section-content">
            <h1>{Content.home.title}</h1>
            <p>{Content.home.content}</p>
          </div>
        </div>
        <div id="about" className="section">
          <div className="section-content">
            <h1>{Content.about.title}</h1>
            <p>{Content.about.content}</p>
          </div>
        </div>
        <div id="research" className="section">
          <div className="section-content">
            <h1>{Content.research.title}</h1>
            <p>{Content.research.content}</p>
          </div>
        </div>
        <div id="blog" className="section">
          <div className="section-content">
            <h1>{Content.blog.title}</h1>
            <p>{Content.blog.content}</p>
          </div>
        </div>
        <div id="contact" className="section-final">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;