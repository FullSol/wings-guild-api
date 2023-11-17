const { expect } = require("chai");
const { Guilds } = require("../../src/models");
const path = require("path");
const { exec } = require("child_process");

describe("Guilds Model", () => {
  let guildId = "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000";

  before(async () => {
    // Define the command to run migrations
    const migrateCommand = `sequelize db:migrate --config ${path.join(
      __dirname,
      "../../src/config/config.js"
    )} --env test`;

    // Execute the migration command
    exec(migrateCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Migration error: ${error}`);
        return done(error);
      }

      console.log("Migrations run successfully");
      done();
    });
  });

  after(async () => {
    // Define the command to run undo migrations
    const migrateCommand = `sequelize db:migrate:undo:all --config ${path.join(
      __dirname,
      "../../src/config/config.js"
    )} --env test`;

    // Execute the migration command
    exec(migrateCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Migration error: ${error}`);
        return done(error);
      }

      console.log("Cleanup successful");
      done();
    });
  });

  it("should create a new guild", async () => {
    try {
      const response = await Guilds.create({
        id: guildId,
        name: "Test Guild",
        realm: "Area 52",
        faction: "Alliance",
        region: "US",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw new Error("Should not reach this point");
    }
  });

  it("should not create a guild with an invalid faction", async () => {
    try {
      await Guilds.create({
        id: guildId,
        name: "Test Guild",
        realm: "Test Realm",
        faction: "InvalidFaction", // Invalid value
        region: "Test Region",
      });
      throw new Error("Should not reach this point");
    } catch (error) {
      console.log(error);
      expect(error.name).to.equal("SequelizeValidationError");
    }
  });
});
