
/**
link : https://leetcode.com/problems/stickers-to-spell-word/
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    const n = target.length;
    const m = 1 << n;  // total possible states of target string
    const dp = Array(m).fill(Infinity);
    dp[0] = 0;  // base case: no characters needed

    // Preprocess stickers: count characters in each
    const counts = stickers.map(s => {
        const cnt = new Array(26).fill(0);
        for (let ch of s) cnt[ch.charCodeAt(0) - 97]++;
        return cnt;
    });

    // For every possible state of "formed target"
    for (let state = 0; state < m; state++) {
        if (dp[state] === Infinity) continue;

        // Try using each sticker
        for (let cnt of counts) {
            let newState = state;
            const available = [...cnt];

            // Try to fill more characters of target
            for (let i = 0; i < n; i++) {
                if (((newState >> i) & 1) === 1) continue; // already filled this character

                let ch = target[i].charCodeAt(0) - 97;
                if (available[ch] > 0) {
                    available[ch]--;
                    newState |= (1 << i); // mark this char as filled
                }
            }
            dp[newState] = Math.min(dp[newState], dp[state] + 1);
        }
    }

    return dp[m - 1] === Infinity ? -1 : dp[m - 1];
};
