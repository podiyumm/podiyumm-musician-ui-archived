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
      "{sov: Verse 1}",
      "A[D]mazing grace! (how [G]sweet the [D]sound)",
      "That [D]saved a wretch like [A7]me!",
      "I [D]once was lost, but [G]now am [D]found,",
      "Was [D]blind, but [A7]now I [D]see.",
    ],
  },
//   {
//     id: "4",
//     title: "Holubí dům",
//     text: [
//       "{sov: Verse 1}",
// "[e]Zpí[D]vám [C]ptákům a [h]zvlášť holubům[e]",
// "stá[D]val v [C]údolí [h]mém starý [e]dům",
// "[G]ptá[D]ků [G]houf zalétal[D] ke krovům[G]",
// "[e]měl [D]jsem [C]rád holubích[h] křídel šum[e]",
// "{eov}",
// "{sov: Verse 2}",
// "[e]Vlí[D]dná [C]dívka jim [h]házela hrach[e]",
// "mává[D]ní [C]perutí [h]víří [e]prach",
// "[G]ptá[D]cí [G]krouží a neznají strach
// "[e]měl [D]jsem [C]starý dům [h] jeho práh[e]",
// "{eov}",
// "{soc}",
// "Hledám[C]dům holubí[D]",
// "kdopak[G]z vás cestu [e]ví",
// "míval [a]stáj roube[D]nou bílý štít[G]",

// kde je [C]dům holubí [D]a ta [G]dívka kde [Emi]spí

// vždyť to [Ami]ví že jsem [Hmi]chtěl pro ni [Emi]žít



// Sdílný déšť vypráví okapům, bláhový kdo

// hledá tenhle dům, odrůstáš chlapeckým

// střevícům, neslyšíš holubích křídel šum



// Nabízej úplatou cokoli nepojíš cukrových

// homolí, můžeš mít třeba zrak sokolí

// nespatříš ztracené údolí

//     ]
//   }
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
