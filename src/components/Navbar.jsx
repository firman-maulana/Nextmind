'use client'

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </a>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submenu">
                    <a className="nav-link" href="/">Home</a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Home - Main</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/image">Home - Image</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/video">Home - Video</a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/services">Services</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/blog">Blog</a>
                  </li>

                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Pages</a>
                    <ul>
                      <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                      <li className="nav-item"><a className="nav-link" href="/team">Our Team</a></li>
                      <li className="nav-item"><a className="nav-link" href="/faqs">FAQs</a></li>
                      <li className="nav-item"><a className="nav-link" href="/404">404</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-btn">
              <a href="/contact" className="btn-default">Get Started</a>
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  )
}