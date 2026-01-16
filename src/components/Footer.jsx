import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    // 🔗 Later: send email to backend / Mailchimp
    console.log("Subscribed email:", email);

    alert("Thanks for subscribing to WithinTech Newsletter!");
    setEmail("");
  };

  return (
    <footer id="footer" className="footer dark-background">

      <div className="container footer-top">
        <div className="row gy-4">

          {/* About */}
          <div className="col-lg-4 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">WithInTech</span>
            </a>
            <p>
              Empowering Africa through technology, innovation, and digital
              skills for the next generation.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/#programs">Programs</a></li>
              <li><a href="/#impact">Impact</a></li>
              <li><a href="/gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get updates on programs, events, and opportunities at WithinTech.</p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>Kigali, Rwanda</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+250 XXX XXX XXX</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@withintech.com</span>
            </p>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">WithInTech</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
