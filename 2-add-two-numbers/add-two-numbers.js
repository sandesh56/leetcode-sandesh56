/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while(l1!==null || l2!== null){
      let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = 0; //reset carry. 

      if(sum/10>=1){ 
        carry = Math.floor(sum/10);
        current.next = new ListNode(Math.floor(sum%10))
      }else{
        current.next = new ListNode(sum);
      }
      if(l1!==null){
        l1 = l1.next;
      }
      if(l2!==null){
        l2 = l2.next;
      }
      current = current.next;
    }

    //check for last carry.
    console.log(carry);
    if(carry>0){
        current.next = new ListNode(carry);
    }

    return dummy.next;
    
};