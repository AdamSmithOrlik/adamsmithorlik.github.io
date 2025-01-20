import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import metadata from "../content/blog-metadata/metadata.json";
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

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get blog ID from the URL
  const [markdown, setMarkdown] = useState<string>(""); // Markdown content state
  const [error, setError] = useState<string | null>(null);

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
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
        setError("Blog content could not be loaded.");
      });
  }, [id]);

  // Handle missing metadata
  if (!blogMeta) {
    return <div className="blog-error">Blog metadata not found.</div>;
  }

  return (
    <div className="blog">
      {/* Dont need a title  */}
      {/* <h1>{blogMeta.title}</h1>  */}
      <h2>{author}</h2>
      <div className="blog-meta">
        <span>{blogMeta.date}</span>
        <span>{blogMeta.subject}</span>
      </div>

      {error ? (
        <div className="blog-error">{error}</div>
      ) : (
        <div className="blog-content">
          <Markdown>{markdown}</Markdown>
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



// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Markdown from "markdown-to-jsx";
// import metadata from '../content/blog-metadata/metadata.json';
// import './Blogs.css';

// // author of the blog
// const author = 'Adam Smith-Orlik';

// const ExampleBlog: React.FC = () => {
//   // // Find the blog by ID
//   const metadat = metadata.find((b) => b.id === id);

//   if (!metadat) {
//     return <div className="blog-error">Blog post not found.</div>;
//   }

//   return (
//     <div className="blog">
//       <h1>{metadat.title}</h1>
//         <h2>{author}</h2>
//       <div className="blog-meta">
//         <span>{metadat.date}</span>
//         <span>{metadat.subject}</span>
//       </div>
//       <div
//         className="blog-content"
//         // dangerouslySetInnerHTML={{ __html: metadat.content }}
//       ></div>
//       <div className="blog-end-dots">
//         <span>•</span>
//         <span>•</span>
//         <span>•</span>
//       </div>
//     </div>
//   );
// };

// export default ExampleBlog;
