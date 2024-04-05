import React from 'react';
import './RocketScroll.css'; // Import your CSS stylesheet
import rocketImage from '../assets/rocket.png'; // Path to your logo

const RocketScroll: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds smooth scrolling
        });
    };

    return (
        <img 
            src={rocketImage} 
            alt="Rocket Logo" 
            className="dropbtn-rocket" 
            onClick={scrollToTop}
        />
    );
}

export default RocketScroll;