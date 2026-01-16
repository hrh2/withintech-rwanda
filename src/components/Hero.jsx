import React, {useEffect} from 'react';
import Counter from "./Counter.jsx";
import GLightbox from 'glightbox';
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function Hero() {
    useEffect(() => {
        // Initialize GLightbox
        const lightbox = GLightbox({
            selector: '.glightbox', // Target elements with the class 'glightbox'
            // Add optional configuration here
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
        });

        // Cleanup function to destroy the lightbox instance when the component unmounts
        return () => {
            lightbox.destroy();
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <>
            <section id="courses-hero" className="courses-hero section light-background">
                <div className="hero-content">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="hero-text">
                                    <h1>Empowering Young Innovators to Build the Future</h1>
                                    <p>WithinTech Rwanda equips students with hands-on skills in coding, robotics, and
                                        AI through mentorship, camps, and competitions.
                                        Join us to explore technology, unlock your potential, and become a creator in
                                        the digital world.</p>

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
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        className="main-image"
                                    >
                                        {[
                                            "/assets/img/blog/landing-1.JPG",
                                            "/assets/img/blog/landing-01.JPG",
                                            "/assets/img/blog/landing-02.JPG",
                                            "/assets/img/blog/landing-04.JPG",
                                            "/assets/img/blog/landing-05.JPG"
                                        ].map((item, index) => (
                                            <SwiperSlide key={index} className={"w-100"}>
                                                <img src={item} alt="" className="img-fluid"/>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="floating-cards">
                                        <div className="course-card" data-aos="fade-up" data-aos-delay="300">
                                            <div className="card-icon">
                                                <i className="bi bi-code-slash"></i>
                                            </div>
                                            <div className="card-content">
                                                <h6>Coding Workshops</h6>
                                                <span><Counter end={350} suffix="+"/> Youths</span>
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
            <section id="hero" className="hero section light-background">

                <img src="/assets/img/blog/session2025-1.jpg" alt="" data-aos="fade-in" className=""/>

                <div className="container d-flex flex-column align-items-center text-center mt-auto">
                    <h2 data-aos="fade-up" data-aos-delay="100" className="">YOU'RE BORN
                        <br/><span>TO BUILD</span></h2>
                    <div data-aos="fade-up" data-aos-delay="300" className="">
                        <a href="https://www.youtube.com/watch?v=NxImvQsIlLQ"
                           className="glightbox pulsating-play-btn mt-3"></a>
                    </div>
                    <h2 data-aos="fade-up" data-aos-delay="200">#withintech</h2>
                </div>
                <div className="about-info mt-auto position-relative"></div>
            </section>
        </>
    );
}

export default Hero;