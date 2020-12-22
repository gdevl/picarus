import React, { useState } from "react";
// import React, {Component} from 'react';
import { DropzoneArea } from "material-ui-dropzone";

const PostAddDrop = () => {
  const [files, setFiles] = useState([]);

  const handleAdd = () => {
    alert(`You added a file!`);
  };

  return <DropzoneArea onChange={handleAdd} />;
};

export default PostAddDrop;
