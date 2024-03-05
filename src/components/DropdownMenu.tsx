import React, { useState } from 'react';
import './DropdownMenu.css'; // Create and import your styles
import rocketImage from '../assets/rocket.png';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
             <img src={rocketImage} alt="Menu" className="dropbtn-rocket" />
            {isOpen && (
                <div className="dropdown-content">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#research">Research</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;