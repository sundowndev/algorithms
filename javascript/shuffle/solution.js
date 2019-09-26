function shuffle(string) {
    const arr = string.split('');

    for(const i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return a.join('');
}

// Tests
describe("Solution", function() {
  it("should not be the same string", function() {
    const str = 'the quick brown fox jumps over the lazy dog';
    Test.assertNotEquals(shuffle(str), str);
  });
    
  it("should stay the same string", function() {
    const str = 'f';
    Test.assertEquals(shuffle(str), str);
  });

  it("should shuffle string", function() {
    const str = 'a b';
    Test.assertIn(shuffle(str), ['a b', 'b a', ' ba', 'ba ', 'ab ', ' ab']);
  });
});
