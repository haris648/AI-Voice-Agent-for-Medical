import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background decorative elements */}
      <div className="bg-grid-pattern"></div>
      <div className="floating-circle top-left"></div>
      <div className="floating-circle bottom-right delay"></div>

      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Your AI Medical</span><br />
            <span className="text-foreground">Voice Assistant</span>
          </h1>

          <p className="hero-subtitle">
            Save time, improve patient care, and let AI handle your symptoms and diseases. 
            Experience the future of healthcare with intelligent voice-powered consultations.
          </p>

          <div className="hero-buttons">
            <a href="/sign-in" className="btn btn-outline">
              Explore Now
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            

            <button className="btn btn-outline">
              Watch Demo
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Available</div>
            </div>
            <div className="stat">
              <div className="stat-value">10k+</div>
              <div className="stat-label">Consultations</div>
            </div>
            <div className="stat">
              <div className="stat-value">95%</div>
              <div className="stat-label">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-container">
            <img 
              src="./hero-medical.jpg" 
              alt="AI Medical Voice Assistant" 
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>

          <div className="floating-icon top-right">
            <svg className="icon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <div className="floating-icon bottom-left delay">
            <svg className="icon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53L6.75 15.75H4.5a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h2.25z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
