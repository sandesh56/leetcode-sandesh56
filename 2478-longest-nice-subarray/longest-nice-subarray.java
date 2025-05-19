class Solution {
    public int longestNiceSubarray(int[] nums) {
        int current_sum = 0;
        int xor_sum = 0;
        int i = 0, j = 0;
        int max = 0;

        while (j < nums.length) {
            current_sum += nums[j]; // 59
            xor_sum ^= nums[j]; // 59
            if (current_sum != xor_sum) {
                // j= 1, 
                max = Math.max(max, j - i);
                current_sum -= nums[i]; // 3
                xor_sum ^= nums[i]; // 3
                i++; // 1
            }
            j++; //4
        }
        return j-i>max? j-i : max;
    }
}

/**
Failed
[001000000101110100111001000000]
[100100010100000101101001011011]
[000000000000000000000000010000]
[000000000000000000100000000000]
[000000001000000000000000000000]
 */