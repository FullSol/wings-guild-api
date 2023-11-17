"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guild extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Guild.hasMany(models.GuildInterest, {
      //   foreignKey: "guild_id",
      //   as: "interests",
      // });
    }
  }
  Guild.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      modelName: "Guild",
      tableName: "guilds",
    }
  );
  return Guild;
};
