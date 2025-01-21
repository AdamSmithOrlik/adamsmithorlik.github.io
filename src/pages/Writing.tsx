// src/pages/Writing.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Writing.css';

import metadata from '../blog-meta-data/metadata.json';


const Writing: React.FC = () => {
  return (
    <div className="writing">
      <h1>Writing</h1>
      <div className="cards-container">
        {metadata.map((data) => (
          <Link to={`/writing/${data.id}`} key={data.id} className="card">
            <div className="card-meta">
              <h3>{data.date}</h3>
              <h4>{data.subject}</h4>
            </div>
            <h2>{data.title}</h2>
            <p>{data.preview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Writing;