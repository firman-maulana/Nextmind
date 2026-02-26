"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW;
      new WOW().init();
    }
  }, []);

  return (
    <div className="our-testimonials bg-section dark-section">
      <div className="container">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-4">
            <div className="our-testimonial-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonials</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Client share their experience with our AI
                </h2>
              </div>

              <div className="satisfy-client-box">
                <div className="satisfy-client-images">
                  {[1, 2, 3].map((img) => (
                    <div className="satisfy-client-image" key={img}>
                      <figure className="image-anime reveal">
                        <img
                          src={`/images/satisfy-client-img-${img}.jpg`}
                          alt=""
                        />
                      </figure>
                    </div>
                  ))}
                </div>

                <div
                  className="satisfy-client-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                    <span>5.5k+</span> Satisfice Client in the world
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-lg-8">
            <div className="testimonial-slider">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
              >
                {[1, 2, 3].map((item) => (
                  <SwiperSlide key={item}>
                    <div className="testimonial-item">
                      <div className="testimonial-content">
                        <h3>Smart, scalable & incredibly</h3>
                        <p>
                          “From ideation to deployment, they worked like
                          partners—not just vendors. Their AI solution saved us
                          hundreds of hours in manual work.”
                        </p>
                      </div>

                      <div className="testimonial-author">
                        <div className="author-image">
                          <figure className="image-anime">
                            <img
                              src={`/images/author-${item}.jpg`}
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>
                            {item === 1
                              ? "— Sarah L"
                              : item === 2
                              ? "— Pritam M"
                              : "— Lily M"}
                          </h3>
                          <p>
                            {item === 2
                              ? "CTO, MarketSync"
                              : "COO, TechNova Inc."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="testimonial-btn">
                  <div className="testimonial-button-prev"></div>
                  <div className="testimonial-button-next"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}