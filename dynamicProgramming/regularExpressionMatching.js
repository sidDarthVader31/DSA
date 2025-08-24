/**
 * link :https://leetcode.com/problems/regular-expression-matching/description/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n1 = s.length;
    const n2 = p.length;
    const f = (i,j) => {

        if(j==n2) return i==n1;
          const hasStar = (j + 1 < n2 && p[j+1] === '*');
        if(hasStar){
            if(f(i, j+2)) return true;//
            if (i < n1 && (p[j] === s[i] || p[j] === '.')) {
                if (f(i+1, j)) return true;
            }
            return false
        }
        else {
            if(p[j]=='.' || p[j]== s[i]){
                return f(i+1, j+1);
            }
            return false;
        }
    }
    return f(0,0)
 }; 
