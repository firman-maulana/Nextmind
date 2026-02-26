'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-content">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">welcome to nextmind</h3>
                <h1
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  AI-Driven solutions for a smarter tomorrow
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  We are a cutting-edge AI agency fueled by innovation and purpose.
                  Combining advanced technology with human insight.
                </p>
              </div>

              <div
                className="hero-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link href="/contact" className="btn-default">
                  <img
                    src="/images/arrow-border.svg"
                    alt="Arrow"
                  />
                </Link>
              </div>

              <div className="hero-icon-boxes">
                <div className="hero-icon-box-1">
                  <div className="hero-icon hero-icon-1">
                    <figure>
                      <img src="/images/icon-hero-1.svg" alt="" />
                    </figure>
                  </div>

                  <div className="hero-icon hero-icon-2">
                    <figure>
                      <img src="/images/icon-hero-2.svg" alt="" />
                    </figure>
                  </div>
                </div>

                <div className="hero-icon-box-2">
                  <div className="hero-icon hero-icon-3">
                    <figure>
                      <img src="/images/icon-hero-3.svg" alt="" />
                    </figure>
                  </div>

                  <div className="hero-icon hero-icon-4">
                    <figure>
                      <img src="/images/icon-hero-4.svg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="hero-images wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hero-image-1">
                <figure>
                  <img src="/images/hero-image-1.jpg" alt="" />
                </figure>
              </div>

              <div className="hero-image-2">
                <figure>
                  <img src="/images/hero-image-2.jpg" alt="" />
                </figure>
              </div>

              <div className="hero-image-3">
                <figure>
                  <img src="/images/hero-image-3.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}