import "@/styles/bootstrap.min.css";
import "@/styles/swiper-bundle.min.css";
import "@/styles/all.min.css";
import "@/styles/animate.css";
import "@/styles/magnific-popup.css";
import "@/styles/mousecursor.css";
import "@/styles/custom.css";
import Preloader from "@/components/Preloader";

import Script from "next/script";

export const metadata = {
  title: "Nextmind - AI Agency & Technology",
  description: "AI Agency & Technology Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <head>
        <link rel="stylesheet" href="/css/slicknav.min.css" />
      </head>
      <body>
        <Preloader />

        {children}

        {/* JQuery (WAJIB paling atas) */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* Vendor Scripts */}
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/validator.min.js" />
        <Script src="/js/jquery.slicknav.js" />
        <Script src="/js/swiper-bundle.min.js" />
        <Script src="/js/jquery.waypoints.min.js" />
        <Script src="/js/jquery.counterup.min.js" />
        <Script src="/js/jquery.magnific-popup.min.js" />
        <Script src="/js/parallaxie.js" />
        <Script src="/js/gsap.min.js" />
        <Script src="/js/magiccursor.js" />
        <Script src="/js/SplitText.js" />
        <Script src="/js/ScrollTrigger.min.js" />
        <Script src="/js/SmoothScroll.js" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" />
        <Script src="/js/wow.min.js" />
        <Script src="/js/function.js" />

      </body>
    </html>
  );
}