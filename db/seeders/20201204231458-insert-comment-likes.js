"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "CommentLikes",
      [
        r({
          uid: 1,
          cid: 1,
        }),
        r({
          uid: 3,
          cid: 1,
        }),
        r({
          uid: 4,
          cid: 1,
        }),
        r({
          uid: 5,
          cid: 1,
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CommentLikes", null, {});
  },
};
