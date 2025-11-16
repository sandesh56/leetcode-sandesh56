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
var deleteDuplicates = function (head) {
    //curr.val !== curr.next.val
    // using map count the frequency. 

    const map = {};
    let curr = head;
    while (curr) {
        if (map[curr.val]) {
            map[curr.val] += 1;
        } else {
            map[curr.val] = 1;
        }
        curr = curr.next;
    }

    let dummy = new ListNode(0);
    let cur = dummy
    console.log(map)
    while(head){
      if(map[head.val]===1){
        cur.next = new ListNode(head.val);
        cur = cur.next;
      }
      head = head.next;
    }

    return dummy.next;
};