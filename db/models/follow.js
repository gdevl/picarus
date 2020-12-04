'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    content: DataTypes.TEXT
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
  };
  return Follow;
};