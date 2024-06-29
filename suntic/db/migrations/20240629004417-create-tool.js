'use strict';
  const {TOOL_TABLE,ToolSchema}=require('./../models/tool.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TOOL_TABLE,ToolSchema);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable(TOOL_TABLE);
  }
};
