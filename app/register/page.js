"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        title: "",
        firstName: "",
        lastName: "",
        address: "",
        gender: "",
        birthdate: "",
        acceptTerms: false
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
        } else if (formData.password.length < 8) {
            newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
        }
        
        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "กรุณายืนยันรหัสผ่าน";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
        }
        
        // Title validation
        if (!formData.title) {
            newErrors.title = "กรุณาเลือกคำนำหน้าชื่อ";
        }
        
        // First name validation
        if (!formData.firstName) {
            newErrors.firstName = "กรุณากรอกชื่อ";
        }
        
        // Last name validation
        if (!formData.lastName) {
            newErrors.lastName = "กรุณากรอกนามสกุล";
        }
        
        // Address validation
        if (!formData.address) {
            newErrors.address = "กรุณากรอกที่อยู่";
        }
        
        // Gender validation
        if (!formData.gender) {
            newErrors.gender = "กรุณาเลือกเพศ";
        }
        
        // Birthdate validation
        if (!formData.birthdate) {
            newErrors.birthdate = "กรุณาเลือกวันเกิด";
        }
        
        // Terms validation
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = "กรุณายอมรับข้อกำหนดและเงื่อนไข";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Form is valid, proceed with registration
            console.log("Registration data:", formData);
            // Here you would typically call your registration API
        }
    };
    return (
        <section className="py-5 bg-light min-vh-100 d-flex align-items-center mt-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-5 justify-content-center" style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-header bg-card text-white text-center py-4 border-0">
                                <div className="mb-2">
                                    <i className="bi bi-person-plus-fill display-6"></i>
                                </div>
                                <h4 className="fw-bold mb-0">สมัครสมาชิก</h4>
                            </div>
                            <div className="card-body p-5">

                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-4">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.username ? "is-invalid" : ""}`}
                                            id="usernameInput"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="ชื่อผู้ใช้"
                                        />
                                        {errors.username && (
                                            <div className="invalid-feedback">{errors.username}</div>
                                        )}
                                        <label htmlFor="usernameInput">ชื่อผู้ใช้</label>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="form-floating">
                                                <select 
                                                    className={`form-select form-select-lg ${errors.title ? "is-invalid" : ""}`}
                                                    id="titleSelect"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">เลือกคำนำหน้าชื่อ</option>
                                                    <option value="นาย">นาย</option>
                                                    <option value="นาง">นาง</option>
                                                    <option value="นางสาว">นางสาว</option>
                                                    <option value="ดร.">ดร.</option>
                                                </select>
                                                {errors.title && (
                                                    <div className="invalid-feedback">{errors.title}</div>
                                                )}
                                                <label htmlFor="titleSelect">คำนำหน้าชื่อ</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-floating mb-4">
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-lg ${errors.firstName ? "is-invalid" : ""}`}
                                                    id="firstNameInput"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="ชื่อ"
                                                />
                                                {errors.firstName && (
                                                    <div className="invalid-feedback">{errors.firstName}</div>
                                                )}
                                                <label htmlFor="firstNameInput">ชื่อ</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-floating mb-4">
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-lg ${errors.lastName ? "is-invalid" : ""}`}
                                                    id="lastNameInput"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="นามสกุล"
                                                />
                                                {errors.lastName && (
                                                    <div className="invalid-feedback">{errors.lastName}</div>
                                                )}
                                                <label htmlFor="lastNameInput">นามสกุล</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <textarea
                                            className={`form-control form-control-lg ${errors.address ? "is-invalid" : ""}`}
                                            id="addressInput"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="ที่อยู่"
                                            style={{ height: "100px" }}
                                        ></textarea>
                                        {errors.address && (
                                            <div className="invalid-feedback">{errors.address}</div>
                                        )}
                                        <label htmlFor="addressInput">ที่อยู่</label>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label">เพศ</label>
                                            <div className="d-flex gap-4 mt-2">
                                                <div className="form-check">
                                                    <input
                                                        className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                                                        type="radio"
                                                        name="gender"
                                                        id="genderMale"
                                                        value="male"
                                                        checked={formData.gender === "male"}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="genderMale">
                                                        ชาย
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                                                        type="radio"
                                                        name="gender"
                                                        id="genderFemale"
                                                        value="female"
                                                        checked={formData.gender === "female"}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="genderFemale">
                                                        หญิง
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                                                        type="radio"
                                                        name="gender"
                                                        id="genderOther"
                                                        value="other"
                                                        checked={formData.gender === "other"}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="genderOther">
                                                        อื่นๆ
                                                    </label>
                                                </div>
                                            </div>
                                            {errors.gender && (
                                                <div className="text-danger small mt-1">{errors.gender}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="date"
                                                    className={`form-control form-control-lg ${errors.birthdate ? "is-invalid" : ""}`}
                                                    id="birthdateInput"
                                                    name="birthdate"
                                                    value={formData.birthdate}
                                                    onChange={handleChange}
                                                />
                                                {errors.birthdate && (
                                                    <div className="invalid-feedback">{errors.birthdate}</div>
                                                )}
                                                <label htmlFor="birthdateInput">วันเกิด</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                                            id="passwordInput"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="รหัสผ่าน"
                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                        <label htmlFor="passwordInput">รหัสผ่าน</label>
                                        <div className="password-strength mt-2">
                                            <div className="progress" style={{ height: '6px' }}>
                                                <div 
                                                    className={`progress-bar ${formData.password.length < 6 ? "bg-danger" : formData.password.length < 8 ? "bg-warning" : "bg-success"}`} 
                                                    style={{ width: formData.password ? `${Math.min(100, formData.password.length * 10)}%` : "0%" }}
                                                ></div>
                                            </div>
                                            <small className="text-muted mt-1 d-block">
                                                ความปลอดภัยของรหัสผ่าน: 
                                                {!formData.password ? "" : 
                                                 formData.password.length < 6 ? "ต่ำ" : 
                                                 formData.password.length < 8 ? "ปานกลาง" : "ดี"}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : ""}`}
                                            id="confirmPasswordInput"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="ยืนยันรหัสผ่าน"
                                        />
                                        {errors.confirmPassword && (
                                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                                        )}
                                        <label htmlFor="confirmPasswordInput">ยืนยันรหัสผ่าน</label>
                                    </div>

                                    <div className="mb-4">
                                        <div className="form-check">
                                            <input
                                                className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
                                                type="checkbox"
                                                id="termsCheck"
                                                name="acceptTerms"
                                                checked={formData.acceptTerms}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="termsCheck">
                                                ฉันยอมรับ <a href="#" className="text-decoration-none terms-link">ข้อกำหนดและเงื่อนไข</a> และ <a href="#" className="text-decoration-none terms-link">นโยบายความเป็นส่วนตัว</a>
                                            </label>
                                            {errors.acceptTerms && (
                                                <div className="invalid-feedback">{errors.acceptTerms}</div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg w-100 mb-4 register-btn"
                                    >
                                        <span className="btn-text">สมัครสมาชิก</span>
                                        <i className="bi bi-arrow-right-circle ms-2 btn-icon"></i>
                                    </button>

                                    <div className="text-center">
                                        <p className="mb-0">มีบัญชีอยู่แล้ว? <Link href="/login" className="text-decoration-none login-link">เข้าสู่ระบบ</Link></p>
                                    </div>
                                </form>

                                <div className="divider d-flex align-items-center my-4">
                                    <span className="divider-text">หรือสมัครด้วย</span>
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
                    .register-btn {
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

                    
                    
                    .register-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 6px 15px rgba(78, 115, 223, 0.4);
                    }
                    
                    .register-btn::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
                        transition: all 0.6s ease;
                    }
                    
                    .register-btn:hover::after {
                        left: 100%;
                    }
                    
                    .btn-icon {
                        transition: transform 0.3s ease;
                    }
                    
                    .register-btn:hover .btn-icon {
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
                    .login-link, .terms-link {
                        color: #4e73df;
                        transition: all 0.3s ease;
                    }
                    
                    .login-link:hover, .terms-link:hover {
                        color: #2e59d9;
                        text-decoration: underline !important;
                    }
                    
                    /* Password Strength */
                    .password-strength {
                        opacity: 0.9;
                        transition: all 0.3s ease;
                    }
                    
                    .form-control:focus + label + .password-strength {
                        opacity: 1;
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