/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    //pattern --> 
    /**
    * length value.
    * [1,2,3,4,5] --> for every length it repeats () k=9 9%5 --> 4 (we can save some computation here);
    *
    * come back to this. 
     */
    if (!head || !head?.next || k===0) return head;

    let n = 1, tail = head;

    while (tail.next) {
        tail = tail.next;
        n++;
    }



    //normalizing
    k = k % n;

    if (k === 0) return head;


    let curr = head;

    for (let i = 1; i <= n - k - 1; i++) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null; // this is tail now. 

    tail.next = head;

    return newHead;


};