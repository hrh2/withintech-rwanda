import React from 'react';

function Contacts() {
    return (
        <main className="main">

            {/*  Page Title  */}
            <div className="page-title light-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Contact</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li className="current">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/*  End Page Title  */}

            {/*  Contact Section  */}
            <section id="contact" className="contact section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="contact-main-wrapper">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31817.90226763414!2d30.061890499999998!3d-1.9440998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca64ed1d8f173%3A0x2be3c5baae44c7b0!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="contact-content">
                            <div className="contact-cards-container" data-aos="fade-up" data-aos-delay="300">
                                <div className="contact-card">
                                    <div className="icon-box">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Location</h4>
                                        <p>Kigali, Rwanda</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="icon-box">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Email</h4>
                                        <p>info@withintech.com</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="icon-box">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Call</h4>
                                        <p>+1 (212) 555-7890</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-container" data-aos="fade-up" data-aos-delay="400">
                                <h3>Get in Touch</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name"
                                                   placeholder="Your Name" required=""/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Your Email" required=""/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject"
                                               placeholder="Subject" required=""/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                                  required=""></textarea>
                                    </div>

                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>

                                    <div className="form-submit">
                                        <button type="submit">Send Message</button>
                                        <div className="social-links">
                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  /Contact Section  */}

        </main>
    );
}

export default Contacts;