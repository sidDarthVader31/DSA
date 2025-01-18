/**
 * link: https://leetcode.com/problems/range-sum-query-immutable/
 **/ 


class NumArray {
    prefixNum: number[];
    constructor(nums: number[]) {
        this.prefixNum = [];
        this.calcPrefixSum(nums);
    }

    sumRange(left: number, right: number): number {
        if(left == 0){
            return this.prefixNum[right]
        }
        else{
            return this.prefixNum[right] - this.prefixNum[left-1]; //include left as well
        }
    }
    calcPrefixSum(nums: number[]){
        let sum = 0;
        for(let i = 0;i< nums.length;i++){
            sum = sum + nums[i];
            this.prefixNum[i] = sum;
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
