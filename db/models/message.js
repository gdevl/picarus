"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      sid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      rid: {
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
  Message.associate = function (models) {
    Message.belongsTo(models.User, { foreignKey: "sid" });
    Message.belongsTo(models.User, { foreignKey: "rid" });
  };
  return Message;
};
