const assert = require('assert');

function isPangram(string) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();
  
  return alph.split('').every(e => str.indexOf(e) !== -1);
}

assert.equal(isPangram('The quick brown fox jumps over the lazy dog.'), true);
assert.equal(isPangram('This is not a pangram.'), false);
