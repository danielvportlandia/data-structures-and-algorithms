'use strict';

import phraseCounter from '../most-repeated-phrases/most-repeated-phrases';

describe('most-repeated-phrases.test.js', () => {
  const testString = 'The "quick brown fox" jumped over the lazy dog, nobody knows why. The lazy dog, peeved to be labeled lazy (nobody knows why either), jumped over a snoring turtle and nobody knows why the dog would do that. After jumping the turtle the dog howled all night. Why do animals jump others? Why do some animals howl all night? Nobody knows why. In retaliation the "quick brown fox jumped over" ten snoring turtles, again, nobody knows why. Why were there turtles? Nobody knows why. Then the quick brown fox refueled with some icecream, nobody knows why. The "quick brown fox" jumped over them turtles, again, nobody knows why. The quick brown fox jumped over a fuzzy bear that slept all winter, nobody knows why, as did the lazy dog. In the sunny summer, The dolphin swam all summer, yet again, nobody knows why, the quick brown fox jumped over dolphins in the sunny summer. The crickets chirped all sunny summer and who slept all winter and swam all summer? While the crickets chirped all sunny summer the turtles had slept all winter. The Monkey howled all night, the wolves howled all night, and bigfoot howled all night! The fuzzy bear slept all winter but not all summer. The crickets chirped all sunny summer but not all winter. The huskys sledded all winter but not all summer. The dolphin swam all summer but not all winter.';

  describe('#phraseCounter', () => {
    const phrasesResult = phraseCounter(testString);
    test('Should return an array of the top 10 most common phrases.', () => {
      expect(phrasesResult.includes('nobody knows why')).toBeTruthy();
      expect(phrasesResult.includes('the quick brown fox jumped over')).toBeTruthy();
      expect(phrasesResult.includes('slept all winter')).toBeTruthy();
      expect(phrasesResult.includes('howled all night')).toBeTruthy();
      expect(phrasesResult.includes('the lazy dog')).toBeTruthy();
      expect(phrasesResult.includes('the crickets chirped all sunny summer')).toBeTruthy();
    });
    test('Should return an empty array if there were no matches in the array.', () => {
      const noPhrasesString = 'The quick brown fox jumped over the lazy dog. This test string will have absolutely no repeating phrases.';
      expect(phraseCounter(noPhrasesString)).toEqual([]);
    });
    test('Should throw error if input is not a string data-type.', () => {
      expect(() => phraseCounter(123)).toThrowError('Invalid data-type, input must be a string.');
    });
  });
});
