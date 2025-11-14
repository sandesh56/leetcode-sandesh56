/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // patterns 1 2 3 4 5 6 n=0 (n, n+1), (n+2, n+3), (n+4, n+5), 
    // while n is even swap. 0-->1-->

    let dummy = new ListNode(5);
    dummy.next = head;

    let curr = dummy;

    while(curr.next!==null && curr.next.next!==null){
        let first = curr.next;
        let second = curr.next.next;

        first.next = second.next; // should reference the third one. 
        second.next = first;
        curr.next = second; // just point to second.

        curr = first;
    }

    return dummy.next;

};