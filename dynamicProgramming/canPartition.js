/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for(let i =0;i< nums.length;i++){
        sum = sum + nums[i]
    }
    if(sum %2 !=0)return false
    let target = sum/2;
    let memo = new Array(nums.length).fill(-1).map(()=>{
        return new Array(target+1).fill(-1)
    });
    const dp = (i, total) =>{
        //base case 
        if(target == 0)return true;
        if(i==0)  return nums[i] == total;
        //include and exclude

        if(memo[i][total]!=-1)return memo[i][total];

        let exclude = dp(i-1, total);
        let include= false;
        if(nums[i]<= total){
            include = dp(i-1, total-nums[i])
        }
        return memo[i][total] = exclude || include;
    }
    return dp(nums.length-1, target)
};
