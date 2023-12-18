import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import PS from "./components/PS/PS";
import Contact from "./components/Contact/ContactUs";
import Timeline from "./components/Timeline/Timeline";
import LoadingScreen from "./components/Loading/Loading";
import Prize from "./components/Prize/Prize";
import Pagenotfound from "./components/Pagenotfound/pagenotfound";
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route path="/ps" element={<PS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/prize" element={<Prize />}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
