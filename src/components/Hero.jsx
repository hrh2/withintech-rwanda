import React from 'react';
import Counter from "./Counter.jsx";

function Hero() {
    return (
        <section id="courses-hero" className="courses-hero section light-background">

                <div className="hero-content">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="hero-text">
                                    <h1>Empowering Young Innovators to Build the Future</h1>
                                    <p>WithinTech Rwanda equips students with hands-on skills in coding, robotics, and AI through mentorship, camps, and competitions.
                                   Join us to explore technology, unlock your potential, and become a creator in the digital world.</p>

                                    <div className="hero-stats">
                                        <div className="stat-item">
                                            <span className="number purecounter" data-purecounter-start="0"
                                                  data-purecounter-end="50000" data-purecounter-duration="2"></span>
                                            <span className="label">Students Empowered</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="number purecounter" data-purecounter-start="0"
                                                  data-purecounter-end="1200" data-purecounter-duration="2"></span>
                                            <span className="label">Active Programs & Clubs</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="number purecounter" data-purecounter-start="0"
                                                  data-purecounter-end="98" data-purecounter-duration="2"></span>
                                            <span className="label">Global Competitions</span>
                                        </div>
                                    </div>

                                    <div className="hero-buttons">
                                        <a href="#about" className="btn btn-primary">Learn More</a>
                                        <a href="#programs" className="btn btn-outline">View Programs</a>
                                    </div>

                                    <div className="hero-features">
                                        <div className="feature">
                                            <i className="bi bi-people"></i>
                                            <span>Mentorship & Guidance</span>
                                        </div>
                                        <div className="feature">
                                            <i className="bi bi-lightning-charge"></i>
                                            <span>Hands-On Learning</span>
                                        </div>
                                        <div className="feature">
                                            <i className="bi bi-globe"></i>
                                            <span>Global Exposure</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="hero-image">
                                    <div className="main-image">
                                        <img src="/assets/img/blog/landing-1.JPG" alt="Online Learning"
                                             className="img-fluid"/>
                                    </div>

                                    <div className="floating-cards">
                                        <div className="course-card" data-aos="fade-up" data-aos-delay="300">
                                            <div className="card-icon">
                                                <i className="bi bi-code-slash"></i>
                                            </div>
                                            <div className="card-content">
                                                <h6>Coding Workshops</h6>
                                                <span><Counter end={350} suffix="+" /> Youths</span>
                                            </div>
                                        </div>

                                        <div className="course-card" data-aos="fade-up" data-aos-delay="400">
                                            <div className="card-icon">
                                                <i className="bi bi-robot"></i>
                                            </div>
                                            <div className="card-content">
                                                <h6>Robotics Clubs</h6>
                                                <span><Counter end={50} suffix="+"/> Students</span>
                                            </div>
                                        </div>

                                        <div className="course-card" data-aos="fade-up" data-aos-delay="500">
                                            <div className="card-icon">
                                                <i className="bi bi-globe2"></i>
                                            </div>
                                            <div className="card-content">
                                                <h6>Global Competitions</h6>
                                                {/*<span>3,200 Students</span>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hero-background">
                    <div className="bg-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

            </section>
    );
}

export default Hero;