'use strict';

import multiBracketValidation from '../multi-bracket-validation/multi-bracket-validation';

describe('multi-bracket-validation.test.js', () => {
  describe('multiBracketValidation', () => {
    const testString1 = '(){}[]';
    const testString2 = '({)}[]';
    const testString3 = '(wor[d{s}])';
    const testString4 = '((){}[]';
    test('#multiBracketValidation, return true on balanced string of only brackets.', () => {
      expect(multiBracketValidation(testString1)).toBeTruthy();
    });
    test('#multiBracketValidation, return false on unbalanced string of only brackets.', () => {
      expect(multiBracketValidation(testString2)).toBeFalsy();
    });
    test('#multiBracketValidation, return true on balanced string of brackets and other characters.', () => {
      expect(multiBracketValidation(testString3)).toBeTruthy();
    });
    test('#multiBracketValidation, return false if different number of left-sided and right-sided brackets', () => {
      expect(multiBracketValidation(testString4)).toBeFalsy();
    });
  });
});

