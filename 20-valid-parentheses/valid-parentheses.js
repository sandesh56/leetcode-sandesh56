/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = { "(": ")", "{": "}", "[": ']' }
    const stack = [];

    for (let i of s) {
        if (map[i]) stack.push(i);
        else {
            const char = stack.pop();
            if (map[char] !== i) {
                return false;
            }
        }

    }

    return stack.length === 0;
};