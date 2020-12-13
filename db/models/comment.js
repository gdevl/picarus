"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
      },
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
        // get() {
        //   let now = moment(new Date());
        //   let then = moment(this.getDataValue("createdAt"));
        //   let duration = moment.duration(now.diff(then));

        //   if (duration.asSeconds() < 60) {
        //     return `${Math.floor(duration.asSeconds())} seconds ago`;
        //   }

        //   if (duration.asMinutes() < 60) {
        //     return `${Math.floor(duration.asMinutes())} minutes ago`;
        //   }

        //   if (duration.asHours() < 24) {
        //     return `${Math.floor(duration.asHours())} hours ago`;
        //   }

        //   if (duration.asHours() > 24) {
        //     return `${Math.floor(duration.asDays())} days ago`;
        //   }
        // },
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
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "uid" });
    Comment.belongsTo(models.Post, { foreignKey: "pid" });
    Comment.hasMany(models.CommentLike, { foreignKey: "cid" });
  };
  return Comment;
};
