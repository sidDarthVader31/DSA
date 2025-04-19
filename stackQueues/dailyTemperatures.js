/**
 * link: https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // const stack = [];
    // for(let i =0;i< temperatures.length;i++){
    //     while(temperatures[i]<= stack[stack.length-1]){
    //         stack.pop();
    //     }
    //     stack.push(temperatures[i])
    // }
    // return stack;

const output = []
    for(let i = 0;i< temperatures.length;i++){
        let count = 0;
        for(let j =i+1;j< temperatures.length;j++){
            if(temperatures[j] > temperatures[i]){
                count = j-i;
                break;
            }
        }
        output.push(count);
    }
    return output;
};
