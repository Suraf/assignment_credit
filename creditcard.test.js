const number = require('./creditcard');

describe("Credit Card tests", () => {
	test("Should be a number", () => {
		expect(number("test string")).toEqual("Invalid Credit Card");
	});
	test("Must have 12 or more digits.", () => {
		expect(number(12345678901)).toEqual("Invalid Credit Card");
	});
	test("Must have 16 or less digits.", () => {
		expect(number(12345678901234567)).toEqual("Invalid Credit Card");
	});
	test("Obscure credit card number, first test", () => {
		expect(number(123456789012)).toEqual("########9012");
	});
	test("Obscure credit card number, second test", () => {
		expect(number(123456789012345)).toEqual("###########2345");
	});
})