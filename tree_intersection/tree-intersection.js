'use strict';
        
const hashmap = new Map();
const hashmap2 = new Map();

const comparisonTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (hashmap.has(rootNode.value)) {
    hashmap2.set(rootNode.value, false);
  }
  comparisonTraversal(rootNode.left);
  comparisonTraversal(rootNode.right);
  return hashmap2;
};
        
const insertionTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  hashmap.set(rootNode.value, false);
  insertionTraversal(rootNode.left);
  insertionTraversal(rootNode.right);
  return hashmap;
};

const treeIntersection = (bt1, bt2) => {
  if (typeof bt1 !== 'object' || typeof bt2 !== 'object') {
    throw new Error('Invalid input(s).');
  }
  if (!bt1.root || !bt2.root) {
    throw new Error('Inputs cannot be empty binary trees.');
  }
  const currentNode = bt1.root;
  const currentNode2 = bt2.root;
  insertionTraversal(currentNode);
  comparisonTraversal(currentNode2);
  return hashmap2;
};

export default treeIntersection;
