const { expect } = require("chai");
const { Guild } = require("../../src/models");

describe("Guilds Model", () => {
  it("should create a new guild", async () => {
    try {
      await Guild.create({
        name: "Test Guild",
        realm: "Area 52",
        faction: "Alliance",
        region: "US",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Should not reach this point");
    }
  });

  it("should not create a guild with an invalid faction", async () => {
    try {
      await Guild.create({
        name: "Test Guild 2",
        realm: "Test Realm",
        faction: "InvalidFaction", // Invalid value
        region: "Test Region",
      });
      throw new Error("Should not reach this point");
    } catch (error) {
      expect(error.name).to.equal("SequelizeDatabaseError");
      expect(error.message).to.include("Data truncated for column 'faction'");
    }
  });
});
