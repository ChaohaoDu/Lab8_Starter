// unit.test.js

const {isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor} = require("../code-to-unit-test/unit-test-me");

// TODO - Part 2
test('phone number true 1', () => {
   expect(isPhoneNumber('1')).toBe(false);
})

test('phone number true 2', () => {
   expect(isPhoneNumber('111-111-1111')).toBe(true);
})

test('phone number false 1', () => {
   expect(isPhoneNumber('1')).toBe(true);
})

test('phone number false 2', () => {
   expect(isPhoneNumber('111-111-1111')).toBe(false);
})

test('email true 1', () => {
   expect(isEmail("chaohaodu@gmail.com")).toBe(true);
})

test('email true 2', () => {
   expect(isEmail("du.gmail.com")).toBe(false);
})

test('email false 1', () => {
   expect(isEmail("chaohaodu@gmail.com")).toBe(false);

})

test('email false 2', () => {
   expect(isEmail("du.gmail.com")).toBe(true);

})

test('strong password true 1', () => {
   expect(isStrongPassword('abcd123')).toBe(true);
})

test('strong password true 2', () => {
   expect(isStrongPassword('123abc')).toBe(false);
})

test('strong password false 1', () => {
   expect(isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(true);
})

test('strong password false 2', () => {
   expect(isStrongPassword('a1d2f3fg4')).toBe(false);
})

test('date true 1', () => {
   expect(isDate('01/02/2022')).toBe(true);
})

test('date true 2', () => {
   expect(isDate('01.02.2022')).toBe(false);
})

test('date false 1', () => {
   expect(isDate('013/02/2022')).toBe(true);
})

test('date false 2', () => {
   expect(isDate('01/02/9999')).toBe(false);
})

test('hex true 1', () => {
   expect(isHexColor('#000000')).toBe(true);
})

test('hex true 1', () => {
   expect(isHexColor('$000000')).toBe(false);
})

test('hex false 1', () => {
   expect(isHexColor('#3fa')).toBe(false);
})

test('hex false 2', () => {
   expect(isHexColor('#12345678')).toBe(true);
})
