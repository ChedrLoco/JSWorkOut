/* eslint-disable max-len */
const expect = require('chai').expect;
const Words = require('../../static/code/jsexamples/wordcount');

describe('count()', () => {
  const words = new Words();

  it('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(words.count('word')).to.be.eql(expectedCounts);
  });

  it('counts one of each', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).to.be.eql(expectedCounts);
  });

  it('counts multiple occurrences', () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish two fish red fish blue fish')).to.be.eql(expectedCounts);
  });

  it('includes punctuation', () => {
    const expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(words.count('car : carpet as java : javascript!!&@$%^&')).to.be.eql(expectedCounts);
  });

  it('includes numbers', () => {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words.count('testing 1 2 testing')).to.be.eql(expectedCounts);
  });

  it('normalizes to lowercase', () => {
    const expectedCounts = { go: 3 };
    expect(words.count('go Go GO')).to.be.eql(expectedCounts);
  });

  it('counts properly international characters', () => {
    const expectedCounts = { '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 };
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).to.be.eql(expectedCounts);
  });
  /*
  it('counts multiline', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\nworld')).to.be.eql(expectedCounts);
  });

  it('counts tabs', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\tworld')).to.be.eql(expectedCounts);
  });

  it('counts multiple spaces as one', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello  world')).to.be.eql(expectedCounts);
  });

  it('does not count leading or trailing whitespace', () => {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(words.count('\t\tIntroductory Course      ')).to.be.eql(expectedCounts);
  });

  it('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = {
      reserved: 1, words: 1,
      like: 1, constructor: 1,
      and: 1, tostring: 1,
      'ok?': 1 };
    expect(words.count('reserved words like constructor and toString ok?')).to.be.eql(expectedCounts);
  });
  */
});
