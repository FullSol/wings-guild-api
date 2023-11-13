const express = require("express");
const router = express.Router();

const streamerInfo = [
  {
    id: 1,
    name: "Cheets",
    channel: "Cheets",
    specialization: "Augment",
    class: "Evoker",
  },
  {
    id: 2,
    name: "Solsphere",
    channel: "Solsphere",
    specialization: "Augment",
    class: "Evoker",
  },
  {
    id: 3,
    name: "Vladijmir",
    chanel: "1vladijmir",
    specialization: "Protection",
    class: "Paladin",
  },
];

router.get("/", function (req, res) {
  res.status(200).json(streamerInfo);
});

module.exports = router;
