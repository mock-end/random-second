var expect = require('chai').expect;

describe('random-second: ', function () {

  var randomSecond = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomSecond()).to.be.within(0, 59);
      expect(randomSecond({ min: 10 })).to.be.within(10, 59);
      expect(randomSecond({ max: 10 })).to.be.within(0, 10);
    }
  });
});
