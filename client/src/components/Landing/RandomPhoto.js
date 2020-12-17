import React, { useEffect, useRef, useState } from "react";
import { Card, CardMedia } from "@material-ui/core";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// const pathPrefix = `static/${getRandomInt(5) + 1}.jpg`;

const RandomPhoto = () => {
  const photoIndex = useRef(1);
  const photoPath = `static/${photoIndex.current}.jpg`;
  const photoPath2 = `static/${photoIndex.current + 1}.jpg`;

  return (
    <>
      <div
        className="landing__photo"
        style={{
          backgroundImage: `url(${photoPath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {photoPath2}
      </div>
      <div
        className="landing__photo_2"
        style={{
          backgroundImage: `url(${photoPath2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default RandomPhoto;
