"use client"

import Image from 'next/image';

export default function Carousel() {
    return (
        <div className="position-relative overflow-hidden" style={{ height: "70vh" }}>
            <div
                id="mainCarousel"
                className="carousel slide h-100"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                {/* Indicators */}
                <div className="carousel-indicators bottom-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#mainCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        style={{ width: "40px", height: "3px", borderRadius: "2px" }}
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#mainCarousel"
                        data-bs-slide-to="1"
                        style={{ width: "40px", height: "3px", borderRadius: "2px" }}
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#mainCarousel"
                        data-bs-slide-to="2"
                        style={{ width: "40px", height: "3px", borderRadius: "2px" }}
                    ></button>
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
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-lg-6">
                                        <h1 className="display-4 fw-bold text-white mb-3 animate__animated animate__fadeInUp">
                                            ประสบการณ์ดิจิทัล
                                        </h1>
                                        <p className="lead text-white mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                            เราช่วยให้ธุรกิจของคุณเติบโตด้วยเทคโนโลยีที่ทันสมัย
                                        </p>
                                        <div className="animate__animated animate__fadeInUp animate__delay-2s">
                                            <button className="btn btn-primary btn-lg rounded-pill px-4 me-3 mb-2">
                                                เริ่มต้นเลย
                                            </button>
                                            <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                                                เรียนรู้เพิ่มเติม
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
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <h1 className="display-4 fw-bold text-white mb-3">
                                            นวัตกรรมที่ไม่มีขีดจำกัด
                                        </h1>
                                        <p className="lead text-white mb-4">
                                            ปลดปล่อยศักยภาพของธุรกิจด้วยโซลูชันที่ออกแบบมาเพื่อคุณ
                                        </p>
                                        <button className="btn btn-light btn-lg rounded-pill px-4">
                                            ดูผลงานของเรา
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
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-end h-100 text-end">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-md-8 col-lg-6">
                                        <h1 className="display-4 fw-bold text-white mb-3">
                                            พร้อมสำหรับอนาคต
                                        </h1>
                                        <p className="lead text-white mb-4">
                                            เทคโนโลยีที่พร้อมรองรับการเติบโตของคุณในทุกขั้นตอน
                                        </p>
                                        <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                                            ติดต่อเรา
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
                    <div className="bg-white bg-opacity-10 rounded-circle px-3 py-2 backdrop-blur">
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
                    <div className="bg-white bg-opacity-10 rounded-circle px-3 py-2 backdrop-blur">
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

                .carousel-indicators button.active {
                    background-color: white !important;
                }

                .carousel-indicators button:not(.active) {
                    background-color: rgba(255, 255, 255, 0.5) !important;
                }
            `}</style>
        </div>
    );
}
