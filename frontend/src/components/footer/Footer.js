import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div id="footer-content">
                <div id="footer-links">
                    <Link to="/about">Privacy Policy</Link>
                    <Link to="/about">Terms of Use</Link>
                </div>
                <p>&copy; 2023 Prabhat Tiwari. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer