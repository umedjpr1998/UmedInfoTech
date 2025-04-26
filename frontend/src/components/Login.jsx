import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();


    const validateForm = () => {
        let isValid = true;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            setEmailError("Email is required!");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Enter a valid email!");
            isValid = false;
        } else {
            setEmailError("");
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!password) {
            setPasswordError("Password is required!");
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 6 characters & contain a number!");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop if validation fails
        }

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log("API Response:", response.data);

            if (response.data?.success) {
                toast.success('Login successful!');
                navigate('/products');
            } else {
                toast.error('Invalid credentials!');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed!");
        }
    };


    return (
        <div className='login' style={{
            backgroundImage: "url('/assets/carousel_img9.jpg')",
            backgroundSize: "cover", backgroundPosition: "center", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <Toaster />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="p-4 rounded-4 shadow-lg text-white" style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)", borderRadius: "15px",
                    padding: "40px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", textAlign: "center", color: "white", width: "350px"
                }}>

                    <h2 className="text-center fw-bold mb-3">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">

                            <style>
                                {`.custom-input::placeholder {color:white;}`}
                            </style>
                            <input type="email" className="form-control text-white border-white bg-transparent custom-input" style={{ borderRadius: "20px", border: "2px solid white" }} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className="text-danger small">{emailError}</div>
                        </div>


                        <div className="mb-3">
                            <input type="password" className="form-control text-white border-white bg-transparent custom-input" style={{ borderRadius: "20px", border: "2px solid white" }} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="text-danger small">{passwordError}</div>
                        </div>


                        <button type="submit" className="btn btn-light w-100 fw-bold rounded-pill">Login</button>
                    </form>
                    <p className="mt-3 text-center">
                        Don't have an Account? <Link to="/signup" className="text-info">Sign UP</Link>
                    </p>


                </div>
            </div>
        </div>
    );
}

export default Login;