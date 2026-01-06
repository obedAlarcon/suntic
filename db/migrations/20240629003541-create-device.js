'use strict';
  const{DEVICE_TABLE,DeviceSchema}=require('./../models/devices.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(DEVICE_TABLE,DeviceSchema);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(DEVICE_TABLE);
  }
};
