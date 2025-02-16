import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const btnPopup = document.querySelector(".btnLogin-popup");
        const iconClose = document.querySelector(".icon-close");

        const handleButtonClick = () => {
            if (wrapper) {
                wrapper.classList.add("active-popup");
            }
        };

        const handleIconClick = () => {
            if (wrapper) {
                wrapper.classList.remove("active-popup");
            }
        };

        if (btnPopup) {
            btnPopup.addEventListener("click", handleButtonClick);
        }
        if (iconClose) {
            iconClose.addEventListener("click", handleIconClick);
        }

        return () => {
            if (btnPopup) {
                btnPopup.removeEventListener("click", handleButtonClick);
            }
            if (iconClose) {
                iconClose.removeEventListener("click", handleIconClick);
            }
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulated authentication
        if (username === "user" && password === "password") {
            alert("Login successful!");
            navigate("/home"); // Redirect to HomePage
        } else {
            alert("Invalid credentials. Try again.");
        }
    };

    return (
        <div>
            {/* Header */}
            <header>
                <h2 className="Logo">Logo</h2>
                <nav className="navigation">
                    <a href="#">About Us</a>
                    <a href="#">Profile</a>
                    <a href="#">Contact</a>
                    <button className="btnLogin-popup">Login</button>
                </nav>
            </header>

            {/* Login Form */}
            <div className="wrapper">
                <span className="icon-close">
                    <FaTimes />
                </span>

                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">
                            Login
                        </button>
                        <div className="register-link">
                            <p>
                                Don't have an account? <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
