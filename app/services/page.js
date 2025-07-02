"use client"

export default function Services() {
  const mainServices = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      description: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย ใช้เทคโนโลยี React, Next.js และ TypeScript",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
      price: "เริ่มต้น 15,000 บาท",
      color: "primary"
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      description: "สร้างแอปพลิเคชันมือถือสำหรับ iOS และ Android ด้วย React Native",
      features: ["Cross Platform", "Native Performance", "Push Notifications", "Offline Support"],
      price: "เริ่มต้น 25,000 บาท",
      color: "success"
    },
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      description: "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย พร้อม Prototype",
      features: ["User Research", "Wireframe", "Mockup Design", "Prototype"],
      price: "เริ่มต้น 8,000 บาท",
      color: "warning"
    },
    {
      icon: "bi-server",
      title: "Backend Development",
      description: "พัฒนาระบบ Backend และ API ที่มีประสิทธิภาพสูง ปลอดภัย",
      features: ["RESTful API", "Database Design", "Authentication", "Cloud Deployment"],
      price: "เริ่มต้น 12,000 บาท",
      color: "info"
    }
  ];

  const additionalServices = [
    { icon: "bi-speedometer2", title: "Performance Optimization", description: "ปรับปรุงความเร็วเว็บไซต์" },
    { icon: "bi-shield-check", title: "Security Audit", description: "ตรวจสอบช่องโหว่ด้านความปลอดภัย" },
    { icon: "bi-tools", title: "Maintenance & Support", description: "บำรุงรักษาและสนับสนุนระบบ" },
    { icon: "bi-graph-up", title: "SEO Optimization", description: "ปรับปรุงการค้นหาใน Google" },
    { icon: "bi-cloud", title: "Cloud Migration", description: "ย้ายระบบไปยัง Cloud" },
    { icon: "bi-people", title: "Consultation", description: "ปรึกษาด้านเทคโนโลยี" }
  ];

  const workProcess = [
    {
      step: "01",
      title: "ปรึกษาและวิเคราะห์",
      description: "รับฟังความต้องการและวิเคราะห์โปรเจกต์",
      icon: "bi-chat-dots"
    },
    {
      step: "02", 
      title: "วางแผนและออกแบบ",
      description: "สร้าง Wireframe และ Mockup ตามความต้องการ",
      icon: "bi-pencil-square"
    },
    {
      step: "03",
      title: "พัฒนาและทดสอบ",
      description: "เขียนโค้ดและทดสอบการทำงานอย่างละเอียด",
      icon: "bi-gear"
    },
    {
      step: "04",
      title: "ส่งมอบและติดตาม",
      description: "ส่งมอบงานและให้การสนับสนุนต่อเนื่อง",
      icon: "bi-check-circle"
    }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-white py-5 mb-0">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h1 className="display-2 fw-bold text-dark mb-4 animate-fade-in">
                  บริการ
                  <span className="text-primary">ของเรา</span>
                </h1>
                <p className="lead text-muted mb-4 animate-fade-in-delay-1">
                  เราให้บริการพัฒนาซอฟต์แวร์ครบวงจร ด้วยเทคโนโลยีที่ทันสมัย
                  และทีมงานมืออาชีพ เพื่อตอบสนองทุกความต้องการของธุรกิจคุณ
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start animate-fade-in-delay-2">
                  <button className="btn btn-primary btn-lg px-4 rounded-pill">
                    <i className="bi bi-chat-dots me-2"></i>
                    ปรึกษาฟรี
                  </button>
                  <button className="btn btn-outline-primary btn-lg px-4 rounded-pill">
                    <i className="bi bi-telephone me-2"></i>
                    โทร 092-678-7438
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center position-relative">
                <div className="service-image-container">
                  <img
                    src="https://i.pinimg.com/736x/b2/60/94/b26094970505bcd59c2e5fe8b6f41cf0.jpg"
                    alt="Mr. Jirapat Papai - Services"
                    className="img-fluid rounded-circle shadow-lg service-image"
                    style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                  />
                  {/* Floating Service Icons */}
                  <div className="floating-service floating-1">
                    <i className="bi bi-code-slash text-primary fs-3"></i>
                  </div>
                  <div className="floating-service floating-2">
                    <i className="bi bi-phone text-success fs-3"></i>
                  </div>
                  <div className="floating-service floating-3">
                    <i className="bi bi-palette text-warning fs-3"></i>
                  </div>
                  <div className="floating-service floating-4">
                    <i className="bi bi-server text-info fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">บริการหลักของเรา</h2>
            <p className="lead text-muted">เลือกบริการที่ตรงกับความต้องการของคุณ</p>
          </div>
          <div className="row g-4">
            {mainServices.map((service, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="service-card bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="d-flex align-items-start mb-3">
                    <div className={`service-icon bg-${service.color} bg-opacity-10 rounded-3 p-3 me-3`}>
                      <i className={`${service.icon} text-${service.color} fs-2`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="fw-bold mb-2">{service.title}</h4>
                      <p className="text-muted mb-3">{service.description}</p>
                    </div>
                  </div>
                  <div className="row g-2 mb-3">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="col-6">
                        <small className="d-flex align-items-center text-muted">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </small>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`text-${service.color} fw-bold fs-5`}>{service.price}</span>
                    <button className={`btn btn-outline-${service.color} rounded-pill px-3`}>
                      <i className="bi bi-arrow-right me-1"></i>
                      รายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">บริการเสริม</h2>
            <p className="lead text-muted">บริการเพิ่มเติมเพื่อความสมบูรณ์ของโปรเจกต์</p>
          </div>
          <div className="row g-4">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="additional-service-card text-center p-4 rounded-3 h-100">
                  <div className="additional-service-icon bg-primary bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                       style={{ width: '70px', height: '70px' }}>
                    <i className={`${service.icon} text-primary fs-3`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="text-muted small mb-0">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">ขั้นตอนการทำงาน</h2>
            <p className="lead text-muted">กระบวนการทำงานที่เป็นระบบและมีประสิทธิภาพ</p>
          </div>
          <div className="row g-4">
            {workProcess.map((process, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="process-card text-center">
                  <div className="process-number bg-primary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                       style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold">{process.step}</span>
                  </div>
                  <div className="process-icon bg-light rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                       style={{ width: '80px', height: '80px' }}>
                    <i className={`${process.icon} text-primary fs-2`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{process.title}</h5>
                  <p className="text-muted small">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center py-5">
          <h2 className="display-6 fw-bold mb-3">พร้อมเริ่มโปรเจกต์แล้วใช่ไหม?</h2>
          <p className="lead mb-4 opacity-75">
            ติดต่อเราวันนี้เพื่อขอใบเสนอราคาฟรี และปรึกษาเกี่ยวกับโปรเจกต์ของคุณ
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light btn-lg px-5 rounded-pill">
              <i className="bi bi-calculator me-2"></i>
              ขอใบเสนอราคา
            </button>
            <button className="btn btn-outline-light btn-lg px-5 rounded-pill">
              <i className="bi bi-chat-dots me-2"></i>
              ปรึกษาฟรี
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-image-container {
          position: relative;
        }
        
        .floating-service {
          position: absolute;
          background: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-1 {
          top: 10%;
          right: -5%;
          animation-delay: 0s;
        }
        
        .floating-2 {
          top: 60%;
          left: -10%;
          animation-delay: 1s;
        }
        
        .floating-3 {
          bottom: 20%;
          right: -5%;
          animation-delay: 2s;
        }
        
        .floating-4 {
          top: 30%;
          left: -5%;
          animation-delay: 1.5s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .service-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
          border-color: var(--bs-primary);
        }
        
        .additional-service-card {
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }
        
        .additional-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .additional-service-card:hover .additional-service-icon {
          background-color: var(--bs-primary) !important;
        }
        
        .additional-service-card:hover .additional-service-icon i {
          color: white !important;
        }
        
        .process-card {
          transition: all 0.3s ease;
        }
        
        .process-card:hover {
          transform: translateY(-5px);
        }
        
        .process-card:hover .process-icon {
          background-color: var(--bs-primary) !important;
        }
        
        .process-card:hover .process-icon i {
          color: white !important;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-service {
            display: none;
          }
          
          .service-card:hover,
          .additional-service-card:hover,
          .process-card:hover {
            transform: none;
          }
          
          .display-4 {
            font-size: 2.5rem;
          }
          
          .display-6 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
