'use strict';
const {MAINT_TABLE, MaintSchema}=require('../models/maint.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.createTable(MAINT_TABLE,MaintSchema);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(MAINT_TABLE)
  }
};
