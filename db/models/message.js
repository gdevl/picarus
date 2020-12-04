"use strict";
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
    },
    {}
  );
  Message.associate = function (models) {
    Message.belongsTo(models.User, { foreignKey: "sid" });
    Message.belongsTo(models.User, { foreignKey: "rid" });
  };
  return Message;
};
