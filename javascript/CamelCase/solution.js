const assert = require('assert');

String.prototype.camelCase = function() {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

describe('Basic tests', (_) => {
  assert.equal('test case'.camelCase(), 'TestCase');
  assert.equal('camel case method'.camelCase(), 'CamelCaseMethod');
  assert.equal('say hello '.camelCase(), 'SayHello');
  assert.equal(' camel case word'.camelCase(), 'CamelCaseWord');
  assert.equal(''.camelCase(), '');
});
