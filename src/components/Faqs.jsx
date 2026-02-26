"use client";

import { useState, useEffect } from "react";

export default function Faqs() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW;
      new WOW().init();
    }
  }, []);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqsLeft = [
    {
      id: 1,
      q: "Q1. What makes your agency different from others?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 2,
      q: "Q2. What services does your AI agency provide?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 3,
      q: "Q3. How do we get started?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 4,
      q: "Q4. How long does it take to develop and deploy an AI solution?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
  ];

  const faqsRight = [
    {
      id: 5,
      q: "Q5. How much does an AI project cost?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 6,
      q: "Q6. Can you integrate AI with our existing systems?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 7,
      q: "Q7. What makes your agency different from others?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
    {
      id: 8,
      q: "Q8. What services does your AI agency provide?",
      a: "We are a cutting-edge AI agency fueled by innovation & purpose advanced technology with human insight, we deliver intelligent solutions that.",
    },
  ];

  const renderFaq = (item, delay) => (
    <div
      className="accordion-item wow fadeInUp"
      data-wow-delay={delay}
      key={item.id}
    >
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${
            open === item.id ? "" : "collapsed"
          }`}
          onClick={() => toggle(item.id)}
        >
          {item.q}
        </button>
      </h2>

      {open === item.id && (
        <div className="accordion-collapse show">
          <div className="accordion-body">
            <p>{item.a}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">FAQ's</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Frequently asked questions about our AI services
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="faq-accordion">
              {faqsLeft.map((f, i) =>
                renderFaq(f, `${0.2 + i * 0.2}s`)
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-accordion">
              {faqsRight.map((f, i) =>
                renderFaq(f, `${0.2 + i * 0.2}s`)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}