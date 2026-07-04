import React from "react";
import '../styles/styling/Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />
            <div className="hero-content">
                <div className="hero-copy">
                    <span className="eyebrow">Live like you landed on purpose</span>
                    <h1 className="hero--header">Book vivid stays and rare local experiences.</h1>
                    <p className="hero--text">Swap generic itineraries for chef-led kitchens, golden-hour walks, coastal movement sessions, and culture-rich days hosted by people who know the place best.</p>
                    <div className="hero-actions">
                        <a className="hero-primary" href="#experiences-title">Explore trips</a>
                        <button className="hero-secondary" type="button">Watch preview</button>
                    </div>
                    <div className="hero-stats" aria-label="Marketplace highlights">
                        <span><strong>12</strong> cities</span>
                        <span><strong>4.8</strong> avg rating</span>
                        <span><strong>1.4k</strong> reviews</span>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="../images/photo-grid.png" className="hero--photo" alt="Travel experience collage" />
                    <div className="hero-card hero-card-top">Tonight in Tokyo</div>
                    <div className="hero-card hero-card-bottom">Only 6 seats left</div>
                </div>
            </div>
        </section>
    );
}
