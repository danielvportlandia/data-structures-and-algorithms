'use strict';

import Animal from '../fifo-animal-shelter/animal';
import AnimalShelter from '../fifo-animal-shelter/fifo-animal-shelter';

describe('fifo-animal-shelter.test.js', () => {
  describe('Animal', () => {
    const testCat1 = new Animal('cat');
    const testDog1 = new Animal('dog');
    test('#constructor, should pass parameter as type.', () => {
      expect(testCat1.type).toEqual('cat');
    });
    test('#constructor, should set default order to null.', () => {
      expect(testDog1.order).toBeFalsy();
    });
  });
  
  describe('AnimalShelter', () => {
    const testShelter = new AnimalShelter();
    test('#Enqueue, should insert cat types into the cat array.', () => {
      testShelter.enqueue(new Animal('cat'));
      expect(testShelter.catArray).toHaveLength(1);
    });
    test('#Enqueue, should insert dog types into the dog array.', () => {
      testShelter.enqueue(new Animal('dog'));
      expect(testShelter.dogArray).toHaveLength(1);
    });
    test('#Enqueue, should always increase the shelter counter.', () => {
      testShelter.enqueue(new Animal('cat'));
      testShelter.enqueue(new Animal('dog'));
      expect(testShelter.counter).toEqual(4);
    });
    test('#dequeue, should return first cat in catArray if preferred.', () => {
      const firstCat = testShelter.catArray[0];
      const catLength = testShelter.catArray.length - 1;
      expect(testShelter.dequeue('cat')).toEqual(firstCat);
      expect(testShelter.catArray).toHaveLength(catLength);
    });
    test('#dequeue, should return first dog in dogArray if preferred.', () => {
      const firstDog = testShelter.dogArray[0];
      const dogLength = testShelter.dogArray.length - 1;
      expect(testShelter.dequeue('dog')).toEqual(firstDog);
      expect(testShelter.dogArray).toHaveLength(dogLength);
    });
    test('#dequeue, should return the longest waiting animal if no preferrence.', () => {
      const adoptaKitty = testShelter.dequeue();
      expect(adoptaKitty.order).toBeLessThan(testShelter.dogArray[0].order);
    });
  });
});
