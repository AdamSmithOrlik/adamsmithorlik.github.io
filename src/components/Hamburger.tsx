import React, { useState } from 'react';
import './Hamburger.css';

const Hamburger: React.FC<{ headerHeight: number }> = ({ headerHeight }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-icon" style={{ top: `${headerHeight-headerHeight}px` }} onClick={toggleMenu}> 
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#research">Research</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

// /* make the top 0 to resolve declare issue. headerHeight is called already in app.tsx, calling it here would double the effect. */
export default Hamburger;
