import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import data from "./data"
import { auth } from "./config/firebase"
import { onAuthStateChanged } from "firebase/auth"

export default function App() {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
    const handleLogin = (credentials) => {
        setUser(credentials);
    };

    const handleSignUp = (userData) => {
        setUser(userData);
    };
    
    return (
        <div className="app-shell">
            <Navbar 
                onLoginClick={() => setShowLogin(true)} 
                onSignUpClick={() => setShowSignUp(true)}
            />
            <Hero />
            <section className="experiences-section" aria-labelledby="experiences-title">
                <div className="section-heading">
                    <span className="eyebrow">Curated this week</span>
                    <h2 id="experiences-title">Small-group adventures with local experts</h2>
                    <p>Handpicked workshops, tastings, tours, and active escapes across the world.</p>
                </div>
                <div className="cards-list">
                    {cards}
                </div>
            </section>
            <SignIn 
                show={showLogin}
                onLogin={handleLogin}
                onClose={() => setShowLogin(false)}
            />
            <SignUp 
                show={showSignUp}
                onSignUp={handleSignUp}
                onClose={() => setShowSignUp(false)}
            />
        </div>
    )
}
