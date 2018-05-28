'use strict';

class KAryTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryTree(value);
    this.children.push(nodeToAppend);
  }
}

export default KAryTree;
