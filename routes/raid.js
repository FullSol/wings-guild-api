const express = require("express");
const router = express.Router();

const GnarlRoot = `/media/patch_10.2_assets/raid/bosses/boss_gnarlroot_thumb.webp`;
const Igira = `/media/patch_10.2_assets/raid/bosses/boss_igira_thumb.webp`;
const Volcross = `/media/patch_10.2_assets/raid/bosses/boss_vollcross_thumb.webp`;
const Council = `/media/patch_10.2_assets/raid/bosses/boss_council_of_dreams_thumb.webp`;
const Lardor = `/media/patch_10.2_assets/raid/bosses/boss_larodor_thumb.webp`;
const Nymue = `/media/patch_10.2_assets/raid/bosses/boss_nymue_thumb.webp`;
const Smolderon = `/media/patch_10.2_assets/raid/bosses/boss_smolderon_thumb.webp`;
const Tindral = `/media/patch_10.2_assets/raid/bosses/boss_tindral_thumb.webp`;
const Fyrakk = `/media/patch_10.2_assets/raid/bosses/boss_fyrakk_thumb.webp`;

const progressionInfo = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "Amirdrassil, the Dream's Hope",
    bosses: [
      {
        id: 1,
        name: "Gnarlroot",
        imgLocation: GnarlRoot,
        difficulties: {
          normal: {
            level: "normal",
            status: "killed",
            pulls: 1,
            lowest: 0,
            date: new Date("2023-11-15T21:01:00").toISOString(),
          },
          heroic: {
            level: "heroic",
            status: "killed",
            pulls: 1,
            lowest: 0,
            date: new Date("2023-11-15T23:29:00").toISOString(),
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
            status: "killed",
            pulls: 1,
            lowest: 0,
            date: new Date("2023-11-15T21:21:00").toISOString(),
          },
          heroic: {
            level: "heroic",
            status: "killed",
            pulls: 2,
            lowest: 0,
            date: new Date("2023-11-15T23:43:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T21:21:00").toISOString(),
          },
          heroic: {
            level: "heroic",
            status: "killed",
            pulls: 2,
            lowest: 0,
            date: new Date("2023-11-16T00:03:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T21:47:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T21:34:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T22:00:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T22:06:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T22:30:00").toISOString(),
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
            status: "killed",
            pulls: 0,
            lowest: 0,
            date: new Date("2023-11-15T23:03:00").toISOString(),
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
