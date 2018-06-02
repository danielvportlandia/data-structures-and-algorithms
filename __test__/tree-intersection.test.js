'use strict';

import Node from '../tree_intersection/lib/node';
import BinaryTree from '../tree_intersection/lib/binary-tree';
import treeIntersection from '../tree_intersection/tree-intersection';

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

describe('tree-intersection.test.js', () => {
  describe('treeIntersection()', () => {
    test('Should return an array of the values that appear in both trees.', () => {
      const test1 = treeIntersection(btOne, btTwo);
      const testArray = [];
      const test1Keys = test1.keys();
      for (const key of test1Keys) { // eslint-disable-line
        testArray.push(key);
      }
      expect(typeof test1).toEqual('object');
      expect(testArray).toEqual([2, 5, 6]);
    });
    test('Should throw new Error if one of the inputs is invalid.', () => {
      expect(() => treeIntersection(123456, btTwo)).toThrowError('Invalid input(s).');
    });
    // test('Should traverse the tree in an "in-order" fashinon.', () => {
    //   expect(fizzBuzzTree(fbTree)).toEqual('1,Fizz,Fizz,Buzz,Buzz,2,FizzBuzz');
    // });
  });
});
