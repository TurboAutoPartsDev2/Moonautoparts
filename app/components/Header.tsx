"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_content}>
            <div className={styles.logo}>
              <Link href="/" style={{ display: 'block' }}>
                <Image
                  src="/modern-logo.svg"
                  alt="Moon Auto Parts"
                  width={220}
                  height={55}
                  priority
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                  onError={(e) => {
                    console.error('Error loading logo:', e);
                    // Fallback text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span style="font-size: 24px; font-weight: bold; color: #059669;">MOON AUTO</span>';
                  }}
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className={styles.desktop_nav}>
              <Link href="/" className={styles.nav_link}>Home</Link>
              <Link href="/engine" className={styles.nav_link}>Engine</Link>
              <Link href="/transmission" className={styles.nav_link}>Transmission</Link>
              <Link href="/about" className={styles.nav_link}>About Us</Link>
              <Link href="/contact" className={styles.nav_link}>Contact Us</Link>
            
            </nav>
            {/* Mobile Menu Button */}
            <button
              className={styles.mobile_menu_btn}
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
          className={styles.sidebar_overlay}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
            <div className={styles.sidebar_header}>
              <h3>Menu</h3>
              <button
                className={styles.close_btn}
                onClick={() => setIsSidebarOpen(false)}
              >
                ×
              </button>
            </div>
            <nav className={styles.sidebar_nav}>
              <Link href="/" className={styles.sidebar_link} onClick={() => setIsSidebarOpen(false)}>
                Home
              </Link>
              <Link href="/engine" className={styles.sidebar_link} onClick={() => setIsSidebarOpen(false)}>
                Engine
              </Link>
              <Link href="/transmission" className={styles.sidebar_link} onClick={() => setIsSidebarOpen(false)}>
                Transmission
              </Link>
              <Link href="/about" className={styles.sidebar_link} onClick={() => setIsSidebarOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className={styles.sidebar_link} onClick={() => setIsSidebarOpen(false)}>
                Contact Us
              </Link>
              {/* Mobile Call Now Button */}
              <a className={styles.call_button} href="tel:+18886188881">
                📞 Call Now: (888) 618-8881
              </a>
            </nav>
            <div className={styles.logo} style={{ textAlign: "center" }}>
              <Image
                src="/modern-logo.svg"
                alt="Moon Auto Parts"
                width={180}
                height={45}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
