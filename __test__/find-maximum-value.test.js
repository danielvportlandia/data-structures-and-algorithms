'use strict';

import Node from '../find-maximum-value/lib/node';
import BinaryTree from '../find-maximum-value/lib/binary-tree';
import findMaximumValue from '../find-maximum-value/find-maximum-value';

const two = new Node(2);
const seven = new Node(7);
const three = new Node(3);
const five = new Node(5);
const six = new Node(6);
const one = new Node(1);
const four = new Node(4);
const nine = new Node(9);
const eleven = new Node(11);
const maxTree = new BinaryTree(two);
two.left = seven;
two.right = five;
seven.left = three;
seven.right = six;
six.left = one;
six.right = eleven;
five.right = nine;
nine.left = four;

describe('find-maximum-value.test.js', () => {
  describe('findMaximumValue', () => {
    test('Should return undefined for an empty tree.', () => {
      const emptyTree = new BinaryTree();
      expect(findMaximumValue(emptyTree)).toBeUndefined();
    });
    test('Should return the highest value integer value in the binary tree.', () => {
      expect(findMaximumValue(maxTree)).toEqual(11);
    });
    test('Should return undefined if no parameter passed to method.', () => {
      expect(findMaximumValue()).toBeUndefined();
    });
  });
});
