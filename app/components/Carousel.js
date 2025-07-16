"use client"

import Image from 'next/image';

export default function Carousel() {
    return (
        <div className="position-relative overflow-hidden" style={{ height: "85vh" }}>
            <div
                id="mainCarousel"
                className="carousel slide h-100"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                {/* Indicators */}
                <div className="carousel-indicators bottom-0 mb-4">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#mainCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active indicator-pill' : 'indicator-pill'}
                            style={{ width: "50px", height: "4px", borderRadius: "2px", margin: "0 4px" }}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner h-100">
                    {/* Slide 1 */}
                    <div className="carousel-item active h-100 position-relative">
                        <Image
                            src="/silder/1.jpg"
                            className="d-block w-100 h-100"
                            alt="Slide 1"
                            style={{ objectFit: "cover" }}
                            width={1920}
                            height={1080}
                            priority
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-lg-6 mt-4">
                                        <h1 className="display-3 fw-bold text-white mb-3 animate__animated animate__fadeInUp">
                                            <span className="highlight-text">ประสบการณ์</span>ดิจิทัล
                                        </h1>
                                        <p className="lead text-white mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                            เราช่วยให้ธุรกิจของคุณเติบโตด้วยเทคโนโลยีที่ทันสมัย
                                        </p>
                                        <div className="animate__animated animate__fadeInUp animate__delay-2s">
                                            <button className="btn btn-glow btn-lg rounded-pill px-5 py-3 me-3 mb-3 mb-sm-0">
                                                <i className="bi bi-rocket-takeoff me-2"></i>เริ่มต้นเลย
                                            </button>
                                            <button className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 btn-hover-effect">
                                                <i className="bi bi-book me-2"></i>เรียนรู้
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item h-100 position-relative">
                        <Image
                            src="/silder/2.jpg"
                            className="d-block w-100 h-100"
                            alt="Slide 2"
                            style={{ objectFit: "cover" }}
                            width={1920}
                            height={1080}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <h1 className="display-3 fw-bold text-white mb-3 animate__animated animate__fadeInUp">
                                            <span className="highlight-text">นวัตกรรม</span>ที่ไม่มีขีดจำกัด
                                        </h1>
                                        <p className="lead text-white mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                            ปลดปล่อยศักยภาพของธุรกิจด้วยโซลูชันที่ออกแบบมาเพื่อคุณ
                                        </p>
                                        <button className="btn btn-glow btn-lg rounded-pill px-5 py-3 animate__animated animate__fadeInUp animate__delay-2s">
                                            <i className="bi bi-eye me-2"></i>ดูผลงาน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item h-100 position-relative">
                        <Image
                            src="/silder/3.jpg"
                            className="d-block w-100 h-100"
                            alt="Slide 3"
                            style={{ objectFit: "cover" }}
                            width={1920}
                            height={1080}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-end h-100 text-end">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-md-8 col-lg-6">
                                        <h1 className="display-3 fw-bold text-white mb-3 animate__animated animate__fadeInUp">
                                            พร้อมสำหรับ<span className="highlight-text">อนาคต</span>
                                        </h1>
                                        <p className="lead text-white mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                            เทคโนโลยีที่พร้อมรองรับการเติบโตของคุณในทุกขั้นตอน
                                        </p>
                                        <button className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 btn-hover-effect animate__animated animate__fadeInUp animate__delay-2s">
                                            <i className="bi bi-send me-2"></i>ติดต่อเรา
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="prev"
                    style={{ opacity: "0.8" }}
                >
                    <div className="control-button">
                        <i className="bi bi-chevron-left text-white fs-2"></i>
                    </div>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="next"
                    style={{ opacity: "0.8" }}
                >
                    <div className="control-button">
                        <i className="bi bi-chevron-right text-white fs-2"></i>
                    </div>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-none d-md-block">
                <div className="text-center">
                    <div className="text-white small mb-2 opacity-75">เลื่อนลงเพื่อดูเพิ่มเติม</div>
                    <div className="scroll-indicator">
                        <i className="bi bi-chevron-down text-white animate__animated animate__fadeInDown animate__infinite"></i>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-gradient-overlay {
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(2px);
                }

                .highlight-text {
                    color: #4e73df;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                    position: relative;
                    display: inline-block;
                }
                
                .highlight-text::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    bottom: 0;
                    left: 0;
                    background-color: #4e73df;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.5s ease-out;
                }
                
                .carousel-item.active .highlight-text::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                    transition-delay: 0.8s;
                }

                .btn-glow {
                    background-color: #4e73df;
                    border: none;
                    color: white;
                    box-shadow: 0 5px 15px rgba(78, 115, 223, 0.4);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-glow:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(78, 115, 223, 0.6);
                }
                
                .btn-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.2);
                    transition: left 0.7s ease;
                }
                
                .btn-glow:hover::before {
                    left: 100%;
                }

                .btn-hover-effect {
                    transition: all 0.3s ease;
                    border-width: 2px;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }

                .btn-hover-effect::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0;
                    background-color: rgba(255, 255, 255, 0.2);
                    transition: height 0.3s ease;
                    z-index: -1;
                }

                .btn-hover-effect:hover {
                    background-color: transparent;
                    transform: translateY(-2px);
                }
                
                .btn-hover-effect:hover::after {
                    height: 100%;
                }

                .carousel-item {
                    transition: transform 1.2s ease-in-out;
                }

                .carousel-item img {
                    transition: transform 8s ease;
                }

                .carousel-item.active img {
                    transform: scale(1.1);
                }
                .scroll-indicator {
                    animation: bounce 2s infinite;
                }
                
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }

                .backdrop-blur {
                    backdrop-filter: blur(10px);
                }

                .carousel-control-prev:hover .bg-white,
                .carousel-control-next:hover .bg-white {
                    background-color: rgba(255, 255, 255, 0.4) !important;
                }

                .carousel-indicators button {
                    transition: all 0.3s ease;
                }

                .indicator-pill {
                    background-color: rgba(255, 255, 255, 0.5) !important;
                    transition: all 0.3s ease;
                    opacity: 0.7;
                }

                .indicator-pill.active {
                    background-color: #4e73df !important;
                    opacity: 1;
                    box-shadow: 0 0 10px rgba(78, 115, 223, 0.5);
                    width: 60px !important;
                    transition: width 0.3s ease;
                }

                .control-button {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .control-button:hover {
                    background: rgba(78, 115, 223, 0.3);
                    transform: scale(1.1);
                }
                
                .display-3 {
                    letter-spacing: -0.5px;
                    font-weight: 800 !important;
                }
                
                .lead {
                    font-weight: 400;
                    letter-spacing: 0.3px;
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .carousel-item.active .animate__fadeInUp {
                    animation: slideIn 0.8s forwards;
                }
                
                .carousel-item.active .animate__fadeInUp.animate__delay-1s {
                    animation: slideIn 0.8s 0.3s forwards;
                }
                
                .carousel-item.active .animate__fadeInUp.animate__delay-2s {
                    animation: slideIn 0.8s 0.6s forwards;
                }
            `}</style>
        </div>
    );
}