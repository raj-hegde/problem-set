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

//console.log(list)

// Deleting a node

if (list.head === null){
  return null;
}

let current = list.head;
let previous = null;

while (current !== null) {
  if(current.data === 5) {
    node1.next = node3
    break
  }
  else {
    current = current.next
  }
}

//console.log(list)

// Adding a new node at the head

let node5 = new ListNode(15);
node5.next = list.head;
list.head = node5;

let curr = list.head;
let prev = null;

// Adding a new node in between

let node4 = new ListNode(10);
node4.next = node3
node1.next = node4

//console.log(list);

// Adding a new node at the end

let node6 = new ListNode(18);
node6.next = null;
node3.next = node6;

//console.log(list);

// Getting the length of the linked list

function getlen() {
    let cnt = 0;
    let curr = list.head;

    while(curr !== null) {
        cnt++;
        curr = curr.next;
    }
    return cnt;
}


console.log(getlen());

// Geeting the middle of the Linked list

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

console.log(middleNode(list.head));





