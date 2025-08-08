/**
 * link : https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length;
    const dp = new Map()


    const f= (i,j) =>{
        //base cases 
        if(j<0 || j>= triangle[i].length) return Infinity;
        if(i==0 && j ==0) return triangle[0][0];

        const key = `${i}-${j}`
        if(dp.has(key)) return dp.get(key)

        const min = triangle[i][j] + Math.min(
            f(i-1,j),
            f(i-1, j-1)
        );
        dp.set(key,min);
        return min;
    }

    let min=Infinity;
    for(let i = 0;i< triangle[rows-1].length;i++){
        min= Math.min(min, f(rows-1,i));
    }
    return min;
};
