import teoria from 'teoria';

export default {

  notes (chord) {
      if (!chord) return ''

      const parsedChord = teoria.chord(chord);
      console.log("Chord " + chord + ": " + parsedChord.notes());

      return parsedChord.notes();
    }
  }