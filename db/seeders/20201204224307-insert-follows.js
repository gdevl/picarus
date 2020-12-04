"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Follows",
      [
        r({
          uid: 1,
          fid: 2,
        }),
        r({
          uid: 3,
          fid: 2,
        }),
        r({
          uid: 4,
          fid: 2,
        }),
        r({
          uid: 2,
          fid: 1,
        }),
        r({
          uid: 2,
          fid: 3,
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Follows", null, {});
  },
};
