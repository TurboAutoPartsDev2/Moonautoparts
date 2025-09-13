"use client";
import type React from "react";
import { useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { leadSubmit } from "@/lib/serverActions/main";
import styles from "./EnginePage.module.css";

interface Option {
  _id: string;
  option: string;
}
interface Year {
  _id: string;
  year: number;
  Options: Option[];
}
interface Model {
  _id: string;
  model: string;
  years: Year[];
}
interface Make {
  _id: string;
  make: string;
  models: Model[];
}

export default function EnginesLandingPage({ data }: { data: Make[] }) {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    option: "",
    name: "",
    email: "",
    mobile: "",
    zipCode: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await leadSubmit({
        partName: "Engine",
        make: formData.make,
        model: formData.model,
        year: Number(formData.year),
        option: formData.option,
        name: formData.name,
        email: formData.email,
        contactNumber: formData.mobile,
        leadType: "Quote",
        zipCode: Number(formData.zipCode),
      });
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      setShowSuccess(true);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Something Wen't worong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return (
        formData.make && formData.model && formData.year && formData.option
      );
    }
    return true;
  };

  const makes =
    data.sort((a: { make: string }, b: { make: string }) =>
      a.make.localeCompare(b.make)
    ) || [];

  const filteredModels = useMemo(
    () => makes?.find((m) => m.make === formData.make)?.models || [],
    [formData.make, makes]
  );

  const filteredYears = useMemo(
    () => filteredModels.find((m) => m.model === formData.model)?.years || [],
    [filteredModels, formData.model]
  );

  const filteredOptions = useMemo(
    () =>
      filteredYears.find((y) => y?.year.toString() === formData.year)
        ?.Options || [],
    [filteredYears, formData.year]
  );

  return (
    <div className={styles.enginesPage}>
      <div className="_toast83">
        <ToastContainer position="top-center" />
      </div>
      {showSuccess && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <div className={styles.modalIcon}>✅</div>
            <h3 className={styles.modalTitle}>Success & Thank You!</h3>
            <p className={styles.modalText}>
              Your query is registered with us. We will get back to you shortly.
            </p>
            <div className={styles.modalActions}>
              <button
                className={styles.modalButton}
                onClick={() => setShowSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <LandingHeader bg="#059669" navbg="rgba(16,185,129,.1)" /> */}
      {/* Hero Section with Form */}
      <section className="hero-section" id="get-quote">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="trust-badge">
            <span className="badge-icon">⚡</span>
            <span>
              America&apos;s #1 Engine Source - Over 50,000 Engines Sold
            </span>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Get Premium <span className="highlight">Used Engines</span>
                <br />
                <span className="sub-text">
                  With Instant Pricing & Fast Delivery
                </span>
              </h1>
              <p className="hero-description">
                Save up to 70% on high-quality, tested engines with our
                industry-leading 48-month warranty. Free nationwide shipping,
                expert installation support, and 15-minute response time
                guaranteed.
              </p>
              <div className="hero-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-text">
                    <strong>48-Month Warranty</strong>
                    <span>Industry-leading coverage</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚚</div>
                  <div className="benefit-text">
                    <strong>Free Shipping</strong>
                    <span>Nationwide delivery</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-text">
                    <strong>15-Min Response</strong>
                    <span>Instant quote guaranteed</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🔬</div>
                  <div className="benefit-text">
                    <strong>Rigorous Testing</strong>
                    <span>47-point inspection</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-card">
                <div className="form-header">
                  <h3>Get Your Free Engine Quote</h3>
                  <p>Instant pricing • No obligation • Expert advice</p>
                  <div className="step-progress">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${(currentStep / 2) * 100}%` }}
                      ></div>
                    </div>
                    <div className="step-labels">
                      <span className={currentStep >= 1 ? "active" : ""}>
                        🚗 Vehicle Info
                      </span>
                      <span className={currentStep >= 2 ? "active" : ""}>
                        📞 Contact Info
                      </span>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="quote-form">
                  {currentStep === 1 && (
                    <div className="form-step">
                      <div className="mobile-form-grid">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Make</label>
                            <select
                              name="make"
                              value={formData.make}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>
                                Select Make
                              </option>
                              {makes.map(
                                (i: { make?: string; _id?: string }) => (
                                  <option value={i.make} key={i._id}>
                                    {i.make}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Model</label>
                            <select
                              name="model"
                              value={formData.model}
                              onChange={handleChange}
                              required
                              disabled={!formData.make}
                            >
                              <option value="" disabled>
                                Select Model
                              </option>
                              {filteredModels.map((m) => (
                                <option value={m.model} key={m._id}>
                                  {m.model}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Year</label>
                            <select
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              required
                              disabled={!formData.model}
                            >
                              <option value="" disabled>
                                Select Year
                              </option>
                              {filteredYears.map((y) => (
                                <option key={y._id} value={y.year.toString()}>
                                  {y.year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Options</label>
                            <select
                              name="option"
                              value={formData.option}
                              onChange={handleChange}
                              required
                              disabled={!formData.year}
                            >
                              <option value="" disabled>
                                Select Option
                              </option>
                              {filteredOptions.map((o) => (
                                <option value={o.option} key={o._id}>
                                  {o.option}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="next-btn"
                        onClick={nextStep}
                        disabled={!canProceed()}
                      >
                        Continue to Contact Info →
                      </button>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="form-step">
                      <div className="mobile-form-grid">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Email Address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                              type="text"
                              name="mobile"
                              placeholder="(888) 123-4567"
                              value={formData.mobile}
                              onChange={handleChange}
                              maxLength={10}
                              minLength={10}
                              inputMode="numeric"
                              pattern="\d{10}"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>ZipCode</label>
                            <input
                              type="text"
                              name="zipCode"
                              placeholder="12345"
                              value={formData.zipCode}
                              onChange={handleChange}
                              maxLength={5}
                              minLength={5}
                              inputMode="numeric"
                              pattern="\d{5}"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-buttons">
                        <button
                          type="button"
                          className="back-btn"
                          onClick={prevStep}
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner"></span>
                              Submiting...
                            </>
                          ) : (
                            <>💬 Submit</>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                  <p className="form-note">
                    🔒 Your information is secure and will never be shared
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <h2>Why 50,000+ Customers Choose Moon Auto Parts</h2>
            <div className="trust-stats">
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Engines Sold</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">98.7%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🛡️</div>
                <div className="stat-number">48</div>
                <div className="stat-label">Month Warranty</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-number">15</div>
                <div className="stat-label">Minute Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section" id="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Premium Used Engines?</h2>
            <p>
              Every engine undergoes our rigorous 47-point inspection process
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Rigorous Testing Process</h3>
              <p>
                Every engine undergoes comprehensive testing including
                compression tests, leak-down tests, and performance validation
                to ensure maximum reliability and longevity.
              </p>
              <ul>
                <li>✓ Compression testing</li>
                <li>✓ Leak-down analysis</li>
                <li>✓ Performance validation</li>
                <li>✓ Computer diagnostics</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Industry-Leading Warranty</h3>
              <p>
                Up to 48-month warranty coverage with comprehensive protection.
                We stand behind every engine we sell with complete confidence
                and peace of mind.
              </p>
              <ul>
                <li>✓ Up to 48 months coverage</li>
                <li>✓ Nationwide warranty service</li>
                <li>✓ 24/7 roadside assistance</li>
                <li>✓ No hidden fees or charges</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast & Free Shipping</h3>
              <p>
                Free nationwide shipping with fast 15-day delivery service.
                Professional packaging ensures your engine arrives safely and
                ready for installation.
              </p>
              <ul>
                <li>✓ Free nationwide shipping</li>
                <li>✓ 15-day delivery service</li>
                <li>✓ Professional packaging</li>
                <li>✓ Tracking information provided</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Unbeatable Value</h3>
              <p>
                Save up to 70% compared to new engines while getting the same
                reliability and performance. Best price guarantee with
                competitive market pricing.
              </p>
              <ul>
                <li>✓ Save up to 70% vs new</li>
                <li>✓ Best price guarantee</li>
                <li>✓ Competitive market pricing</li>
                <li>✓ No hidden costs</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly Solution</h3>
              <p>
                Choosing used engines helps reduce waste and environmental
                impact while providing you with a cost-effective and sustainable
                automotive solution.
              </p>
              <ul>
                <li>✓ Reduces environmental waste</li>
                <li>✓ Sustainable auto parts</li>
                <li>✓ Eco-friendly choice</li>
                <li>✓ Recycling initiative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from satisfied customers across the nation</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Excellent service! My engine arrived quickly and runs perfectly.
                The warranty gave me complete peace of mind. The installation
                support was incredibly helpful. Highly recommend Turbo Auto
                Parts!
              </p>
              <div className="customer-info">
                <div className="customer-avatar">MR</div>
                <div className="customer-details">
                  <strong>Mike Rodriguez</strong>
                  <span>Texas • Ford F-150 Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Saved me over $4,000 compared to dealer prices! Professional
                service, fast shipping, and great quality. The engine works like
                new and the customer support team was amazing throughout the
                process.
              </p>
              <div className="customer-info">
                <div className="customer-avatar">SC</div>
                <div className="customer-details">
                  <strong>Sarah Chen</strong>
                  <span>California • Honda Accord Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Fast shipping and excellent customer support. The engine works
                perfectly and the warranty coverage is outstanding. Got my quote
                in 10 minutes and the whole process was seamless. Great
                experience!
              </p>
              <div className="customer-info">
                <div className="customer-avatar">DJ</div>
                <div className="customer-details">
                  <strong>David Johnson</strong>
                  <span>New York • Toyota Camry Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="process-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works - Simple 4-Step Process</h2>
            <p>Get your premium used engine in just 4 easy steps</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Get Your Quote</h3>
                <p>
                  Fill out our simple form and get instant pricing for your
                  specific vehicle in just 15 minutes.
                </p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Find Your Engine</h3>
                <p>
                  Our experts locate the perfect engine match from our extensive
                  inventory of tested engines.
                </p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Fast Delivery</h3>
                <p>
                  Free shipping directly to your door or installer with
                  professional packaging and tracking.
                </p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Expert Support</h3>
                <p>
                  Professional installation guidance and ongoing support with
                  our comprehensive warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our used engines</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How Does My Motor Comes?</h3>
              <p>
                Complete engine, minus the A/C compressor, starter, alternator,
                and power steering pump. Your mechanic will know to swap out
                those accessories from your existing motor.
              </p>
            </div>
            <div className="faq-item">
              <h3>What warranty do you offer on used engines?</h3>
              <p>
                4 years or 40,000 miles whichever comes first. if you have an
                issue we will send the part to a mechanic of your choice.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>
                We offer free nationwide shipping with delivery typically within
                15 days. Expedited shipping options are also available.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are your engines tested before shipping?</h3>
              <p>
                Yes, every engine undergoes our rigorous 47-point inspection
                process including compression tests, leak-down analysis, and
                performance validation.
              </p>
            </div>
            <div className="faq-item">
              <h3>What if the engine doesn&apos;t fit my vehicle?</h3>
              <p>
                We guarantee proper fitment. Our experts verify compatibility
                before shipping, and we offer full support if any issues arise.
              </p>
            </div>
            <div className="faq-item">
              <h3>How much can I save compared to a new engine?</h3>
              <p>
                You can save up to 70% compared to new engine prices while
                getting the same reliability and performance with our warranty
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Your Premium Engine?</h2>
            <p>
              Join 50,000+ satisfied customers who trust Moon Auto Parts for
              reliable, high-quality used engines
            </p>
            <div className="cta-buttons">
              <button
                className="cta-primary"
                onClick={() =>
                  document
                    .querySelector(".hero-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get My Free Quote Now 🚀
              </button>
              <a href="tel:+1 (888) 618-8881" className="cta-secondary">
                📞 Call For Financing
              </a>
            </div>
            <div className="cta-guarantees">
              <div className="guarantee">✓ 15-Minute Response Guaranteed</div>
              <div className="guarantee">✓ No Obligation Quote</div>
              <div className="guarantee">✓ Expert Consultation Included</div>
            </div>
          </div>
        </div>
      </section>
      <a href="tel:+1 (888) 618-8881" className="_BottomFxi9">
        📞 Call For Financing
      </a>
      {/* Styles moved to EnginePage.module.css for better performance */}
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 16px;
        }
        .modal {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          max-width: 420px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          border: 1px solid #e5e7eb;
        }
        .modal-icon {
          font-size: 40px;
          margin-bottom: 8px;
        }
        .modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 8px;
        }
        .modal-text {
          color: #4a5568;
          margin-bottom: 16px;
        }
        .modal-actions {
          display: flex;
          justify-content: center;
        }
        .modal-button {
          background: linear-gradient(135deg, #059669, #10b981);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 10px 18px;
          font-weight: 700;
          cursor: pointer;
        }
        .engines-page {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1a202c;
          background: #ffffff;
          position: relative;
        }
        ._BottomFxi9 {
          display: none;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          overflow: hidden;
          padding: 20px 0;
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
        .form-group > select[disabled] {
          background: #eee !important;
          color: rgba(0, 0, 0, 0.5) !important;
        }
        .hero-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }
        .shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #ef4444, #f97316);
          top: -200px;
          right: -200px;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #10b981, #059669);
          bottom: -150px;
          left: -150px;
        }
        .shape-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #8b5cf6, #7c3aed);
          top: 50%;
          left: 20%;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
          align-items: flex-start;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.1);
          padding: 10px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #059669;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
          color: #1a202c;
        }
        .highlight {
          background: linear-gradient(45deg, #ef4444, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-text {
          color: #059669;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 32px;
          line-height: 1.6;
          color: #4a5568;
        }

        .hero-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #1a202c;
        }

        .benefit-icon {
          font-size: 24px;
          background: rgba(16, 185, 129, 0.1);
          padding: 10px;
          border-radius: 10px;
          color: #059669;
        }

        .benefit-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .benefit-text strong {
          font-size: 16px;
          font-weight: 700;
          color: #1a202c;
        }
        .benefit-text span {
          font-size: 14px;
          color: #6b7280;
        }
        .form-container {
          position: relative;
        }
        .form-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 20px 30px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .form-header {
          text-align: center;
          margin-bottom: 28px;
        }
        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 8px;
        }
        .form-header p {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 24px;
        }
        .step-progress {
          margin-bottom: 24px;
          padding: 0 10px;
        }
        .step-progress .step-labels span {
          position: relative;
        }
        .step-progress .step-labels span.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #059669;
          border-radius: 2px;
        }
        .progress-bar {
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(5, 150, 105, 0.1);
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #059669, #10b981);
          transition: width 0.3s ease;
        }
        .step-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .step-labels span {
          color: #9ca3af;
        }
        .step-labels span.active {
          color: #059669;
        }
        .quote-form {
          display: flex;
          flex-direction: column;
        }
        .mobile-form-grid {
          margin-bottom: 24px;
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }
        .form-group input,
        .form-group select {
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f9fafb;
          color: #000;
        }
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #1e40af;
          background: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.15);
        }
        .next-btn,
        .submit-btn,
        .back-btn {
          padding: 18px 24px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .next-btn,
        .submit-btn {
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          width: 100%;
        }
        .next-btn:hover:not(:disabled),
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 64, 175, 0.3);
        }
        .next-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .form-buttons {
          display: flex;
          gap: 16px;
        }
        .back-btn {
          background: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
          flex: 1;
        }
        .submit-btn {
          flex: 2;
        }
        .back-btn:hover {
          background: #e5e7eb;
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .form-note {
          text-align: center;
          font-size: 0.85rem;
          color: #6b7280;
          margin-top: 16px;
        }
        .trust-section {
          padding: 50px 0;
          background: #f8fafc;
        }
        .trust-content {
          text-align: center;
        }
        .trust-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 48px;
        }
        .trust-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #059669;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
        }
        .features-section {
          padding: 25px 0;
          background: white;
        }
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 16px;
        }
        .section-header p {
          font-size: 1.2rem;
          color: #6b7280;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .feature-card {
          background: #f8fafc;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #1e40af;
        }
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .feature-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        .feature-card p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .feature-card ul {
          list-style: none;
          padding: 0;
        }
        .feature-card li {
          color: #1e40af;
          font-size: 0.9rem;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .testimonials-section {
          padding: 25px 0;
          background: white;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .testimonial-card {
          background: #f8fafc;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .stars {
          font-size: 1.2rem;
        }
        .verified {
          font-size: 0.8rem;
          color: #10b981;
          font-weight: 600;
        }
        .testimonial-card p {
          color: #4a5568;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 24px;
        }
        .customer-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .customer-avatar {
          width: 48px;
          height: 48px;
          background: #1e40af;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .customer-details strong {
          display: block;
          color: #1a202c;
          font-weight: 600;
        }
        .customer-details span {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .process-section {
          padding: 25px 0;
          background: #f8fafc;
        }
        .process-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .process-step {
          text-align: center;
          flex: 1;
          max-width: 200px;
        }
        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto 20px;
        }
        .step-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 12px;
        }
        .step-content p {
          color: #4a5568;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .process-arrow {
          font-size: 1.5rem;
          color: #059669;
          font-weight: bold;
        }
        .faq-section {
          padding: 50px 0;
          background: white;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .faq-item {
          background: #f8fafc;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        .faq-item h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        .faq-item p {
          color: #4a5568;
          line-height: 1.6;
        }
        .final-cta-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          text-align: center;
        }
        .cta-content {
          color: white;
        }
        .cta-content h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .cta-content p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.95;
        }
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
        }
        .cta-primary,
        .cta-secondary {
          padding: 20px 40px;
          border-radius: 12px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        .cta-primary {
          background: linear-gradient(45deg, #ef4444, #f97316);
          color: white;
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.4);
        }
        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        .cta-secondary:hover {
          background: white;
          color: #1e40af;
        }
        .cta-guarantees {
          display: flex;
          justify-content: center;
          gap: 32px;
          font-size: 1rem;
          opacity: 0.9;
        }
        .guarantee {
          font-weight: 600;
        }
        .form-group > select,
        .form-group > input {
          max-width: 238px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .engines-page {
            padding-bottom: 50px;
          }
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .form-group > select,
          .form-group > input {
            max-width: 165px;
            width: 100%;
          }
          .container {
            padding: 0 12px;
          }
          ._BottomFxi9 {
            display: flex;
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            justify-content: center;
            align-items: center;
            box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.3);
            color: #fff;
            font-weight: 700;
            font-size: 18px;
            background: linear-gradient(45deg, #ef4444, #f97316);
            padding: 15px;
            z-index: 9999;
          }
          .hero-text {
            order: 2;
          }
          .form-group {
            text-align: start;
          }
          .form-card {
            border-radius: 10px;
            padding: 15px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 16px;
            margin-bottom: 25px;
            text-align: justify;
          }
          .trust-content h2 {
            font-size: 30px;
            margin: 0 0 30px;
          }
          .form-row {
            gap: 8px;
          }
          .hero-benefits {
            grid-template-columns: 1fr;
          }
          .trust-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .stat-card {
            padding: 8px;
          }
          .stat-number {
            font-size: 25px;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .features-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .faq-grid {
            grid-template-columns: 1fr;
          }
          .process-steps {
            flex-direction: column;
            gap: 8px;
          }
          .process-step {
            max-width: 100%;
            margin-bottom: 8px;
          }
          .process-arrow {
            transform: rotate(90deg);
          }
          .form-buttons {
            gap: 10px;
          }
          .back-btn,
          .submit-btn {
            flex: 1;
            padding: 12px 18px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .cta-guarantees {
            flex-direction: column;
            gap: 16px;
          }
          .header-content {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .form-group input,
          .form-group select {
            padding: 13px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
        }
      `}</style>
    </div>
  );
}
