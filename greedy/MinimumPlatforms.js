
//link :https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1
class Solution {
    findPlatform(arr, dep) {
        arr.sort((a,b)=> a-b);
        dep.sort((a,b)=> a-b);
        let n = arr.length;
        let i = 0, j = 0;
        let count = 0, res = 0;
        
        while (i < n && j < n) {
            if (arr[i] <= dep[j]) {
                count++;
                res = Math.max(res, count);
                i++;
            } else {
                count--;
                j++;
            }
        }
        return res;
    }
}
