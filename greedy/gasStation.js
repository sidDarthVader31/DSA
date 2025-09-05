/**
 * link : https://leetcode.com/problems/gas-station/description/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let start = 0;
    let total = 0;

    for(let i = 0;i< gas.length;i++){
        tank = tank + gas[i] - cost[i];
        total = total - cost[i] + gas[i];
        if(tank <0){
            //reset 
            tank =0;
            start = i+1;
        }
    }
    return total >=0? start:-1
};
