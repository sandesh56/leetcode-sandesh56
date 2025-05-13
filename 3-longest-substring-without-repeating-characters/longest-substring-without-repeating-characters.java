class Solution {
    public int lengthOfLongestSubstring(String s) {

        Set<Character> visited = new HashSet();
        int len = s.length();
        int i = 0, j = 0;
        int maxLen = 0;

        while (j < len) {
            if (!visited.contains(s.charAt(j))) {
                visited.add(s.charAt(j));
                j++;
                maxLen = Math.max(maxLen, j - i);
            } else {
                visited.remove(s.charAt(i));
                i++;
            }
        }
        return maxLen;
    }
}