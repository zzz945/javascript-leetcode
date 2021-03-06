/**
Intuitively thinking, loop the two link lists to the ends, do the summation and keep track of the carry. 
That's done. The time complexcity is 0(n) since there is just one loop with n equals the size of the larger 
list. The space complexcity is also 0(n) on cost of the result list. 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let p1 = l1
  let p2 = l2
       
  let carry = 0
  let ret = null
  let cur = null
  
  while(p1 || p2 || carry) {
      let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry
      if (sum >= 10) {
          carry = 1
          sum -= 10
      } else {
          carry = 0
      }
      
      const prev = cur
      cur = new ListNode(sum, null)
      if (prev) prev.next = cur
      
      if (!ret) ret = cur
      
      if (p1) p1 = p1.next
      if (p2) p2 = p2.next
  }
  
  return ret
};

const n1 = new ListNode(3, new ListNode(4, new ListNode(2)))
const n2 = new ListNode(4, new ListNode(6, new ListNode(5)))

const ret = addTwoNumbers(n1, n2)
console.log(ret)