import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <Link className="landing__get_started" to="/signin">
      Get Started
    </Link>
  );
};

export default GetStarted;
