const { expect } = require("chai");
const { GuildInterestType } = require("../../src/models");

describe("Guild Interest Type", () => {
  it("should create a new interest type", async () => {
    try {
      await GuildInterestType.create({
        name: "mindset",
        tooltip: "",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Should not reach this point");
    }
  });
});
