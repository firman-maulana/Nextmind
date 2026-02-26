export default function HowItWork() {
  return (
    <div className="how-it-work bg-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">how it work</h3>
              <h2 className="text-anime-style-3">
                Step-by-step journey to smarter business decisions
              </h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="how-work-content">

              <div className="how-work-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-how-work-step-1.svg" alt="Step 1" />
                </div>
                <div className="how-work-item-content">
                  <h3>1. Discovery & Strategy</h3>
                  <p>
                    We start by understanding your business goals, challenges,
                    and opportunities to define where AI can add value.
                  </p>
                </div>
              </div>

              <div
                className="how-work-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src="/images/icon-how-work-step-2.svg" alt="Step 2" />
                </div>
                <div className="how-work-item-content">
                  <h3>2. Data & Design</h3>
                  <p>
                    We design intelligent solutions using the right data
                    architecture and workflows.
                  </p>
                </div>
              </div>

              <div
                className="how-work-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="/images/icon-how-work-step-3.svg" alt="Step 3" />
                </div>
                <div className="how-work-item-content">
                  <h3>3. Development & Integration</h3>
                  <p>
                    Our engineers develop and integrate AI seamlessly into your
                    existing systems.
                  </p>
                </div>
              </div>

              <div
                className="how-work-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="/images/icon-how-work-step-4.svg" alt="Step 4" />
                </div>
                <div className="how-work-item-content">
                  <h3>4. Launch & Optimization</h3>
                  <p>
                    We launch, monitor, and continuously optimize for maximum
                    performance and ROI.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="how-work-image">
              <figure className="image-anime reveal">
                <img
                  src="/images/how-work-image.jpg"
                  alt="How It Work"
                />
              </figure>

              <div className="about-info-box">
                <div className="icon-box">
                  <img src="/images/icon-how-work.svg" alt="Help Icon" />
                </div>
                <div className="about-info-content">
                  <p>Need Help</p>
                  <h3>
                    <a href="tel:+1987965698">+1 987 965 698</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}