import React, { useState, useEffect } from 'react';
import { auth, googleProvider, isFirebaseConfigured } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import '../styles/styling/Login.css';

export default function SignIn({ onLogin, onClose, show }) {
    const initialState = {
        email: '',
        password: ''
    };

    const [credentials, setCredentials] = useState(initialState);

    useEffect(() => {
        if (!show) {
            setCredentials(initialState);
        }
    }, [show]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured || !auth) {
            alert('Firebase is not configured yet. Add your REACT_APP_FIREBASE_* values to .env to enable sign in.');
            return;
        }

        try {
            await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            );
            alert("Successfully signed in!");
            onLogin(credentials);
            setCredentials(initialState); 
            onClose();
        } catch (error) {
            console.error("Error signing in:", error.message);
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        if (!isFirebaseConfigured || !auth || !googleProvider) {
            alert('Firebase is not configured yet. Add your REACT_APP_FIREBASE_* values to .env to enable Google sign in.');
            return;
        }

        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert("Successfully signed in with Google!");
            onLogin(result.user);
            setCredentials(initialState); 
            onClose();
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
            alert(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <button type="button" className="close-button" onClick={onClose}>×</button>
                    <h2>Sign in</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign in</button>
                    
                    <div className="divider">
                        <span>or</span>
                    </div>

                    <button 
                        type="button" 
                        className="google-login-button"
                        onClick={handleGoogleSignIn}
                    >
                        <img 
                            src="/images/google.png"
                            alt="Google" 
                            className="google-icon"
                        />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
}
