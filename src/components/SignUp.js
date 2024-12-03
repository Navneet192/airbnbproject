import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import '../styles/styling/SignUp.css';

export default function SignUp({ onSignUp, onClose, show }) {
    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [userData, setUserData] = useState(initialState);

   
    useEffect(() => {
        if (!show) {
            setUserData(initialState);
        }
    }, [show]);

    if (!show) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            );
            alert("Account created successfully! Welcome to Airbnb.");
            onSignUp({ ...userData, uid: result.user.uid });
            setUserData(initialState); 
            onClose();
        } catch (error) {
            console.error("Error signing up:", error.message);
            alert(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert("Successfully signed up with Google! Welcome to Airbnb.");
            onSignUp(result.user);
            setUserData(initialState); 
            onClose();
        } catch (error) {
            console.error("Error signing up with Google:", error.message);
            alert(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <button type="button" className="close-button" onClick={onClose}>×</button>
                    <h2>Sign up</h2>
                    <p className="signup-subtitle">Welcome to Airbnb</p>
                    
                    <button 
                        type="button" 
                        className="google-login-button"
                        onClick={handleGoogleSignUp}
                    >
                        <img 
                            src="/images/google.png" 
                            alt="Google" 
                            className="google-icon"
                        />
                        Continue with Google
                    </button>

                    <div className="divider">
                        <span>or</span>
                    </div>
                    
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={userData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                        <p className="password-requirements">
                            Password must be at least 8 characters long
                        </p>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="login-button">Sign up</button>
                    
                    <p className="terms-text">
                        By selecting Sign up or Continue with Google, I agree to Airbnb's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
                    </p>
                </form>
            </div>
        </div>
    );
}
