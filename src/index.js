function node(data = null, next = null) {
  const getData = () => data;
  const getNext = () => next;

  const setNext = (node) => (next = node);
  const setData = (info) => (data = info);

  return { getData, getNext, setNext, setData };
}

function linkedList(headNode = null) {
  const getHeadNode = () => headNode;
  const setHeadNode = (node) => (headNode = node);
  const getTailNode = () => {
    if (headNode == null) return;
    else {
      let cur = headNode;
      while (cur.getNext()) cur = cur.getNext();
      return cur;
    }
  };

  const appendNode = (node) => {
    if (headNode == null) headNode = node;
    else if (headNode.getNext() == null) headNode.setNext(node);
    else {
      let cur = headNode;
      while (cur.getNext()) {
        cur = cur.getNext();
      }
      cur.setNext(node);
    }
  };

  const prependNode = (node) => {
    if (headNode == null) headNode = node;
    else {
      node.setNext(headNode);
      headNode = node;
    }
  };

  const getSize = () => {
    let size = 0;
    if (headNode == null) return size;
    else {
      let cur = headNode;
      size++;
      while (cur.getNext()) {
        size++;
        cur = cur.getNext();
      }
      return size;
    }
  };

  const getNodeat = (index) => {
    if (headNode == null) return;
    if (index == 0) return headNode;
    else {
      let cur = headNode;
      for (let i = 0; i < index; i++) {
        cur = cur.getNext();
      }
      return cur;
    }
  };

  const pop = () => {
    if (headNode == null) return;
    else {
      let cur = headNode;
      while (cur.getNext().getNext()) cur = cur.getNext();
      cur.setNext(null);
    }
  };

  const contains = (value) => {
    if (headNode == null) return;
    else {
      let cur = headNode;
      while (cur) {
        if (cur.getData() == value) return true;
        else cur = cur.getNext();
      }
      return false;
    }
  };

  const find = (value) => {
    let index = 0;
    if (headNode == null) return;
    else {
      let cur = headNode;
      while (cur) {
        if (cur.getData() == value) return index;
        cur = cur.getNext();
        index++;
      }
    }
    return null;
  };

  const toString = () => {
    if (headNode == null) return null;
    let cur = headNode;
    let string = "";
    while (cur) {
      string += "( " + cur.getData() + " ) -> ";
      cur = cur.getNext();
    }
    string += " null";
    return string;
  };

  const insertAt = (node, index) => {
    if (index == 0) {
      node.setNext(headNode);
      headNode = node;
    } else {
      let cur = headNode;
      let i = 0;
      while (i < index - 1) {
        cur = cur.getNext();
        i++;
      }
      node.setNext(cur.getNext());
      cur.setNext(node);
    }
  };

  const removeAt = (index) => {
    if (index == 0) headNode = headNode.getNext();
    else {
      let cur = headNode;
      let i = 0;
      while (i < index - 1) {
        cur = cur.getNext();
        i++;
      }
      cur.setNext(cur.getNext().getNext());
    }
  };

  return {
    getHeadNode,
    appendNode,
    setHeadNode,
    prependNode,
    getSize,
    getTailNode,
    getNodeat,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

// const head = node("banana");

const node1 = node("orange");
const node2 = node("apple");
const node3 = node("figs");

const linkedlist1 = linkedList();

linkedlist1.appendNode(node1);
linkedlist1.prependNode(node2);
linkedlist1.appendNode(node3);

console.log(linkedlist1.getHeadNode().getNext().getData());
console.log(linkedlist1.getSize());
console.log(linkedlist1.getTailNode().getData());
console.log(linkedlist1.getNodeat(0).getData());
console.log(linkedlist1.contains("figs"));
console.log(linkedlist1.toString());

linkedlist1.pop();
console.log(linkedlist1.getSize());
console.log(linkedlist1.contains("figs"));
console.log(linkedlist1.find("figs"));
console.log(linkedlist1.toString());

const node4 = node("grapes");
linkedlist1.insertAt(node4, 2);
console.log(linkedlist1.toString());

linkedlist1.removeAt(2);
console.log(linkedlist1.toString());

// console.log(linkedlist1.getHeadNode().getData());
// linkedlist1.appendNode(node2);
