import React from 'react';
import './Footer.css'; // Ensure to update the CSS file with the provided styles

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Email: <a href="mailto:asorlik@yorku.ca">asorlik@yorku.ca</a> </li>
                    <li>Personal Email: <a href="mailto:adam.smith2214@gmail.com">adam.smith2214@gmail.com</a> </li>
                    <li>Number: 1+(613)-898-4555</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Socials</h3>
                <ul>
                    {/* Social media links */}
                    <li>GitHub: <a href="https://github.com/AdamSmithOrlik" target="_blank" rel="noopener noreferrer">github.com/AdamSmithOrlik</a></li>
                    <li>Twitter: <a href="https://twitter.com/AddySmith4" target="_blank" rel="noopener noreferrer">@AddySmith4</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/adam-smith-orlik-4a7b99211/" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-smith-orlik</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/addy_2214/" target="_blank" rel="noopener noreferrer">@addy_2214</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Affiliations</h3>
                <ul>
                    {/* Affiliation links or text */}
                    <li>York University</li>
                    <li>Department of Physics and Astronomy</li>
                    {/* Add more affiliations as needed */}
                </ul>
            </div>
            <div className="footer-rights">
                © {new Date().getFullYear()} Adam Smith Orlik. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;