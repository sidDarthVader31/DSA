/**
 * link : https://leetcode.com/problems/restore-ip-addresses/
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let output = [];
    if (s.length < 4) return [];

    const dfs = (start, parts) => {
        if(parts.length == 4){
            if(start == s.length){
                output.push(parts.join('.'))
            }
            return;
        }
        for(let len = 1; len <=3;len++){
            if (start + len > s.length) break;
            let nos = s.substring(start, start+len);
            let no = Number(nos);

            if(nos.length >1 && nos[0]=='0')continue;
            if(no >255) continue;
            parts.push(nos);
            dfs(start+len, parts );

            parts.pop();
        }
    }
    dfs(0, [])
    return output
};
