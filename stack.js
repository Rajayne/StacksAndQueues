/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (this.first) {
      newNode.next = this.first;
      this.first = newNode;
      this.size += 1;
      return;
    }
    this.first = newNode;
    this.last = newNode;
    this.size += 1;
    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let firstNode = this.first;
    this.first = firstNode.next;
    this.size -= 1;
    return firstNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    let firstNode = this.first;
    return firstNode.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0 || !this.first || !this.last) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
