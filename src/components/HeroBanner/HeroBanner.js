import "../HeroBanner/HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      {/* Background Effects - scoped to this section only */}
      <div className="hero-grid" />
      <div className="hero-glow" />

      {/* Content */}
      <div className="hero-content">
        <div className="badge">
          <span>🔥</span>
            Sr. Software Engineer & Full Stack Developer
        </div>

        <h1 className="hero-title">WordPress + React <br /> Built Different.</h1>

        <p className="hero-sub">
         I build fast, scalable, and beautiful web experiences — combining the flexibility of WordPress with the power of React to deliver products that perform and impress.
        </p>

        <div className="hero-cta">
          <a href="#project-section" className="btn-primary">View Projects</a>
          <a href="https://linkedin.com/in/abhishek-tiwari-b09021169" target="_blank" className="btn-outline">Connect on Linkedin</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;