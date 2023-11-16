"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guilds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guilds.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      realm: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faction: {
        type: DataTypes.ENUM,
        values: ["Alliance", "Horde"],
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
      },
      about: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Guilds",
    }
  );
  return Guilds;
};
