import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import FeatureVid from "../components/featureVid/FeatureVid";

const Home = () => {
  return (
    <div style={{ height: "500vh" }}>
      <Navbar />
      <Hero />
      <FeatureVid />
    </div>
  );
};

export default Home;
