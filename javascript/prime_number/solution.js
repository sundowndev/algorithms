const assert = require('assert');

// Solution
function isPrime(num) {
  if (isNaN(num) || !isFinite(num) || num%1 || num<2) return false;
  
  for(let x = 2; x <= Math.sqrt(num); x++)
    if(num % x === 0) return false;
  return true;
}

// Tests
describe("Basic", ()=>{
	it("Basic tests", () => {
		assert.equal(isPrime(0),  false, "0 is not prime");
		assert.equal(isPrime(1),  false, "1 is not prime");
		assert.equal(isPrime(2),  true, "2 is prime");
		assert.equal(isPrime(73), true, "73 is prime");
		assert.equal(isPrime(75), false, "75 is not prime");
		assert.equal(isPrime(-1), false, "-1 is not prime");
	});
	
	it("Test prime", () => {
		assert.equal(isPrime(3),  true, "3 is prime");
		assert.equal(isPrime(5),  true, "5 is prime");
		assert.equal(isPrime(7),  true, "7 is prime");
		assert.equal(isPrime(41), true, "41 is prime");
		assert.equal(isPrime(5099), true, "5099 is prime");
	});

	it("Test not prime", () => {
		assert.equal(isPrime(4),  false, "4 is not prime");
		assert.equal(isPrime(6),  false, "6 is not prime");
		assert.equal(isPrime(8),  false, "8 is not prime");
		assert.equal(isPrime(9), false, "9 is not prime");
		assert.equal(isPrime(45), false, "45 is not prime");
		assert.equal(isPrime(-5), false, "-5 is not prime");
		assert.equal(isPrime(-8), false, "-8 is not prime");
		assert.equal(isPrime(-41), false, "-41 is not prime");
	});
});
