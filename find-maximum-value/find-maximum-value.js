'use strict';

let tempMaxValue = null;
const preOrderTraversal = (rootNode) => {
  // left - root - right
  if (!rootNode) {
    return undefined;
  }
  if (rootNode.value > tempMaxValue) {
    tempMaxValue = rootNode.value;
  }

  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return tempMaxValue;
};

const findMaximumValue = (tree) => {
  if (!tree) {
    return undefined;
  }
  if (!tree.root) {
    return undefined;
  }
  return preOrderTraversal(tree.root);
};

export default findMaximumValue;
