"use client"
import "./privacy.css"

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <div className="privacy-header-content">
          <div className="privacy-title-wrapper">
            <div className="privacy-icon-wrapper">
              <span className="privacy-icon">🛡️</span>
            </div>
            <h1 className="privacy-title">Privacy Policy</h1>
          </div>
          <p className="privacy-subtitle">
            Your privacy is our priority. Learn how we protect your information and maintain transparency in our
            automotive services.
          </p>

          <div className="privacy-badges">
            <div className="privacy-badge privacy-badge-blue">
              <span className="privacy-badge-icon">🚗</span>4 Year Warranty Coverage
            </div>
            <div className="privacy-badge privacy-badge-green">
              <span className="privacy-badge-icon">⏰</span>
              40,000 Miles Protection
            </div>
          </div>
        </div>
      </div>

      <div className="privacy-content">
        <div className="privacy-sections">
          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-blue">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-blue">
                  <span className="privacy-card-icon privacy-card-icon-blue">📄</span>
                </div>
                Information Collection & Use
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  Before or at the time of collecting personal information, we will identify the purposes for which
                  information is being collected. This includes warranty registration data for our{" "}
                  <strong className="privacy-text-strong-blue">4-year or 40,000-mile coverage program</strong>.
                </p>
                <p className="privacy-text">
                  We collect and use personal information solely with the objective of fulfilling those purposes
                  specified by us and for other compatible purposes, unless we obtain the consent of the individual
                  concerned or as required by law.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-green">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-green">
                  <span className="privacy-card-icon privacy-card-icon-green">🔒</span>
                </div>
                Data Retention & Security
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  We will only retain personal information as long as necessary for the fulfillment of those purposes,
                  including maintaining warranty records for the duration of your{" "}
                  <strong className="privacy-text-strong-green">4-year or 40,000-mile coverage period</strong>.
                </p>
                <p className="privacy-text">
                  We protect personal information by reasonable security safeguards against loss or theft, as well as
                  unauthorized access, disclosure, copying, use or modification.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-orange">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-orange">
                  <span className="privacy-card-icon privacy-card-icon-orange">🚗</span>
                </div>
                Warranty Information Privacy
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  For customers enrolled in our{" "}
                  <strong className="privacy-text-strong-orange">4-year or 40,000-mile warranty program</strong>, we
                  collect and maintain:
                </p>
                <div className="privacy-warranty-grid">
                  {[
                    "Vehicle identification and purchase information",
                    "Service and maintenance records",
                    "Contact information for warranty notifications",
                    "Mileage and usage data for coverage verification",
                  ].map((item, index) => (
                    <div key={index} className="privacy-warranty-item">
                      <div className="privacy-warranty-dot"></div>
                      <span className="privacy-warranty-text">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="privacy-text">
                  This information is used exclusively for warranty administration and will not be shared with third
                  parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-purple">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-purple">
                  <span className="privacy-card-icon privacy-card-icon-purple">👁️</span>
                </div>
                Data Collection Principles
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  We collect personal information by lawful and fair means and, where appropriate, with the knowledge or
                  consent of the individual concerned.
                </p>
                <p className="privacy-text">
                  Personal data should be relevant to the purposes for which it is to be used, and, to the extent
                  necessary for those purposes, should be accurate, complete, and up-to-date.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-teal">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-teal">
                  <span className="privacy-card-icon privacy-card-icon-teal">👥</span>
                </div>
                Your Rights & Transparency
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  We make readily available to customers information about our policies and practices relating to the
                  management of personal information.
                </p>
                <p className="privacy-text">
                  We are committed to conducting our business in accordance with these principles in order to ensure
                  that the confidentiality of personal information is protected and maintained.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-red">
              <div className="privacy-card-title">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-red">
                  <span className="privacy-card-icon privacy-card-icon-red">🛡️</span>
                </div>
                Terms of Use
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  {
                    'The materials on our website are provided "as is". We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the information provided.'
                  }
                </p>
                <p className="privacy-text">
                  The materials on our website are provided "as is". We make no warranties, expressed or implied,
                  regarding the accuracy, reliability, or completeness of the information provided.
                </p>
              </div>
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-card-header privacy-card-header-dark">
              <div className="privacy-card-title privacy-card-title-white">
                <div className="privacy-card-icon-wrapper privacy-card-icon-wrapper-white">
                  <span className="privacy-card-icon privacy-card-icon-white">📞</span>
                </div>
                Contact & Updates
              </div>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-card-content-space">
                <p className="privacy-text">
                  We may revise this privacy policy at any time without notice. By using this website, you are agreeing
                  to be bound by the current version of this Privacy Policy.
                </p>
                <p className="privacy-text">
                  For questions about your warranty coverage, privacy rights, or this policy, please contact our
                  customer service team.
                </p>

                <div className="privacy-contact-grid">
                  <div className="privacy-contact-item">
                    <span className="privacy-contact-icon privacy-contact-icon-blue">📧</span>
                    <div className="privacy-contact-info">
                      <div className="privacy-contact-label">Email</div>
                      <div className="privacy-contact-value">support@moonautoparts.com</div>
                    </div>
                  </div>
                  <div className="privacy-contact-item">
                    <span className="privacy-contact-icon privacy-contact-icon-green">📞</span>
                    <div className="privacy-contact-info">
                      <div className="privacy-contact-label">Phone</div>
                      <div className="privacy-contact-value">+1 (888) 777-7082</div>
                      <div className="privacy-contact-availability">Available 24/7</div>
                    </div>
                  </div>
                  <div className="privacy-contact-item">
                    <span className="privacy-contact-icon privacy-contact-icon-orange">📍</span>
                    <div className="privacy-contact-info">
                      <div className="privacy-contact-label">Address</div>
                      <div className="privacy-contact-value">126 S Ohio St, Apt L</div>
                      <div className="privacy-contact-value">Salina, KS 67401</div>
                      <div className="privacy-contact-value">United States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="privacy-footer">
          <div className="privacy-footer-card">
            <p className="privacy-footer-date">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="privacy-footer-text">
              This privacy policy applies to all customers, including those with{" "}
              <span className="privacy-footer-highlight">4-year or 40,000-mile warranty coverage</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
