"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        r({
          content:
            "Detecting some unusual fluctuations in subspace frequencies.",
          uid: 5,
          pid: 1,
        }),
        r({
          content:
            "Run a manual sweep of anomalous airborne or electromagnetic readings.",
          uid: 4,
          pid: 2,
        }),
        r({
          content:
            "LOL. Radiation levels in our atmosphere have increased by 3,000 percent.",
          uid: 6,
          pid: 3,
        }),
        r({
          content:
            "Electromagnetic and subspace wave fronts approaching synchronization. ROFL",
          uid: 7,
          pid: 4,
        }),
        r({
          content:
            "What is the strength of the ship's deflector shields at maximum output? LMAO",
          uid: 3,
          pid: 5,
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
