/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let count = 0;
    let left = right = 0;

    for (let i of s) {
        if (i === '(') left += 1;
        else right += 1;

        if (left === right) {
            count = Math.max(count, right + left);
        }

        if (right > left) {
            left = 0;
            right = 0;
        }
    }

    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')') right += 1;
        else left += 1;

        if (left === right) {
            count = Math.max(count, right + left);
        }

        if (left > right) {
            left = 0;
            right = 0;
        }
    }

    return count;
};