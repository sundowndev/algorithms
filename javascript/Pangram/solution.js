function isPangram(string) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();
  
  return alph.split('').every(e => str.indexOf(e) !== -1);
}

Test.assertEquals(isPangram('The quick brown fox jumps over the lazy dog.'), true);
Test.assertEquals(isPangram('This is not a pangram.'), false);
