/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const stack = [];
    let prevTime = 0;
    const result = new Array(n).fill(0);
    for (let log of logs) {
        const sp = log.split(":");
        if (sp[1] === 'start') {
            if (stack.length > 0) {
                const pt = Number(sp[2]) - prevTime;
                result[stack[stack.length - 1]] += pt
            }
            stack.push(Number(sp[0]));
            prevTime = Number(sp[2]);
        } else {
            result[Number(sp[0])] += Number(sp[2]) - prevTime + 1;
            stack.pop();
            prevTime = Number(sp[2]) + 1;
        }
    }

    return result;
};