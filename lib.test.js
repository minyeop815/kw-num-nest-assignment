const { test, expect } = require("@jest/globals");
const lib = require("./lib");

// avg

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

// prime

test("prime(1) should be false", ()=>{
    expect(lib.prime(1)).toBe(false);
});

test("prime(31) should be true", ()=>{
    expect(lib.prime(31)).toBe(true);
});

test("prime(30) should be false", ()=>{
    expect(lib.prime(30)).toBe(false);
});

test("prime(-1) should be false", ()=>{
    expect(lib.prime(-1)).toBe(false);
});

// factorial

test("factorial(6) should be 120", () => {
    expect(lib.factorial(6)).toBe(720);
});

test("factorial(0) should be 120", () => {
    expect(lib.factorial(0)).toBe(1);
});

test("factorial(16) should return 'out of range'", () => {
    expect(lib.factorial(16)).toBe("out of range");
});