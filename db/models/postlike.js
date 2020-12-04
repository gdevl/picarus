'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define('PostLike', {
    content: DataTypes.STRING
  }, {});
  PostLike.associate = function(models) {
    // associations can be defined here
  };
  return PostLike;
};