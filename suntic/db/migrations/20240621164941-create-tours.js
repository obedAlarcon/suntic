'use strict';
  const {TOUR_TABLE,TourSchema}=require('./../models/tours.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TOUR_TABLE,TourSchema);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(TOUR_TABLE);
  }
};
