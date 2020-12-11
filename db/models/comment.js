"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
      },
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("createdAt")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("updatedAt")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        },
      },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "uid" });
    Comment.belongsTo(models.Post, { foreignKey: "pid" });
    Comment.hasMany(models.CommentLike, { foreignKey: "cid" });
  };
  return Comment;
};
