import React from 'react';
import './Header.css';
import logo from '../assets/web_logo.png'; 
import DropdownMenu from './DropdownMenu.tsx';


const Header: React.FC = () => {
    return (
        <header className="header">
            <DropdownMenu />
            <h1>Adam Smith Orlik</h1>
            <p className="subtitle">PhD Student, Theoretical Physics</p>
            <p className="subtitle">York University, Toronto, Canada</p>
            <img src={logo} alt="Logo" className="header-logo" />
        </header>
    );
};


export default Header;

