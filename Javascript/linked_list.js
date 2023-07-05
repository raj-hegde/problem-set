class ListNode{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(7)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

console.log(list)

if (list.head === null){
  return null;
}

let current = list.head;
let previous = null;

while (current !== null){
  if(current.data === 5){
    node1.next = node3
    break
  }
  else {
    current = current.next
  }
}

console.log(list)


