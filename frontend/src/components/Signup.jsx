import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required!";
        if (!formData.email) newErrors.email = "Email is required!";
        if (!formData.password) newErrors.password = "Password is required!";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
            toast.success(response.data.message);
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <>
            <Toaster />
            <div className="d-flex justify-content-center align-items-center vh-100"
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/carousel_img7.jpg")`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', overflow: 'hidden'
                }}>

                <div className="p-4 rounded-4 shadow-lg text-white"
                    style={{ width: '350px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: "15px" }}>

                    <h2 className="text-center fw-bold mb-3">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <input type="text" className="form-control text-white bg-transparent border-white placeholder-white"
                                placeholder="Name" name="name" value={formData.name} onChange={handleInputChange}
                                style={{ borderRadius: '20px' }} />
                            <div className="text-danger small">{errors.name}</div>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control text-white bg-transparent border-white"
                                placeholder="E-mail" name="email" value={formData.email} onChange={handleInputChange}
                                style={{ borderRadius: '20px' }} />
                            <div className="text-danger small">{errors.email}</div>
                        </div>
                        <div className="mb-3 position-relative">
                            <input type={showPassword ? "text" : "password"} className="form-control text-white bg-transparent border-white"
                                placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}
                                style={{ borderRadius: '20px' }} />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="position-absolute end-0 top-50 translate-middle-y me-3 text-white" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }} />
                            <div className="text-danger small">{errors.password}</div>
                        </div>
                        <div className="mb-3 position-relative">
                            <input type={showConfirmPassword ? "text" : "password"} className="form-control text-white bg-transparent border-white"
                                placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}
                                style={{ borderRadius: '20px' }} />
                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="position-absolute end-0 top-50 translate-middle-y me-3 text-white" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }} />
                            <div className="text-danger small">{errors.confirmPassword}</div>
                        </div>
                        <button type="submit" className="btn btn-light w-100 fw-bold rounded-pill"> Sign up </button>
                    </form>
                    <p className="mt-3 text-center">
                        Already have an Account? <Link to="/login" className="text-info">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;