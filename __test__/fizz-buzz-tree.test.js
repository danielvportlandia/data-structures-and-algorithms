'use strict';

import Node from '../fizz-buzz-tree/lib/node';
import BinaryTree from '../fizz-buzz-tree/lib/binary-tree';
import fizzBuzzTree from '../fizz-buzz-tree/fizz-buzz-tree';

const six = new Node(6);
const three = new Node(3);
const ten = new Node(10);
const one = new Node(1);
const two = new Node(2);
const five = new Node(5);
const fifteen = new Node(15);
const fbTree = new BinaryTree(one);
one.left = three;
one.right = five;
three.left = six;
three.right = ten;
five.left = two;
five.right = fifteen;

describe('fizz-buzz-tree.test.js', () => {
  describe('fizzBuzzTree', () => {
    test('Should return undefined for an empty tree.', () => {
      const emptyTree = new BinaryTree();
      expect(fizzBuzzTree(emptyTree)).toBeUndefined();
    });
    test('Should traverse the tree in an "in-order" fashinon.', () => {
      expect(fizzBuzzTree(fbTree)).toEqual('1,Fizz,Fizz,Buzz,Buzz,2,FizzBuzz');
    });
    test('Should change numbers divisible by 3 & 5 to "FizzBuzz".', () => {
      expect(fbTree.root.right.right.value).toEqual('FizzBuzz');
    });
  });
});
