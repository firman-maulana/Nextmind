'use client'

import Link from 'next/link'

export default function OurServices() {
  const services = [
    {
      icon: '/images/icon-service-1.svg',
      title: 'Custom AI Solutions',
      desc: 'Custom AI Solutions tailored to meet your unique business needs, leveraging.',
      delay: '0s',
    },
    {
      icon: '/images/icon-service-2.svg',
      title: 'Predictive Analytics',
      desc: 'Custom AI Solutions tailored to meet your unique business needs, leveraging.',
      delay: '0.2s',
    },
    {
      icon: '/images/icon-service-3.svg',
      title: 'AI Model Training',
      desc: 'Custom AI Solutions tailored to meet your unique business needs, leveraging.',
      delay: '0.4s',
    },
  ]

  return (
    <div className="our-services bg-section">
      <div className="container">

        {/* TITLE */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Services</h3>
              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Transforming your vision with advanced AI services
              </h2>
            </div>
          </div>
        </div>

        <div className="row">

          {/* SERVICES */}
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-item-content">
                  <h3>
                    <Link href="/services">{service.title}</Link>
                  </h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* CONTACT BOX */}
          <div className="col-lg-3 col-md-6">
            <div
              className="service-contact-box wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-contact-content">
                <p>Need any Help!</p>
                <h3>
                  <a href="tel:+123254322">
                    <img
                      src="/images/icon-phone-gradient.svg"
                      alt="Phone"
                    />
                    +123-254-322
                  </a>
                </h3>
              </div>

              <div className="service-image">
                <figure>
                  <img
                    src="/images/sidebar-cta-image.png"
                    alt="Service CTA"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* FOOTER TEXT */}
          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <p>
                <span>Free</span> Let's make something great work together.
                <Link href="/contact"> Get Free Quote</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}