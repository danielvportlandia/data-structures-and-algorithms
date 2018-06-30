'use strict';

/* helper function that sorts dictionaries by each index's second 
index, highest-to-lowest and accounts for multiple-digit integers. */
const dictionarySorter = (index) => {
  return function indexSorter(a, b) {
    if (a[index] === b[index]) {
      return 0;
    }
    return (b[index] < a[index]) ? -1 : 1;
  };
};

const phraseCounter = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Invalid data-type, input must be a string.');
  }

  const phraseArray = [];
  const dictionary = [];
  const phraseMap = new Map();
  const sentences = str.toLowerCase().split(/\.|\?|!/);
  let wordCounter = 3;

  /* The following for-loop is breaking each sentence down into an array of words and 
  removing the empty strings (if any exist). String subsets of the sentence 
  are added to the map (3-10 words at a time), once the counter surpasses either 
  the phrase limit (10) or the length of the words array, then the first word of 
  the sentence is removed and the process repeats itself until there are only 2 
  words left in the sentence.
  */
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].replace(/,|\(|\)|"|;|:/g, '').split(' ').filter(x => x);

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
  
  // The first forEach method removes previous keys where the current key contains the subset.
  let previousKey = null;
  phraseMap.forEach((value, key) => {
    if (value === 1) {
      return phraseMap.delete(key);
    }
    if (previousKey) {
      if (key.includes(previousKey)) {
        phraseMap.delete(previousKey);
      }
    }
    previousKey = key;
    return this;
  });

  // The second forEach method removes keys where the previous key contains the subset.
  previousKey = null;
  phraseMap.forEach((value, key) => {
    if (previousKey) {
      if (previousKey.includes(key)) {
        phraseMap.delete(key);
      }
    }
    previousKey = key;
  });

  // Populates dictionary
  phraseMap.forEach((value, key) => {
    dictionary.push([key, value]);
  });

  dictionary.sort(dictionarySorter(1));
  
  /* This for-loop trims whitespace off the phrase before populating the array of phrases with 
  up to a max of 10 phrases total. */
  for (let i = 0; i < dictionary.length && i < 10; i++) {
    phraseArray.push(dictionary[i][0].trim());
  }
  
  return phraseArray;
};

export default phraseCounter;
