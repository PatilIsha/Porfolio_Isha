"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.classList.add("preloading");

    let removeTimer;
    const hide = () => {
      setFadeOut(true);
      removeTimer = setTimeout(() => {
        setLoading(false);
        document.body.classList.remove("preloading");
      }, 600); // matches the CSS fade duration
    };

    let startTimer;
    let fallbackTimer;
    const onLoad = () => {
      startTimer = setTimeout(hide, 400);
    };

    if (document.readyState === "complete") {
      startTimer = setTimeout(hide, 800);
    } else {
      window.addEventListener("load", onLoad);
      // safety net in case the load event never fires
      fallbackTimer = setTimeout(hide, 2800);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(startTimer);
      clearTimeout(removeTimer);
      clearTimeout(fallbackTimer);
      document.body.classList.remove("preloading");
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "preloader--hidden" : ""}`}>
      <div className="preloader__logo">
        <span className="preloader__bracket">&lt;</span>
        <span className="preloader__name">IP</span>
        <span className="preloader__bracket">/&gt;</span>
      </div>
      <div className="preloader__ring" aria-hidden="true"></div>
    </div>
  );
};

export default Preloader;
