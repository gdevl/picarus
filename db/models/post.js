"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
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
    Post.belongsTo(models.User, { foreignKey: "uid" });
    Post.hasMany(models.Comment, { foreignKey: "pid" });
    Post.hasMany(models.PostLike, { foreignKey: "pid" });
  };
  return Post;
};
