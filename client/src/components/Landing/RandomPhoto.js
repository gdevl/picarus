import React from "react";
import { Card, CardMedia } from "@material-ui/core";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const pathPrefix = `static/${getRandomInt(5) + 1}.jpg`;

const RandomPhoto = () => {
  return (
    <div
      className="landing__photo"
      style={{
        backgroundImage: `url(${pathPrefix})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default RandomPhoto;
