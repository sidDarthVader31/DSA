/**
    link:https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length ;

    const dp = new Array(n).fill(undefined);

    const f =(i) => {
        //f(i) => no of ways i can decode a string from i - n 

        //base cases \
        if (i === n) return 1;       // reached end successfully
        if (i > n) return 0;         // overflow
        if (s[i] === '0') return 0;  // invalid


        if(dp[i]!= undefined) return dp[i];

        dp[i] = f(i+1);
        let no = Number(`${s[i]}${s[i+1]}`)
        if(no >=10 && no <=26){
            dp[i] = dp[i] + f(i+2);
        }
        return dp[i]
    }
    return f(0)
};



/**
    link:https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    // Base cases
    dp[n] = 1; // 1 way to decode empty string

    // Fill dp from end to start
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== '0') {
            // Take single digit
            dp[i] += dp[i + 1];

            // Take two digits if valid
            if (i + 1 < n) {
                const no = Number(s.substring(i, i + 2));
                if (no >= 10 && no <= 26) {
                    dp[i] += dp[i + 2];
                }
            }
        }
    }

    return dp[0]; // ways to decode whole string
};
