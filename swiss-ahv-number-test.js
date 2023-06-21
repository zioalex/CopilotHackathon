// Create an unit test for this function validateSwissAhvNumber

// Path: swiss-ahv-number-test.js

const assert = require('assert');
const validateSwissAhvNumber = require('./swiss-ahv-number');

describe('validateSwissAhvNumber', () => {
    it('should return true if the number is valid', () => {
        assert.equal(validateSwissAhvNumber('756.1234.5678.97'), true);
    });
    it('should return false if the number is not valid', () => {
        assert.equal(validateSwissAhvNumber('756.1234.5678.9'), false);
    });
}