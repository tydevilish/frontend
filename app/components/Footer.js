"use client"

export default function Footer() {
  return (
    <footer className=" text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-lightning-charge-fill text-white"></i>
              </div>
              <span className="fw-bold fs-4 text-black">Frontend</span>
            </div>
            <p className="text-muted mb-4 pe-lg-4">
              สร้างประสบการณ์ดิจิทัลที่ยอดเยี่ยมด้วยเทคโนโลยีที่ทันสมัยและการออกแบบที่สวยงาม
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com"
                className="text-muted hover-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://instagram.com"
                className="text-muted hover-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://github.com"
                className="text-muted hover-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="https://linkedin.com"
                className="text-muted hover-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3 text-primary">ลิงก์ด่วน</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-muted text-decoration-none hover-primary transition-colors">หน้าแรก</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-muted text-decoration-none hover-primary transition-colors">เกี่ยวกับเรา</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-muted text-decoration-none hover-primary transition-colors">บริการ</a>
              </li>
              <li className="mb-2">
                <a href="/portfolio" className="text-muted text-decoration-none hover-primary transition-colors">ผลงาน</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3 text-primary">บริการ</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none hover-primary transition-colors">พัฒนาเว็บไซต์</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none hover-primary transition-colors">UI/UX Design</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none hover-primary transition-colors">Mobile App</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none hover-primary transition-colors">คอนซัลติ้ง</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3 text-primary">ติดต่อเรา</h6>
            <div className="mb-3">
              <div className="d-flex align-items-start mb-2">
                <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                <span className="text-muted small">
                  9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่<br />
                  เชียงใหม่ 50200
                </span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope text-primary me-2"></i>
                <a href="mailto:meawpain12@Gmail.com" className="text-muted text-decoration-none small hover-primary transition-colors">
                  meawpain12@Gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone text-primary me-2"></i>
                <a href="tel:+66123456789" className="text-muted text-decoration-none small hover-primary transition-colors">
                  +66 92 678 7438
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold mb-2 small text-primary">รับข่าวสารจากเรา</h6>
              <div className="input-group input-group-sm">
                <input
                  type="email"
                  className="form-control bg-white border-secondary text-white"
                  placeholder="อีเมลของคุณ"
                  style={{ borderRadius: '20px 0 0 20px' }}
                />
                <button
                  className="btn btn-primary px-3"
                  type="button"
                  style={{ borderRadius: '0 20px 20px 0' }}
                >
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small className="text-muted">
                &copy; {new Date().getFullYear()} Jirapat Papai. All rights reserved.
              </small>
            </div>
            <div className="col-md-6 text-md-end mt-2 mt-md-0">
              <small>
                <a href="/privacy" className="text-muted text-decoration-none me-3 hover-primary transition-colors">
                  นโยบายความเป็นส่วนตัว
                </a>
                <a href="/terms" className="text-muted text-decoration-none hover-primary transition-colors">
                  เงื่อนไขการใช้งาน
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-primary {
          transition: color 0.3s ease;
        }
        
        .hover-primary:hover {
          color: var(--bs-primary) !important;
        }
        
        .transition-colors {
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          background-color:rgb(243, 241, 241) !important;
          border-color: var(--bs-primary) !important;
          color: white !important;
          box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);
        }
        
        .form-control::placeholder {
          color: #adb5bd !important;
        }
        
        .btn:hover {
          transform: translateY(-1px);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .col-lg-4:first-child {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .btn:hover {
            transform: none;
          }

        }
      `}</style>
    </footer>
  );
}