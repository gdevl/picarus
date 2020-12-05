"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "PostLikes",
      [
        r({
          uid: 1,
          pid: 1,
        }),
        r({
          uid: 1,
          pid: 2,
        }),
        r({
          uid: 1,
          pid: 3,
        }),
        r({
          uid: 1,
          pid: 4,
        }),
        r({
          uid: 1,
          pid: 5,
        }),
        r({
          uid: 3,
          pid: 1,
        }),
        r({
          uid: 3,
          pid: 2,
        }),
        r({
          uid: 3,
          pid: 3,
        }),
        r({
          uid: 3,
          pid: 4,
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PostLikes", null, {});
  },
};
