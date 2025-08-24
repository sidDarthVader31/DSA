/**
 * link : https://leetcode.com/problems/wildcard-matching/description/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n1 = s.length;
    const n2 = p.length;

    const dp  = new Array(n1+1).fill(0).map(()=>{
        return new Array(n2+1).fill(undefined)
    })
    const f = (i,j) => {
        if(j>=n2) return i==n1;
        if(dp[i][j]!= undefined) return dp[i][j];
        if(p[j]=='*'){
            //can match all sequence of characters 
            if(f(i, j+1)) return dp[i][j]= true;

            if(i<n1 &&  f(i+1, j)) return  dp[i][j]=true;
            return  dp[i][j]=false;
        }
        else{
            if( i<n1 &&(p[j]=='?' || s[i]==p[j]) ){
                return  dp[i][j]=f(i+1, j+1);
            }
            else{
                return  dp[i][j]=false;
            } 
        }
    }
    return f(0,0)
 }; 
