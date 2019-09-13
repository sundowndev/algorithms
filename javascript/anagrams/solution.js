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
    Test.assertDeepEquals(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    Test.assertDeepEquals(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
    Test.assertDeepEquals(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
    Test.assertDeepEquals(anagrams('alert', ['alter', ,'alper', 'later']), ['alter', 'later']);
  });
});
