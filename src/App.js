import React from "react";
import Home from "./coponents/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./coponents/results/result";
import Navbar from "./coponents/navbar/navbar";
import Footer from "./coponents/footer/Footer";
import VotingScreenGirls from "./coponents/home/votingScreenGirls";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/girlsabc1234321" element={<VotingScreenGirls />} />
          <Route path="results" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
