//tests

const functions = require('./functions');

test('add', () => {
    expect(functions.add(2, 2)).toBe(4)
});