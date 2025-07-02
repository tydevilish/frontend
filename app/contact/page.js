"use client"

export default function Contact() {
  const contactMethods = [
    {
      icon: "bi-envelope",
      title: "อีเมล",
      value: "meawpain12@gmail.com",
      link: "mailto:meawpain12@gmail.com",
      description: "ส่งข้อความถึงผมได้ตลอดเวลา"
    },
    {
      icon: "bi-telephone",
      title: "โทรศัพท์",
      value: "+66 92 678 7438",
      link: "tel:+66926787438",
      description: "โทรหาผมในเวลาทำการ"
    },
    {
      icon: "bi-geo-alt",
      title: "ที่อยู่",
      value: "เชียงใหม่, ประเทศไทย",
      link: "#",
      description: "สามารถนัดพบได้ในพื้นที่"
    },
    {
      icon: "bi-globe",
      title: "เว็บไซต์",
      value: "jirapatpapai.netlify.app",
      link: "https://jirapatpapai.netlify.app",
      description: "ดูผลงานและข้อมูลเพิ่มเติม"
    }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-white pt-5 mb-0">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-2 fw-bold text-dark mb-4 animate-fade-in">
                ติดต่อ
                <span className="text-primary">เรา</span>
              </h1>
              <p className="lead text-muted mb-5 animate-fade-in-delay-1">
                พร้อมรับฟังความต้องการของคุณ และสร้างสรรค์โปรเจกต์ที่น่าทึ่งไปด้วยกัน
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-3">
        <div className="container py-3">
          <div className="row g-4">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <a
                  href={method.link}
                  className="text-decoration-none"
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                    <div className="contact-icon bg-primary bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                      style={{ width: '80px', height: '80px' }}>
                      <i className={`${method.icon} text-primary fs-2`}></i>
                    </div>
                    <h5 className="fw-bold text-dark mb-2">{method.title}</h5>
                    <p className="text-primary fw-semibold mb-2">{method.value}</p>
                    <p className="text-muted small mb-0">{method.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">ส่งข้อความถึงเรา</h2>
                <p className="lead text-muted">กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด</p>
              </div>

              <form className="contact-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">ชื่อ-นามสกุล *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary bg-opacity-10 border-0 ">
                        <i className="bi bi-person text-primary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-0 bg-light py-3 ps-4"
                        id="name"
                        placeholder="กรอกชื่อของคุณ"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">อีเมล *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary bg-opacity-10 border-0">
                        <i className="bi bi-envelope text-primary"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control border-0 bg-light py-3 ps-4"
                        id="email"
                        placeholder="กรอกอีเมลของคุณ"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-semibold">เบอร์โทรศัพท์</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary bg-opacity-10 border-0">
                        <i className="bi bi-telephone text-primary"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control border-0 bg-light py-3 ps-4"
                        id="phone"
                        placeholder="กรอกเบอร์โทรของคุณ"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject" className="form-label fw-semibold">หัวข้อ *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary bg-opacity-10 border-0">
                        <i className="bi bi-chat-dots text-primary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-0 bg-light py-3 ps-4"
                        id="subject"
                        placeholder="หัวข้อที่ต้องการปรึกษา"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold">ข้อความ *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary bg-opacity-10 border-0 align-items-start pt-3">
                        <i className="bi bi-pencil text-primary"></i>
                      </span>
                      <textarea
                        className="form-control border-0 bg-light py-3 ps-4"
                        id="message"
                        rows="6"
                        placeholder="กรอกรายละเอียดที่ต้องการปรึกษา..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
                      <i className="bi bi-send me-2"></i>
                      ส่งข้อความ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center py-5">
          <h2 className="display-6 fw-bold mb-3">มาเริ่มต้นโปรเจกต์ใหม่กัน</h2>
          <p className="lead mb-4 opacity-75">
            ไม่ว่าจะเป็นเว็บไซต์ แอปพลิเคชัน หรือระบบที่ซับซ้อน เรามีทีมงานพร้อมช่วยคุณ
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a
              href="mailto:meawpain12@gmail.com"
              className="btn btn-light btn-lg px-5 rounded-pill"
            >
              <i className="bi bi-envelope me-2"></i>
              ส่งอีเมลเลย
            </a>
            <a
              href="tel:+66926787438"
              className="btn btn-outline-light btn-lg px-5 rounded-pill"
            >
              <i className="bi bi-telephone me-2"></i>
              โทรปรึกษา
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
          border-color: var(--bs-primary);
        }
        
        .contact-icon {
          transition: all 0.3s ease;
        }
        
        .contact-card:hover .contact-icon {
          background-color: var(--bs-primary) !important;
        }
        
        .contact-card:hover .contact-icon i {
          color: white !important;
        }
        
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);
          border-color: var(--bs-primary);
        }
        
        .input-group-text {
          border-right: none;
        }
        
        .form-control {
          border-left: none;
          padding-left: 0;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.3s both;
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
          .contact-card:hover {
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