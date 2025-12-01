/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const stack = [];
    let prevTime = 0; //tracks previous time. 
    const result = new Array(n).fill(0);
    for (let log of logs) {
        const sp = log.split(":"); //breaks strings
        if (sp[1] === 'start') {
            //checks if stack actually has elements or not. 
            if (stack.length > 0) {
                const pt = Number(sp[2]) - prevTime; // calculates the current executing time of previous function though not ended. 
                result[stack[stack.length - 1]] += pt //adds time to the result. 
            }
            stack.push(Number(sp[0])); // push curren id to stack since it is start. 
            prevTime = Number(sp[2]); // prevTime is just the current start time. 
        } else {
            result[Number(sp[0])] += Number(sp[2]) - prevTime + 1; // calculates and updates total execution time. 
            stack.pop();
            prevTime = Number(sp[2]) + 1; // If function ends on certain timestamp, then start time for subsequent function is always +1. 
        }
    }

    return result;
};