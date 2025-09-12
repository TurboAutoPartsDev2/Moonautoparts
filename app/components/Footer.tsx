"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <Image
                src="/modern-logo.svg"
                alt="Moon Auto Parts"
                width={200}
                height={50}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <p className="company-desc">
              Premium quality auto parts with comprehensive testing and
              industry-leading warranty. Free nationwide shipping and expert
              support.
            </p>
            <div className="contact-info">
              <a href="tel:+18886188881" className="phone-link">
                📞 (888) 618-8881
              </a>
              <a href="mailto:support@moonauto.com" className="email-link">
                ✉️ support@moonauto.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/engine">Engine</Link>
              <Link href="/transmission">Transmission</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="services-list">
              <li>✓ Used Engines</li>
              <li>✓ Used Transmissions</li>
              <li>✓ Installation Support</li>
              <li>✓ Technical Consultation</li>
              <li>✓ Warranty Services</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Why Choose Us</h3>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <div className="feature-text">
                  <strong>48-Month Warranty</strong>
                  <span>Full coverage</span>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <div className="feature-text">
                  <strong>Free Shipping</strong>
                  <span>Nationwide</span>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <div className="feature-text">
                  <strong>Quick Response</strong>
                  <span>10-min guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Moon Auto. All rights reserved.
          </div>
          <div className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #f8fafc;
          padding: 60px 0 20px;
          border-top: 1px solid #e2e8f0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }
        .company-desc {
          color: #4a5568;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .phone-link,
        .email-link {
          color: #059669;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease;
        }
        .phone-link:hover,
        .email-link:hover {
          color: #047857;
        }
        h3 {
          color: #1a202c;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-nav a {
          color: #4a5568;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        .footer-nav a:hover {
          color: #059669;
          transform: translateX(5px);
        }
        .services-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .services-list li {
          color: #4a5568;
          font-size: 0.95rem;
        }
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .feature-icon {
          font-size: 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          padding: 8px;
          border-radius: 8px;
          color: #059669;
        }
        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .feature-text strong {
          color: #1a202c;
          font-size: 0.95rem;
        }
        .feature-text span {
          color: #6b7280;
          font-size: 0.85rem;
        }
        .footer-bottom {
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .legal-links {
          display: flex;
          gap: 24px;
        }
        .legal-links a {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .legal-links a:hover {
          color: #059669;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px;
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .legal-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          .footer-section {
            text-align: center;
          }
          .logo {
            display: flex;
            justify-content: center;
          }
          .contact-info {
            align-items: center;
          }
          .services-list {
            align-items: center;
          }
          .feature-item {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
