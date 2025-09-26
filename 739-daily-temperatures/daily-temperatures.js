/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    /**
    result = [0,0,1,1,]
    ** [75,62,61,65,66,78]
[0,1,2]
    Rresult -->
    Stack --[]
    // principle --> traverse from right to left and look for 
     */

    let result = new Array(temperatures.length).fill(0);
    let record = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        /**
        * pop all the colder days. Equal is also not a warmer than the previous.
        * Lesson learned: Since record is changing don't define top as a constants.
         */
        while (record.length > 0 && temperatures[i] >= temperatures[record[record.length - 1]]) {
            record.pop();
        }
        if (record.length > 0) {
            const prev = record[record.length - 1];
            result[i] = prev - i;
        }
        record.push(i);

    }
    return result;
};