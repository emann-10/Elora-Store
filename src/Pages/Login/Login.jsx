import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import cssstyle from "./Login.module.css";
import loginImage from "../../assets/login-perfume.jpg";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
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
        const users = JSON.parse(localStorage.getItem("eloraUsers")) || [];
        const normalizedEmail = email.trim().toLowerCase();
        const user = users.find(
            (user) =>
                user.email === normalizedEmail &&
                user.password === password
        );
        if (user) {
            setMessageType("success");
            setMessage(`Login Successful! Welcome, ${user.fullName}.`);

            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("/");
            }, 1000);

        } else {
            setMessageType("error");
            setMessage("Login Failed! Please check your email and password.");
        }
    };
    return (
        <section className={cssstyle.loginPage}>
            <div className={cssstyle.loginBox}>
                <div className={cssstyle.loginImage}>
                    <img src={loginImage} alt="ÉLORA luxury perfume" />
                    <div className={cssstyle.imageContent}>
                        <p>WELCOME TO ÉLORA</p>
                        <h2>Discover the art of fragrance.</h2>
                        <span>Elegance in every drop.</span>
                    </div>
                </div>

                <div className={cssstyle.loginContent}>
                    <Link to="/" className={cssstyle.backHome}>
                        <i className="bi bi-arrow-left"></i>
                        Back to Home
                    </Link>

                    <div className={cssstyle.formWrapper}>
                        <span className={cssstyle.smallTitle}>
                            ÉLORA EXPERIENCE
                        </span>

                        <h1>Welcome Back</h1>
                        <p className={cssstyle.subtitle}>
                            Sign in to continue your fragrance journey.
                        </p>
                        <div className={cssstyle.decorativeLine}>
                            <span></span>
                            <i className="bi bi-flower1"></i>
                            <span></span>
                        </div>

                        <form onSubmit={handleSubmit}>
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
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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

                            <div className={cssstyle.formOptions}>
                                <label className={cssstyle.rememberMe}>
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    Remember Me
                                </label>

                                <Link to="/forgot-password">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className={cssstyle.loginButton}
                            >
                                SIGN IN
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

                        <p className={cssstyle.createAccount}>
                            Don't have an account?
                            <Link to="/register">Create Account</Link>
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
