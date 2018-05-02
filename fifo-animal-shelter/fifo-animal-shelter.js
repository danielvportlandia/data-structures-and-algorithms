'use strict';

class AnimalShelter {
  constructor() {
    this.catArray = [];
    this.dogArray = [];
    this.counter = 0;
  }

  enqueue(animal) {
    this.counter += 1;
    if (animal.type === 'cat') {
      this.catArray.push(animal);
      this.catArray[this.catArray.length - 1].order = this.counter;
      return;
    }
    this.dogArray.push(animal);
    this.dogArray[this.dogArray.length - 1].order = this.counter;
  }
  
  dequeue(pref) {
    if (pref === 'cat') {
      return this.catArray.shift();
    } else if (pref === 'dog') {
      return this.dogArray.shift();
    } 
    if (this.catArray[0].order < this.dogArray[0].order) {
      return this.catArray.shift();
    }
    return this.dogArray.shift();
  }
}

export default AnimalShelter;
