// src/pages/Research.tsx

import React, { useState, useEffect } from "react";
import './Research.css';
import { MathJax } from 'better-react-mathjax';
import Markdown from "markdown-to-jsx"; 
// @ts-ignore

const Research: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch("/website-posts/content/Research.md") // Load the Markdown file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load homepage content");
        }
        return response.text();
      })
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error loading homepage:", error));
  }, []);

  return (
    <div className="research">
      <h1>Research</h1>
      <MathJax>
        <div className="p">
          <Markdown>{markdown}</Markdown>
        </div>
      </MathJax>
    </div>
  );
};

export default Research;