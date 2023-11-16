import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import LoadingScreen from "./components/Loading/Loading";

const App = () => {
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
    <>
      {isLoading && <LoadingScreen />}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achieve" element={<Achievements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
