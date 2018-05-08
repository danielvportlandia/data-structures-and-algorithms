'use strict';

import Node from '../breadth-first-traversal/lib/node';
import BinaryTree from '../breadth-first-traversal/lib/binary-tree';
import breadthFirstTraversal from '../breadth-first-traversal/breadth-first-traversal';

describe('breadth-first-traversal.test.js', () => {
  describe('breadthFirstTraversal', () => {
    const two = new Node(2);
    const seven = new Node(7);
    const five = new Node(5);
    const twentyone = new Node(21);
    const six = new Node(6);
    const fiftyone = new Node(51);
    const eleven = new Node(11);
    const nine = new Node(9);
    const four = new Node(4);
    const tree = new BinaryTree(two);
    two.left = seven;
    two.right = five;
    seven.left = twentyone;
    seven.right = six;
    six.left = fiftyone;
    six.right = eleven;
    five.right = nine;
    nine.left = four;

    test('Should return a string of the visited notes by depth.', () => {
      expect(breadthFirstTraversal(tree.root)).toEqual('2,7,5,21,6,9,51,11,4');
    });
    test('Should return a string.', () => {
      expect(typeof breadthFirstTraversal(tree.root)).toEqual('string');
    });
    test('Should return undefined for an empty tree.', () => {
      const emptyTree = new BinaryTree();
      expect(breadthFirstTraversal(emptyTree.root)).toBeUndefined();
    });
  });
});
