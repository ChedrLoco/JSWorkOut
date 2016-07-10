const expect = require('chai').expect;
// const request = require('supertest');
// const app = require('../../dst/server');
// const cp = require('child_process');
const Year = require('../../static/code/jsexamples/LeapYear');

describe('Leap year', () => {
  it('is not very common', () => {
    const year = new Year(2015);
    expect(year.isLeap()).to.be.equal(false);
  });

  it('is introduced every 4 years to adjust about a day', () => {
    const year = new Year(2016);
    expect(year.isLeap()).to.be.equal(true);
  });

  it('is skipped every 100 years to remove an extra day', () => {
    const year = new Year(1900);
    expect(year.isLeap()).to.be.equal(false);
  });

  it('is reintroduced every 400 years to adjust another day', () => {
    const year = new Year(2000);
    expect(year.isLeap()).to.be.equal(true);
  });

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', () => {
    it('is not a leap year', () => {
      const year = new Year(1978);
      expect(year.isLeap()).to.be.equal(false);
    });

    it('is a common leap year', () => {
      const year = new Year(1992);
      expect(year.isLeap()).to.be.equal(true);
    });

    it('is skipped every 100 years', () => {
      const year = new Year(2100);
      expect(year.isLeap()).to.be.equal(false);
    });

    it('is reintroduced every 400 years', () => {
      const year = new Year(2400);
      expect(year.isLeap()).to.be.equal(true);
    });
  });
});
