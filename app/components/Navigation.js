"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleNavClick = () => setExpanded(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 z-1">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" href="/" onClick={handleNavClick}>
                    <i className="bi bi-lightning-charge-fill"></i>
                    Frontend
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse${expanded ? " show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/" onClick={handleNavClick}>หน้าแรก</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about" onClick={handleNavClick}>เกี่ยวกับเรา</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                บริการ
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#" onClick={handleNavClick}>บริการ 1</Link></li>
                                <li><Link className="dropdown-item" href="#" onClick={handleNavClick}>บริการ 2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#" onClick={handleNavClick}>บริการอื่นๆ</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact" onClick={handleNavClick}>ติดต่อเรา</Link>
                        </li>
                    </ul>
                    <form className="d-flex ms-lg-3 mt-3 mt-lg-0" role="search">
                        <input className="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search" />
                        <button className="btn btn-light" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}