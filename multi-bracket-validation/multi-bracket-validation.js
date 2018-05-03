'use strict';

import Stack from './lib/stack';

const multiBracketValidation = (str) => {
  const vStack = new Stack();
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      vStack.push(str[i]);
    }
    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      const leftBracket = vStack.pop();
      if (leftBracket === '(' && str[i] !== ')') {
        return false;
      }
      if (leftBracket === '[' && str[i] !== ']') {
        return false;
      }
      if (leftBracket === '{' && str[i] !== '}') {
        return false;
      }
    }
  }

  if (vStack.storage.length > 0) {
    return false;
  }

  return true;
};

export default multiBracketValidation;
