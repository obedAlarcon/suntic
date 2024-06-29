'use strict';
 const {BOSS_TABLE, BossSchema}=require('./../models/bosses.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable(BOSS_TABLE,BossSchema);
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable(BOSS_TABLE);
  }
};
