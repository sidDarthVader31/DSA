/**
 * link: https://leetcode.com/problems/find-the-town-judge/
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length == 0 && n==1){
        return 1;
    }
    else if (trust.length ==0 && n>1){
        return -1;
    }
    let trustMap = []
    let invertedTrustMap = []
    for (const [first, second] of trust) {
        if(trustMap[first]!= undefined){
            trustMap[first].push(second);
        }
        else {
            trustMap[first] = [second]
        }
        if(invertedTrustMap[second]!=undefined){
            invertedTrustMap[second].push(first);
        }
        else{
            invertedTrustMap[second] =[first]
        }
    }
    for(let i =1;i<invertedTrustMap.length;i++){
        let person = invertedTrustMap[i];
        if(person && person.length == n-1 && !trustMap[i]){
            return i;
        }
    }
    return -1;

};
