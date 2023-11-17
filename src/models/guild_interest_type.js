"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class GuildInterestType extends Model {
    static associate(models) {
      // Define association here
      // GuildInterestType.hasMany(models.GuildInterests, {
      //   foreignKey: "guild_id",
      //   as: "interests",
      // });
    }
  }

  GuildInterestType.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: [
          "guild_interests",
          "reporting_sites",
          "application",
          "mindset",
        ],
        allowNull: false,
      },
      tooltip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "GuildInterestType",
      tableName: "guild_interest_types",
    }
  );

  return GuildInterestType;
};
