import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FadeInOut = ({ children, viewportMargin }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: viewportMargin || "-10%",
        threshold: 0.1,
      }
    );

    if (observer) {
      observer.observe(document.querySelector("#scrollArea"));
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      id="scrollArea"
      style={{
        transition: "opacity 1s ease-in-out",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

FadeInOut.propTypes = {
  children: PropTypes.node.isRequired,
  viewportMargin: PropTypes.string,
};

export default FadeInOut;
