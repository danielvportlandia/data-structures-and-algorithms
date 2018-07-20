'use strict';

const dupRemover = (list) => {
  if (!list.head) {
    throw new Error('Invalid input, input must be a linked list.');
  }
  if (!list.head.next) {
    return list;
  }

  let cn1 = list.head;
  let cn2 = null;
  let cn3 = null;
  while (cn1) {
    cn2 = cn1;
    cn3 = cn1.next;
    while (cn3) {
      if (cn3.value === cn1.value) {
        cn2.next = cn3.next;
      }
      cn2 = cn2.next;
      cn3 = cn2.next;
    }
  }

  return list;
}

export default dupRemover;
