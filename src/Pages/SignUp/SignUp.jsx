import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cssstyle from "./SignUp.module.css";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setMessageType("error");
            setMessage("Password must be at least 6 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setMessageType("error");
            setMessage("Passwords do not match. Please try again.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("eloraUsers")) || [];
        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = users.find(
            (user) => user.email === normalizedEmail
        );
        if (existingUser) {
            setMessageType("error");
            setMessage("This email is already registered. Please login.");
            return;
        }
        const newUser = {
            fullName: fullName.trim(),
            email: normalizedEmail,
            password: password
        };
        users.push(newUser);
        localStorage.setItem("eloraUsers", JSON.stringify(users));
        setMessageType("success");
        setMessage("Account created successfully! Welcome to ÉLORA.");
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <section className={cssstyle.signUpPage}>
            <div className={cssstyle.signUpBox}>
                <div className={cssstyle.signUpContent}>
                    <Link to="/" className={cssstyle.backHome}>
                        <i className="bi bi-arrow-left"></i>
                        Back to Home
                    </Link>

                    <div className={cssstyle.formWrapper}>
                        <span className={cssstyle.smallTitle}>
                            ÉLORA EXPERIENCE
                        </span>

                        <h1>Create Account</h1>

                        <p className={cssstyle.subtitle}>
                            Join ÉLORA and discover your signature fragrance.
                        </p>

                        <div className={cssstyle.decorativeLine}>
                            <span></span>
                            <i className="bi bi-flower1"></i>
                            <span></span>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className={cssstyle.inputGroup}>
                                <label htmlFor="fullName">Full Name</label>

                                <div className={cssstyle.inputWrapper}>
                                    <i className="bi bi-person"></i>

                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={cssstyle.inputGroup}>
                                <label htmlFor="email">Email Address</label>

                                <div className={cssstyle.inputWrapper}>
                                    <i className="bi bi-envelope"></i>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={cssstyle.inputGroup}>
                                <label htmlFor="password">Password</label>

                                <div className={cssstyle.inputWrapper}>
                                    <i className="bi bi-lock"></i>

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        minLength={6}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className={cssstyle.passwordToggle}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                    </button>
                                </div>
                            </div>

                            <div className={cssstyle.inputGroup}>
                                <label htmlFor="confirmPassword">Confirm Password</label>

                                <div className={cssstyle.inputWrapper}>
                                    <i className="bi bi-shield-lock"></i>

                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className={cssstyle.passwordToggle}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className={cssstyle.signUpButton}>
                                CREATE ACCOUNT
                                <i className="bi bi-arrow-right"></i>
                            </button>

                        </form>

                        {message && (
                            <div className={`${cssstyle.formMessage} ${cssstyle[messageType]}`}>
                                <i className={`bi ${messageType === "success" ? "bi-check-circle-fill" : "bi-exclamation-circle-fill"}`}></i>
                                <span>{message}</span>
                            </div>
                        )}

                        <div className={cssstyle.orDivider}>
                            <span></span>
                            <p>OR</p>
                            <span></span>
                        </div>

                        <p className={cssstyle.signIn}>
                            Already have an account?
                            <Link to="/login">Sign In</Link>
                        </p>

                        <p className={cssstyle.bottomNote}>
                            A signature scent, thoughtfully crafted for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
