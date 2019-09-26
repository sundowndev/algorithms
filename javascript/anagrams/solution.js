const assert = require('assert');

// Solution
function anagrams(word, words) {
  const sort = (word) => {
    return word.split('').sort().join('');
  }

  return words.filter(w => sort(w) === sort(word));
}

// Tests
describe("Solution", function() {
  it("should find anagrams", function() {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
    assert.deepEqual(anagrams('alert', ['alter', ,'alper', 'later']), ['alter', 'later']);
  });
});
