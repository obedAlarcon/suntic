'use strict';
const {ORDER_MAINT_TABLE, OrderMaintSchema}=require('../models/order-maint.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_MAINT_TABLE, OrderMaintSchema);
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable(ORDER_MAINT_TABLE);
  }
};
