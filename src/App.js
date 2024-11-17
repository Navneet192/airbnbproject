import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import data from "./data"

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
    const handleLogin = (credentials) => {
        setIsLoggedIn(true);
    };

    const handleSignUp = (userData) => {
        console.log("New user signed up:", userData);
        setIsLoggedIn(true);
    };
    
    return (
        <div>
            <Navbar 
                onLoginClick={() => setShowLogin(true)} 
                onSignUpClick={() => setShowSignUp(true)}
            />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
            <Login 
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