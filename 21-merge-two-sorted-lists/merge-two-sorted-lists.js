/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    //iterate over list nodes.
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1!== null && list2
        !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        //advancing current;
        current = current.next;
    }

    //If there is remaining nodes
    current.next = list1 || list2;
    return dummy.next;
};