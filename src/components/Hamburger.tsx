import React, { useState, useRef, useEffect } from 'react';
import './Hamburger.css';

interface HamburgerProps {
  headerHeight: number;
}

const Hamburger: React.FC<HamburgerProps> = ({ headerHeight }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);  // Typing the ref for a div element

    // Toggle the menu open/closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle clicks outside the menu
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Close the menu if clicking outside
            }
        }

        // Add event listener for mouse down
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);  // Include menuRef in the dependency array to ensure proper cleanup

    return (
        <div ref={menuRef} className="menu-icon" style={{ top: `${headerHeight-headerHeight}px` }} onClick={toggleMenu}>
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

export default Hamburger;

