"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      caption: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};
