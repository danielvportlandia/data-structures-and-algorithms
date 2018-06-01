'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
one.left = two;
one.right = three;
three.left = six;
two.left = four;
two.right = five;
const btOne = new BinaryTree(one);

const sevenTwo = new Node(7);
const twoTwo = new Node(2);
const eightTwo = new Node(8);
const fiveTwo = new Node(5);
const sixTwo = new Node(6);
sevenTwo.left = eightTwo;
sevenTwo.right = twoTwo;
twoTwo.left = fiveTwo;
twoTwo.right = sixTwo;
const btTwo = new BinaryTree(sevenTwo);
        
const solutionArray = [];
let counter = 100;
const hashmap = new Map();

const comparisonTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (hashmap.get(rootNode.value)) {
    solutionArray.push(rootNode.value);
  }
  comparisonTraversal(rootNode.left);
  comparisonTraversal(rootNode.right);
  console.log(solutionArray);
  return solutionArray;
};
        
const insertionTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  counter += 1;
  hashmap.set(counter, rootNode.value);
  insertionTraversal(rootNode.left);
  insertionTraversal(rootNode.right);
  console.log(hashmap);
  return hashmap;
};

const treeIntersection = (bt1, bt2) => {
  const comparisonArray = [];
  const currentNode = bt1.root;
  const currentNode2 = bt2.root;
  const hm = insertionTraversal(currentNode);
  hm.forEach(item => comparisonArray.push(item));

  console.log(hm);
  const solution = comparisonTraversal(currentNode2);
  console.log(solution);
  return solution;
};

treeIntersection(btOne, btTwo);

export default treeIntersection;
