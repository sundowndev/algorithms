function shuffle(string) {
    const arr = string.split('');
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
  it("should shuffle string", function() {
    Test.assertEquals(shuffle("the quick brown fox jumps over the lazy dog"), '');
  });
});*/
