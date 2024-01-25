import React from 'react';
import './Footer.css'; // We will create this CSS file next

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <ul>
                    <li>Email: example@email.com</li>
                    <li>LinkedIn: linkedin.com/in/yourprofile</li>
                    {/* Add more contact methods as needed */}
                </ul>
            </div>
            <div className="footer-copy">
                © {new Date().getFullYear()} Adam Smith Orlik. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;