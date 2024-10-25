import React from "react";
import featurevideo from "../../assets/feature.mp4";
import "./FeatureVid.css";

const FeatureVid = () => {
  return (
    <div className="hero-video-container">
      <video src={featurevideo} autoPlay loop muted></video>
    </div>
  );
};

export default FeatureVid;
