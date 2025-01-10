// src/pages/Research.tsx

import React from 'react';
import './Home.css';
import { MathJax } from 'better-react-mathjax';
// @ts-ignore
import researchContent from '../content/researchContent';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>{researchContent.title}</h1>
      <h2>{researchContent.subtitle}</h2>
      <p>
      <MathJax> {researchContent.content} </MathJax> 
      </p>
    </div>
  );
};

export default Home;