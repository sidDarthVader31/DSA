/**
 * link:
 * https://leetcode.com/problems/diagonal-traverse/
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let output = [];
    if (!matrix.length || !matrix[0].length) return [];

    const m = matrix.length, n = matrix[0].length;
    const result = [];
    let i = 0, j = 0, dir = 1; // 1 for up-right, -1 for down-left

    for (let k = 0; k < m * n; k++) {
        result.push(matrix[i][j]);

        if (dir === 1) {
            if (j === n - 1) {
                i++;
                dir = -1;
            } else if (i === 0) {
                j++;
                dir = -1;
            } else {
                i--;
                j++;
            }
        } else {
            if (i === m - 1) {
                j++;
                dir = 1;
            } else if (j === 0) {
                i++;
                dir = 1;
            } else {
                i++;
                j--;
            }
        }
    }

    return result;
};



/**
 *  * @param {number[][]} mat
 *   * @return {number[]}
 *    */
var findDiagonalOrder = function(matrix) {
      let map = {}
      const result = []
      for(let i =0;i<matrix.length;i++){
                for(let j = 0;j< matrix[0].length;j++){
                              let sum = i+j;
                              if(!map[sum]){
                                                map[sum] =[];
                                            }
                              map[sum].push(matrix[i][j])
                          }
            }
      for(const key of Object.keys(map)){
                if(key%2 == 0){
                              result.push(...map[key].reverse())
                          }
                else{
                              result.push(...map[key]);
                          }
            }
      return result;
};
                }
                }
      }
                              }
                }
      }
}
