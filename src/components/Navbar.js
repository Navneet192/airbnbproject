import React from "react";
import '../styles/styling/Navbar.css';

export default function Navbar({ onLoginClick, onSignUpClick }) {
    return (
        <nav>
            <img src="../images/airbnb-logo.png" className="nav--logo" alt="airbnb logo" />
            <div className="nav--buttons">
                <button className="nav--login-button" onClick={onLoginClick}>
                    Login
                </button>
                <button className="nav--signup-button" onClick={onSignUpClick}>
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
