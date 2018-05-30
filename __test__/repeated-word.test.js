'use strict';

import repeatedWord from '../repeated_word/repeated-word';

describe('repeated-word.test.js', () => {
  describe('repeatedWord()', () => {
    test('Should return the first word that occurs more than once.', () => {
      const testString1 = 'Once upon a time, a prince did something...';
      expect(repeatedWord(testString1)).toEqual('a');
    });
    test('Should return the first word that occurs more than once in a lengthy string.', () => {
      const testString2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
      expect(repeatedWord(testString2)).toEqual('was');
    });
    test('Should throw error if there are no multiple words.', () => {
      const testString3 = 'Aardvark Bees Cat Duck Elephant Flamingo.';
      expect(() => repeatedWord(testString3)).toThrowError('No duplicate words in input.');
    });
    test('Should throw error for an empty string.', () => {
      const emptyString = '';
      expect(() => repeatedWord(emptyString)).toThrowError('Input cannot be an empty string.');
    });
    test('Should throw an error for invalid data-type as argument.', () => {
      const invalidInput = 123456789;
      expect(() => repeatedWord(invalidInput)).toThrowError('Input must be a string.');
    });
  });
});
