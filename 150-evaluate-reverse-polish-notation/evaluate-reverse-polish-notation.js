/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    //
    const operators = ["+", "-", "*", "/"];
    const stack = [];

    function compute(a, b, op) {
        if (op === "+") {
            return Number(a) + Number(b);
        } else if (op === '-') {
            return Number(a) - Number(b);
        } else if (op === '*') {
            return Number(a) * Number(b);
        }
        return Math.trunc(Number(a) / Number(b));
    }

    for (let i = 0; i < tokens.length; i++) {
        if (!operators.includes(tokens[i])) stack.push(tokens[i]);
        else {
            const first = stack.pop();
            const second = stack.pop();
            const comp = compute(second, first, tokens[i]);
            stack.push(comp);
        }
    }

    return Number(stack[0]);
};