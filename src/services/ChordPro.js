import ChordSheetJS from "chordsheetjs";

export default {
  renderChordProAsHtml(chordProSongText) {
    if (!chordProSongText) return "";
    console.log(chordProSongText);
    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(chordProSongText);
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    const textAsHtml = formatter.format(song);
    // console.log(textAsHtml)
    return textAsHtml;
  },
};
