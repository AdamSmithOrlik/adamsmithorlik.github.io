// src/pages/Research.tsx

import React, { useState, useEffect } from "react";
import './Research.css';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Markdown from "markdown-to-jsx";

const markdownOptions = {
  forceBlock: true,
  overrides: {
    p: {
      component: 'div' as const,
      props: {
        className: 'p'
      }
    }
  }
};

const Research: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/website-posts/content/Research.md") // Load the Markdown file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load homepage content");
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading homepage:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="research">
      <h1>Research</h1>
      {!isLoading && (
        <MathJaxContext>
          <MathJax>
            <Markdown options={markdownOptions}>{markdown}</Markdown>
          </MathJax>
        </MathJaxContext>
      )}
    </div>
  );
};

export default Research;