var expect = require('chai').expect;

describe('random-second: ', function () {

  var second = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(second()).to.be.within(0, 59);
    }
  });
});
