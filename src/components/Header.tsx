// src/components/Header.tsx

import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './Header.css';

const Header = () => {
  const mathName = '\\mathcal{Ad} \\alpha \\mathcal{m} \\; \\delta \\mathcal{m}it\\hbar \\; \\Theta \\vec{r} \\mathcal{l} \\iota \\kappa';
  const subtitle = 'PhD Candidate in Physics at York University, Toronto, Canada';

  return (
    <header className="header">
      <MathJaxContext>
        <MathJax>{`\\(${mathName}\\)`}</MathJax>
      </MathJaxContext>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
};

export default Header;