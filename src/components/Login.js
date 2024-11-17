import React, { useState } from 'react';
import '../styles/styling/Login.css';

export default function Login({ onLogin, onClose, show }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email && credentials.password) {
            onLogin(credentials);
            onClose();
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log("Logging in with Google");
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

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <button 
                        type="button" 
                        className="close-button"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <h2>Login</h2>
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
                    <button type="submit" className="login-button">Login</button>
                    
                    <div className="divider">
                        <span>or</span>
                    </div>

                    <button 
                        type="button" 
                        className="google-login-button"
                        onClick={handleGoogleLogin}
                    >
                        <img 
                            src="../images/google.jpg" 
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