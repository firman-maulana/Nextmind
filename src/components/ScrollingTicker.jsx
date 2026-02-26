'use client'

export default function ScrollingTicker() {
  const logos = [
    '/images/client-logo-1.svg',
    '/images/client-logo-2.svg',
    '/images/client-logo-3.svg',
    '/images/client-logo-4.svg',
    '/images/client-logo-5.svg',
  ]

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        {/* baris 1 */}
        <div className="scrolling-content">
          {logos.concat(logos).map((logo, index) => (
            <span key={`row1-${index}`}>
              <img src={logo} alt="Client Logo" />
            </span>
          ))}
        </div>

        {/* baris 2 */}
        <div className="scrolling-content">
          {logos.concat(logos).map((logo, index) => (
            <span key={`row2-${index}`}>
              <img src={logo} alt="Client Logo" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}