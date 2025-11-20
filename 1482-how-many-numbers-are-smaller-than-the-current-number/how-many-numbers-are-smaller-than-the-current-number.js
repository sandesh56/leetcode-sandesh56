/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    //optimized with map. 

    const sortedArr = [...nums].sort((a, b) => a - b);

    const map = new Map(); //tracks the minimum elements ahead of it.

    for (let i = 0; i < sortedArr.length; i++) {
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], i);
        }
    };


    const result = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        result[i] = map.get(nums[i]);
    }

    return result;
};