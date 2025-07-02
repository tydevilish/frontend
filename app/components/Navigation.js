"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleNavClick = () => setExpanded(false);

    return (
        <nav className="fixed-top bg-white shadow-sm border-bottom">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    {/* Logo */}
                    <Link className="text-decoration-none d-flex align-items-center gap-2" href="/" onClick={handleNavClick}>
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                            <i className="bi bi-lightning-charge-fill text-white fs-6"></i>
                        </div>
                        <span className="fw-bold text-dark fs-5">Frontend</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="d-none d-lg-flex align-items-center gap-4">
                        <Link className="text-decoration-none text-dark fw-medium" href="/" onClick={handleNavClick}>
                            หน้าแรก
                        </Link>
                        <Link className="text-decoration-none text-muted fw-medium" href="/about" onClick={handleNavClick}>
                            เกี่ยวกับเรา
                        </Link>
                        <div className="dropdown">
                            <Link className="text-decoration-none text-muted fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                บริการ
                            </Link>
                            <ul className="dropdown-menu border-0 shadow-sm">
                                <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการ 1</Link></li>
                                <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการ 2</Link></li>
                                <li><hr className="dropdown-divider my-1" /></li>
                                <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการอื่นๆ</Link></li>
                            </ul>
                        </div>
                        <Link className="text-decoration-none text-muted fw-medium" href="/contact" onClick={handleNavClick}>
                            ติดต่อเรา
                        </Link>
                        
                        {/* Search */}
                        <div className="position-relative">
                            <input 
                                className="form-control form-control-sm border-0 bg-light ps-4 pe-5 rounded-pill" 
                                type="search" 
                                placeholder="ค้นหา..." 
                                style={{width: '200px'}}
                            />
                            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y text-muted me-3"></i>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="btn btn-link d-lg-none p-0 border-0"
                        type="button"
                        onClick={handleToggle}
                        aria-label="Toggle navigation"
                    >
                        <i className={`bi ${expanded ? 'bi-x-lg' : 'bi-list'} fs-4 text-dark`}></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`d-lg-none overflow-hidden transition-all ${expanded ? 'd-block' : 'd-none'}`}>
                    <div className="pb-3 border-top pt-3">
                        <div className="d-flex flex-column gap-3">
                            <Link className="text-decoration-none text-dark fw-medium" href="/" onClick={handleNavClick}>
                                หน้าแรก
                            </Link>
                            <Link className="text-decoration-none text-muted fw-medium" href="/about" onClick={handleNavClick}>
                                เกี่ยวกับเรา
                            </Link>
                            <div className="dropdown">
                                <Link className="text-decoration-none text-muted fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    บริการ
                                </Link>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการ 1</Link></li>
                                    <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการ 2</Link></li>
                                    <li><hr className="dropdown-divider my-1" /></li>
                                    <li><Link className="dropdown-item py-2" href="#" onClick={handleNavClick}>บริการอื่นๆ</Link></li>
                                </ul>
                            </div>
                            <Link className="text-decoration-none text-muted fw-medium" href="/contact" onClick={handleNavClick}>
                                ติดต่อเรา
                            </Link>
                            
                            {/* Mobile Search */}
                            <div className="position-relative mt-2">
                                <input 
                                    className="form-control border-0 bg-light ps-4 pe-5 rounded-pill w-100" 
                                    type="search" 
                                    placeholder="ค้นหา..."
                                />
                                <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y text-muted me-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}