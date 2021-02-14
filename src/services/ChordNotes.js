import { chordParserFactory } from 'chord-symbol';


export default {

    notes (chord) {
      if (!chord) return ''

      const parseChord = chordParserFactory();
      const parsedChord = parseChord(chord);
      if (!parsedChord) return []

      console.log("Chord " + chord + ": " + parsedChord.normalized.notes);
      return parsedChord.normalized.notes;
    }
  }