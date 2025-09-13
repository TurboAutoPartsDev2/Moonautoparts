"use client";
import React, { useState } from "react";
// import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    partType: "engine", // or transmission
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <section className="hero-section" id="contact-hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="trust-badge">
            <span className="badge-icon">🤝</span>
            <span>Let&apos;s Get Started</span>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Contact <span className="highlight">MoonAutoParts</span>
                <br />
                <span className="sub-text">
                  Get Your 4-Year/40k Miles Warranty Quote Today
                </span>
              </h1>
              <p className="hero-description">
                Speak with our specialists about finding the perfect engine or
                transmission for your vehicle. We&apos;re here to help with
                expert advice and the best warranties in the industry.
              </p>
              <a href="tel:+18887777082" className="contact-button">
                <span className="phone-icon">📞</span>
                Speak with a Specialist
                <span className="phone-number">+1 (888) 777-7082</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card location">
              <div className="icon">📍</div>
              <h3>Our Location</h3>
              <p>
                126 S Ohio St, Apt L<br />
                Salina, KS 67401
                <br />
                United States
              </p>
            </div>
            <div className="contact-card phone">
              <div className="icon">📞</div>
              <h3>Phone Number</h3>
              <p>+1 (888) 777-7082</p>
              <span className="support-hours">Available 24/7</span>
            </div>
            <div className="contact-card email">
              <div className="icon">📧</div>
              <h3>Email Address</h3>
              <p>support@moonautoparts.com</p>
              <span className="response-time">Quick Response Guaranteed</span>
            </div>
            <div className="contact-card warranty">
              <div className="icon">🛡️</div>
              <h3>Warranty Coverage</h3>
              <p>4-Year / 40,000 Miles</p>
              <span className="warranty-note">Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-form-section">
        <div className="container">
          <div className="form-and-map">
            {/* <div className="quote-form">
              <h2>Get Your Quote</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="partType">Part Type</label>
                    <select
                      id="partType"
                      name="partType"
                      value={formData.partType}
                      onChange={handleChange}
                      required
                    >
                      <option value="engine">Engine</option>
                      <option value="transmission">Transmission</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicleMake">Vehicle Make</label>
                    <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Toyota"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicleModel">Vehicle Model</label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Camry"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicleYear">Vehicle Year</label>
                    <input
                      type="text"
                      id="vehicleYear"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 2019"
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Get Free Quote
                </button>
              </form>
            </div> */}

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.676975311!2d-97.61343!3d38.840234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bcd6b0c5b89603%3A0x66ea01c3a6428780!2s126%20S%20Ohio%20St%2C%20Salina%2C%20KS%2067401%2C%20USA!5e0!3m2!1sen!2sus!4v1631456789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }

        .hero-section {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          overflow: hidden;
          padding: 40px 0;
        }

        .hero-content {
          display: grid;
          gap: 60px;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(16, 185, 129, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(59, 130, 246, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(245, 158, 11, 0.05) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .hero-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #10b981, #059669);
          top: -200px;
          right: -200px;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #059669, #10b981);
          bottom: -150px;
          left: -150px;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #10b981, #059669);
          top: 50%;
          left: 20%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(8px);
        }

        .hero-content {
          display: block;
          align-items: center;
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .highlight {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-text {
          display: block;
          font-size: 1.5rem;
          margin-top: 10px;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.2rem;
          margin: 20px 0;
          opacity: 0.9;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #10b981;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .phone-icon {
          font-size: 1.2rem;
        }

        .phone-number {
          color: #059669;
          font-weight: 700;
        }

        .contact-info-section {
          padding: 80px 0;
          background: #f9fafb;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .contact-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-card .icon {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .contact-card h3 {
          color: #1a202c;
          margin-bottom: 10px;
        }

        .contact-card p {
          color: #4a5568;
          margin-bottom: 10px;
        }

        .support-hours,
        .response-time,
        .warranty-note {
          display: block;
          font-size: 0.9rem;
          color: #10b981;
        }

        .quote-form-section {
          padding: 80px 0;
        }

        .form-and-map {
          display: grid;
          // grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .quote-form {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          min-height: 650px;
        }

        .quote-form h2 {
          color: #1a202c;
          margin-bottom: 30px;
          font-size: 2rem;
          font-weight: 700;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #4a5568;
          font-weight: 500;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .submit-button {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
        }

        .map-container {
          height: 100%;
          min-height: 450px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

           .hero-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .form-and-map {
            grid-template-columns: 1fr;
          }

          .map-container {
            min-height: 400px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-button {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
