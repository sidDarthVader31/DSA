/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let midRow = matrix[mid];
        if(target > midRow[midRow.length-1]){
            //need to go down 
            left = mid+1;
        }
        else if(target < midRow[0]){
            //need to go up 
            right = mid-1;
        }
        else {
            //do binary search on midrow 
            let l = 0;
            let r = midRow.length-1;
            while(l<=r){
                let m = Math.floor((l+r)/2);
                if(midRow[m] == target){
                    return true;
                }
                else if(target > midRow[m]){
                    l = m+1;
                }
                else{
                    r = m-1;
                }
            }
            return false;
        }
    }
    return false
}




/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function(matrix, target) {
    let left = 0;
    let right = matrix.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let midRow = matrix[mid];
        if(target > midRow[midRow.length-1]){
            //need to go down 
            left = mid+1;
        }
        else if(target < midRow[0]){
            //need to go up 
            right = mid-1;
        }
        else {
            //do binary search on midrow 
            let l = 0;
            let r = midRow.length-1;
            while(l<=r){
                let m = Math.floor((l+r)/2);
                if(midRow[m] == target){
                    return true;
                }
                else if(target > midRow[m]){
                    l = m+1;
                }
                else{
                    r = m-1;
                }
            }
            return false;
        }
    }
    return false
}
