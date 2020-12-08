import React from "react";
import { Card, CardMedia } from "@material-ui/core";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const pathPrefix = "static/";

const RandomPhoto = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300px"
        width="100%"
        alt=" "
        src={pathPrefix + (getRandomInt(5) + 1) + ".jpg"}
      ></CardMedia>
    </Card>
  );
};

export default RandomPhoto;
