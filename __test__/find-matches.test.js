'use strict';

import Node from '../breadth-first-traversal/lib/node';
import BinaryTree from '../breadth-first-traversal/lib/binary-tree';
import findMatches from '../find_matches/find-matches';

describe('find-matches.test.js', () => {
  describe('findMatches', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const tree = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = two;
    two.right = four;
    three.left = two;
    three.right = five;
    const resultStack = findMatches(tree.root);

    // test('Should return a stack of the nodes whose values match the second input.', () => {
    //   expect(resultStack).toEqual(2);
    // });
    test('Should return an object (stack).', () => {
      expect(typeof resultStack).toEqual('object');
    });
    test('Should return undefined for an empty tree.', () => {
      const emptyTree = new BinaryTree();
      expect(findMatches(emptyTree.root)).toBeUndefined();
    });
  });
});
