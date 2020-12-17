import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";

const PhotoSlider = (props) => {
  const index = useRef(1);
  //   const photoPath = `static/${index}.jpg`;
  //   const photoPath2 = `static/2.jpg`;
  const photos = [
    {
      url: `static/${index.current}.jpg`,
    },
    {
      url: `static/${index.current + 1}.jpg`,
    },
    {
      url: `static/${index.current + 2}.jpg`,
    },
    {
      url: `static/${index.current + 3}.jpg`,
    },
    {
      url: `static/${index.current + 4}.jpg`,
    },
  ];

  return (
    <div className="landing__photo">
      <Carousel navButtonsAlwaysInvisible={true} indicators={false}>
        {photos.map((photo, i) => (
          <Photo key={i} photo={photo} />
        ))}
      </Carousel>
    </div>
  );
};

const Photo = (props) => {
  return <img className="landing__photo_src" src={props.photo.url}></img>;
};

export default PhotoSlider;
