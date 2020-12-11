"use strict";
const moment = require("moment");
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
  CommentLike.associate = function (models) {
    CommentLike.belongsTo(models.User, { foreignKey: "uid" });
    CommentLike.belongsTo(models.Comment, { foreignKey: "cid" });
  };
  return CommentLike;
};
