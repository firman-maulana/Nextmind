import Image from "next/image";
import Link from "next/link";

export default function CtaBox() {
  return (
    <div className="cta-box bg-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Content */}
          <div className="col-lg-7">
            <div className="cta-box-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">join today</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Empower your business growth with AI technologies today.
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Empower your business growth with AI technologies today by leveraging intelligent solutions designed to optimize operations, enhance decision-making, and drive innovation.
                </p>
              </div>

              <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/contact" className="btn-default">
                  Get started today
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-5">
            <div className="cta-box-image">
              <Image
                src="/images/cta-box-image.png"
                alt="CTA Image"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}