// source: https://music-zone.eu/wp-content/uploads/2018/01/acoustic-guitar-chord-chart-fingers_893536.png

const chordDefs = [
  // dur
  {
    name: "C",
    chord: [
      [1, 0],
      [2, 1, "1"],
      [3, 0],
      [4, 2, 2],
      [5, 3, 3],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "D",
    chord: [
      [1, 2, 2],
      [2, 3, 3],
      [3, 2, "1"],
      [4, 0, "D"],
      [5, "x"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "E",
    chord: [
      [1, 0, "E"],
      [2, 0],
      [3, 1, 1],
      [4, 2, 3],
      [5, 2, 2],
      [6, 0, "E"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "F",
    chord: [
      [1, 1, 1],
      [2, 3, 3],
      [3, 3, 4],
      [4, 2, 2],
      [5, 1, 1],
      [6, 1, 1],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "G",
    chord: [
      [1, 3, 4],
      [2, 3, 3],
      [3, 0, "G"],
      [4, 0],
      [5, 2, 1],
      [6, 3, 2],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "A",
    chord: [
      [1, 0],
      [2, 2, 3],
      [3, 2, 2],
      [4, 2, 1],
      [5, 0, "A"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "H",
    chord: [
      [1, 2, 1],
      [2, 4, 3],
      [3, 4, 3],
      [4, 4, 3],
      [5, 2, 1],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  // mi
  {
    name: "Dmi",
    chord: [
      [1, 1, 1],
      [2, 3, 3],
      [3, 2, 2],
      [4, 0, "D"],
      [5, "x"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Emi",
    chord: [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 2, 3],
      [5, 2, 2],
      [6, 0, "E"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Fmi",
    chord: [
      [1, 1, 1],
      [2, 3, 3],
      [3, 3, 4],
      [4, 1, 1],
      [5, 1, 1],
      [6, 1, 1],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Ami",
    chord: [
      [1, 0],
      [2, 1, 1],
      [3, 2, 3],
      [4, 2, 2],
      [5, 0, "A"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Hmi",
    chord: [
      [1, 2, 1],
      [2, 3, 2],
      [3, 4, 4],
      [4, 4, 3],
      [5, 2, 1],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },

  // 7
  {
    name: "C7",
    chord: [
      [1, 0],
      [2, 1, 1],
      [3, 3, 4],
      [4, 2, 2],
      [5, 3, 3],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "D7",
    chord: [
      [1, 2, 3],
      [2, 1, 1],
      [3, 2, 2],
      [4, 0, "D"],
      [5, "x"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "E7",
    chord: [
      [1, 0],
      [2, 3, 4],
      [3, 1, 1],
      [4, 0],
      [5, 2, 2],
      [6, 0, "E"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "F7",
    chord: [
      [1, 0, "x"],
      [2, 0, "x"],
      [3, 3, 4],
      [4, 2, 3],
      [5, 1, 2],
      [6, 0],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "G7",
    chord: [
      [1, 1, 1],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 2, 2],
      [6, 3, 3],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "A7",
    chord: [
      [1, 0],
      [2, 2, 3],
      [3, 0],
      [4, 2, 2],
      [5, 0, "A"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },

  // m7

  {
    name: "Dm7",
    chord: [
      [3, 2, 2],
      [4, 0],
      [5, "x"],
      [6, "x"],
    ],
    position: 0,
    barres: [{ fromString: 2, toString: 1, fret: 1 }],
  },
  {
    name: "Em7",
    chord: [
      [1, 0],
      [2, 3, 4],
      [3, 0],
      [4, 0],
      [5, 2, 1],
      [6, 0, "E"],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Fm7",
    chord: [
      [1, 1, 1],
      [2, 3, 3],
      [3, 1, 1],
      [4, 2, 2],
      [5, 1, 1],
      [6, 1, 1],
    ],
    position: 0,
    barres: [],
  },
  {
    name: "Am7",
    chord: [
      [1, 0],
      [2, 1, 1],
      [3, 0],
      [4, 2, 2],
      [5, 0, "A"],
      [6, "x"],
    ],
    position: 0,
    barres: [],
  },

  // sus2
  {
    name: "Esus2",
    chord: [
      [1, 2, 1],
      [2, 5, 4],
      [3, 4, 3],
      [4, 2, 1],
      [5, 2, 1],
      [6, 0, "x"],
    ],
    position: 0,
    barres: [],
  },

  // sus4
  {
    name: "Esus4",
    chord: [
      [1, 0],
      [2, 0],
      [3, 4, 4],
      [4, 2, 3],
      [5, 2, 2],
      [6, 0, "x"],
    ],
    position: 0,
    barres: [],
  },

  // 5
  {
    name: "Esus4",
    chord: [
      [1, 0],
      [2, 2, 1],
      [3, 2, 2],
      [4, 0, "x"],
      [5, 0, "x"],
      [6, 0, "x"],
    ],
    position: 0,
    barres: [],
  },
];

export default {
  getChordDefinition(chord) {
    return chordDefs.find((chordDef) => chord == chordDef.name);
  },
};
