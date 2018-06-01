'use strict';

// Time O(n) where n is the number of nodes
// Space - (H) where H is the height of the tree
let preOrderStr = '';
const preOrderTraversal = (rootNode) => {
  // root - left - right
  if (!rootNode) {
    return undefined;
  }
  // Here, I am in root
  preOrderStr += `,${rootNode.value}`;
  preOrderTraversal(rootNode.left); // rootNode.left is a subtree
  preOrderTraversal(rootNode.right);
  return preOrderStr.replace(/^,/, '');
};

// Time O(n) where n is the number of nodes
// Space - (H) where H is the height of the tree
let postOrderStr = '';
const postOrderTraversal = (rootNode) => {
  // left - right - root
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  postOrderStr += `,${rootNode.value}`;
  return postOrderStr.replace(/^,/, '');
};

let inOrderStr = '';
const inOrderTraversal = (rootNode) => {
  // left - root - right=
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  inOrderStr += `,${rootNode.value}`;
  inOrderTraversal(rootNode.right);
  return inOrderStr.replace(/^,/, '');
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
