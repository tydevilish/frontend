"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => setExpanded(!expanded);
    const handleNavClick = () => setExpanded(false);
    
    const isActive = (path) => pathname === path;

    return (
        <nav className={`fixed-top transition-all ${scrolled ? 'nav-scrolled shadow-lg' : 'bg-white shadow-sm'} border-bottom`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    {/* Logo */}
                    <Link className="text-decoration-none d-flex align-items-center gap-2" href="/" onClick={handleNavClick}>
                        <div className="logo-container rounded-circle d-flex align-items-center justify-content-center" style={{width: '38px', height: '38px'}}>
                            <i className="bi bi-lightning-charge-fill text-white fs-6 logo-icon"></i>
                        </div>
                        <span className="fw-bold logo-text fs-5">Frontend</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="d-none d-lg-flex align-items-center gap-4">
                        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/" onClick={handleNavClick}>
                            หน้าแรก
                        </Link>
                        <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} href="/about" onClick={handleNavClick}>
                            เกี่ยวกับเรา
                        </Link>
                        <div className="dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                บริการ
                            </Link>
                            <ul className="dropdown-menu border-0 shadow-lg rounded-3">
                                <li><Link className="dropdown-item py-2 menu-item" href="/services" onClick={handleNavClick}>บริการของเรา</Link></li>
                                <li><hr className="dropdown-divider my-1" /></li>
                                <li><Link className="dropdown-item py-2 menu-item" href="#" onClick={handleNavClick}>บริการอื่นๆ</Link></li>
                            </ul>
                        </div>
                        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} href="/contact" onClick={handleNavClick}>
                            ติดต่อเรา
                        </Link>
                        
                        {/* Search */}
                        <div className="position-relative search-container">
                            <input 
                                className="form-control form-control-sm border-0 search-input ps-4 pe-5 rounded-pill" 
                                type="search" 
                                placeholder="ค้นหา..." 
                                style={{width: '200px'}}
                            />
                            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y search-icon me-3"></i>
                        </div>
                        
                        {/* Login/Register Buttons */}
                        <div className="d-flex gap-2 ms-2">
                            <Link href="/login" className="btn btn-outline-primary btn-nav-login" onClick={handleNavClick}>
                                <i className="bi bi-person-circle me-1"></i> เข้าสู่ระบบ
                            </Link>
                            <Link href="/register" className="btn btn-primary btn-nav-register" onClick={handleNavClick}>
                                <i className="bi bi-person-plus me-1"></i> สมัครสมาชิก
                            </Link>
                        </div>
                    </div>

                    <button
                        className="btn btn-link d-lg-none p-0 border-0"
                        type="button"
                        onClick={handleToggle}
                        aria-label="Toggle navigation"
                    >
                        <i className={`bi ${expanded ? 'bi-x-lg' : 'bi-list'} fs-4 text-dark`}></i>
                    </button>
                </div>

                <div className={`d-lg-none overflow-hidden transition-all ${expanded ? 'mobile-menu-expanded' : 'd-none'}`}>
                    <div className="pb-3 border-top pt-3">
                        <div className="d-flex flex-column gap-3">
                            <Link className={`mobile-nav-link text-black ${isActive('/') ? 'active' : ''} text-decoration-none`} href="/" onClick={handleNavClick}>
                                <i className="bi bi-house me-2"></i> หน้าแรก
                            </Link>
                            <Link className={`mobile-nav-link text-black ${isActive('/about') ? 'active' : ''} text-decoration-none`} href="/about" onClick={handleNavClick}>
                                <i className="bi bi-info-circle me-2"></i> เกี่ยวกับเรา
                            </Link>
                            <div className="dropdown">
                                <Link className="mobile-nav-link text-black dropdown-toggle text-decoration-none" href="#" role="button" data-bs-toggle="dropdown">
                                    <i className="bi bi-grid me-2"></i> บริการ
                                </Link>
                                <ul className="dropdown-menu border-0 shadow-lg rounded-3">
                                    <li><Link className="dropdown-item py-2 menu-item" href="/services" onClick={handleNavClick}>บริการของเรา</Link></li>
                                    <li><Link className="dropdown-item py-2 menu-item" href="#" onClick={handleNavClick}>บริการ 2</Link></li>
                                    <li><hr className="dropdown-divider my-1" /></li>
                                    <li><Link className="dropdown-item py-2 menu-item" href="#" onClick={handleNavClick}>บริการอื่นๆ</Link></li>
                                </ul>
                            </div>
                            <Link className={`mobile-nav-link text-black ${isActive('/contact') ? 'active' : ''} text-decoration-none`} href="/contact" onClick={handleNavClick}>
                                <i className="bi bi-envelope me-2"></i> ติดต่อเรา
                            </Link>
                            
                            {/* Mobile Search */}
                            <div className="position-relative mt-2">
                                <input 
                                    className="form-control border-0 search-input ps-4 pe-5 rounded-pill w-100" 
                                    type="search" 
                                    placeholder="ค้นหา..."
                                />
                                <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y search-icon me-3"></i>
                            </div>
                            
                            {/* Mobile Login/Register */}
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Link href="/login" className="btn btn-outline-primary btn-mobile-login w-100" onClick={handleNavClick}>
                                    <i className="bi bi-person-circle me-2"></i> เข้าสู่ระบบ
                                </Link>
                                <Link href="/register" className="btn btn-primary btn-mobile-register w-100" onClick={handleNavClick}>
                                    <i className="bi bi-person-plus me-2"></i> สมัครสมาชิก
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .transition-all {
                    transition: all 0.3s ease;
                }
                
                .nav-scrolled {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 0;
                }
                
                .logo-container {
                    background-color: #4e73df;
                    box-shadow: 0 4px 15px rgba(78, 115, 223, 0.3);
                    transition: all 0.3s ease;
                }
                
                .logo-container:hover {
                    transform: scale(1.05);
                }
                
                .logo-icon {
                    animation: pulse 2s infinite;
                }
                
                .logo-text {
                    color: #4e73df;
                    transition: all 0.3s ease;
                }
                
                .nav-link {
                    text-decoration: none;
                    color: #6c757d;
                    font-weight: 500;
                    position: relative;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover, .nav-link.active {
                    color: #4e54c8;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #4e73df;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after, .nav-link.active::after {
                    width: 100%;
                }
                
                .search-container {
                    transition: all 0.3s ease;
                }
                
                .search-container:focus-within {
                    transform: translateY(-2px);
                }
                
                .search-input {
                    background-color: #f8f9fa;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                
                .search-input:focus {
                    background-color: #fff;
                    box-shadow: 0 4px 15px rgba(78, 84, 200, 0.15);
                }
                
                .search-icon {
                    color: #4e54c8;
                    transition: all 0.3s ease;
                }
                
                .btn-nav-login, .btn-nav-register {
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .btn-nav-login:hover {
                    transform: translateY(-2px);
                }
                
                .btn-nav-register:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(78, 115, 223, 0.4);
                }
                
                .mobile-menu-expanded {
                    display: block;
                    animation: slideDown 0.3s ease forwards;
                }
                
                .mobile-nav-link {
                    text-decoration: none;
                    color: #6c757d;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                }
                
                .mobile-nav-link:hover, .mobile-nav-link.active {
                    color: #4e54c8;
                    transform: translateX(5px);
                }
                
                .menu-item {
                    transition: all 0.3s ease;
                }
                
                .menu-item:hover {
                    background-color: #f8f9fa;
                    color: #4e54c8;
                    transform: translateX(5px);
                }
                
                .btn-mobile-login, .btn-mobile-register {
                    padding: 0.6rem 1rem;
                    border-radius: 50px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .btn-mobile-login:hover {
                    transform: translateY(-2px);
                }
                
                .btn-mobile-register:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(78, 115, 223, 0.4);
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </nav>
    );
}