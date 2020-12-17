import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo from "../Logo/Logo";
import SubTitle from "./SubTitle";
import GetStarted from "./GetStarted";
import PhotoSlider from "./PhotoSlider";

const Landing = () => {
  const token = useSelector((state) => state.authentication.token);

  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <div className="landing__container">
      <div className="landing__content">
        <Logo />
        <SubTitle />
        <PhotoSlider />
        <GetStarted />
      </div>
    </div>
  );
};

export default Landing;
