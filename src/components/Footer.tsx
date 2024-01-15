import React from 'react';
import './Footer.css'; // We will create this CSS file next

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Adam Smith Orlik. All rights reserved.
        </footer>
    );
}

export default Footer;