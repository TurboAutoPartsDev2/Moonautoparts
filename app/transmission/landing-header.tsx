"use client";
import { useState } from "react";

const LandingHeader: React.FC<{ bg: string; navbg: string }> = ({
  bg,
  navbg,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/logo.svg" alt="Moon Auto Logo" />
            </div>
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <button onClick={() => handleLinkClick("why-us")}>Why Us</button>
              <button onClick={() => handleLinkClick("how-it-works")}>
                How it Works
              </button>
              <button onClick={() => handleLinkClick("testimonials")}>
                Testimonials
              </button>
              <button onClick={() => handleLinkClick("faq")}>FAQs</button>
              <button onClick={() => handleLinkClick("get-quote")}>
                Get Quote
              </button>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <h3>Menu</h3>
              <button
                className="close-btn"
                onClick={() => setIsSidebarOpen(false)}
              >
                x
              </button>
            </div>
            <nav className="sidebar-nav">
              <button onClick={() => handleLinkClick("why-us")}>Why Us</button>
              <button onClick={() => handleLinkClick("how-it-works")}>
                How it Works
              </button>
              <button onClick={() => handleLinkClick("testimonials")}>
                Testimonials
              </button>
              <button onClick={() => handleLinkClick("faq")}>FAQs</button>
              <button onClick={() => handleLinkClick("get-quote")}>
                Get Quote
              </button>
              {/* Mobile Call Now Button */}
              <a className="call-button" href="tel:+18886188881">
                📞 Call Now: (888) 618-8881
              </a>
            </nav>
            <div className="logo" style={{ textAlign: "center" }}>
              <img src="/logo.svg" alt="Moon Auto Parts" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .header {
          background: #fff;
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }
        .logo img {
          height: 50px;
          width: auto;
        }

        .desktop-nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .desktop-nav button {
          background: none;
          border: none;
          color: ${bg};
          font-weight: 600;
          font-size: 17px;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .desktop-nav button:hover {
          background: ${navbg};
          transform: translateY(-1px);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: ${bg};
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }

        .sidebar {
          background: white;
          width: 300px;
          height: 100vh;
          padding: 0;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          background: ${bg};
          color: white;
        }

        .sidebar-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-nav {
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sidebar-nav button {
          background: none;
          border: none;
          text-align: left;
          padding: 16px 24px;
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sidebar-nav button:hover {
          background: ${navbg};
          color: ${bg};
          padding-left: 32px;
        }

        .call-button {
          margin: 16px 24px;
          display: block;
          background: ${bg};
          color: white;
          text-align: center;
          font-weight: 700;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .call-button:hover {
          background: ${bg};
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .logo img {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          .sidebar {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default LandingHeader;
