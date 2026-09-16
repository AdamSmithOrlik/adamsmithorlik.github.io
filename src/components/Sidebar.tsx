// src/components/Sidebar.tsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button type="button" className="hamburger" onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen} aria-controls="site-menu">
        <span className="line" aria-hidden="true"></span>
        <span className="line" aria-hidden="true"></span>
        <span className="line" aria-hidden="true"></span>
      </button>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div id="site-menu" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {/* Home link */}
            <li>
              <NavLink
                to="/"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Home
              </NavLink>
            </li>

            {/* Research link */}
            <li>
              <NavLink
                to="/research"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Research
              </NavLink>
            </li>

            {/* Writing link */}
            <li>
              <NavLink
                to="/writing"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Writing
              </NavLink>
            </li>

            {/* Reading link */}
            <li>
              <NavLink
                to="/reading"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Reading
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
