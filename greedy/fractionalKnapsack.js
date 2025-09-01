/**
 * link : https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/2
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @returns {number}
 */

class Solution {
    fractionalKnapsack(val, wt, capacity) {
        // code here
        let valueWeight = [];
        for(let i =0;i< val.length;i++){
            valueWeight.push({
                value: val[i],
                weight: wt[i],
                ratio: val[i]/wt[i]
            });
        }
        
        valueWeight.sort((a,b)=> b.ratio-a.ratio);
        //console.log(`value weight:`, valueWeight)
        let maxValue = 0;
        
        for(const obj of valueWeight) {
            const {value, weight} = obj;
            if((capacity-weight) <0){
                let extraWeight = Math.abs(capacity-weight);
                let fraction = (capacity / weight) * value;
                maxValue = maxValue + fraction;
                capacity=0;
            }
            else{
                maxValue  = maxValue + value;
                capacity = capacity-weight;
            }
        }
        return Math.round(maxValue * 1000000)/1000000
    }
}
