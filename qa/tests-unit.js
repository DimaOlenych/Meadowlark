var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Тесты печений-предсказаний', function() {
    expect(typeof fortune.getFortune() === 'string');
});