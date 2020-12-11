"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fid: {
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
  Follow.associate = function (models) {
    Follow.belongsTo(models.User, { foreignKey: "uid" });
  };
  return Follow;
};
