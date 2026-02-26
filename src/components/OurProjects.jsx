"use client";

import { useEffect } from "react";

export default function OurProjects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW;
      new WOW().init();
    }
  }, []);

  return (
    <div className="our-projects">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our project</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Innovative AI projects that drive business forward
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-6">
            <div className="project-list-box-1">
              <div className="project-item wow fadeInUp">
                <div className="project-content">
                  <p>AI in Healthcare</p>
                  <h3>
                    <a href="/project-single">
                      Custom Natural Language Process for Enterprise Application
                    </a>
                  </h3>
                </div>
                <div className="project-image">
                  <a href="/project-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/project-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
              </div>

              <div
                className="project-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="project-content">
                  <p>Virtual Assistant</p>
                  <h3>
                    <a href="/project-single">
                      Voice-Activated Virtual Assistant for Multilingual Support Services
                    </a>
                  </h3>
                </div>
                <div className="project-image">
                  <a href="/project-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/project-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6">
            <div className="project-list-box-2">
              <div
                className="project-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="project-image">
                  <a href="/project-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/project-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>Automated Workflow</p>
                  <h3>
                    <a href="/project-single">
                      Automated Workflow Optimization and Decision-Making System
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="project-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="project-image">
                  <a href="/project-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/images/project-4.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>Intelligent Customer</p>
                  <h3>
                    <a href="/project-single">
                      Intelligent Customer Engagement Platform Using Conversational AI
                    </a>
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