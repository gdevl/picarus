"use strict";

const bcrypt = require("bcryptjs");

function createPassword() {
  return bcrypt.hashSync("password");
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      r({
        displayName: "demo",
        email: "demo@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "gabe",
        email: "gabe@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "sean",
        email: "sean@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "chuck",
        email: "chuck@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "tim",
        email: "tim@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "tory",
        email: "tory@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        displayName: "val",
        email: "val@example.com",
        hashedPassword: createPassword(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  },
};
