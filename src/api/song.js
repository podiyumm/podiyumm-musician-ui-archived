/**
 * Mocking client-server processing
 */
const _songs = [
  {
    id: 1,
    author: "",
    title: "Jak jeleň dychtí za vodou",
    text: [
      "{sov: Verse 1}",
      "[e]Jak [C]jeleň [D]dychtí za vo[e]dou, ja, [C]Bože, [D]túžim za teb[e]ou. 3x",
      "Jak [C]jeleň [D]dychtí za vo[e]dou, ja, [C]Bože, [e]túžim za teb[D]ou.",
      "{eov}",
      "{soc}",
      "Zošli {chod e}dážď, zošli [C]dážď, dosť [G]bolo su[D]cha",
      "Zošli {chod e}dážď, zošli [C]dážď, dosť [G]Svätého Du[D]cha",
      "Zošli {chod e}dážď, zošli [C]dážď, dosť [G]nové let[D]nice",
      "Zošli {chod e}dážď, zošli [C]dážď, dosť [G]rozjasaj srd[D]ce",
      "{eoc}",
    ],
  },
  {
    id: 2,
    author: "",
    title: "Boh ľúbi ma, takého aký som",
    text: [
      "{sov: Verse 1}",
      "[e]Jak [C]jeleň [D]dychtí za vo[e]dou, ja, [C]Bože, [D]túžim za teb[e]ou. 3x",
      "Jak [C]jeleň [D]dychtí za vo[e]dou, ja, [C]Bože, [e]túžim za teb[D]ou.",
      "{eov}",
      "{soc}",
      "[E]Flý flaj [A]džulala, [E]flý flaj [H]džulala,",
      "[E]flý flaj [A]džulala, git[E]ara [H7]toka[E]re. Pam - [H7]pam - pam.",
      "{eoc}",
    ],
  },
  {
    id: "3",
    title: "Amazing Grace",
    artist: "John Newton",
    key: "D",
    text: [
      "{start_of_verse: Verse 1}",
      "A[D]mazing grace! (how [G]sweet the [D]sound)",
      "That [D]saved a wretch like [A7]me!",
      "I [D]once was lost, but [G]now am [D]found,",
      "Was [D]blind, but [A7]now I [D]see.",
    ],
  },
];

export default {
  getSongs(cb) {
    setTimeout(() => cb(_songs), 100);
  },
  // ,

  // buyProducts (products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     (Math.random() > 0.5 || navigator.webdriver)
  //       ? cb()
  //       : errorCb()
  //   }, 100)
  // }
};
