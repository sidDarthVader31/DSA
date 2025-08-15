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



/**
 * tabulation method
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length;
    const cols = triangle[rows-1].length;
    if(rows == 1 && cols == 1) return triangle[0][0]
    const dp = new Array(rows+1).fill(0)
    .map(()=>{
        return new Array(cols+1).fill(Infinity)
    });

    dp[0][0]= triangle[0][0];
    dp[1][0] = dp[0][0] + triangle[1][0]
    for(let i =1;i< rows;i++){
        dp[i][0] = triangle[i][0] + dp[i-1][0]
        for(let j =1;j< triangle[i].length;j++){
            dp[i][j] = triangle[i][j] + Math.min(dp[i-1][j], dp[i-1][j-1])
        }
    }
    return Math.min(...dp[rows-1])
};



/**
 * triangle space optimized tabulation
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length;
    const cols = triangle[rows-1].length;
    const dp = [...triangle[rows-1]];

    for(let i =rows-2;i>=0;i--){
        for(let j=0;j<=i;j++){
            dp[j] = triangle[i][j] + Math.min(
                dp[j],
                dp[j+1]
            )
        }
    }
    return dp[0]
};
