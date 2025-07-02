import Image from "next/image";

export default function CardGrid() {
    const cards = [
        {
            title: "Beautiful Sunset",
            text: "ชมพระอาทิตย์ตกดินสุดประทับใจพร้อมวิวทะเลที่สวยงาม",
            image: "/card/card1.avif",
            buttonText: "ดูเพิ่มเติม",
            buttonLink: "#",
        },
        {
            title: "Mountain Adventure",
            text: "การผจญภัยบนภูเขาที่ท้าทายและน่าตื่นเต้น",
            image: "/card/card2.avif",
            buttonText: "สำรวจ",
            buttonLink: "#",
        },
        {
            title: "City Lights",
            text: "แสงไฟของเมืองยามค่ำคืนที่เต็มไปด้วยชีวิตชีวา",
            image: "/card/card3.avif",
            buttonText: "ดูเพิ่มเติม",
            buttonLink: "#",
        },
    ];

    return (
        <div className="container py-5">
            <div className="row g-4">
                {cards.map(({ title, text, image, buttonText, buttonLink }, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card shadow-sm flex-fill" style={{ borderRadius: "12px", overflow: "hidden" }}>
                            {image && (
                                <Image
                                    src={image}
                                    className="card-img-top"
                                    width={700}
                                    height={700}
                                    alt={title}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                            )}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{title}</h5>
                                <p className="card-text text-muted flex-grow-1">{text}</p>
                                {buttonText && buttonLink && (
                                    <a href={buttonLink} className="btn btn-primary rounded-pill px-4 mt-auto">
                                        {buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
