import React from 'react';

function About() {
    return (
        <main className="main">
            {/*  Page Title  */}
            <div className="page-title light-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">About Us</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li className="current">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/*  End Page Title  */}

            {/*  About Section  */}
            <section id="about" className="about section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <img src="/assets/img/blog/about.JPG" alt="About Us"
                                 className="img-fluid rounded-4"/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-content">
                                <span className="subtitle">Who We Are</span>
                                <h2>Empowering the Next Generation Through Technology</h2>
                                <p>WithinTech Rwanda is a leading EdTech organization dedicated to bridging the digital skills gap in Rwanda.
                                We empower young people with hands-on coding, robotics, and tech programs while fostering mentorship, creativity, and confidence in the digital world.</p>
                                <div className="stats-row">
                                    <div className="stats-item">
                                        <span className="count">3</span>
                                        <p>Years of Impact</p>
                                    </div>
                                    <div className="stats-item">
                                        <span className="count">350+</span>
                                        <p>Students Engaged</p>
                                    </div>
                                    <div className="stats-item">
                                        <span className="count">10+</span>
                                        <p>Active Programs & Clubs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-4">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="mission-card">
                                <div className="icon-box">
                                    <i className="bi bi-bullseye"></i>
                                </div>
                                <h3>Our Mission</h3>
                                <p>To equip young Rwandans with practical tech skills, mentorship, and real-world learning experiences so they can confidently pursue careers in the digital economy.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="mission-card">
                                <div className="icon-box">
                                    <i className="bi bi-eye"></i>
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be Rwanda’s leading platform for youth digital empowerment, creating a generation of innovators, problem-solvers, and tech leaders.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="mission-card">
                                <div className="icon-box">
                                    <i className="bi bi-award"></i>
                                </div>
                                <h3>Our Values</h3>
                                <p>Ubumuntu (Humanity first), inclusivity, hands-on learning, joyful discovery, collaboration, and fostering creativity in all technology initiatives.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-3 align-items-center">
                        <div className="col-lg-6 order-lg-2" data-aos="fade-up" data-aos-delay="300">
                            <div className="achievements">
                                <span className="subtitle">Why Choose Us</span>
                                <h2>Transforming Technology Education for the Future</h2>
                                <p>We offer programs that combine practical learning, mentorship, and global exposure to prepare young innovators for the modern tech world.</p>
                                <ul className="achievements-list">
                                    <li><i className="bi bi-check-circle-fill"></i> Hands-on coding, robotics, and AI workshops</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Experienced mentors and industry connections</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Inclusive learning spaces for all students</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Career guidance and exposure to global competitions</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Innovative, youth-friendly programs and brand experience</li>
                                </ul>
                                <a href="#" className="btn-explore">Discover More On our Social <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="about-gallery">
                                <div className="row g-3">
                                    <div className="col-6">
                                        <img src="/assets/img/blog/impact.jpg" alt="Coding Session"
                                             className="img-fluid rounded-3"/>
                                    </div>
                                    <div className="col-6">
                                        <img src="/assets/img/education/DSC_9525.JPG" alt="Student Achievement"
                                             className="img-fluid rounded-3"/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <img src="/assets/img/education/EMMA2403.jpg" alt="Workshops & Camps"
                                             className="img-fluid rounded-3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                            <div className="future-focus">
                                <span className="subtitle">Looking Ahead</span>
                                <h2>Building a Stronger, More Connected Tech Ecosystem</h2>
                                <p>In 2026, WithinTech Rwanda is expanding its reach and impact through a cohesive brand identity, international exposure, and structured programs that empower students from beginner to confident creator. From local coding clubs to global AI competitions, we are shaping Rwanda’s next generation of tech leaders.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/*  /About Section  */}

        </main>
    );
}

export default About;
