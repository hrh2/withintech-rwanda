import React from "react";
import Counter from "./Counter.jsx";

function Cta() {
  return (
    <section id="cta" className="cta section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">

          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="cta-content">
              <h2>Empowering Rwanda's Future Tech Leaders</h2>
              <p>
                Join WithinTech Rwanda and participate in programs, competitions, and workshops designed
                to equip students with in-demand tech skills, AI knowledge, and hands-on robotics experience.
              </p>

              <div className="features-list">
                <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Hands-on Robotics & AI Workshops</span>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="350">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Internship & Mentorship Programs</span>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Competitions & Certification Ceremonies</span>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="450">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Networking with Industry Partners</span>
                </div>
              </div>

              <div className="cta-actions" data-aos="fade-up" data-aos-delay="500">
                <a href="programs" className="btn btn-primary">Join WiT Community</a>
                <a href="apply" className="btn btn-outline">Apply Now</a>
              </div>

              {/* ✅ React Counters */}
              <div className="stats-row" data-aos="fade-up" data-aos-delay="400">
                <div className="stat-item">
                  <h3>
                    <Counter end={10} suffix="+" />
                  </h3>
                  <p>Partner Schools</p>
                </div>

                <div className="stat-item">
                  <h3>
                    <Counter end={350} suffix="+" />
                  </h3>
                  <p>Students Benefited</p>
                </div>

                <div className="stat-item">
                  <h3>
                    More
                  </h3>
                  <p>Programs & Competitions</p>
                </div>
              </div>
              {/* End Stats */}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="cta-image">
              <img
                src="/assets/img/blog/DSC_9505.JPG"
                alt="WithinTech Rwanda Programs"
                className="img-fluid"
              />

              <div className="floating-element student-card" data-aos="zoom-in" data-aos-delay="600">
                <div className="card-content">
                  <i className="bi bi-person-check-fill"></i>
                  <div className="text">
                    <span className="number">20</span>
                    <span className="label">High Schools Involved</span>
                  </div>
                </div>
              </div>

              <div className="floating-element course-card" data-aos="zoom-in" data-aos-delay="700">
                <div className="card-content">
                  <i className="bi bi-play-circle-fill"></i>
                  <div className="text">
                    <span className="number">23+</span>
                    <span className="label">Workshops & Events</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
