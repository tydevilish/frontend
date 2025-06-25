export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-4 pb-2 mt-auto shadow-lg">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <span className="fw-bold fs-5">
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Frontend Website
          </span>
        </div>
        <div className="mb-3 mb-md-0">
          <a href="https://facebook.com" className="text-white me-3 fs-4" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" className="text-white me-3 fs-4" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div>
          <small>&copy; {new Date().getFullYear()} Jirapat Papai. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}