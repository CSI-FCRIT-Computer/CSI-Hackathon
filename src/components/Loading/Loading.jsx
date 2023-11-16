import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 2 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? "show" : "hide"}`}>
      <div className="loading-line"></div>
    </div>
  );
};

export default LoadingScreen;
