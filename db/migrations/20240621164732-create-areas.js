'use strict';

const {AREA_TABLE, AreaSchema}=require('./../models/area.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(AREA_TABLE,AreaSchema);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable(AREA_TABLE);
  }
};
