"use client";
import type React from "react";
import { useMemo, useState } from "react";
import { leadSubmit } from "@/lib/serverActions/main";
import { toast, ToastContainer } from "react-toastify";


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

export default function TransmissionsLandingPage({ data }: { data: Make[] }) {
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
        partName: "Transmission",
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
    <div className="transmissions-page">
      <div className="_toast83">
        <ToastContainer position="top-center" />
      </div>
      {showSuccess && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <h3 className="modal-title">Thank You!</h3>
            <p className="modal-text">
              Your query is registered with us. We will get back to you shortly.
            </p>
            <div className="modal-actions">
              <button
                className="modal-button"
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
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="trust-badge">
            <span className="badge-icon">🏆</span>
            <span>Premium Quality • Tested & Reliable • 25,000+ Sold</span>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Quality <span className="highlight">Used Transmissions</span>
                <br />
                <span className="sub-text">Built to Last & Perform</span>
              </h1>
              <p className="hero-description">
                Save up to 70% on premium used transmissions with comprehensive
                testing and up to 48-month warranty. Free nationwide shipping,
                expert support, and 15-minute response time
                guaranteed.
              </p>
              <div className="hero-benefits">
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
                    <strong>Free Shipping</strong>
                    <span>Nationwide delivery</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-text">
                    <strong>10-Min Response</strong>
                    <span>Instant quote guaranteed</span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🔍</div>
                  <div className="benefit-text">
                    <strong>52-Point Inspection</strong>
                    <span>Rigorous testing process</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-card">
                <div className="form-header">
                  <h3>Get Your Free Transmission Quote</h3>
                  <p>Instant pricing • No obligation • Expert advice</p>
                  <div className="step-indicator">
                    <div
                      className={`step-circle ${
                        currentStep >= 1 ? "active" : ""
                      }`}
                    >
                      <span>1</span>
                    </div>
                    <div className="step-line"></div>
                    <div
                      className={`step-circle ${
                        currentStep >= 2 ? "active" : ""
                      }`}
                    >
                      <span>2</span>
                    </div>
                  </div>
                  <div className="step-labels">
                    <span className={currentStep >= 1 ? "active" : ""}>
                      Vehicle Info
                    </span>
                    <span className={currentStep >= 2 ? "active" : ""}>
                      Contact Info
                    </span>
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
            <h2>Why 25,000+ Customers Choose Our Transmissions</h2>
            <div className="trust-stats">
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">25,000+</div>
                <div className="stat-label">Transmissions Sold</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">97%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🛡️</div>
                <div className="stat-number">48</div>
                <div className="stat-label">Month Warranty</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-number">10</div>
                <div className="stat-label">Minute Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transmission Types Section */}
      <section className="types-section">
        <div className="container">
          <div className="section-header">
            <h2>We Have All Transmission Types</h2>
            <p>
              Complete selection of automatic, manual, and CVT transmissions
            </p>
          </div>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">⚙️</div>
              <h3>Automatic Transmissions</h3>
              <p>
                4-speed, 5-speed, 6-speed, 7-speed, 8-speed, 9-speed, and
                10-speed automatic transmissions for all makes and models.
              </p>
              <ul>
                <li>✓ CVT Transmissions</li>
                <li>✓ Traditional Automatic</li>
                <li>✓ Dual-Clutch Systems</li>
                <li>✓ Performance Automatics</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon">🔧</div>
              <h3>Manual Transmissions</h3>
              <p>
                4-speed, 5-speed, and 6-speed manual transmissions with complete
                clutch system compatibility.
              </p>
              <ul>
                <li>✓ Standard Manual</li>
                <li>✓ Performance Manual</li>
                <li>✓ Heavy-Duty Options</li>
                <li>✓ Sport Transmissions</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon">🚗</div>
              <h3>Transfer Cases</h3>
              <p>
                Complete transfer case assemblies for 4WD and AWD vehicles with
                all necessary components.
              </p>
              <ul>
                <li>✓ Electronic Transfer Cases</li>
                <li>✓ Manual Transfer Cases</li>
                <li>✓ Chain & Gear Drive</li>
                <li>✓ AWD Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section" id="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Premium Used Transmissions?</h2>
            <p>
              Every transmission undergoes our rigorous 52-point inspection
              process
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Thorough Inspection Process</h3>
              <p>
                Every transmission undergoes detailed inspection including
                pressure tests, fluid analysis, and performance validation to
                ensure maximum reliability.
              </p>
              <ul>
                <li>✓ Pressure testing</li>
                <li>✓ Fluid analysis</li>
                <li>✓ Performance validation</li>
                <li>✓ Computer diagnostics</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Extended Warranty Coverage</h3>
              <p>
                Industry-leading warranty coverage up to 48 months or 40,000 miles with
                comprehensive protection for your investment and complete peace
                of mind.
              </p>
              <ul>
                <li>✓ Up to 48 months or 40,000 miles coverage</li>
                <li>✓ Nationwide warranty service</li>
                <li>✓ 24/7 roadside assistance</li>
                <li>✓ No hidden fees</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick Delivery Support</h3>
              <p>
                Fast delivery on commercial address to minimize
                your vehicle downtime and get you back on the road quickly.
              </p>
              <ul>
                <li>✓ Fast delivery to commercial address</li>
                <li>✓ Technical support</li>
                <li>✓ Expert consultation</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💵</div>
              <h3>Unbeatable Value</h3>
              <p>
                Save up to 70% compared to new transmissions without
                compromising on quality or reliability. Best prices guaranteed.
              </p>
              <ul>
                <li>✓ Save up to 70% vs new</li>
                <li>✓ Best price guarantee</li>
                <li>✓ Competitive pricing</li>
                <li>✓ No hidden costs</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast & Free Shipping</h3>
              <p>
                Free nationwide shipping with fast 15-day delivery service.
                Professional packaging ensures safe arrival and ready
                installation.
              </p>
              <ul>
                <li>✓ Free nationwide shipping</li>
                <li>✓ 15-day delivery service</li>
                <li>✓ Professional packaging</li>
                <li>✓ Tracking provided</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly Solution</h3>
              <p>
                Choosing used transmissions helps reduce waste and environmental
                impact while providing cost-effective automotive solutions.
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
            <h2>Customer Success Stories</h2>
            <p>Real reviews from satisfied customers nationwide</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Amazing service! My transmission arrived in 2 days and works
                perfectly. The warranty gives me complete peace of mind. Saved
                me over $3,000 compared to dealer prices!
              </p>
              <div className="customer-info">
                <div className="customer-avatar">JW</div>
                <div className="customer-details">
                  <strong>Jennifer Walsh</strong>
                  <span>Arizona • Honda Civic Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Professional team, fast delivery, and excellent quality. The
                installation support was incredibly helpful. Got my quote in 5
                minutes and the whole process was seamless. Highly recommend!
              </p>
              <div className="customer-info">
                <div className="customer-avatar">MT</div>
                <div className="customer-details">
                  <strong>Marcus Thompson</strong>
                  <span>Ohio • Ford F-150 Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="verified">✓ Verified Purchase</div>
              </div>
              <p>
                Got my quote in 5 minutes and the transmission installed
                perfectly. Customer service was outstanding throughout the
                entire process. The warranty coverage is excellent!
              </p>
              <div className="customer-info">
                <div className="customer-avatar">LR</div>
                <div className="customer-details">
                  <strong>Lisa Rodriguez</strong>
                  <span>California • Toyota Camry Owner</span>
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
            <p>Get your premium used transmission in just 4 easy steps</p>
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
                <h3>We Find Your Transmission</h3>
                <p>
                  Our experts locate the perfect transmission match from our
                  extensive tested inventory.
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
            <p>Get answers to common questions about our used transmissions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What warranty do you offer on used transmissions?</h3>
              <p>
                4 years or 40,000 miles whichever comes first. If you have an
                issue we will send the part to a mechanic of your choice.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>
                We offer free nationwide shipping with delivery typically within
                15 days. Expedited shipping options are also available for
                faster delivery.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are your transmissions tested before shipping?</h3>
              <p>
                Yes, every transmission undergoes our rigorous 52-point
                inspection process including pressure tests, fluid analysis, and
                performance validation.
              </p>
            </div>
            <div className="faq-item">
              <h3>What if the transmission doesn&apos;t fit my vehicle?</h3>
              <p>
                We guarantee proper fitment. Our experts verify compatibility
                before shipping, and we offer full support if any issues arise
                during installation.
              </p>
            </div>
            <div className="faq-item">
              <h3>How much can I save compared to a new transmission?</h3>
              <p>
                You can save up to 70% compared to new transmission prices while
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
            <h2>Ready to Get Your Premium Transmission?</h2>
            <p>
              Join 25,000+ customers who saved thousands with our premium used
              transmissions
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
                Get My Free Quote Now 💬
              </button>
              {/* <a href="tel:+1 (888) 618-8881" className="cta-secondary">
                📞 Call For Financing
              </a> */}
            </div>
            <div className="cta-guarantees">
              <div className="guarantee">✓ 10-Minute Response Guaranteed</div>
              <div className="guarantee">✓ No Obligation Quote</div>
              <div className="guarantee">✓ Expert Consultation Included</div>
            </div>
          </div>
        </div>
      </section>
      {/* <a href="tel:+1 (888) 618-8881" className="_BottomFxi9">
        📞 Call For Financing
      </a> */}
      <style jsx>{`
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
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 10px 18px;
          font-weight: 700;
          cursor: pointer;
        }
        .transmissions-page {
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
        .hero-pattern {
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
          color: #059669;
          padding: 10px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
          color: #1a202c;
        }
        .highlight {
          background: linear-gradient(45deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sub-text {
          color: #3b82f6;
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
          background: white;
          border-radius: 24px;
          padding: 20px 30px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
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

        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f3f4f6;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .step-circle.active {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .step-line {
          width: 40px;
          height: 2px;
          background: #e5e7eb;
        }

        .step-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .step-labels span {
          color: #9ca3af;
        }

        .step-labels span.active {
          color: #10b981;
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
          border-color: #10b981;
          background: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
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
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          width: 100%;
        }

        .next-btn:hover:not(:disabled),
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
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
          background: white;
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
          background: #f8fafc;
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
          color: #10b981;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
        }
        .types-section {
          padding: 25px 0;
          background: #f8fafc;
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
        .types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .type-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .type-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }
        .type-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .type-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        .type-card p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .type-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }
        .type-card li {
          color: #10b981;
          font-size: 0.9rem;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .features-section {
          padding: 25px 0;
          background: white;
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
          border-color: #10b981;
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
          color: #10b981;
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
          background: #10b981;
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
          background: linear-gradient(135deg, #10b981, #059669);
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
          color: #10b981;
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
          background: linear-gradient(135deg, #10b981, #059669);
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
          background: white;
          color: #059669;
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
        }
        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        .cta-secondary:hover {
          background: white;
          color: #059669;
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
          .transmissions-page {
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
          .trust-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .stat-card {
            padding: 8px;
          }
          .stat-number {
            font-size: 25px;
          }
          .form-card {
            border-radius: 10px;
            padding: 15px;
          }
          .trust-content h2 {
            font-size: 30px;
            margin: 0 0 30px;
          }
          .form-group {
            text-align: start;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .form-row {
            gap: 8px;
          }
          .form-group input,
          .form-group select {
            padding: 13px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 16px;
            margin-bottom: 25px;
            text-align: justify;
          }
          .hero-benefits {
            grid-template-columns: 1fr;
          }
          .features-grid,
          .testimonials-grid,
          .types-grid {
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
          .step-indicator {
            gap: 12px;
          }
          .step-circle {
            width: 32px;
            height: 32px;
          }
          .step-line {
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
}
