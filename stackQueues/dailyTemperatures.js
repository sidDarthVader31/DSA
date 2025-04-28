/**
 * link: https://leetcode.com/problems/daily-temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 **/
var dailyTemperatures = function(temperatures) {
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


/**
 * @param {number[]} temperatures
 * @return {number[]}
 * optimized solution using monotonic stack
 */
var dailyTemperaturesOptimized = function(temperatures) {
    const stack = [];
    const result = [];
    for(let i =temperatures.length-1;i >=0;i--){
       const element = temperatures[i];
       while(element >= stack[stack.length-1]?.element){
        stack.pop();
       }
       if(stack.length == 0){
        result[i] =0
       }
       else{
         result[i] = stack[stack.length-1].i - i;
       }
       stack.push({i,element});
    }
    return result;
};


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = [];
    for(let i = 0;i< temperatures.length;i++){
        result[i]= 0;
    }
    for(let i = 0;i< temperatures.length;i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let index= stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};
