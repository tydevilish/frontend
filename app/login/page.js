"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Username validation
        if (!formData.username) {
            newErrors.username = "กรุณากรอกชื่อผู้ใช้";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "กรุณากรอกรหัสผ่าน";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid, proceed with login
            console.log("Login data:", formData);
            // Here you would typically call your login API
        }
    };
    return (
        <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
            <div className="container px-4 px-lg-5">
                <div className="row gx-5 justify-content-center" style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-header bg-card text-white text-center py-4 border-0">
                                <div className="mb-2">
                                    <i className="bi bi-person-circle display-6"></i>
                                </div>
                                <h4 className="fw-bold mb-0">เข้าสู่ระบบ</h4>
                            </div>
                            <div className="card-body p-5">


                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-4">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.username ? "is-invalid border border-danger focus-ring-danger" : ""}`}
                                            id="usernameInput"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="ชื่อผู้ใช้"
                                        />
                                        {errors.username && (
                                            <div className="invalid-feedback">
                                                <i className="bi bi-exclamation-circle me-1"></i>
                                                {errors.username}
                                            </div>
                                        )}
                                        <label htmlFor="usernameInput">ชื่อผู้ใช้</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className={`form-control form-control-lg ${errors.password ? "is-invalid border border-danger focus-ring-danger" : ""
                                                }`}
                                            id="passwordInput"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="รหัสผ่าน"
                                        />

                                        {errors.password && (
                                            <div className="invalid-feedback">
                                                <i className="bi bi-exclamation-circle me-1"></i>
                                                {errors.password}
                                            </div>
                                        )}
                                        <label htmlFor="passwordInput">รหัสผ่าน</label>
                                    </div>

                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="rememberCheck"
                                                name="rememberMe"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="rememberCheck">
                                                จดจำฉัน
                                            </label>
                                        </div>
                                        <a href="#" className="text-decoration-none forgot-link">ลืมรหัสผ่าน?</a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg w-100 mb-4 login-btn"
                                    >
                                        <span className="btn-text">เข้าสู่ระบบ</span>
                                        <i className="bi bi-box-arrow-in-right ms-2 btn-icon"></i>
                                    </button>

                                    <div className="text-center">
                                        <p className="mb-0">ยังไม่มีบัญชี? <Link href="/register" className="text-decoration-none register-link">สมัครสมาชิก</Link></p>
                                    </div>
                                </form>

                                <div className="divider d-flex align-items-center my-4">
                                    <span className="divider-text">หรือเข้าสู่ระบบด้วย</span>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-primary social-btn">
                                        <i className="bi bi-google me-2"></i> Google
                                    </button>
                                    <button className="btn btn-outline-primary social-btn">
                                        <i className="bi bi-facebook me-2"></i> Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    /* Section Styling */
                    .section-badge {
                        background-color: rgba(78, 115, 223, 0.1);
                        padding: 8px 16px;
                        border-radius: 30px;
                        margin-bottom: 20px;
                    }
                    
                    .badge-text {
                        color: #4e73df;
                        font-weight: 600;
                        font-size: 0.9rem;
                        letter-spacing: 1px;
                    }
                    
                    /* Card Styling */
                    .rounded-4 {
                        border-radius: 1rem !important;
                    }
                    
                    .card {
                        transform: translateY(0);
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    
                    .card:hover {
                        transform: translateY(-10px);
                    }
                    
                    /* Form Styling */
                    .form-control {
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                    }
                    
                    .form-control:focus {
                        border-color: #4e73df;
                        box-shadow: 0 0 0 0.25rem rgba(78, 115, 223, 0.25);
                    }
                    
                    .form-check-input:checked {
                        background-color: #4e73df;
                        border-color: #4e73df;
                    }
                    
                    /* Button Styling */
                    .login-btn {
                        background-color: #4e73df;
                        border: none;
                        box-shadow: 0 4px 10px rgba(78, 115, 223, 0.3);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                        height: 56px;
                    }

                                        .bg-card {
                        background-color: #4e73df;
                    }

                                        .bg-card:hover {
                        box-shadow: 0 6px 15px rgba(78, 115, 223, 0.4);
                    }

                                        .bg-card::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
                        transition: all 0.6s ease;
                    }
                    
                    .bg-card:hover::after {
                        left: 100%;
                    }

                    
                    .login-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 6px 15px rgba(78, 115, 223, 0.4);
                    }
                    
                    .login-btn::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
                        transition: all 0.6s ease;
                    }
                    
                    .login-btn:hover::after {
                        left: 100%;
                    }
                    
                    .btn-icon {
                        transition: transform 0.3s ease;
                    }
                    
                    .login-btn:hover .btn-icon {
                        transform: translateX(3px);
                    }
                    
                    /* Social Buttons */
                    .social-btn {
                        border-width: 2px;
                        transition: all 0.3s ease;
                        height: 48px;
                    }
                    
                    .social-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Divider */
                    .divider {
                        position: relative;
                    }
                    
                    .divider::before, .divider::after {
                        content: '';
                        flex: 1;
                        border-bottom: 1px solid #e9ecef;
                    }
                    
                    .divider-text {
                        padding: 0 1rem;
                        color: #6c757d;
                        font-size: 0.9rem;
                    }
                    
                    /* Links */
                    .forgot-link, .register-link {
                        color: #4e73df;
                        transition: all 0.3s ease;
                    }
                    
                    .forgot-link:hover, .register-link:hover {
                        color: #2e59d9;
                        text-decoration: underline !important;
                    }

                    input.is-invalid:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); /* Bootstrap-like danger ring */
}
                    
                    /* Animation */
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .card {
                        animation: fadeInUp 0.6s ease forwards;
                    }
                    
                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .card:hover {
                            transform: translateY(-5px);
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}