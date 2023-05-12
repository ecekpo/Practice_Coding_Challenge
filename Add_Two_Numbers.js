//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      let l1Val = l1 !== null ? l1.val : 0;
      let l2Val = l2 !== null ? l2.val : 0;
      let sum = l1Val + l2Val + carry;
      carry = Math.floor(sum / 10);
  
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      let l1Next = l1 !== null ? l1.next : null;
      let l2Next = l2 !== null ? l2.next : null;
      l1 = l1Next;
      l2 = l2Next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  }
  
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  console.log(addTwoNumbers(l1, l2));
  