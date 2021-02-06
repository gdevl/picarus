'use strict';

function r(o) {
    o.createdAt = new Date();
    o.updatedAt = new Date();
    return o;
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Posts',
            [
                r({
                    uid: 1,
                    content:
                        'Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11191257_401921476654445_880321213_n.jpg',
                    caption: `Thermal Limit`,
                }),
                r({
                    uid: 1,
                    content: `I haven't determined if our phaser energy can generate a stable field. We could alter the photons with phase discriminators.`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/1612577458879nature-landscape_BBGO9LC6IZ.jpg',
                    caption: `Stable Field`,
                }),
                r({
                    uid: 2,
                    content:
                        "Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven.",
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11236272_1614219458823744_1825956828_n.jpg',
                    caption: `Human Life`,
                }),
                r({
                    uid: 3,
                    content:
                        'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11193161_1394276774231902_305378632_n.jpg',
                    caption: `Harmonic Vibrations`,
                }),
                r({
                    uid: 4,
                    content:
                        'Deflector power at maximum. Energy discharge in six seconds. Warp reactor core primary coolant failure. Fluctuate phaser resonance frequencies. Resistance is futile.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11195818_854886077911421_2048374067_n.jpg',
                    caption: `Energy discharge`,
                }),
                r({
                    uid: 5,
                    content:
                        'Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. I read an ion trail characteristic of a freighter escape pod.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11192838_794873577270889_1069343533_n.jpg',
                    caption: `Antimatter containment positive`,
                }),
                r({
                    uid: 6,
                    content: `The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical.`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11199589_453627594812764_69575572_n.jpg',
                    caption: `REM state`,
                }),
                r({
                    uid: 7,
                    content:
                        'Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/1609200873914waterfalls.jpg',
                    caption: `highly explosive`,
                }),
                r({
                    uid: 8,
                    content: `Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level.`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/1609261008209Nature-morocco.jpg',
                    caption: `unknown microorganism`,
                }),
                r({
                    uid: 9,
                    content: `That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state.`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/1609261305691nature-landscape_1A8H8F8RJ7.jpg',
                    caption: `biofilters`,
                }),
                r({
                    uid: 10,
                    content:
                        'Shields up. I recommend we transfer power to phasers and arm the photon torpedoes. Something strange on the detector circuit. The weapons must have disrupted our communicators.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/1609261623859kiwi.jpg',
                    caption: `photon torpedoes`,
                }),
                r({
                    uid: 11,
                    content: `The wormhole's size and short period would make this a local phenomenon. Do you have sufficient data to compile a holographic simulation?`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11203409_1394909944168409_665765549_n.jpg',
                    caption: `local phenomenon`,
                }),
                r({
                    uid: 12,
                    content:
                        'Run a manual sweep of anomalous airborne or electromagnetic readings. Radiation levels in our atmosphere have increased by 3,000 percent.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11203259_1436882936626799_1491701619_n.jpg',
                    caption: `anomalous airborne`,
                }),
                r({
                    uid: 13,
                    content: `Electromagnetic and subspace wave fronts approaching synchronization. What is the strength of the ship's deflector shields at maximum output?`,
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11235990_938214172866223_738021883_n.jpg',
                    caption: `approaching synchronization`,
                }),
                r({
                    uid: 14,
                    content:
                        'Something strange on the detector circuit. The weapons must have disrupted our communicators.',
                    imageUrl:
                        'https://picarus.s3.amazonaws.com/11235925_899796210078920_1769671136_n.jpg',
                    caption: `detector circuit`,
                }),
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Posts', null, {});
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    },
};
