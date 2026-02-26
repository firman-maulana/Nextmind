'use client'

import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-4">
            <div className="about-image-box">

              <div className="about-us-counters">
                <div className="about-counter-item">
                  <h2>
                    <span className="counter">150</span>+
                  </h2>
                  <p>AI Projects Delivered</p>
                </div>

                <div className="about-counter-item">
                  <h2>
                    <span className="counter">20</span>+
                  </h2>
                  <p>Industries Served</p>
                </div>
              </div>

              <div className="about-us-image">
                <figure className="image-anime reveal">
                  <img
                    src="/images/about-us-image.jpg"
                    alt="About Us"
                  />
                </figure>

                <div className="about-info-box">
                  <div className="icon-box">
                    <img
                      src="/images/icon-about-info.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="about-info-content">
                    <h3>AI-Driven Growth, Tailored For You</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-8">
            <div className="about-content-box">

              <div className="section-title">
                <h3 className="wow fadeInUp">About Us</h3>
                <h2
                  className="text-effect wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  We are a cutting-edge AI agency by innovation and purpose
                  technology with human insight, we intelligent solution that
                  transform businesses, accelerate growth
                </h2>
              </div>

              <div
                className="about-us-body wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <Link href="/about">
                    <img
                      src="/images/arrow-border-gradiant.svg"
                      alt="Arrow"
                    />
                  </Link>
                </div>

                <div className="about-body-content">
                  <p>
                    We are a cutting-edge AI agency fueled by innovation and
                    purpose. Combining advance technology with human insight,
                    we deliver intelligent solution that drive transformation
                    & accelerate business growth.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}