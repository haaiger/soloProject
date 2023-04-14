"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cosmos extends Model {
    static associate(models) {
      Cosmos.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Cosmos.init(
    {
      userId: DataTypes.INTEGER,
      copyright: DataTypes.STRING,
      date: DataTypes.STRING,
      explanation: DataTypes.STRING,
      media_type: DataTypes.STRING,
      service_version: DataTypes.STRING,
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      hdurl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cosmos",
    }
  );
  return Cosmos;
};
