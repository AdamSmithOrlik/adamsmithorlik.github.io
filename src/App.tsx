import { useEffect, useRef, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import RocketScroll from './components/RocketScroll'
import Footer from './components/Footer';
import Content from './content/Content.json';


function App() {
  const headerRef = useRef<HTMLDivElement>(null); // Create a ref for the Header component
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Check if the headerRef.current is not null, then update headerHeight state
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <RocketScroll />
      <div ref={headerRef}><Header /></div>
      <Navbar />
      <div className="main-content" style={{ paddingTop: `${headerHeight}px` }}>
        {/* Sections: Home, About, Research, Blog */}
        <div id="home" className="section">
          <h1>{Content.home.title}</h1>
          <p>{Content.home.content}</p>
        </div>
        <div id="about" className="section">
          <h1>{Content.about.title}</h1>
          <p>{Content.about.content}</p>
        </div>
        <div id="research" className="section">
          <h1>{Content.research.title}</h1>
          <p>{Content.research.content}</p>
        </div>
        <div id="blog" className="section">
          <h1>{Content.blog.title}</h1>
          <p>{Content.blog.content}</p>
        </div>
        <div id="contact" className="section-final">
        <Footer />
        </div>
      </div>
      
    </>
  );
}

export default App;