/**
 * link : https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0).map(()=>{
        return new Array(n+1).fill(undefined)
    });

    const f= (i, next) => {
        // f(i, next) => longest increasing subsequence from 0-i when next is next element 
        if(i<0) return 0;

        if(dp[i][next+1]!= undefined) return dp[i][next+1];
        
        //either pick or skil 
        let skip = f(i-1, next);
        let pick = 0;

        if(next == -1 || nums[i]< nums[next]){
            //pick the element 
            pick = f(i-1, i)+1;
        }
        return dp[i][next+1] = Math.max(pick, skip);
    }

    return f(n-1, -1)
};



/**
 * tabulation approach
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n+1).fill(0).map(()=>{
        return new Array(n+1).fill(0);
    });

    //dp[i][prev] -> lis from i to n where prev is the last picked  element's index

    for(let i = n-1;i>=0;i--){
        for(let j =i-1;j>=-1;j--){
            let skip = dp[i+1][j+1];
            let pick = 0;
            if(j==-1 || nums[i]> nums[j]){
                pick = dp[i+1][i+1]+1;
            }
            dp[i][j+1] = Math.max(skip, pick)
        }
    }
    return dp[0][0];
};




/* * with binary search
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;

    let temp = [];

    temp.push(nums[0])

    for(let i =1;i<n;i++) {
        if(nums[i]> temp[temp.length-1]){
            temp.push(nums[i])
        }
        else{
            let left = 0;
            let right = temp.length-1 
            let index = lowerBound(left, right, temp, nums[i]);
            temp[index] = nums[i]
        }
    }
    return temp.length
};

const lowerBound = (left, right, arr, target) => {

    while(left < right) {
        let mid = Math.floor((left + right) / 2);
       if ( arr[mid] < target){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    return left;
}
