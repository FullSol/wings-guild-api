const express = require("express");
const router = express.Router();

const GnarlRoot =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_gnarlroot_thumb.webp";
const Igira =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_igira_thumb.webp";
const Volcross =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_vollcross_thumb.webp";
const Council =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_council_of_dreams_thumb.webp";
const Lardor =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_larodor_thumb.webp";
const Nymue =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_nymue_thumb.webp";
const Smolderon =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_smolderon_thumb.webp";
const Tindral =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_tindral_thumb.webp";
const Fyrakk =
  "http://localhost:3001/media/patch_10.2_assets/raid/bosses/boss_fyrakk_thumb.webp";

const progressionInfo = [
  {
    name: "Vault of the Incarnates",
    bosses: [
      {
        id: 1,
        name: "Eranog",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 2,
        name: "Terros",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 3,
        name: "The Prima Council",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 4,
        name: "Sennarth",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 5,
        name: "Dathea, the Ascended",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 6,
        name: "Broodkeeper Diurna",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
      {
        id: 7,
        name: "Raszageth the Storm-Eater",
        difficulties: {
          normal: { level: "normal", status: "progressing", date: null },
          heroic: { level: "heroic", status: "progressing", date: null },
          mythic: { level: "mythic", status: "progressing", date: null },
        },
      },
    ],
  },
  {
    name: "Abberus, The Shadowed Crucible",
    bosses: [
      {
        id: 1,
        name: "Kazarra",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 2,
        name: "The Amalgamation Chamber",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 3,
        name: "The Forgotten Experiments",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 4,
        name: "Assault of the Zaqali",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 5,
        name: "Rashok, the Elder",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 6,
        name: "The Vigilant Steward",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 7,
        name: "Magmorax",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 8,
        name: "Echo of Neltharion",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
      {
        id: 9,
        name: "Scalecommander Sarkareth",
        difficulties: {
          normal: { level: "normal", status: "killed", date: null },
          heroic: { level: "heroic", status: "killed", date: null },
          mythic: { level: "mythic", status: "killed", date: null },
        },
      },
    ],
  },
  {
    name: "Amirdrassil, the Dream's Hope",
    bosses: [
      {
        id: 1,
        name: "Gnarlroot",
        imgLocation: GnarlRoot,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 2,
        name: "Igira the Cruel",
        imgLocation: Igira,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 3,
        name: "Volcross",
        imgLocation: Volcross,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 4,
        name: "Council of Dreams",
        imgLocation: Council,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 5,
        name: "Larodar",
        imgLocation: Lardor,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: { status: "progression", pulls: 0, lowest: 100, date: null },
        },
      },
      {
        id: 6,
        name: "Nymue",
        imgLocation: Nymue,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 7,
        name: "Smolderon",
        imgLocation: Smolderon,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 8,
        name: "Tindral Sageswift",
        imgLocation: Tindral,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
      {
        id: 9,
        name: "Fyrakk",
        imgLocation: Fyrakk,
        difficulties: {
          normal: {
            level: "normal",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          heroic: {
            level: "heroic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
          mythic: {
            level: "mythic",
            status: "progressing",
            pulls: 0,
            lowest: 100,
            date: null,
          },
        },
      },
    ],
  },
];

router.get("/", function (req, res) {
  res.status(200).json(progressionInfo);
});

module.exports = router;
