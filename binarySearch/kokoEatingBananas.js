/**
 * link: https://leetcode.com/problems/koko-eating-bananas/
 * @param {number[]} piles
 *
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles)
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(canEatFeasibly(piles, h, mid)){
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    return left;
};

const canEatFeasibly = function(piles,h, val) {
    let hours = 0;
    for(const banana of piles){
        hours = hours+ Math.ceil(banana/val)
    }
    return hours <=h;
}
