/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    const track = new Array(nums.length).fill(1);
    for(let i of nums){
        track[i-1] = -1;
    }

    const result = [];

    for(let i=0; i<track.length;i++){
        if(track[i]>0){
            result.push(i+1)
        }
    }

    return result;
};