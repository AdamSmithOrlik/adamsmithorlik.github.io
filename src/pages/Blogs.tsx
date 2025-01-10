import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../content/blogs/blogs.json';
import './Blogs.css';

// author of the blog
const author = 'Adam Smith-Orlik';

const ExampleBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the blog by ID
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="blog-error">Blog post not found.</div>;
  }

  return (
    <div className="blog">
      <h1>{blog.title}</h1>
        <h2>{author}</h2>
      <div className="blog-meta">
        <span>{blog.date}</span>
        <span>{blog.subject}</span>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <div className="blog-end-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  );
};

export default ExampleBlog;
