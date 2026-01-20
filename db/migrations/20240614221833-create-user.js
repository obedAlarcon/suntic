'use strict';
const { QueryInterface } = require('sequelize');
const {UserSchema, USER_TABLE}=require('./../models/user.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable(USER_TABLE, UserSchema);

  },

  async down (queryInterface) {
   
     await queryInterface.dropTabla(USER_TABLE);
  }
};
