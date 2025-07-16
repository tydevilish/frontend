"use client"

import Image from "next/image";

export default function Card() {
    const cards = [
        {
            title: "Beautiful Sunset",
            text: "ชมพระอาทิตย์ตกดินสุดประทับใจพร้อมวิวทะเลที่สวยงาม",
            image: "/card/card1.avif",
            buttonText: "ดูเพิ่มเติม",
            buttonLink: "#",
            category: "ธรรมชาติ"
        },
        {
            title: "Mountain Adventure",
            text: "การผจญภัยบนภูเขาที่ท้าทายและน่าตื่นเต้น",
            image: "/card/card2.avif",
            buttonText: "สำรวจ",
            buttonLink: "#",
            category: "ผจญภัย"
        },
        {
            title: "City Lights",
            text: "แสงไฟของเมืองยามค่ำคืนที่เต็มไปด้วยชีวิตชีวา",
            image: "/card/card3.avif",
            buttonText: "ดูเพิ่มเติม",
            buttonLink: "#",
            category: "เมือง"
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="text-center mb-5">
                    <h2 className="section-title display-5 fw-bold">สำรวจประสบการณ์ใหม่</h2>
                    <div className="title-underline mb-4"></div>
                    <p className="lead text-muted mb-0">ค้นพบสถานที่สุดพิเศษและประสบการณ์ที่น่าจดจำไปกับเรา</p>
                </div>

                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden card-hover">
                                {/* Image with Overlay */}
                                <div className="position-relative overflow-hidden card-img-container">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="card-img-top"
                                        style={{ 
                                            objectFit: "cover",
                                            transition: "transform 0.5s ease"
                                        }}
                                    />
                                    {/* Category Badge */}
                                    <div className="position-absolute top-0 start-0 m-3 category-badge-container">
                                        <span className="badge text-dark px-3 py-2 rounded-pill shadow-sm category-badge">
                                            <i className="bi bi-tag-fill me-1 category-icon"></i>
                                            {card.category}
                                        </span>
                                    </div>
                                    {/* Gradient Overlay */}
                                    <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-gradient-to-top"></div>
                                </div>

                                <div className="card-body p-4 d-flex flex-column">
                                    <h5 className="card-title fw-bold mb-2 text-dark">{card.title}</h5>
                                    <div className="card-divider mb-3"></div>
                                    <p className="card-text text-muted flex-grow-1 lh-base">{card.text}</p>
                                    
                                    {/* Button */}
                                    {card.buttonText && card.buttonLink && (
                                        <div className="mt-3">
                                            <a 
                                                href={card.buttonLink} 
                                                className="btn btn-outline-primary btn-sm px-4 rounded-pill text-decoration-none fw-medium btn-hover"
                                            >
                                                {card.buttonText}
                                                <i className="bi bi-arrow-right ms-2 btn-icon"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="card-shine"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-5">
                    <a href="#" className="btn btn-primary btn-lg px-5 py-3 rounded-pill view-all-btn">
                        <span className="btn-text">ดูทั้งหมด</span>
                        <i className="bi bi-arrow-right ms-2 btn-icon"></i>
                    </a>
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
                        text-transform: uppercase;
                    }
                    
                    .section-title {
                        color: #2e384d;
                        position: relative;
                        display: inline-block;
                    }
                    
                    .title-underline {
                        width: 80px;
                        height: 4px;
                        background-color: #4e73df;
                        margin: 0 auto;
                        border-radius: 2px;
                    }

                    /* Card Styling */
                    .card-hover {
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        border-radius: 16px !important;
                        background-color: white;
                        position: relative;
                        overflow: hidden;
                    }

                    .card-hover:hover {
                        transform: translateY(-12px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                    }

                    .card-hover:hover .card-img-top {
                        transform: scale(1.08);
                    }
                    
                    .card-img-container {
                        height: 240px;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .card-shine {
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            to right,
                            rgba(255, 255, 255, 0) 0%,
                            rgba(255, 255, 255, 0.3) 50%,
                            rgba(255, 255, 255, 0) 100%
                        );
                        pointer-events: none;
                        transition: all 0.5s ease;
                    }
                    
                    .card-hover:hover .card-shine {
                        left: 100%;
                        transition: all 0.8s ease;
                    }
                    
                    .card-divider {
                        width: 40px;
                        height: 3px;
                        background-color: #4e73df;
                        border-radius: 2px;
                    }

                    .category-badge {
                        font-size: 0.8rem;
                        font-weight: 500;
                        background-color: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(10px);
                        transition: all 0.3s ease;
                        border: none;
                    }
                    
                    .category-badge-container {
                        transform: translateY(0);
                        transition: transform 0.3s ease;
                    }
                    
                    .card-hover:hover .category-badge-container {
                        transform: translateY(-5px);
                    }
                    
                    .category-icon {
                        color: #4e73df;
                    }

                    .bg-gradient-to-top {
                        background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
                        opacity: 0.8;
                        transition: opacity 0.3s ease;
                    }
                    
                    .card-hover:hover .bg-gradient-to-top {
                        opacity: 0.9;
                    }

                    .card-title {
                        font-size: 1.2rem;
                        line-height: 1.3;
                        transition: color 0.3s ease;
                    }
                    
                    .card-hover:hover .card-title {
                        color: #4e73df !important;
                    }

                    .card-text {
                        font-size: 0.95rem;
                        color: #6c757d;
                        line-height: 1.6;
                    }

                    /* Button Styling */
                    .btn-hover {
                        transition: all 0.3s ease;
                        border-width: 2px;
                        position: relative;
                        overflow: hidden;
                        z-index: 1;
                    }

                    .btn-hover:hover {
                        transform: translateX(4px);
                        background-color: #4e73df;
                        color: white;
                        border-color: #4e73df;
                    }
                    
                    .btn-icon {
                        transition: transform 0.3s ease;
                    }
                    
                    .btn-hover:hover .btn-icon {
                        transform: translateX(3px);
                    }
                    
                    .view-all-btn {
                        background-color: #4e73df;
                        border: none;
                        box-shadow: 0 8px 15px rgba(78, 115, 223, 0.3);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .view-all-btn:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 20px rgba(78, 115, 223, 0.4);
                    }
                    
                    .view-all-btn::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
                        transition: all 0.6s ease;
                    }
                    
                    .view-all-btn:hover::after {
                        left: 100%;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .card-hover:hover {
                            transform: translateY(-5px);
                        }
                        
                        .btn-hover:hover {
                            transform: translateX(2px);
                        }
                        
                        .view-all-btn:hover {
                            transform: translateY(-3px);
                        }
                    }

                    /* Loading animation */
                    .card-img-top {
                        background-color: #f8f9fa;
                    }

                    /* Focus states for accessibility */
                    .btn:focus {
                        box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
                    }
                    
                    /* Animation for cards */
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
                    
                    .card-hover {
                        animation: fadeInUp 0.6s ease forwards;
                    }
                    
                    .col-12:nth-child(1) .card-hover {
                        animation-delay: 0.1s;
                    }
                    
                    .col-12:nth-child(2) .card-hover {
                        animation-delay: 0.3s;
                    }
                    
                    .col-12:nth-child(3) .card-hover {
                        animation-delay: 0.5s;
                    }
                `}</style>
            </div>
        </section>
    );
}