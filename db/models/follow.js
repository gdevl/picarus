"use strict";
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
    },
    {}
  );
  Follow.associate = function (models) {
    // associations can be defined here
  };
  return Follow;
};
