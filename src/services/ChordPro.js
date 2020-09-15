import ChordSheetJS from 'chordsheetjs';

export default {

  renderChordProText (chordProSongText) {
    console.log(chordProSongText);
    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(chordProSongText);
    const formatter = new ChordSheetJS.HtmlTableFormatter();
    const textAsHtml = formatter.format(song);
    console.log(textAsHtml);
    return textAsHtml;
  }
}