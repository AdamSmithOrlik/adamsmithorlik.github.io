// src/pages/Writing.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Writing.css';

import blogs from '../content/blogs/blogs.json';


const Writing: React.FC = () => {
  return (
    <div className="writing">
      <h1>Writing</h1>
      <div className="cards-container">
        {blogs.map((blog) => (
          <Link to={`/writing/${blog.id}`} key={blog.id} className="card">
            <div className="card-meta">
              <h3>{blog.date}</h3>
              <h4>{blog.subject}</h4>
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.preview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Writing;