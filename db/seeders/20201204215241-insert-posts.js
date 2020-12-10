"use strict";

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        r({
          uid: 2,
          content:
            "Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways.",
          imageUrl:
            "https://picarus.s3.amazonaws.com/11184447_1583096055302512_439168461_n.jpg",
        }),
        r({
          uid: 2,
          content:
            "Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven.",
          imageUrl:
            "https://picarus.s3.amazonaws.com/11236272_1614219458823744_1825956828_n.jpg",
        }),
        r({
          uid: 2,
          content:
            "I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators.",
          imageUrl:
            "https://picarus.s3.amazonaws.com/11184607_1614150498796716_1237357758_n.jpg",
        }),
        r({
          uid: 2,
          content:
            "Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile.",
          imageUrl:
            "https://picarus.s3.amazonaws.com/11189472_1031389983541212_2104092458_n.jpg",
        }),
        r({
          uid: 2,
          content:
            "Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. I read an ion trail characteristic of a freighter escape pod.",
          imageUrl:
            "https://picarus.s3.amazonaws.com/11190370_1623346834555301_1398907433_n.jpg",
        }),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },
};
