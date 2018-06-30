'use strict';

const testString = 'The quick brown fox jumped over the lazy dog. The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle. In retaliation the quick brown fox jumped over ten snoring turtles. Then the quick brown fox refueled with some icecream.';

// const dictionarySorter = (a, b) => {
//   return a[1] - b[1];
// };

// const mapCounter = (map, [key, value]) => {
//   if (map.get(key)) {
//     [key]: [value + 1];
//   }
// };

const phraseCounter = (str) => {
  // const dictionary = [];
  const phraseMap = new Map();
  const sentences = str.toLowerCase().split(/\.|\?|!/);
  let wordCounter = 3;
  console.log(sentences);

  /* The following for-loop is breaking each sentence down into an array of words and 
  removing the empty strings (if any exist). String subsets of the sentence 
  are added to the map (3-10 words at a time), once the counter surpasses either 
  the phrase limit (10) or the length of the words array, then the first word of 
  the sentence is removed and the process repeats itself until there are only 2 
  words left in the sentence.
  */
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(' ').filter(x => x);

    while (words.length > 2) {
      wordCounter = 3;
      while (wordCounter <= words.length && wordCounter <= 10) {
        let phraseSubSet = '';
        
        // Populates phrase string
        for (let j = 0; j < wordCounter; j++) {
          phraseSubSet += `${words[j]} `;
        }
        
        /* Before inserting the phrase string into the map, this block checks if the 
        phrase is already in the map, if so, it increases the key's value by 1 */
        if (phraseMap.has(phraseSubSet)) {
          let occurances = phraseMap.get(phraseSubSet);
          occurances += 1;
          phraseMap.set(phraseSubSet, occurances);
        } else {
          phraseMap.set(phraseSubSet, 1);
        }

        wordCounter += 1;
      }
      words.shift();
    }
  }

  console.log(phraseMap);
};

console.log(phraseCounter(testString));
