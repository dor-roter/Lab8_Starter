// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber - test 1 - sanity', () => {
    expect(functions.isPhoneNumber('858-319-5656')).toBe(true);
});
test('isPhoneNumber - test 2 - all zeros', () => {
    expect(functions.isPhoneNumber('000-000-00000')).toBe(true);
});
test('isPhoneNumber - test 3 - not number', () => {
    expect(functions.isPhoneNumber('hello')).toBe(false);
});
test('isPhoneNumber - test 4 - no dash', () => {
    expect(functions.isPhoneNumber('00000000000')).toBe(false);
});

test('isEmail - test 1 - sanity', () => {
    expect(functions.isEmail('droter@ucsd.edu')).toBe(true);
});
test('isEmail - test 2 - gmail', () => {
    expect(functions.isEmail('droter@gmail.com')).toBe(true);
});
test('isEmail - test 3 - not at', () => {
    expect(functions.isEmail('hello.gmail.com')).toBe(false);
});
test('isEmail - test 4 - no dot', () => {
    expect(functions.isEmail('gello@gmail')).toBe(false);
});

test('isStrongPassword - test 1 - sanity', () => {
    expect(functions.isStrongPassword('thisisstrong')).toBe(true);
});
test('isStrongPassword - test 2 - strong short', () => {
    expect(functions.isStrongPassword('a___')).toBe(true);
});
test('isStrongPassword - test 3 - not strong', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});
test('isStrongPassword - test 4 - not letters', () => {
    expect(functions.isStrongPassword('1243a')).toBe(false);
});

test('isDate - test 1 - sanity', () => {
    expect(functions.isDate('01/12/1779')).toBe(true);
});
test('isDate - test 2 - one X', () => {
    expect(functions.isDate('1/1/1779')).toBe(true);
});
test('isDate - test 3 - not date', () => {
    expect(functions.isDate('1/a/1779')).toBe(false);
});
test('isDate - test 4 - too long', () => {
    expect(functions.isDate('1/a/17799')).toBe(false);
});

test('isHexColor - test 1 - sanity', () => {
    expect(functions.isHexColor('#fffafa')).toBe(true);
});
test('isHexColor - test 2 - hex short', () => {
    expect(functions.isHexColor('#ff0')).toBe(true);
});
test('isHexColor - test 3 - long', () => {
    expect(functions.isHexColor('#fffafaaa')).toBe(false);
});
test('isHexColor - test 4 - invalid letter', () => {
    expect(functions.isHexColor('#xxxxxx')).toBe(false);
});