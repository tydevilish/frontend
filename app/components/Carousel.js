import Image from 'next/image';
export default function Carousel() {
    return (
        <div
            className="w-100 min-vh-100"
            style={{ position: "relative", zIndex: 0 }}
        >
            <div
                id="mainCarousel"
                className="carousel slide h-100"
                data-bs-ride="carousel"
                style={{ height: "100vh" }}
            >
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                        <Image
                            src="/silder/1.jpg"
                            className="d-block w-100 h-100"
                            alt="Mr. Jirapat Papai"
                            style={{ objectFit: "cover", height: "100vh" }}
                            width={1920}
                            height={690}
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <Image
                            src="/silder/2.jpg"
                            className="d-block w-100 h-100"
                            alt="Sample 2"
                            style={{ objectFit: "cover", height: "100vh" }}
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <Image
                            src="/silder/3.jpg"
                            className="d-block w-100 h-100"
                            alt="Sample 3"
                            style={{ objectFit: "cover", height: "100vh" }}
                            width={1920}
                            height={1080}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <p className="text-danger fs-1 fw-bold bg-white bg-opacity-75 rounded px-4 py-2 shadow">
                        Hello Bootstrap
                    </p>
                    <p className="text-primary fs-3 fw-bold bg-white bg-opacity-75 rounded px-4 py-2 shadow">
                        I'm Jirapat Papai
                    </p>
                </div>
            </div>
        </div>
    )
}