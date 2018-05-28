'use strict';

import KAryTree from '../print_level_order/lib/k-ary-tree';
import printLevelOrder from '../print_level_order/print-level-order';

describe('print-level-order.test.js', () => {
  const kt = new KAryTree('A');
  kt.appendChild('B'); 
  kt.appendChild('C');
  kt.appendChild('D'); 
  kt.appendChild('E'); 
  kt.appendChild('F'); 
  kt.appendChild('G'); 
  kt.children[0].appendChild('H'); 
  kt.children[0].appendChild('I'); 
  kt.children[0].appendChild('J'); 
  kt.children[3].appendChild('K');
  kt.children[3].appendChild('L');
  kt.children[5].appendChild('M');
  kt.children[0].children[0].appendChild('N');
  kt.children[0].children[0].appendChild('O');
  kt.children[3].children[0].appendChild('P');
  kt.children[3].children[1].appendChild('Q');
  
  test('Should return a string of the K-Ary tree values in order.', () => {
    expect(printLevelOrder(kt)).toEqual('A\nBCDEFG\nHIJKLM\nNOPQ');
  });
  test('Should return a string.', () => {
    expect(typeof printLevelOrder(kt)).toEqual('string');
  });
  test('Should return undefined for an empty tree.', () => {
    const emptyKTree = new KAryTree();
    expect(printLevelOrder(emptyKTree)).toBeUndefined();
  });
});
