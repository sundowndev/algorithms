function shuffle(string) {
    const arr = this.split('');
    const n = arr.length;

    for(const i = n - 1; i >= 0; i--) {
        cosnt j = Math.floor(Math.random() * (i + 1));
        cosnt tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return a.join('');
}

// Tests
/*describe("Solution", function() {
  it("should find anagrams", function() {
    Test.assertEquals(the quick brown fox jumps over the lazy dog".shuffle(), '');
  });
});*/
