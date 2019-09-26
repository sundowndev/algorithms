const assert = require('assert');

function shuffle(string) {
    const arr = string.split('');

    for(let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr.join('');
}

// Tests
describe("Solution", function() {
  it("should not be the same string", function() {
    let str = 'the quick brown fox jumps over the lazy dog';
    assert.notEqual(shuffle(str), str);
  });
    
  it("should stay the same string", function() {
    const str = 'f';
    assert.equal(shuffle(str), str);
  });

  it("should shuffle string", function() {
    const str = 'a b';
    assert.equal(['a b', 'b a', ' ba', 'ba ', 'ab ', ' ab'].indexOf(shuffle(str)) !== -1, true);
  });
});
