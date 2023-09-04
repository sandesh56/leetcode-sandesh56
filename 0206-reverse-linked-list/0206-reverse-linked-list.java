/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        
        ListNode prevNode = null;
        
        
        while(head != null){
            ListNode current = new ListNode(head.val);
            current.next = prevNode;
            prevNode = current;
            head = head.next;
        }
        
        return prevNode;
        
         
    }
}