import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import metadata from "../blog-meta-data/metadata.json";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import "./Blogs.css";

// Define the metadata structure
interface BlogMeta {
  id: string;
  title: string;
  date: string;
  subject: string;
}

// Author name (if needed)
const author = "Adam Smith-Orlik";

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

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get blog ID from the URL
  const [markdown, setMarkdown] = useState<string>(""); // Markdown content state
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Find the blog metadata from the JSON
  const blogMeta: BlogMeta | undefined = metadata.find((b) => b.id === id);

  useEffect(() => {
    if (!id) return;

    const markdownPath = `/website-posts/publish/${id}.md`; // Correct path to Markdown file

    fetch(markdownPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Markdown file not found: ${id}.md`);
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
        setError("Blog content could not be loaded.");
        setIsLoading(false);
      });
  }, [id]);

  // Handle missing metadata
  if (!blogMeta) {
    return <div className="blog-error">Blog metadata not found.</div>;
  }

  return (
    <div className="blog">
      <h1>{author}</h1>
      <div className="blog-meta">
        <span>{blogMeta.date}</span>
        <span>{blogMeta.subject}</span>
      </div>

      <hr className="blog-divider" />

      {error ? (
        <div className="blog-error">{error}</div>
      ) : (
        <div className="blog-content">
          {!isLoading && (
            <MathJaxContext>
              <MathJax>
                <Markdown options={markdownOptions}>{markdown}</Markdown>
              </MathJax>
            </MathJaxContext>
          )}
        </div>
      )}

      <div className="blog-end-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  );
};

export default Blog;


