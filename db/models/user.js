"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [1, 255],
        },
      },
      firstName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      avatarUrl: {
        allowNull: true,
        type: DataTypes.STRING,
        validates: {
          len: [3, 255],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
      },
    },
    {}
  );

  User.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: "uid" });
    User.hasMany(models.Comment, { foreignKey: "uid" });
    User.hasMany(models.Message, { as: "sender", foreignKey: "sid" });
    User.hasMany(models.Message, { as: "receiver", foreignKey: "rid" });
    User.hasMany(models.PostLike, { foreignKey: "uid" });
    User.hasMany(models.CommentLike, { foreignKey: "uid" });
    User.hasMany(models.Follow, { as: "leader", foreignKey: "uid" });
    User.hasMany(models.Follow, { as: "follower", foreignKey: "fid" });
  };

  return User;
};
