"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      uid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      caption: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          let now = moment(new Date());
          let then = moment(this.getDataValue("createdAt"));
          let duration = moment.duration(now.diff(then));

          if (duration.asSeconds() < 60) {
            // return `${Math.floor(duration.asSeconds())} seconds ago`;
            return `less than a minute ago`;
          }

          if (duration.asMinutes() < 2) {
            return `${Math.floor(duration.asMinutes())} minute ago`;
          }

          if (duration.asMinutes() < 60) {
            return `${Math.floor(duration.asMinutes())} minutes ago`;
          }

          if (duration.asHours() < 2) {
            return `${Math.floor(duration.asHours())} hour ago`;
          }

          if (duration.asHours() < 24) {
            return `${Math.floor(duration.asHours())} hours ago`;
          }

          if (duration.asHours() > 24) {
            return `${Math.floor(duration.asDays())} days ago`;
          }

          if (duration.asDays() >= 14) {
            return `${Math.floor(duration.asWeeks())} weeks ago`;
          }
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
  Post.associate = function (models) {
    Post.belongsTo(models.User, { foreignKey: "uid" });
    Post.hasMany(models.Comment, { foreignKey: "pid" });
    Post.hasMany(models.PostLike, { foreignKey: "pid" });
  };
  return Post;
};
