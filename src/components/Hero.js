import React from "react";
import '../styles/styling/Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src="../images/photo-grid.png" className="hero--photo" alt="hero" />
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}
