"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
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
            <p className={styles.companyDesc}>
              Premium quality auto parts with comprehensive testing and
              industry-leading warranty. Free nationwide shipping and expert
              support.
            </p>
            <div className={styles.contactInfo}>
              <a href="tel:+18886188881" className={styles.phoneLink}>
                📞 (888) 618-8881
              </a>
              <a href="mailto:support@moonauto.com" className={styles.emailLink}>
                ✉️ support@moonauto.com
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/engine">Engine</Link>
              <Link href="/transmission">Transmission</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/terms">Term & Condition</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3>Our Services</h3>
            <ul className={styles.servicesList}>
              <li>✓ Used Engines</li>
              <li>✓ Used Transmissions</li>
              <li>✓ Technical Consultation</li>
              <li>✓ Warranty Services</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Why Choose Us</h3>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🛡️</span>
                <div className={styles.featureText}>
                  <strong>48-Month Warranty</strong>
                  <span>Full coverage</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🚚</span>
                <div className={styles.featureText}>
                  <strong>Free Shipping</strong>
                  <span>Nationwide</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⚡</span>
                <div className={styles.featureText}>
                  <strong>Quick Response</strong>
                  <span>10-min guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Moon Auto. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Styles moved to Footer.module.css for better performance */}
    </footer>
  );
};

export default Footer;
