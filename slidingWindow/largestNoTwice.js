/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = 0;
    let max= nums[0];
    let length = nums.length;
    for(let i = 1;i< nums.length;i++){
        if(nums[i] > max){
            maxIndex = i;
            max = nums[i];
        }
    }
    console.log(`max:${max}, index:${maxIndex}`)
    output = nums.sort((a,b) =>{
        return a-b;
    })
    console.log(`output:`, output)
    return nums[length-1] >= (2*nums[length-2]) ? maxIndex: -1;
};
