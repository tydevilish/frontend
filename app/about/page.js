"use client"

export default function About() {
  const skills = [
    { name: "React & Next.js", level: 70, icon: "bi-code-slash" },
    { name: "JavaScript/TypeScript", level: 70, icon: "bi-braces" },
    { name: "UI/UX Design", level: 85, icon: "bi-palette" },
    { name: "Node.js", level: 80, icon: "bi-server" },
    { name: "Database", level: 75, icon: "bi-database" },
    { name: "Mobile Development", level: 10, icon: "bi-phone" }
  ];

  const experiences = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Chiangmai Software And Hardware Service",
      description: "พัฒนาและดูแลระบบเว็บแอปพลิเคชันขนาดใหญ่ ใช้เทคโนโลยี React, Next.js TypeScript JavaScript"
    },
  ];

  const achievements = [
    { icon: "bi-award", title: "50+", subtitle: "โปรเจกต์ที่สำเร็จ" },
    { icon: "bi-people", title: "30+", subtitle: "ลูกค้าที่พึงพอใจ" },
    { icon: "bi-clock", title: "4+", subtitle: "ปีประสบการณ์" },
    { icon: "bi-star", title: "5.0", subtitle: "คะแนนรีวิว" }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-white py-5 mb-0">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h1 className="display-4 fw-bold text-dark mb-4 animate-fade-in">
                  สวัสดี! ผม
                  <span className="text-primary d-block">จิรภัทร์ ป่าไพร</span>
                </h1>
                <p className="lead text-muted mb-4 animate-fade-in-delay-1">
                  Fullstack Developer ที่หลงใหลในการสร้างประสบการณ์ดิจิทัลที่สวยงาม
                  และใช้งานง่าย ด้วยความเชี่ยวชาญด้านเทคโนโลยีที่ทันสมัย
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start animate-fade-in-delay-2">
                  <a
                    className="btn btn-primary btn-lg px-4 rounded-pill"
                    href="https://jirapatpapai.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    ติดต่อเรา
                  </a>
                  <button className="btn btn-outline-primary btn-lg px-4 rounded-pill">
                    <i className="bi bi-download me-2"></i>
                    ดาวน์โหลด CV
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center position-relative">
                <div className="profile-image-container">
                  <div className="bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center profile-placeholder">
                    <i className="bi bi-person-fill text-white" style={{ fontSize: '8rem' }}></i>
                  </div>
                  {/* Floating Elements */}
                  <div className="floating-element floating-1">
                    <i className="bi bi-code-slash text-primary fs-2"></i>
                  </div>
                  <div className="floating-element floating-2">
                    <i className="bi bi-palette text-success fs-2"></i>
                  </div>
                  <div className="floating-element floating-3">
                    <i className="bi bi-lightbulb text-warning fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row g-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="col-6 col-md-3 text-center">
                <div className="achievement-item">
                  <i className={`${item.icon} display-4 mb-3 d-block`}></i>
                  <h3 className="fw-bold mb-1">{item.title}</h3>
                  <p className="mb-0 opacity-75">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4">เกี่ยวกับตัวผม</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <p className="text-muted">
                    ผมเป็น Frontend Developer ที่มีประสบการณ์มากกว่า 4 ปี
                    ในการพัฒนาเว็บแอปพลิเคชันและมือถือ ด้วยความหลงใหลในการออกแบบ
                    และเทคโนโลยีที่ทันสมัย
                  </p>
                  <p className="text-muted">
                    ผมเชื่อว่าการออกแบบที่ดีต้องมาพร้อมกับประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
                    และประสิทธิภาพที่เร็วและเสถียร
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted">
                    นอกจากการเขียนโค้ดแล้ว ผมยังสนใจในด้าน UI/UX Design,
                    การเรียนรู้เทคโนโลジีใหม่ๆ และการแชร์ความรู้กับคนอื่น
                  </p>
                  <p className="text-muted">
                    เป้าหมายของผมคือการสร้างผลงานที่ไม่เพียงแต่สวยงาม
                    แต่ยังตอบโจทย์ความต้องการของผู้ใช้อย่างแท้จริง
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h5 className="fw-bold mb-3">ข้อมูลส่วนตัว</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex">
                    <i className="bi bi-person text-primary me-3 mt-1"></i>
                    <div>
                      <strong>ชื่อ:</strong><br />
                      <span className="text-muted">จิรภัทร์ ป่าไพร</span>
                    </div>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-geo-alt text-primary me-3 mt-1"></i>
                    <div>
                      <strong>สถานที่:</strong><br />
                      <span className="text-muted">เชียงใหม่, ประเทศไทย</span>
                    </div>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-envelope text-primary me-3 mt-1"></i>
                    <div>
                      <strong>อีเมล:</strong><br />
                      <span className="text-muted">meawpain12@gmail.com</span>
                    </div>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-telephone text-primary me-3 mt-1"></i>
                    <div>
                      <strong>โทรศัพท์:</strong><br />
                      <span className="text-muted">+66 92 678 7438</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">ความเชี่ยวชาญ</h2>
            <p className="lead text-muted">เทคโนโลยีและทักษะที่ผมถนัด</p>
          </div>
          <div className="row g-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="col-md-6">
                <div className="skill-item p-4 bg-light rounded-3 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${skill.icon} text-primary fs-3 me-3`}></i>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1">{skill.name}</h6>
                      <div className="progress" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-primary fw-bold ms-2">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">ประสบการณ์การทำงาน</h2>
            <p className="lead text-muted">เส้นทางการทำงานของผมในสายเทคโนโลยี</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item d-flex mb-4">
                  <div className="timeline-marker bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-4"
                    style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    {idx + 1}
                  </div>
                  <div className="timeline-content bg-white p-4 rounded-3 shadow-sm flex-grow-1">
                    <span className="badge bg-primary mb-2">{exp.year}</span>
                    <h5 className="fw-bold mb-1">{exp.title}</h5>
                    <h6 className="text-primary mb-2">{exp.company}</h6>
                    <p className="text-muted mb-0">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center py-5">
          <h2 className="display-6 fw-bold mb-3">พร้อมที่จะทำงานร่วมกัน?</h2>
          <p className="lead mb-4 opacity-75">
            หากคุณมีโปรเจกต์ที่น่าสนใจ หรือต้องการคุยเกี่ยวกับการทำงานร่วมกัน
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light btn-lg px-5 rounded-pill">
              <i className="bi bi-chat-dots me-2"></i>
              เริ่มคุยกัน
            </button>
            <button className="btn btn-outline-light btn-lg px-5 rounded-pill">
              <i className="bi bi-briefcase me-2"></i>
              ดูผลงาน
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .profile-image-container {
          position: relative;
        }
        
        .profile-placeholder {
          width: 300px;
          height: 300px;
          position: relative;
          z-index: 1;
        }
        
        .floating-element {
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
          top: 20%;
          right: -10%;
          animation-delay: 0s;
        }
        
        .floating-2 {
          bottom: 30%;
          left: -5%;
          animation-delay: 1s;
        }
        
        .floating-3 {
          top: 50%;
          right: -15%;
          animation-delay: 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        
        .achievement-item {
          transition: transform 0.3s ease;
        }
        
        .achievement-item:hover {
          transform: translateY(-5px);
        }
        
        .skill-item {
          transition: all 0.3s ease;
        }
        
        .skill-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .timeline-item:last-child .timeline-content::after {
          display: none;
        }
        
        .progress-bar {
          transition: width 2s ease-in-out;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-element {
            display: none;
          }
          
          .profile-placeholder {
            width: 200px;
            height: 200px;
          }
          
          .skill-item:hover,
          .achievement-item:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}