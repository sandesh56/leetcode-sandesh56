/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0, j = matrix.length - 1;


    while (i <= j) {
        const mid = i + Math.floor((j - i) / 2);
        const innerArr = matrix[mid];
        const len = innerArr.length;
        if (innerArr[0] === target || innerArr[len - 1] === target) return true;

        else if (innerArr[0] < target && innerArr[len - 1] > target) {
            let k = 0, l = len - 1;
            while (k <= l) {
                const mid = k + Math.floor((l - k) / 2);

                if (innerArr[mid] === target) return true;


                else if (innerArr[mid] > target) {
                    l = mid - 1;
                } else {
                    k = mid + 1;
                }
            }
            return false;
        }

        else if (innerArr[0] > target) {
            j = mid -1
        } else {
            i = mid + 1;
        }


    }

    return false;
};