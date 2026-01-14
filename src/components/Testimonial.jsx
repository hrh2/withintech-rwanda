import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
    return (
        <section id="testimonials" className="testimonials section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Success Stories</h2>
                <p>
                    Hear directly from students, mentors, and partners about the impact of WithinTech Rwanda.

                </p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-12">
                        {/* Critics Reviews */}
                        <div
                            className="critic-reviews"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="row">
                                {[
                                    {
                                        name: "The New York Times",
                                        stars: 5,
                                        text:
                                            "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
                                    },
                                    {
                                        name: "Washington Post",
                                        stars: 4.5,
                                        text:
                                            "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.",
                                    },
                                    {
                                        name: "The Guardian",
                                        stars: 5,
                                        text:
                                            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.",
                                    },
                                ].map((review, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="critic-review">
                                            <div className="review-quote">"</div>
                                            <div className="stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`bi ${
                                                            i < Math.floor(review.stars)
                                                                ? "bi-star-fill"
                                                                : "bi-star-half"
                                                        }`}
                                                    ></i>
                                                ))}
                                            </div>
                                            <p>{review.text}</p>
                                            <div className="critic-info">
                                                <div className="critic-name">{review.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* End Critics Reviews */}

                        {/* Testimonials Slider */}
                        <div className="testimonials-container">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop
                                autoplay={{delay: 5000}}
                                pagination={{clickable: true}}
                                breakpoints={{
                                    768: {slidesPerView: 2},
                                    992: {slidesPerView: 3},
                                }}
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="testimonials-slider"
                            >
                                {[
                                    {
                                        name: "Jane Smith",
                                        role: "Book Enthusiast",
                                        img: "assets/img/person/person-f-1.webp",
                                        text:
                                            "Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
                                    },
                                    {
                                        name: "Michael Johnson",
                                        role: "Sci-Fi Blogger",
                                        img: "assets/img/person/person-m-2.webp",
                                        text:
                                            "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.",
                                    },
                                    {
                                        name: "Emily Davis",
                                        role: "Book Club President",
                                        img: "assets/img/person/person-f-3.webp",
                                        text:
                                            "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.",
                                    },
                                    {
                                        name: "Robert Wilson",
                                        role: "Literary Reviewer",
                                        img: "assets/img/person/person-m-4.webp",
                                        text:
                                            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.",
                                    },
                                ].map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-item">
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                            </div>
                                            <p>{item.text}</p>
                                            <div className="testimonial-profile">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="img-fluid rounded-circle"
                                                />
                                                <div>
                                                    <h3>{item.name}</h3>
                                                    <h4>{item.role}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* End Testimonials Slider */}
                    </div>
                </div>
                {/* Overall Rating */}
                {/*<div className="row">*/}
                {/*    <div className="col-12 text-center" data-aos="fade-up">*/}
                {/*        <div className="overall-rating">*/}
                {/*            <div className="rating-number">4.8</div>*/}
                {/*            <div className="rating-stars">*/}
                {/*                <i className="bi bi-star-fill"></i>*/}
                {/*                <i className="bi bi-star-fill"></i>*/}
                {/*                <i className="bi bi-star-fill"></i>*/}
                {/*                <i className="bi bi-star-fill"></i>*/}
                {/*                <i className="bi bi-star-half"></i>*/}
                {/*            </div>*/}
                {/*            <p>Based on 230+ reviews</p>*/}
                {/*            <div className="rating-platforms">*/}
                {/*                <span>Goodreads</span>*/}
                {/*                <span>Amazon</span>*/}
                {/*                <span>Barnes &amp; Noble</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* End Overall Rating */}
            </div>
        </section>
    );
}

export default Testimonial;
