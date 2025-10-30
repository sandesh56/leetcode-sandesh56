/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // Two pointers. 
    let l = 0;
    let r = height.length - 1;
    let maxL = height[0];
    let maxR = height[r];

    let sum = 0;
    /**
    * min(lmax,rmax) - height[i]
    need a way to increment lmax, rmax and pointers. 
     */

    function calculateSum(i) {
        const diff = Math.min(maxL, maxR) - height[i];
        if (diff > 0) {
            sum += diff;
        }
    };
    while (l <= r) {
        maxL = Math.max(height[l], maxL);
        maxR = Math.max(height[r], maxR);
        if (maxL <= maxR) {
            calculateSum(l);
            l++;
        } else {
            calculateSum(r);
            r--;
        }
    }

    return sum;

};