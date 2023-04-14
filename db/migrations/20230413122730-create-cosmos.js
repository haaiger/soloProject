"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cosmos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      copyright: {
        type: Sequelize.STRING(100),
      },
      date: {
        type: Sequelize.STRING(100),
      },
      explanation: {
        type: Sequelize.TEXT,
      },
      media_type: {
        type: Sequelize.STRING(20),
      },
      service_version: {
        type: Sequelize.STRING(20),
      },
      title: {
        type: Sequelize.STRING(100),
      },
      url: {
        type: Sequelize.STRING(1000),
      },
      hdurl: {
        type: Sequelize.STRING(1000),
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cosmos");
  },
};
