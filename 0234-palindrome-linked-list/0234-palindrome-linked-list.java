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
    public boolean isPalindrome(ListNode head) {
       ListNode reverse = null;
        
       ListNode current = head;
        
        while(current!=null){
            ListNode temp = new ListNode(current.val);
            temp.next = reverse;
            reverse = temp;
            current = current.next;
        }
        
        while(head!=null && reverse!=null){
            if(head.val != reverse.val) return false;
            head = head.next;
            reverse = reverse.next;
        }
        
        return true;
    }
}