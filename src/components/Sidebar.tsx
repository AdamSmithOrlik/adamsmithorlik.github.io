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
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
