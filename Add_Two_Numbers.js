//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// Define a function to add two linked lists
var addTwoNumbers = function(l1, l2) {
//Initiaalize the carry variable to zero
let carry = 0;

//create a new ListNode with a value of zero and assign it to sum
let sum = new ListNode(0);

// Create a currentNode variable and assign it to the sum
let currentNode = sum;

//Execute while loop 
// If l1 exists, assign its value to val1; otherwise, assign zero
let val1 = l1 ? l1.val : 0;
// If l2 exists, assign its value to val2; otherwise, assign zero
let val2 = l2 ? l2.val : 0;
// Add val1, val2, and carry, and assign the result to currentSum
let currentSum = val1 + val2 + carry;
        // If currentSum is greater than or equal to 10, set carry to 1; otherwise, set it to 0
        carry = currentSum >= 10 ? 1 : 0;
}


//Return the next node of sum, which is the actual sum of l1 and l2
}