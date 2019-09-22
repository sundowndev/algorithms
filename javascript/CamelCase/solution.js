String.prototype.camelCase = function() {
  return this
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

Test.describe("Basic tests", _ => {
  Test.assertEquals("test case".camelCase(), "TestCase");
  Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
  Test.assertEquals("say hello ".camelCase(), "SayHello");
  Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
  Test.assertEquals("".camelCase(), "");
});
