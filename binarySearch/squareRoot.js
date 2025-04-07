/**
 * link: https://leetcode.com/problems/sqrtx/description/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1;
    let right = x;
    while(left<= right){
        if((mid*mid) == x){
            return mid;
        }
        else if((mid*mid) >x){
            right = mid-1;
        }
        else{
            left = mid+1;
        }        
    }
    return right
};
