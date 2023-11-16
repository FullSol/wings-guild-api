const express = require("express");
const router = express.Router();
const news = {
  sectionTitle: "What's New",
  items: [
    {
      id: 1,
      image: `/media/World_of_Warcraft_The_War_Within_Logo.png`,
      title: "New Expansion",
      description:
        "Blizzard announced the next three expansions - 'The World Soul Saga'. The first expansion expected to release in 2024 is 'The War Within'",
      date: new Date("2023-11-09"),
      type: "W",
    },
    {
      id: 2,
      image: `/media/World_of_Warcraft_Guardians_of_the_Dream_logo.png`,
      title: "Upcoming Patch",
      description: "Warcraft's next major patch will be Guardians of the dream",
      date: new Date("2023-11-09"),
      type: "W",
    },
    {
      id: 3,
      image: `/media/WoW_Dragonflight_10.2_Raid-Amirdrassil_Environments_004.png`,
      title: "Upcoming Raid - Amirdrassil",
      description:
        "Blizzard will be releasing a new 9 boss raid next week. The raid bring the conflict with Fyrakk to a close, introduce a new strength legendary, and have ots of druid goodies.",
      date: new Date("2023-11-09"),
      type: "W",
    },
    {
      id: 4,
      image: `/media/Boost-Bundle-multi-purpose-1920x1080.jpeg`,
      title: "World Gear Upgradeable to 450 Item Level",
      description:
        "Gear obtained from open world activities after the launch of Dragonflight Patch 10.2 have been updated to be upgraded to 450 item level.",
      date: new Date("2023-11-09"),
      type: "W",
    },
  ],
};

router.get("/", function (req, res, next) {
  res.status(200).json(news);
});

module.exports = router;
