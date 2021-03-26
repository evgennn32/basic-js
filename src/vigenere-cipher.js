const CustomError = require("../extensions/custom-error");

class thisingMachine {

  constructor(reverse) {
    this.reverce = reverse;
    this.table = {
      a: "abcdefghijklmnopqrstuvwxyz",
          b: "bcdefghijklmnopqrstuvwxyza",
          c: "cdefghijklmnopqrstuvwxyzab",
          d: "defghijklmnopqrstuvwxyzabc",
          e: "efghijklmnopqrstuvwxyzabcd",
          f: "fghijklmnopqrstuvwxyzabcde",
          g: "ghijklmnopqrstuvwxyzabcdef",
          h: "hijklmnopqrstuvwxyzabcdefg",
          i: "ijklmnopqrstuvwxyzabcdefgh",
          j: "jklmnopqrstuvwxyzabcdefghi",
          k: "klmnopqrstuvwxyzabcdefghij",
          l: "lmnopqrstuvwxyzabcdefghijk",
          m: "mnopqrstuvwxyzabcdefghijkl",
          n: "nopqrstuvwxyzabcdefghijklm",
          o: "opqrstuvwxyzabcdefghijklmn",
          p: "pqrstuvwxyzabcdefghijklmno",
          q: "qrstuvwxyzabcdefghijklmnop",
          r: "rstuvwxyzabcdefghijklmnopq",
          s: "stuvwxyzabcdefghijklmnopqr",
          t: "tuvwxyzabcdefghijklmnopqrs",
          u: "uvwxyzabcdefghijklmnopqrst",
          v: "vwxyzabcdefghijklmnopqrstu",
          w: "wxyzabcdefghijklmnopqrstuv",
          x: "xyzabcdefghijklmnopqrstuvw",
          y: "yzabcdefghijklmnopqrstuvwx",
          z: "zabcdefghijklmnopqrstuvwxy"
    }

  }
  encrypt(plainText, key) {

    if(!plainText || !key || plainText === undefined || key === undefined){
      throw new Error('no entry data')
    }
    plainText = plainText.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let text = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < plainText.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyIndex = this.table.a.indexOf(key[keyLetter]);

      if( this.table[plainText[i]] ){
        text += this.table[plainText[i]][keyIndex];
      }else{
        text += plainText[i];
        specialCharacterCount++;
      }
    }
    if(this.reverce === false){
      return [...text].reverse().join('').toUpperCase();
    }

    return text.toUpperCase();
  }
  decrypt(text, key) {

    if(!key || !text || key === undefined || text === undefined){
      throw new Error('no entry data')
    }
    text = text.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < text.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyRow = this.table[key[keyLetter]];

      if( keyRow.indexOf(text[i]) !== -1){
        decryptedText += this.table.a[keyRow.indexOf(text[i])];
      }else{
        decryptedText += text[i];
        specialCharacterCount++;
      }
    }
    if(this.reverce === false){
      return [...decryptedText].reverse().join('').toUpperCase()
    }

    return decryptedText.toUpperCase();
    }
}

module.exports = thisingMachine;
