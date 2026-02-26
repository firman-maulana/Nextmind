import Link from "next/link";

export default function WhyChoose() {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="why-choose-image">
              <figure>
                <img
                  src="/images/why-choose-image.png"
                  alt="Why Choose Us"
                />
              </figure>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="why-choose-content">

              {/* SECTION TITLE */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Why choose us</h3>
                <h2 className="text-anime-style-3">
                  Discover why businesses trust our AI solutions
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Discover why businesses trust our AI solutions: reliable,
                  scalable, and tailored to drive smarter decisions and
                  measurable results.
                </p>
              </div>

              {/* LIST */}
              <div className="why-choose-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li>Proven Accuracy and Reliability</li>
                  <li>Real-Time Insights and Analytics</li>
                  <li>Scalable for Any Business Size</li>
                  <li>Customizable to Industry Needs</li>
                </ul>
              </div>

              {/* BODY */}
              <div className="why-choose-body">

                <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.6s">
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img
                        src="/images/icon-why-choose-item-1.svg"
                        alt="Support"
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>24/7 Support and Maintenance</h3>
                    </div>
                  </div>

                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img
                        src="/images/icon-why-choose-item-2.svg"
                        alt="Cost Efficient"
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Cost-Efficient and ROI-Driven</h3>
                    </div>
                  </div>
                </div>

                {/* CTA CIRCLE */}
                <div className="get-started-circle">
                  <Link href="/contact">
                    <figure>
                      <img
                        src="/images/get-started-circle.svg"
                        alt="Get Started"
                      />
                    </figure>

                    <div className="circle-arrow">
                      <img
                        src="/images/arrow-border-gradiant.svg"
                        alt="Arrow"
                      />
                    </div>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}