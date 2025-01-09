import React from 'react';
import './Sidebar.css'; // We will create this CSS file next
import rocketImage from '../assets/rocket.png';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <img src={rocketImage} alt="Rocket" className="sidebar-icon" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
