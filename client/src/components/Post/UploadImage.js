import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const UploadImage = ({ setImage }) => {
  return (
    <>
      <div className="dropZoneArea">
        <DropzoneArea
          className="dropZoneArea__content"
          acceptedFiles={["image/*"]}
          dropzoneText={"Drag and drop an image here or click"}
          onChange={(files) => setImage(files[0])}
        />{" "}
      </div>
    </>
  );
};

export default UploadImage;
