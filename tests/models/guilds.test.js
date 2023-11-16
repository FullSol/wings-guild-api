const { expect } = require("chai");
const { Guilds } = require("../../src/models");

describe("Guilds Model", () => {
  it("should not create a guild with an invalid faction", async () => {
    try {
      await Guilds.create({
        name: "Test Guild",
        realm: "Test Realm",
        faction: "InvalidFaction", // Invalid value
        region: "Test Region",
      });
      throw new Error("Should not reach this point");
    } catch (error) {
      expect(error.name).to.equal("SequelizeValidationError");
    }
  });
});
