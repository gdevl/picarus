"use strict";
const moment = require("moment");
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
  PostLike.associate = function (models) {
    PostLike.belongsTo(models.User, { foreignKey: "uid" });
    PostLike.belongsTo(models.Post, { foreignKey: "pid" });
  };
  return PostLike;
};
