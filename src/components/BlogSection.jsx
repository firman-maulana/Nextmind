import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Businesses Across Industries",
    image: "/images/post-1.jpg",
    link: "/blog/how-ai-is-transforming-businesses",
    delay: "0s",
  },
  {
    id: 2,
    title: "Getting Start with AI Beginner's Guide for Business Leaders",
    image: "/images/post-2.jpg",
    link: "/blog/ai-beginners-guide",
    delay: "0.2s",
  },
  {
    id: 3,
    title: "The Future of Work How AI is Changing the Way We Work",
    image: "/images/post-3.jpg",
    link: "/blog/future-of-work-ai",
    delay: "0.4s",
  },
];

export default function BlogSection() {
  return (
    <div className="our-blog">
      <div className="container">
        
        {/* Section Title */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">latest blog</h3>
              <h2 className="wow fadeInUp" data-cursor="-opaque">
                Latest blog on AI innovation and technology
              </h2>
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={blog.delay}
              >
                {/* Featured Image */}
                <div className="post-featured-image">
                  <Link href={blog.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={300}
                      />
                    </figure>
                  </Link>
                </div>

                {/* Content */}
                <div className="post-item-body">
                  <div className="post-item-content">
                    <h2>
                      <Link href={blog.link}>{blog.title}</Link>
                    </h2>
                  </div>

                  <div className="post-item-btn">
                    <Link href={blog.link} className="readmore-btn">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}