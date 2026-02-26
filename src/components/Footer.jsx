import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer bg-section">
      <div className="container">
        <div className="row">

          {/* Footer Header */}
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-header-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  let's work <span>together</span>
                </h2>
              </div>

              <div className="hero-btn">
                <Link href="/contact" className="btn-default">
                  <Image
                    src="/images/arrow-border.svg"
                    alt="Arrow"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-6 col-md-12">
            <div className="footer-contact-box">
              <div className="footer-links">
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="mailto:info@domainname.com">
                      info@domainname.com
                    </a>
                  </li>
                  <li>
                    <b>
                      <a href="tel:+987965698">+1 987 965 698</a>
                    </b>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h3>Our Location</h3>
                <ul>
                  <li>
                    123 High Street, Springfield, London SW1A 1A, UK.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-5">
            <div className="footer-social-links footer-links">
              <h3>Social Media</h3>
              <ul>
                <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-7">
            <div className="footer-newsletter-form footer-links">
              <h3>Subscribe Newsletter's</h3>
              <form action="#" method="POST">
                <div className="form-group">
                  <input
                    type="email"
                    name="mail"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <Image
                      src="/images/arrow-gradiant.svg"
                      alt="Submit"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-5">
              <div className="footer-logo">
                <Image
                  src="/images/footer-logo.svg"
                  alt="Footer Logo"
                  width={150}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-7">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}