'use strict';
  const {TECHNICIANS_TABLE,TechniciansSchema}=require('./../models/technicians.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TECHNICIANS_TABLE,TechniciansSchema);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable(TECHNICIANS_TABLE);
  }
};
