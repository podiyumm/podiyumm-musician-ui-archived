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
      "[Emi]Jak [C]jeleň [D]dychtí za vo[Emi]dou, ja, [C]Bože, [D]túžim za teb[Emi]ou. 3x",
      "Jak [C]jeleň [D]dychtí za vo[Emi]dou, ja, [C]Bože, [Emi]túžim za teb[D]ou.",
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
      "[Emi]Jak [C]jeleň [D]dychtí za vo[Emi]dou, ja, [C]Bože, [D]túžim za teb[Emi]ou. 3x",
      "Jak [C]jeleň [D]dychtí za vo[Emi]dou, ja, [C]Bože, [Emi]túžim za teb[D]ou.",
      "{eov}",
      "{soc}",
      "[Emi]Flý flaj [A]džulala, [Emi]flý flaj [H]džulala,",
      "[Emi]flý flaj [A]džulala, git[Emi]ara [H7]toka[Emi]re. Pam - [H7]pam - pam.",
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

{
  id: "4",
  title: "Chcem vojsť do Pánových brán",
  artist: "",
  key: "C",
  text: [
  '[C]Chcem vojsť do Pánových [F]brán,', 'srdce [C]chcem mať plné [Ami]chvál,', 'vstúpiť [C]do Pánových [F]siení s osla[G]vou.', 'Toto [C]je deň, ktorý [F]Pán pre mňa [C]daro[Ami]val,', 'chcem [Dmi]tešiť sa, môj [G]Pán mi šťastie [C]dal.', '{eov}', '{soc}', ' /: ON [C]PRAVÉ ŠŤASTIE [F]DAL, ', 'SOM [C]VĎAČNÝ, PLNÝ [Ami]CHVÁL.', 'CHCEM [Dmi]TEŠIŤ SA, ', 'MôJ [G]PÁN MI ŠŤASTIE [C]DAL.[G]:/', '{eoc}'
]
},
{
  id: "5",
  title: "Požehnané meno má Pán",
  artist: "",
  key: "D",
  text: ['{sov}', '[D] [(G,fis)] /: Požehnané meno má [(A,Hmi)]Pán :/ 3x', 'Najvyšší. [A] ', '{eov}', '{soc}', 'Viem, že meno Pána, je mô[D]j úkryt[G, D, hmi], ', 'v boji sa v ňom môžem skry[emi]ť, v bezpečí žiť[A, D].', '{eoc}', '{sov}', 'Oslávené meno má Pán...', '{eov}', '{sov}', 'Svätý, svätý, svätý je Pán...', '{eov}', '{sov}', 'Ježiš, toto meno má Pán...', '{eov}']
},
{
  id: "ž",
  title: "Ty si Pánom, Ty si Kráľom",
  artist: "",
  key: "D",
  text: ['{sov}', '[D]Ty si Pánom, [A]Ty si Kráľom,', '[H]Ó Kráľom je [G]Boh. ', '{eov}', '{soc}', '/: P[D]ozdvihnime svoje srdcia,', ' [A]pozdvihnime svoje dlane, [Hmi]postavme sa ', 'pred tvár Pána a [G]velebme Ho.:/  ', '{eoc}']
}
//   {
//     id: "4",
//     title: "Holubí dům",
//     text: [
//       "{sov: Verse 1}",
// "[Emi]Zpí[D]vám [C]ptákům a [h]zvlášť holubům[Emi]",
// "stá[D]val v [C]údolí [h]mém starý [Emi]dům",
// "[G]ptá[D]ků [G]houf zalétal[D] ke krovům[G]",
// "[Emi]měl [D]jsem [C]rád holubích[h] křídel šum[Emi]",
// "{eov}",
// "{sov: Verse 2}",
// "[Emi]Vlí[D]dná [C]dívka jim [h]házela hrach[Emi]",
// "mává[D]ní [C]perutí [h]víří [Emi]prach",
// "[G]ptá[D]cí [G]krouží a neznají strach
// "[Emi]měl [D]jsem [C]starý dům [h] jeho práh[Emi]",
// "{eov}",
// "{soc}",
// "Hledám[C]dům holubí[D]",
// "kdopak[G]z vás cestu [Emi]ví",
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
