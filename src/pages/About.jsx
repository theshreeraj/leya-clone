import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default About;
