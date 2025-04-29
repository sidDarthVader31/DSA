/**
 * link: https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let stack = [-1];
    heights.push(0);

    for(let i = 0;i< heights.length;i++){
        let height = heights[i];

        while(stack.length >0 && height < heights[stack[stack.length-1]]){
            let idx = stack.pop();
            let area = heights[idx] * (i-stack[stack.length-1]-1);
            maxArea = Math.max(area, maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};
