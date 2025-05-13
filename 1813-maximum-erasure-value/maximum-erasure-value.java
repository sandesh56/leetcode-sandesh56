class Solution {
    public int maximumUniqueSubarray(int[] nums) {
        Set<Integer> visited = new HashSet();
        int i = 0, j = 0;
        int maxScore = 0;
        int sum = 0;
        while (j < nums.length) {
            if (!visited.contains(nums[j])) {
                visited.add(nums[j]);
                sum += nums[j];
                j++;
            } else {
                sum -= nums[i];
                visited.remove(nums[i]);
                i++;
            }
            maxScore = Math.max(maxScore, sum);
        }
        return maxScore;
    }
}