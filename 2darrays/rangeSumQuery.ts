class NumMatrix {
  link: https://leetcode.com/problems/range-sum-query-2d-immutable/
    private matrix:number[][];
    private prefixMatrix:number[][];
    constructor(matrix: number[][]) {
        this.matrix = matrix;
        this.prefixMatrix = new Array(matrix.length).fill(0).map(()=>{
            return new Array(matrix[0].length).fill(0);
        })
        this.prefixSumCalc();
    }
    private prefixSumCalc():void{
        //prefix[r][c] = matrix[r][c]
        //     + prefix[r-1][c]     // top
         //    + prefix[r][c-1]     // left
           //  - prefix[r-1][c-1]   // remove double-counted overlap
        for(let r = 0;r< this.matrix.length;r++){
            for(let c =0;c<this.matrix[0].length;c++){
                let top = r-1 <0 ? 0 : this.prefixMatrix[r-1][c];
                let left = c-1<0 ? 0: this.prefixMatrix[r][c-1];
                let corner = (r-1 <0 || c-1 <0) ?0 : this.prefixMatrix[r-1][c-1];
                this.prefixMatrix[r][c] = this.matrix[r][c] + top+left-corner;
            }
        }
    }
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
      let total = this.prefixMatrix[row2][col2];
      const top = row1 > 0 ? this.prefixMatrix[row1 - 1][col2] : 0;
      const left = col1 > 0 ? this.prefixMatrix[row2][col1 - 1] : 0;
      const corner = (row1 > 0 && col1 > 0) ? this.prefixMatrix[row1 - 1][col1 - 1] : 0;
      return total-top-left+corner;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
