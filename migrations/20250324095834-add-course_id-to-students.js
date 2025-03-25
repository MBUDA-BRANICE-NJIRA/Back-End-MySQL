"use strict";

const { QueryInterface } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.addColumn("students", "course_id", {
      type: Sequelize.DataTypes.STRING,
      allowNull: true, //Adjust as needed
      after: "student_id",
    });
  },

  down: async (QueryInterface, Sequelize) => {
    await QueryInterface.removeColumn("students", "course_id");
  },
};
