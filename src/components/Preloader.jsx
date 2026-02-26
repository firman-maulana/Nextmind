"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }
  }, []);

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image
            src="/images/loader.svg"
            alt="Loading"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}