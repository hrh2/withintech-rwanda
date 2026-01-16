import React from 'react';


function Header() {
    return (
        <>
            <div className="container-fluid wow fadeIn" data-wow-delay="0.1s">
                <div
                    className="container-sm topbar d-none d-lg-block "
                    style={{borderRadius: "0 0px 10px 10px"}}
                >

                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-1">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 "></i> <a
                                href="#" className="text-white">Kigali, Rwanda</a></small>
                            <small className="me-3"><i className="fas fa-envelope me-2"></i><a
                                href="#"
                                className="text-white">info@withintech.com</a></small>
                        </div>
                        <div className="top-link p-1">
                            <a href="" className="rounded-circle p-1"><i
                                className="fab fa-facebook-f"></i></a>
                            <a href="" className="rounded-circle"><i
                                className="fab fa-twitter"></i></a>
                            <a href="" className="rounded-circle"><i
                                className="fab fa-instagram"></i></a>
                            <a href="" className="rounded-circle me-0"><i
                                className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container-fluid position-relative d-flex align-items-center px-5">

                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        <img src="/assets/img/logo.png" alt=""/>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/programs">Programs</a></li>
                            <li><a href="/gallery">OUR Gallery</a></li>
                            <li className="dropdown"><a href="#"><span>Impact</span> <i
                                className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">2023-2024</a></li>
                                    <li><a href="#">2025-2026</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact-us">Get Involved</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a className="btn-getstarted" href="#">JOIN WIT COMMUNITY</a>

                </div>
            </header>
        </>
    );
}

export default Header;