"use strict";
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define(
    "CommentLike",
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  CommentLike.associate = function (models) {
    CommentLike.belongsTo(models.User, { foreignKey: "uid" });
    CommentLike.belongsTo(models.Comment, { foreignKey: "cid" });
  };
  return CommentLike;
};
