"use client"

import Image from "next/image";

export default function CardGrid() {
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
        <div className="container py-5">
            {/* Section Header */}
            <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">สำรวจประสบการณ์ใหม่</h2>
                <p className="lead text-muted col-md-8 mx-auto">
                    ค้นพบสถานที่สุดพิเศษและประสบการณ์ที่น่าจดจำไปกับเรา
                </p>
            </div>

            <div className="row g-4">
                {cards.map(({ title, text, image, buttonText, buttonLink, category }, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden card-hover">
                            {/* Image with Overlay */}
                            <div className="position-relative overflow-hidden" style={{ height: "240px" }}>
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="card-img-top"
                                    style={{ 
                                        objectFit: "cover",
                                        transition: "transform 0.3s ease"
                                    }}
                                />
                                {/* Category Badge */}
                                <div className="position-absolute top-0 start-0 m-3">
                                    <span className="badge bg-white text-dark px-3 py-2 rounded-pill shadow-sm">
                                        {category}
                                    </span>
                                </div>
                                {/* Gradient Overlay */}
                                <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-gradient-to-top opacity-60"></div>
                            </div>

                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="card-title fw-bold mb-2 text-dark">{title}</h5>
                                <p className="card-text text-muted flex-grow-1 lh-base">{text}</p>
                                
                                {/* Button */}
                                {buttonText && buttonLink && (
                                    <div className="mt-3">
                                        <a 
                                            href={buttonLink} 
                                            className="btn btn-outline-primary btn-sm px-4 rounded-pill text-decoration-none fw-medium btn-hover"
                                        >
                                            {buttonText}
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-5">
                <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
                    ดูทั้งหมด
                    <i className="bi bi-grid-3x3-gap ms-2"></i>
                </button>
            </div>

            <style jsx>{`
                .card-hover {
                    transition: all 0.3s ease;
                    border-radius: 16px !important;
                }

                .card-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }

                .card-hover:hover .card-img-top {
                    transform: scale(1.05);
                }

                .btn-hover {
                    transition: all 0.3s ease;
                    border-width: 2px;
                }

                .btn-hover:hover {
                    transform: translateX(4px);
                    background-color: var(--bs-primary);
                    color: white;
                    border-color: var(--bs-primary);
                }

                .bg-gradient-to-top {
                    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
                }

                .card-title {
                    font-size: 1.2rem;
                    line-height: 1.3;
                }

                .card-text {
                    font-size: 0.95rem;
                    color: #6c757d;
                }

                .badge {
                    font-size: 0.8rem;
                    font-weight: 500;
                    backdrop-filter: blur(10px);
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .card-hover:hover {
                        transform: none;
                    }
                    
                    .btn-hover:hover {
                        transform: none;
                    }
                }

                /* Loading animation */
                .card-img-top {
                    background-color: #f8f9fa;
                }

                /* Focus states for accessibility */
                .btn:focus {
                    box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);
                }
            `}</style>
        </div>
    );
}