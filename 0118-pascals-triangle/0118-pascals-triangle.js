/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    for(let i=1;i<=numRows;i++){
        let index = 0;
        let arr = [];
        while(index<i){
            if(i>2){
                arr.push(1);
                for(let j=0;j<(result[i-2].length)-1;j++){
                    arr.push(result[i-2][j]+result[i-2][j+1]);
                }
                arr.push(1);
                break;
            }else{
                arr.push(1);
            }
            index++;
        }
        result.push(arr);
    }

    return result;
};