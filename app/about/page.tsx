"use client";
import React from "react";


export default function AboutPage() {
  return (
    <div className="about-page">
      
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="trust-badge">
            <span className="badge-icon">🏆</span>
            <span>
              MoonAutoParts - Trusted by Thousands
            </span>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                About <span className="highlight">MoonAutoParts</span>
                <br />
                <span className="sub-text">
                  Premium Quality Auto Parts Nationwide
                </span>
              </h1>
              <p className="hero-description" style={{ color: 'white' }}>
                MoonAutoParts is a recognized leader in providing high-quality used engines
                and transmissions. We take pride in offering reliable parts with comprehensive
                warranties and nationwide shipping.
              </p>
              <div className="hero-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🌟</div>
                  <div className="benefit-text">
                    <strong>Premium Quality</strong>
                    <span>Rigorous testing standards</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-text">
                    <strong>48-Month Warranty</strong>
                    <span>Comprehensive coverage</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚚</div>
                  <div className="benefit-text">
                    <strong>Nationwide Service</strong>
                    <span>Fast & reliable shipping</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💎</div>
                  <div className="benefit-text">
                    <strong>Customer First</strong>
                    <span>Dedicated support team</span>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>

        <section className="company-details">
        <div className="container">
          <h2>About Us</h2>
          <p>
            MoonAutoParts is a recognized company that matches U.S. government 
            regulations and conforms to rules in all 50 States. We take pride in 
            providing quick and secure delivery through our business relationships 
            with renowned shipping firms, confirming a quick delivery of your auto 
            parts at the address you specify. In addition, we offer free delivery 
            to commercial locations.
          </p>
          <p>
            Our dedication to quality can be observed in our extensive testing 
            procedures, backed by our industry-leading 4-Year or 40,000-mile 
            warranty on every item. MoonAutoParts provides an interface 
            linking you to renowned car sellers nationwide. We cultivate strong 
            connections with top suppliers and junkyards around the nation, allowing 
            us to provide an extensive selection of high-quality used car parts. 
            If you are unable to locate the desired part, please contact us at 
            +1 (888) 777-7082. We will assist you to locate the ideal component 
            for your requirements.
          </p>
        </div>
      </section>

      <section className="who-we-are">
        <div className="container">
          <div className="content-with-image">
            <div className="text-content">
              <h2>Who We Are</h2>
              <p>
                MoonAutoParts is a U.S. parts seller. We source tested used engines & 
                transmissions from partner facilities and ship nationwide. For transparency: 
                checkout, invoices, and policies are issued while your storefront brand 
                remains MoonAutoParts.
              </p>
            </div>
            {/* <div className="image-container">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
                alt="Our Facility"
                width={500}
                height={350}
                className="rounded-image"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="operations">
        <div className="container">
          <h2>How We Operate</h2>
          <p>
            When you place an order, your engine may ship directly from one of our 
            partner facilities. Every partner we work with is thoroughly reviewed 
            to ensure reliability, quality, and customer satisfaction. Our goal is 
            to make the process simple, transparent, and dependable. So you get the 
            right engine, on time, and with confidence.
          </p>
        </div>
      </section>

      <section className="warranty-section">
        <div className="container">
          <h2>Our Industry-Leading Warranty</h2>
          <div className="warranty-content">
            <div className="warranty-highlight">
              <span className="warranty-badge">4-Year / 40,000 Miles</span>
              <p className="warranty-subtitle">Comprehensive Coverage in All 50 States</p>
            </div>
            <p className="warranty-description">
              At MoonAutoParts, we stand behind the quality of our products with one of the 
              industry&apos;s most comprehensive warranty programs. Every engine and transmission 
              comes with our signature <strong>4-Year or 40,000-Mile Limited Warranty</strong> 
              (whichever comes first), providing you peace of mind across all 50 United States.
            </p>
            <div className="warranty-details">
              <h3>What Our Warranty Covers:</h3>
              <ul className="warranty-list">
                <li>Complete parts coverage for 4 years or 40,000 miles</li>
                <li>Nationwide coverage valid in all 50 U.S. states</li>
                <li>Transferable warranty if you sell your vehicle</li>
                <li>No deductible on covered repairs</li>
              </ul>
            </div>
            <p className="warranty-note">
              Our warranty coverage begins from the date of installation and stays with the 
              vehicle, not the owner. This means if you sell your vehicle, the warranty 
              transfers to the new owner, adding value to your investment.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        section {
          padding: 60px 0;
        }

        .hero-section {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          text-align: center;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-image {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          border: 4px solid;
          border-image: linear-gradient(45deg, #10b981, #000) 1;
          padding: 3px;
        }

        .hero-image:hover {
          transform: translateY(-10px);
          border-image: linear-gradient(225deg, #10b981, #000) 1;
        }

        .content-with-image {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 4px solid;
          border-image: linear-gradient(45deg, #10b981, #000) 1;
          padding: 3px;
          transition: all 0.3s ease;
        }

        .image-container:hover {
          border-image: linear-gradient(225deg, #10b981, #000) 1;
        }

        h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: #1a202c;
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
        }

        h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #10b981, #ffffff, #ff6b00);
          border-radius: 50px;
          transform: scaleX(0.8);
          transition: transform 0.3s ease;
        }

        h2:hover::after {
          transform: scaleX(1);
        }

        .hero-section h2 {
          color: white;
          font-size: 1.5rem;
          opacity: 0.9;
        }

        .contact-details {
          background: #f8fafc;
          padding: 30px;
          border-radius: 15px;
          margin: 20px 0;
        }

        .contact-details p {
          margin: 10px 0;
          font-size: 1.1rem;
          color: #4a5568;
        }

        section p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        ul li {
          margin: 15px 0;
          padding-left: 30px;
          position: relative;
          font-size: 1.1rem;
          color: #4a5568;
        }

        ul li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }



        :global(.rounded-image) {
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        :global(.rounded-image:hover) {
          transform: scale(1.02);
        }

        .hero-content {
          display: block;
          // grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          padding-right: 40px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
          color: white;
        }

        .highlight {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .sub-text {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 10px;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 32px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          padding: 14px 16px;
        }

        .benefit-icon {
          font-size: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: white;
        }

        .benefit-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .benefit-text strong {
          font-size: 17px;
          font-weight: 700;
          color: white;
        }

        .benefit-text span {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .hero-image:hover {
          transform: translateY(-10px);
        }

        .warranty-section {
          background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(255, 107, 0, 0.05));
          border-radius: 20px;
          margin: 40px 0;
          padding: 60px 0;
        }

        .warranty-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .warranty-highlight {
          text-align: center;
          margin-bottom: 40px;
        }

        .warranty-badge {
          display: inline-block;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #10b981, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .warranty-subtitle {
          font-size: 1.2rem;
          color: #4a5568;
          margin-top: 10px;
        }

        .warranty-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 30px;
          text-align: center;
        }

        .warranty-details {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin: 30px 0;
        }

        .warranty-details h3 {
          color: #1a202c;
          font-size: 1.4rem;
          margin-bottom: 20px;
        }

        .warranty-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .warranty-list li {
          padding-left: 30px;
          position: relative;
          margin-bottom: 15px;
          color: #4a5568;
        }

        .warranty-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .warranty-note {
          font-size: 1rem;
          color: #718096;
          font-style: italic;
          text-align: center;
          margin-top: 30px;
        }

        @media (max-width: 768px) {
          .about-page {
            padding-top: 60px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .hero-text {
            padding-right: 0;
            order: 1;
          }

          .hero-image {
            order: 2;
            max-width: 100%;
          }

          .hero-benefits {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .benefit-item {
            justify-content: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .sub-text {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
            text-align: center;
          }
        }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          section {
            padding: 40px 0;
          }

          .hero-image-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }

          .content-with-image {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }

          .benefit-image {
            max-width: 100%;
            height: auto;
          }

          .text-content {
            order: 2;
          }

          .image-container {
            order: 1;
          }
        }
      `}</style>
    </div>
  );
}
