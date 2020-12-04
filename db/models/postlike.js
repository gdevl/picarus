"use strict";
module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define(
    "PostLike",
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  PostLike.associate = function (models) {
    PostLike.belongsTo(models.User, { foreignKey: "uid" });
    PostLike.belongsTo(models.Post, { foreignKey: "pid" });
  };
  return PostLike;
};
