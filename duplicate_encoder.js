function duplicate_encode(word) {
  chars = word.toLowerCase().split("");
  return chars.reduce( (encoded, char) => {
    return (chars.filter(c => c === char).length === 1) ? encoded + '(' : encoded + ')';
  }, "")
}

function countChars(word, char) {
  return word.split("").filter(c => c === char).length;
}

var assert = require('assert');
assert.equal(duplicate_encode("din"),"(((")
assert.equal(duplicate_encode("recede"),"()()()")
assert.equal(duplicate_encode("Success"),")())())","should ignore case")
assert.equal(duplicate_encode("(( @"),"))((")
