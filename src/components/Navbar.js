import React from "react";
import '../styles/styling/Navbar.css';

export default function Navbar({ onLoginClick, onSignUpClick }) {
    return (
        <nav>
            <a href="/" className="nav--brand" aria-label="Airbnb experiences home">
                <img src="../images/airbnb-logo.png" className="nav--logo" alt="airbnb logo" />
                <span>Atlas Stays</span>
            </a>
            <div className="nav--links" aria-label="Primary navigation">
                <a href="#experiences-title">Experiences</a>
                <a href="#experiences-title">Cities</a>
                <a href="#experiences-title">Guides</a>
            </div>
            <div className="nav--buttons">
                <button className="nav--login-button" onClick={onLoginClick}>
                    Sign in
                </button>
                <button className="nav--signup-button" onClick={onSignUpClick}>
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
